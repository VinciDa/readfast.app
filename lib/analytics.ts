export const AUDIT_EVENTS = [
  "page_view",
  "store_click",
  "speed_test_start",
  "speed_test_finished_reading",
  "speed_test_see_results",
  "speed_test_retry",
  "speed_test_to_rsvp",
  "rsvp_start",
  "rsvp_complete",
  "rsvp_exit",
  "rsvp_try_another",
  "rsvp_to_speed_test",
  "home_demo_play",
  "home_demo_complete",
  "home_demo_to_rsvp",
  "home_demo_to_speed_test",
  "nav_click",
  "blog_cta_click",
] as const;

export type AuditEvent = (typeof AUDIT_EVENTS)[number];

export type AnalyticsProps = Record<string, string | number | boolean>;

const APP_NAME = "readfast_web";
const ENDPOINT = "https://quizbanao.com/api/v1/audit-events";
const WRITE_KEY = "3e8b1c6a-9f24-4d71-b5a0-2c7e91d4f608";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const SESSION_KEY = "rf_session_id";
const DEVICE_KEY = "rf_device_id";
const DEDUPE_MS = 1500;

const recentKeys = new Map<string, number>();

function uuid(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function storageGet(storage: Storage, key: string): string {
  try {
    const existing = storage.getItem(key);
    if (existing && existing.length <= 36) return existing;
    const id = uuid();
    storage.setItem(key, id);
    return id;
  } catch {
    return uuid();
  }
}

function sessionId(): string {
  if (typeof window === "undefined") return uuid();
  return storageGet(window.sessionStorage, SESSION_KEY);
}

function deviceId(): string {
  if (typeof window === "undefined") return uuid();
  return storageGet(window.localStorage, DEVICE_KEY);
}

export function normalizePagePath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed.length === 0 ? "/" : trimmed;
}

export function getPagePath(): string {
  if (typeof window === "undefined") return "/";
  let path = window.location.pathname;
  if (BASE_PATH && path.startsWith(BASE_PATH)) {
    path = path.slice(BASE_PATH.length) || "/";
  }
  return normalizePagePath(path);
}

/** Device class for the API `platform` field. Mac desktop is `web`, not `ios`. */
export function getAnalyticsPlatform(): "ios" | "android" | "web" {
  if (typeof navigator === "undefined") return "web";
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return "android";
  if (/iphone|ipad|ipod/i.test(ua)) return "ios";
  return "web";
}

function compact(props: AnalyticsProps): AnalyticsProps {
  return Object.fromEntries(
    Object.entries(props).filter(([, value]) => value !== undefined && value !== ""),
  );
}

function shouldSkipDuplicate(event: AuditEvent, props: AnalyticsProps): boolean {
  const key = `${event}:${JSON.stringify(props)}`;
  const now = Date.now();
  const prev = recentKeys.get(key);
  if (prev && now - prev < DEDUPE_MS) return true;
  recentKeys.set(key, now);
  return false;
}

export function track(event: AuditEvent, properties: AnalyticsProps = {}): void {
  if (typeof window === "undefined") return;
  if (!WRITE_KEY) return;

  const props = compact({
    page: getPagePath(),
    ...properties,
  });

  if (shouldSkipDuplicate(event, props)) return;

  const payload = {
    app_name: APP_NAME,
    event,
    session_id: sessionId(),
    occurred_at: new Date().toISOString(),
    event_id: uuid(),
    device_id: deviceId(),
    platform: getAnalyticsPlatform(),
    locale: navigator.language || undefined,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    properties: props,
  };

  void fetch(ENDPOINT, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-Audit-Write-Key": WRITE_KEY,
    },
    body: JSON.stringify(payload),
    keepalive: true,
    mode: "cors",
  }).catch(() => {
    /* fire-and-forget */
  });
}

export function trackStoreClick(
  placement: string,
  store: "ios" | "android",
): void {
  track("store_click", { placement, store });
}
