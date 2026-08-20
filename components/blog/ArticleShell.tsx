import Link from "next/link";
import { formatPostDate } from "@/lib/blog-posts";

export { default as ArticleCta } from "@/components/blog/ArticleCta";

export type TocItem = {
  id: string;
  label: string;
};

type ArticleShellProps = {
  title: string;
  date: string;
  readingMinutes: number;
  lede?: string;
  toc?: TocItem[];
  children: React.ReactNode;
  cta?: React.ReactNode;
};

export default function ArticleShell({
  title,
  date,
  readingMinutes,
  lede,
  toc,
  children,
  cta,
}: ArticleShellProps) {
  return (
    <main className="pt-32 pb-24">
      <article className="blog-article mx-auto px-5">
        <header className="blog-header">
          <p className="blog-kicker">
            <Link href="/blog">Blog</Link>
          </p>
          <h1 className="blog-title">{title}</h1>
          <p className="blog-meta">
            <time dateTime={date}>{formatPostDate(date)}</time>
            <span aria-hidden="true"> · </span>
            <span>{readingMinutes} min read</span>
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
      </article>
    </main>
  );
}

