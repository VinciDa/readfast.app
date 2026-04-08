"use client";

import { motion } from "framer-motion";

const features = [
  {
    tag: "RSVP Speed Reading",
    headline: "Read faster than you thought possible",
    body: "RSVP (Rapid Serial Visual Presentation) eliminates skimming by flashing one word at a time at the center of your focus — no eye movement, no wandering. Train your reading speed from 200 to 600+ WPM while improving reading comprehension.",
    bullets: [
      "Adjustable reading speed with real-time WPM tracking",
      "Word-by-word or chunked display",
      "ORP markers guide your eye naturally",
    ],
    visual: "rsvp",
  },
  {
    tag: "Focus Mode",
    headline: "A reading environment that actually helps you focus",
    body: "Distraction-free full-screen mode paired with ambient soundscapes — scientifically designed to extend your attention span and improve reading comprehension.",
    bullets: [
      "Calming piano, nature sounds, meditative tracks",
      "Blue light filter",
      "ADHD-friendly design throughout",
    ],
    visual: "focus",
  },
  {
    tag: "PDF & Document Reader",
    headline: "Your entire reading life, in one place",
    body: "Import unlimited PDFs, articles, and reading books. Smart chunking formats long-form content for mobile reading. Your entire reading list, always available.",
    bullets: [
      "Unlimited imports",
      "Smart text extraction",
      "Read-it-later for any content",
    ],
    visual: "pdf",
  },
  {
    tag: "AI Bionic Reading",
    headline: "Your brain fills in the gaps — faster",
    body: "Bionic Reading bolds the first portion of words, guiding your eyes through text with minimal effort. It's reading on rails.",
    bullets: [
      "Intelligent text processing",
      "Reduces cognitive load",
      "Pairs with RSVP or standard reading",
    ],
    visual: "bionic",
  },
  {
    tag: "Text-to-Speech",
    headline: "Listen while you live your life",
    body: "Premium text-to-speech with multiple voices reads your documents aloud — perfect for commutes, workouts, or multitasking.",
    bullets: [
      "Multiple premium voices",
      "Works on any imported document",
      "Hands-free reading",
    ],
    visual: "tts",
  },
];

