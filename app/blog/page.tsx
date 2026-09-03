import type { Metadata } from "next";
import { formatPostDate, posts } from "@/lib/blog-posts";
import TrackedNavLink from "@/components/TrackedNavLink";

export const metadata: Metadata = {
  title: "ReadFast Blog | Speed Reading, Focus, and Comprehension",
  description:
    "Explore ReadFast blog posts on speed reading, comprehension, and practical techniques to improve your reading habits.",
  metadataBase: new URL("https://readfast.app"),
  alternates: {
    canonical: "/blog/",
  },
};

export default function BlogIndexPage() {
  return (
    <main className="pt-32 pb-24">
      <section className="blog-index mx-auto px-5">
        <p className="blog-kicker">ReadFast Blog</p>
        <h1 className="blog-index-title">Reading Insights</h1>

        <ul className="blog-post-list">
          {posts.map((post) => (
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
