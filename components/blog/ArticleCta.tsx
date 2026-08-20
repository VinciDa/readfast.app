"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";

type ArticleCtaProps = {
  title: string;
  children: React.ReactNode;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export default function ArticleCta({
  title,
  children,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: ArticleCtaProps) {
  return (
    <aside className="blog-cta">
      <h2>{title}</h2>
      <div className="blog-cta-copy">{children}</div>
      <div className="blog-cta-actions">
        <Link
          href={primaryHref}
          className="blog-btn-primary"
          onClick={() =>
            track("blog_cta_click", {
              placement: "primary",
              href: primaryHref,
            })
          }
        >
          {primaryLabel}
        </Link>
        <Link
          href={secondaryHref}
          className="blog-btn-secondary"
          onClick={() =>
            track("blog_cta_click", {
              placement: "secondary",
              href: secondaryHref,
            })
          }
        >
          {secondaryLabel}
        </Link>
      </div>
    </aside>
  );
}
