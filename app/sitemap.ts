import { MetadataRoute } from "next";
import { getPostLastModified, posts } from "@/lib/blog-posts";

export const dynamic = "force-static";

const BASE_URL = "https://readfast.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date("2026-09-05"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/rsvp/`,
      lastModified: new Date("2026-09-05"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/reading-speed-test/`,
      lastModified: new Date("2026-09-05"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/`,
      lastModified: new Date(
        posts.reduce(
          (latest, post) =>
            getPostLastModified(post) > latest
              ? getPostLastModified(post)
              : latest,
          posts[0]?.date ?? "2026-09-05",
        ),
      ),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/feed.xml`,
      lastModified: new Date("2026-09-05"),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}${post.href}/`,
    lastModified: new Date(getPostLastModified(post)),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}