function FeatureVisual({ type }: { type: string }) {
  const baseClasses =
    "w-full aspect-[4/3] rounded-2xl bg-surface border border-border overflow-hidden flex items-center justify-center p-6";

  switch (type) {
    case "rsvp":
      return (
        <div className={baseClasses}>
          <div className="text-center">
            <p className="text-[10px] text-muted font-mono tracking-widest uppercase mb-3">
              RSVP Mode · 400 WPM
            </p>
            <div className="space-y-6">
              {["comprehension", "velocity", "retention"].map((word) => (
                <p key={word} className="text-2xl font-display font-bold">
                  <span className="text-accent">
                    {word.slice(0, Math.ceil(word.length * 0.4))}
                  </span>
                  <span className="text-foreground">
                    {word.slice(Math.ceil(word.length * 0.4))}
                  </span>
                </p>
              ))}
            </div>
            <div className="mt-4 flex justify-center gap-1">
              {[200, 300, 400, 500, 600].map((s) => (
                <span
                  key={s}
                  className={`text-[9px] font-mono px-2 py-0.5 rounded ${s === 400 ? "bg-accent/20 text-accent" : "text-muted"}`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    case "focus":
      return (
        <div className={`${baseClasses} bg-[#08090d]`}>
          <div className="w-full max-w-[240px] space-y-3">
            <div className="h-2 bg-foreground/8 rounded-full w-full" />
            <div className="h-2 bg-foreground/8 rounded-full w-4/5" />
            <div className="h-2 bg-foreground/8 rounded-full w-full" />
            <div className="h-2 bg-foreground/8 rounded-full w-3/5" />
            <div className="h-2 bg-foreground/8 rounded-full w-4/5" />
            <div className="mt-6 flex items-center gap-3 justify-center">
              <span className="text-[10px] text-muted font-mono">♪ Piano</span>
              <div className="flex gap-[2px]">
                {[3, 5, 4, 6, 3, 5, 4, 2, 6, 5, 3, 4].map((h, i) => (
                  <div
                    key={i}
                    className="w-[3px] rounded-full bg-accent/40"
                    style={{ height: h * 3 }}
                  />
                ))}
              </div>
              <span className="text-[10px] text-muted font-mono">
                Focus Mode
              </span>
            </div>
          </div>
        </div>
      );
    case "pdf":
      return (
        <div className={baseClasses}>
          <div className="w-full max-w-[260px] space-y-3">
            {[
              { name: "Atomic Habits.pdf", pages: "312 pages" },
              { name: "Q4 Report.pdf", pages: "45 pages" },
              { name: "Research Paper.pdf", pages: "18 pages" },
            ].map((doc) => (
              <div
                key={doc.name}
                className="flex items-center gap-3 p-3 rounded-lg bg-bg border border-border"
              >
                <div className="w-8 h-10 rounded bg-accent/10 flex items-center justify-center text-[8px] font-mono text-accent">
                  PDF
                </div>
                <div>
                  <p className="text-sm font-medium">{doc.name}</p>
                  <p className="text-[10px] text-muted">{doc.pages}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case "bionic":
      return (
        <div className={baseClasses}>
          <div className="max-w-[260px] space-y-2 text-sm leading-relaxed">
            {[
              ["The ", "fir", "st ", "few ", "let", "ters ", "of "],
              ["ea", "ch ", "wo", "rd ", "are ", "bol", "ded —"],
              ["yo", "ur ", "bra", "in ", "fi", "lls ", "in"],
              ["the ", "re", "st ", "autom", "atic", "ally,"],
              ["fas", "ter ", "th", "an ", "you ", "beli", "eve."],
            ].map((line, lineIdx) => (
              <p key={lineIdx}>
                {line.map((chunk, chunkIdx) => {
                  const boldLen = Math.ceil(chunk.length * 0.45);
                  return (
                    <span key={chunkIdx}>
                      <span className="font-bold text-foreground">
                        {chunk.slice(0, boldLen)}
                      </span>
                      <span className="text-muted">
                        {chunk.slice(boldLen)}
                      </span>
                    </span>
                  );
                })}
              </p>
            ))}
          </div>
        </div>
      );
    case "tts":
      return (
        <div className={baseClasses}>
          <div className="w-full max-w-[260px] text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-7 h-7 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                />
              </svg>
            </div>
            <div className="flex gap-[2px] justify-center mb-4">
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[3px] rounded-full bg-accent/30"
                  style={{
                    height: Math.max(4, Math.sin(i * 0.5) * 16 + 12),
                  }}
                />
              ))}
            </div>
            <p className="text-sm text-foreground font-medium mb-1">
              Premium Voice · Natural
            </p>
            <p className="text-[10px] text-muted font-mono">
              1.0× Speed · Page 12 of 47
            </p>
          </div>
        </div>
      );
    default:
      return <div className={baseClasses} />;
  }
}

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-accent font-mono mb-4">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            Everything you need to
            <br />
            <span className="text-accent">read without limits</span>
          </h2>
        </motion.div>

        <div className="space-y-20 lg:space-y-32">
          {features.map((feature, i) => (
            <motion.div
              key={feature.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              style={i % 2 === 1 ? { direction: "rtl" } : undefined}
            >
              <div
                style={i % 2 === 1 ? { direction: "ltr" } : undefined}
                className="order-2 lg:order-none"
              >
                <FeatureVisual type={feature.visual} />
              </div>
              <div
                style={i % 2 === 1 ? { direction: "ltr" } : undefined}
                className="order-1 lg:order-none"
              >
                <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-accent font-mono mb-3 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                  {feature.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4 leading-tight">
                  {feature.headline}
                </h3>
                <p className="text-muted leading-relaxed mb-6">
                  {feature.body}
                </p>
                <ul className="space-y-2.5">
                  {feature.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm text-foreground/80"
                    >
                      <svg
                        className="w-4 h-4 text-accent mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
