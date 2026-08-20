"use client";

import BrandLogo from "@/components/BrandLogo";
import TrackedNavLink from "@/components/TrackedNavLink";
import { getStoreUrl } from "@/lib/platform";
import { trackStoreClick } from "@/lib/analytics";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <BrandLogo size="sm" wordmarkClassName="text-sm" />
            <span className="text-xs text-muted">
              © {new Date().getFullYear()} Bitart Private Limited
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2 text-xs text-muted">
            <TrackedNavLink
              href="/rsvp"
              target="rsvp"
              source="footer"
              className="hover:text-foreground transition-colors"
            >
              Try RSVP
            </TrackedNavLink>
            <TrackedNavLink
              href="/reading-speed-test"
              target="speed_test"
              source="footer"
              className="hover:text-foreground transition-colors"
            >
              Speed Test
            </TrackedNavLink>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a
              href={getStoreUrl("ios", "footer_link")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackStoreClick("footer_link", "ios")}
              className="hover:text-foreground transition-colors"
            >
              App Store
            </a>
            <a
              href={getStoreUrl("android", "footer_link")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackStoreClick("footer_link", "android")}
              className="hover:text-foreground transition-colors"
            >
              Google Play
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
