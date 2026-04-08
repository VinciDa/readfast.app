"use client";

import { motion } from "framer-motion";

const problems = [
  {
    icon: "📚",
    headline: "You have 47 unread articles",
    body: "Saved for later. Still there. Six months later.",
  },
  {
    icon: "😵",
    headline: "You re-read the same paragraph four times",
    body: "Focus drifts. Time disappears. Progress stalls.",
  },
  {
    icon: "📄",
    headline: "Your PDFs live in email, not in your brain",
    body: "Import hell. Can't annotate. Can't track progress.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-display font-bold text-center mb-14"
        >
          Sound familiar?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.headline}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group p-6 lg:p-8 rounded-2xl bg-surface-alt border border-border hover:border-accent/20 transition-all duration-300"
            >
              <span className="text-4xl block mb-4">{problem.icon}</span>
              <h3 className="text-lg font-display font-semibold mb-2">
                {problem.headline}
              </h3>
              <p className="text-muted leading-relaxed">{problem.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
