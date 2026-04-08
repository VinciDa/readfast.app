"use client";

import { motion } from "framer-motion";

const personas = [
  {
    icon: "📖",
    label: "Students",
    hook: "Tear through assigned reading",
  },
  {
    icon: "💼",
    label: "Professionals",
    hook: "Stay on top of industry content",
  },
  {
    icon: "🧠",
    label: "ADHD readers",
    hook: "Finally finish what you start",
  },
  {
    icon: "🎧",
    label: "Multitaskers",
    hook: "Listen while you work out",
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-accent font-mono mb-4">
            Trusted & Loved
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Built for readers who mean business
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-surface-alt border border-border text-center"
          >
            <div className="text-amber text-2xl mb-2">★★★★★</div>
            <p className="text-3xl font-display font-bold mb-1">5.0</p>
            <p className="text-sm text-muted">App Store Rating</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="p-6 rounded-2xl bg-surface-alt border border-border text-center"
          >
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              {["iOS", "iPadOS", "macOS", "Vision Pro", "Android"].map(
                (platform) => (
                  <span
                    key={platform}
                    className="text-[10px] font-mono px-2 py-1 rounded-md bg-bg border border-border text-muted"
                  >
                    {platform}
                  </span>
                ),
              )}
            </div>
            <p className="text-sm text-muted">Available everywhere you read</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="p-6 rounded-2xl bg-accent/5 border border-accent/20 text-center sm:col-span-2 lg:col-span-1"
          >
            <div className="text-3xl mb-2">🔒</div>
            <p className="text-lg font-display font-semibold mb-1">
              Zero data collection
            </p>
            <p className="text-sm text-muted">
              No ads. No tracking. Ever.
              <br />
              Your documents stay on your device.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-sm text-muted mb-6 font-mono tracking-wider uppercase">
            Who it&apos;s for
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {personas.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-surface-alt border border-border"
              >
                <span className="text-2xl">{p.icon}</span>
                <div>
                  <p className="text-sm font-semibold">{p.label}</p>
                  <p className="text-xs text-muted">{p.hook}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
