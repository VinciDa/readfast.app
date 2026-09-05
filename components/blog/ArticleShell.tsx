import Link from "next/link";
import { formatPostDate, getPostLastModified, type BlogPost } from "@/lib/blog-posts";
import RelatedPosts from "@/components/blog/RelatedPosts";

export { default as ArticleCta } from "@/components/blog/ArticleCta";
export { default as InlineCallout } from "@/components/blog/InlineCallout";

export type TocItem = {
  id: string;
  label: string;
};

type ArticleShellProps = {
  post: BlogPost;
  title?: string;
  date?: string;
  readingMinutes?: number;
  lede?: string;
  toc?: TocItem[];
  children: React.ReactNode;
  cta?: React.ReactNode;
  showRelated?: boolean;
};

export default function ArticleShell({
  post,
  title,
  date,
  readingMinutes,
  lede,
  toc,
  children,
  cta,
  showRelated = true,
}: ArticleShellProps) {
  const displayTitle = title ?? post.title;
  const displayDate = date ?? post.date;
  const displayMinutes = readingMinutes ?? post.readingMinutes;
  const modified = getPostLastModified(post);
  const showUpdated = modified !== post.date;

  return (
    <main className="pt-32 pb-24">
      <article className="blog-article mx-auto px-5">
        <header className="blog-header">
          <p className="blog-kicker">
            <Link href="/blog">Blog</Link>
          </p>
          <h1 className="blog-title">{displayTitle}</h1>
          <p className="blog-meta">
            <time dateTime={displayDate}>{formatPostDate(displayDate)}</time>
            {showUpdated ? (
              <>
                <span aria-hidden="true"> · </span>
                <span>
                  Updated{" "}
                  <time dateTime={modified}>{formatPostDate(modified)}</time>
                </span>
              </>
            ) : null}
            <span aria-hidden="true"> · </span>
            <span>{displayMinutes} min read</span>
          </p>
          {lede ? <p className="blog-lede">{lede}</p> : null}
          {toc && toc.length > 0 ? (
            <nav className="blog-toc" aria-label="Table of contents">
              <p className="blog-toc-label">In this article</p>
              <ol>
                {toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.label}</a>
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}
        </header>

        <div className="blog-prose">{children}</div>
        {cta}
        {showRelated ? <RelatedPosts slug={post.slug} /> : null}
      </article>
    </main>
  );
}
