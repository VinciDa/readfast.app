"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";
import TrackedNavLink from "@/components/TrackedNavLink";
import { getStoreUrl } from "@/lib/platform";
import { trackStoreClick } from "@/lib/analytics";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 pt-[max(1rem,env(safe-area-inset-top))] transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-5 lg:px-8">
        <TrackedNavLink href="/" target="home" source="nav" className="group">
          <BrandLogo size="sm" wordmarkClassName="text-lg sm:text-xl" />
        </TrackedNavLink>

        <div className="flex items-center gap-4">
          <TrackedNavLink
            href="/rsvp"
            target="rsvp"
            source="nav"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Try RSVP
          </TrackedNavLink>
          <TrackedNavLink
            href="/reading-speed-test"
            target="speed_test"
            source="nav"
            className="hidden md:block text-sm text-muted hover:text-foreground transition-colors"
          >
            Speed Test
          </TrackedNavLink>
          <TrackedNavLink
            href="/blog"
            target="blog"
            source="nav"
            className="hidden md:block text-sm text-muted hover:text-foreground transition-colors"
          >
            Blogs
          </TrackedNavLink>
          <a
            href={getStoreUrl("ios", "nav_cta")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackStoreClick("nav_cta", "ios")}
            className="hidden sm:inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-accent text-bg text-sm font-semibold transition-all duration-200 hover:scale-[1.03] hover:brightness-110"
          >
            Download Free
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
