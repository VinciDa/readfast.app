import type { Metadata } from "next";
import { formatPostDate, posts } from "@/lib/blog-posts";
import TrackedNavLink from "@/components/TrackedNavLink";

export const metadata: Metadata = {
  title: "ReadFast Blog | Speed Reading, Focus, and Comprehension",
  description:
    "Explore ReadFast blog posts on speed reading, comprehension, ADHD focus, reading benchmarks, and practical techniques to improve your reading habits.",
  metadataBase: new URL("https://readfast.app"),
  alternates: {
    canonical: "/blog/",
    types: {
      "application/rss+xml": "https://readfast.app/feed.xml",
    },
  },
  openGraph: {
    title: "ReadFast Blog | Speed Reading, Focus, and Comprehension",
    description:
      "Practical guides on speed reading, comprehension, ADHD focus tools, and reading benchmarks — written to help you finish more of what matters.",
    url: "https://readfast.app/blog/",
    siteName: "ReadFast",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ReadFast Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReadFast Blog | Speed Reading, Focus, and Comprehension",
    description:
      "Guides on speed reading, comprehension, ADHD focus, and reading benchmarks from ReadFast.",
    images: ["/og-image.png"],
  },
};

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="pt-32 pb-24">
      <section className="blog-index mx-auto px-5">
        <p className="blog-kicker">ReadFast Blog</p>
        <h1 className="blog-index-title">Reading Insights</h1>

        <ul className="blog-post-list">
          {sorted.map((post) => (
            <li key={post.href}>
              <TrackedNavLink
                href={post.href}
                target={post.slug}
                source="blog_index"
              >
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <p className="blog-meta">
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                  <span aria-hidden="true"> · </span>
                  <span>{post.readingMinutes} min read</span>
                </p>
              </TrackedNavLink>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
