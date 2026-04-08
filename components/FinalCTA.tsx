"use client";

import { motion } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";
import StoreButtons from "./StoreButtons";

export default function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-accent/[0.03] to-bg pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-8">
            <BrandLogo size="lg" showWordmark={false} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight mb-6">
            Your reading list isn&apos;t
            <br />
            going to read itself.
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto mb-10">
            Download ReadFast free and read 3× faster starting today.
          </p>

          <StoreButtons
            utmContent="footer_cta"
            size="large"
            className="justify-center mb-8"
          />

          <div className="flex flex-wrap justify-center gap-6 text-xs text-muted">
            <span>Free to download</span>
            <span className="text-border">·</span>
            <span>No ads</span>
            <span className="text-border">·</span>
            <span>No data collection</span>
            <span className="text-border">·</span>
            <span>iOS & Android</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
