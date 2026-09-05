import Link from "next/link";
import { formatPostDate, getRelatedPosts } from "@/lib/blog-posts";

type RelatedPostsProps = {
  slug: string;
  limit?: number;
};

export default function RelatedPosts({ slug, limit = 3 }: RelatedPostsProps) {
  const related = getRelatedPosts(slug, limit);
  if (related.length === 0) return null;

  return (
    <section className="blog-related" aria-labelledby="related-posts-heading">
      <h2 id="related-posts-heading" className="blog-related-title">
        Related reading
      </h2>
      <ul className="blog-related-list">
        {related.map((post) => (
          <li key={post.slug}>
            <Link href={post.href}>
              <span className="blog-related-item-title">{post.title}</span>
              <span className="blog-related-item-meta">
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                <span aria-hidden="true"> · </span>
                <span>{post.readingMinutes} min read</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
