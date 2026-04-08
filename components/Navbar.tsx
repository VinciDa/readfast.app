"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getStoreUrl } from "@/lib/platform";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 h-16 lg:px-8">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
          </div>
          <span className="text-xl font-display font-bold tracking-tight">
            Read<span className="text-accent">Fast</span>
          </span>
        </a>

        <a
          href={getStoreUrl("ios", "nav_cta")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-accent text-bg text-sm font-semibold transition-all duration-200 hover:scale-[1.03] hover:brightness-110"
        >
          Download Free
        </a>
      </div>
    </motion.nav>
  );
}
