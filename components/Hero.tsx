"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";
import StoreButtons from "./StoreButtons";
import { withBasePath } from "@/lib/base-path";
import { getORPIndex } from "@/lib/platform";

/** One word per RSVP frame — full loop, then pause */
const DEMO_WORDS = [
  "Your",
  "reading",
  "list",
  "is",
  "waiting.",
  "Tear",
  "through",
  "PDFs,",
  "books,",
  "and",
  "articles",
  "without",
  "skimming",
  "or",
  "losing",
  "the",
  "plot.",
  "Every",
  "word",
  "lands",
  "in",
  "focus.",
  "Train",
  "to",
  "500",
  "WPM.",
  "Retain",
  "what",
  "matters.",
  "This",
  "is",
  "ReadFast.",
];

const WORD_INTERVAL = 450;
const PAUSE_DURATION = 2400;
const FLASH_MS = 40;

function PhoneMockup() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const indexRef = useRef(0);

  useEffect(() => {
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const i = indexRef.current;
      const next = (i + 1) % DEMO_WORDS.length;
      const delayBeforeAdvance = next === 0 ? PAUSE_DURATION : WORD_INTERVAL;

      timeoutId = setTimeout(() => {
        if (cancelled) return;
        setVisible(false);
        timeoutId = setTimeout(() => {
          if (cancelled) return;
          indexRef.current = next;
          setWordIndex(next);
          setVisible(true);
          tick();
        }, FLASH_MS);
      }, delayBeforeAdvance);
    };

    tick();

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, []);

  const word = DEMO_WORDS[wordIndex];
  const orpIdx = getORPIndex(word);

  return (
    <div className="relative">
      <div className="absolute -inset-20 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
      <div className="relative w-[260px] h-[520px] md:w-[280px] md:h-[560px] rounded-[3rem] border-2 border-[#2a2d36] bg-[#000] shadow-2xl shadow-accent/5 overflow-hidden">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-10" />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-[#333] rounded-full z-10" />
        <div className="absolute inset-[4px] rounded-[2.7rem] bg-bg flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute top-10 flex flex-col items-center gap-2">
            <Image
              src={withBasePath("/readfast-logo.jpg")}
              alt=""
              width={28}
              height={28}
              className="rounded-[22%] opacity-90"
            />
            <p className="text-[10px] text-muted tracking-widest uppercase font-mono">
              RSVP Mode
            </p>
            <p className="text-amber font-mono text-xs mt-1">500 WPM</p>
          </div>
          <div className="flex items-center justify-center min-h-[4.5rem] px-2">
            <span
              className={`font-display font-bold transition-opacity duration-[40ms] ${word.length > 9 ? "text-2xl" : "text-3xl"} ${visible ? "opacity-100" : "opacity-0"}`}
            >
              {word.split("").map((char, i) => (
                <span
                  key={i}
                  className={i === orpIdx ? "text-accent" : "text-foreground"}
                >
                  {char}
                </span>
              ))}
            </span>
          </div>
          <div className="absolute bottom-12 flex gap-6 text-muted">
            <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
              <svg
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 6h12v12H6z" />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center">
              <svg
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
              <svg
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 4l10 8-10 8V4zm9 0v16l10-8-10-8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const floatingBadges = [
  { icon: "⚡", text: "3× Faster Reading Speed", delay: 0.9 },
  { icon: "🧠", text: "ADHD-Friendly", delay: 1.1 },
  { icon: "📊", text: "Track Your Reading Speed", delay: 1.3 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain">
      <div className="max-w-7xl mx-auto w-full px-5 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.45 }}
              className="flex justify-center lg:justify-start"
            >
              <BrandLogo size="xl" showWordmark={false} priority />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.12, duration: 0.5 }}
              className="text-xs tracking-[0.25em] uppercase text-muted font-mono"
            >
              Speed Reading · Reading Comprehension · PDF Reader
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.08] tracking-tight"
            >
              Read 3× Faster.
              <br />
              <span className="text-accent">Retain What Matters.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.5 }}
              className="text-lg text-muted max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              ReadFast uses RSVP technology to train your reading speed from
              200 to 600+ WPM — eliminating skimming so every word lands with
              full reading comprehension.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.56, duration: 0.5 }}
            >
              <StoreButtons
                utmContent="hero_cta"
                className="justify-center lg:justify-start"
              />
              <p className="text-xs text-muted mt-3">
                Free to download · No ads · No data collection
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mt-2"
            >
              {floatingBadges.map((badge) => (
                <motion.span
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: badge.delay,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-alt border border-border text-xs text-muted"
                >
                  <span>{badge.icon}</span>
                  {badge.text}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-5 h-5 text-muted"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
}
