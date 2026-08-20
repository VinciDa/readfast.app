"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";

type TrackedNavLinkProps = {
  href: string;
  target: string;
  source?: string;
  className?: string;
  children: React.ReactNode;
};

export default function TrackedNavLink({
  href,
  target,
  source,
  className,
  children,
}: TrackedNavLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        track("nav_click", {
          target,
          href,
          ...(source ? { source } : {}),
        })
      }
    >
      {children}
    </Link>
  );
}
