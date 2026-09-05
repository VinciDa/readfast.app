"use client";

import Link from "next/link";
import StoreButtons from "@/components/StoreButtons";
import { track } from "@/lib/analytics";

type InlineCalloutProps = {
  title: string;
  children: React.ReactNode;
  utmContent: string;
  toolHref?: string;
  toolLabel?: string;
};

export default function InlineCallout({
  title,
  children,
  utmContent,
  toolHref = "/reading-speed-test",
  toolLabel = "Test Your Reading Speed",
}: InlineCalloutProps) {
  return (
    <aside className="blog-inline-callout">
      <h3>{title}</h3>
      <div className="blog-inline-callout-copy">{children}</div>
      <div className="blog-inline-callout-actions">
        <Link
          href={toolHref}
          className="blog-btn-primary"
          onClick={() =>
            track("blog_cta_click", {
              placement: "inline",
              href: toolHref,
            })
          }
        >
          {toolLabel}
        </Link>
        <StoreButtons utmContent={utmContent} className="blog-inline-stores" />
      </div>
    </aside>
  );
}
