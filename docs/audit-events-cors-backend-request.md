# ReadFast web — audit-events CORS (backend request)

**From:** ReadFast web  
**To:** QuizBanao / audit-events API  
**Endpoint:** `POST https://quizbanao.com/api/v1/audit-events`  
**Priority:** Blocker — website events never reach the DB from a browser  
**Date:** 20 Aug 2026

## Summary

The ingest **POST contract is correct**. Spec-compliant curl (JSON + `X-Audit-Write-Key`) returns **201** and inserts a row. Store-click payloads also insert.

The **website cannot use that same request**. Browsers send a CORS preflight (`OPTIONS`) first. Today that preflight returns **401 `INVALID_AUDIT_KEY`** and **no CORS headers**, so the browser never sends the POST.

We do **not** want a second ingest path (`write_key` query param, `text/plain` body). Those were a failed workaround. Please keep the existing JSON + header contract and make it callable from the browser.

## Confirmed working (do not change)

```http
POST /api/v1/audit-events
Accept: application/json
Content-Type: application/json
X-Audit-Write-Key: <write key>
```

```json
{
  "app_name": "readfast_web",
  "event": "page_view",
  "session_id": "8f3c2a1b-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
  "occurred_at": "2026-08-20T13:18:00.000Z",
  "event_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "device_id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
  "platform": "web",
  "locale": "en-IN",
  "timezone": "Asia/Kolkata",
  "properties": { "page": "/" }
}
```

Expected: **201** with the standard `{ data, meta }` envelope.

## What is broken

| Check | Current result | Problem |
|---|---|---|
| `OPTIONS /api/v1/audit-events` from a browser origin | **401** `INVALID_AUDIT_KEY` | Browsers do **not** send `X-Audit-Write-Key` on preflight |
| CORS headers on OPTIONS / POST / 401 | **Missing** | Browser hides the response and never fires POST |
| `POST` with `Content-Type: text/plain` and `?write_key=` | **Fails** (expected) | Do not add this path |

## Required changes

### 1. Skip auth on OPTIONS

`OPTIONS /api/v1/audit-events` must **not** validate `X-Audit-Write-Key`.

Return **204 No Content**.

### 2. CORS headers on every response for this route

Add these headers on:

- `OPTIONS` 204
- `POST` 201
- `POST` 400 / 401 (and other errors)

If error responses omit CORS headers, the browser still looks like a silent failure.

```
Access-Control-Allow-Origin: <request Origin if allowlisted>
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Accept, X-Audit-Write-Key
Access-Control-Max-Age: 86400
```

Allowlist:

- `https://readfast.app`
- `http://localhost:3000`

Reflect the request `Origin` when it is in that list. Do not send credentials (`Access-Control-Allow-Credentials` is not needed).

If reflecting Origin is hard, `Access-Control-Allow-Origin: *` is acceptable because this is a write-only ingest key with no cookies.

### 3. Do not change the POST body or header

- Keep `X-Audit-Write-Key` as the only auth for POST
- Keep JSON body, snake_case fields, event allowlist, idempotency on `(app_name, event_id)`
- Do **not** require `write_key` query param
- Do **not** require `Content-Type: text/plain`

## Client request the website will send after this ships

Same as the working curl:

```http
POST /api/v1/audit-events HTTP/1.1
Origin: https://readfast.app
Accept: application/json
Content-Type: application/json
X-Audit-Write-Key: <write key>
```

`app_name` is always `readfast_web`.

Allowed `event` values (already enforced):

`page_view`, `store_click`, `speed_test_start`, `speed_test_finished_reading`, `speed_test_see_results`, `speed_test_retry`, `speed_test_to_rsvp`, `rsvp_start`, `rsvp_complete`, `rsvp_exit`, `rsvp_try_another`, `rsvp_to_speed_test`, `home_demo_play`, `home_demo_complete`, `home_demo_to_rsvp`, `home_demo_to_speed_test`, `nav_click`, `blog_cta_click`

## How to verify

Replace `<WRITE_KEY>` with the ReadFast write key.

### A. Preflight (this is the failing check today)

```bash
curl -sS -D - -o /dev/null -X OPTIONS 'https://quizbanao.com/api/v1/audit-events' \
  -H 'Origin: https://readfast.app' \
  -H 'Access-Control-Request-Method: POST' \
  -H 'Access-Control-Request-Headers: content-type,accept,x-audit-write-key'
```

**Pass:** HTTP **204** (or 200), and response headers include:

```
Access-Control-Allow-Origin: https://readfast.app
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: ... X-Audit-Write-Key ...
```

**Fail:** HTTP **401** or missing `Access-Control-Allow-Origin`.

Repeat with `Origin: http://localhost:3000`.

### B. POST still inserts (must keep working)

```bash
curl -sS -D - -X POST 'https://quizbanao.com/api/v1/audit-events' \
  -H 'Origin: https://readfast.app' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'X-Audit-Write-Key: <WRITE_KEY>' \
  -d '{
  "app_name": "readfast_web",
  "event": "page_view",
  "session_id": "8f3c2a1b-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
  "occurred_at": "2026-08-20T13:18:00.000Z",
  "event_id": "11111111-1111-4111-8111-111111111111",
  "device_id": "22222222-2222-4222-8222-222222222222",
  "platform": "web",
  "locale": "en-IN",
  "timezone": "Asia/Kolkata",
  "properties": { "page": "/" }
}'
```

**Pass:** HTTP **201**, body has `data.id`, and `Access-Control-Allow-Origin` is present. Use a fresh `event_id` each run.

### C. 401 still has CORS (so the browser can surface auth errors)

```bash
curl -sS -D - -o /dev/null -X POST 'https://quizbanao.com/api/v1/audit-events' \
  -H 'Origin: https://readfast.app' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{"app_name":"readfast_web","event":"page_view","session_id":"8f3c2a1b-4d5e-6f7a-8b9c-0d1e2f3a4b5c"}'
```

**Pass:** HTTP **401**, and `Access-Control-Allow-Origin: https://readfast.app` is still on the response.

## Out of scope

- New query params or body fields for auth
- Changing event names, `app_name`, or idempotency
- Funnel / aggregate read APIs (separate request)

## Done when

1. Check A is 204 with CORS headers  
2. Check B is 201, row in DB, CORS header present  
3. Check C is 401 with CORS header present  
4. `https://readfast.app` can POST from Chrome DevTools Network without a CORS error  

Notify ReadFast web when A–C pass; we will point the site at this exact curl shape and drop the `text/plain` workaround.
