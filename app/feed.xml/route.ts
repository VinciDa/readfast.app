import { getPostLastModified, posts } from "@/lib/blog-posts";

export const dynamic = "force-static";

const BASE_URL = "https://readfast.app";

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function buildRssXml(): string {
  const sorted = [...posts].sort((a, b) =>
    getPostLastModified(b).localeCompare(getPostLastModified(a)),
  );
  const latest = sorted[0]
    ? getPostLastModified(sorted[0])
    : new Date().toISOString().slice(0, 10);

  const items = sorted
    .map((post) => {
      const link = `${BASE_URL}${post.href}/`;
      const pubDate = new Date(
        `${getPostLastModified(post)}T12:00:00Z`,
      ).toUTCString();
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.description)}</description>
      <category>${escapeXml(post.category)}</category>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ReadFast Blog</title>
    <link>${BASE_URL}/blog/</link>
    <description>Speed reading, focus, comprehension, and practical techniques from ReadFast.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date(`${latest}T12:00:00Z`).toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;
}

export function GET() {
  return new Response(buildRssXml(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
