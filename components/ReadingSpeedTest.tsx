"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import StoreButtons from "./StoreButtons";

// ~243 words — used for WPM calculation
const PASSAGE = `Reading is one of the most complex cognitive tasks the human brain performs. Unlike speaking or listening, which develop naturally in children exposed to language, reading must be explicitly taught. The brain has no dedicated region for reading — instead, it repurposes areas originally evolved for object recognition and spoken language.

When you read a word, your brain processes its shape, sounds, and meaning almost simultaneously. Expert readers can recognize a single word in as little as 150 milliseconds. This speed comes from years of practice, which builds strong neural pathways that make word recognition automatic.

Most adults read between 200 and 250 words per minute with good comprehension. Reading speed varies significantly based on the difficulty of the material, your familiarity with the topic, and the environment you are in.

Skilled readers use a technique called chunking — grouping words together rather than reading one at a time. This reduces the number of eye fixations needed to move through a page, allowing faster reading without sacrificing understanding.

Traditional speed reading shortcuts, like skimming or skipping every other word, tend to hurt comprehension. Modern research shows the most effective approach is training your brain to process words faster while keeping full attention on the text — which is exactly what RSVP technology does.

With consistent practice, most people can double or even triple their reading speed while keeping comprehension high. The key is eliminating subvocalization — the habit of silently sounding out every word as you read.`;

const WORD_COUNT = PASSAGE.trim().split(/\s+/).length;

const QUESTIONS = [
  {
    question: "How quickly can an expert reader recognize a single word?",
    options: [
      "50 milliseconds",
      "150 milliseconds",
      "300 milliseconds",
      "500 milliseconds",
    ],
    correct: 1,
  },
  {
    question: "What is the average reading speed for most adults?",
    options: ["100–150 WPM", "200–250 WPM", "350–400 WPM", "500+ WPM"],
    correct: 1,
  },
  {
    question: "Which habit slows reading speed according to the passage?",
    options: ["Chunking", "Skimming", "Subvocalization", "Re-reading"],
    correct: 2,
  },
];

type Phase = "intro" | "reading" | "quiz" | "results";

function getRating(wpm: number) {
  if (wpm < 150)
    return {
      label: "Developing",
      color: "text-amber",
      badge: "bg-amber/10 border-amber/30 text-amber",
      description:
        "You're building your reading foundations. With consistent practice, you can significantly improve your pace.",
    };
  if (wpm < 250)
    return {
      label: "Average",
      color: "text-foreground",
      badge: "bg-surface-alt border-border text-foreground",
      description:
        "You read at the typical adult pace of 200–250 WPM. There's a lot of room to grow!",
    };
  if (wpm < 400)
    return {
      label: "Above Average",
      color: "text-accent",
      badge: "bg-accent/15 border-accent/30 text-accent",
      description:
        "You're reading faster than most adults. A little RSVP training could push you to expert level.",
    };
  if (wpm < 600)
    return {
      label: "Fast Reader",
      color: "text-accent",
      badge: "bg-accent/15 border-accent/30 text-accent",
      description:
        "You're well ahead of the curve. Speed reading techniques can push you even further.",
    };
  return {
    label: "Speed Reader",
    color: "text-accent",
    badge: "bg-accent/15 border-accent/30 text-accent",
    description:
      "You're in the top tier of readers. ReadFast can help you maintain 600+ WPM consistently.",
  };
}

function formatTime(ms: number) {
  const s = Math.floor(ms / 1000);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

export default function ReadingSpeedTest() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [elapsedMs, setElapsedMs] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([null, null, null]);
  const [wpm, setWpm] = useState(0);
  const [comprehension, setComprehension] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => stopTimer, []);

  const handleStart = () => {
    setPhase("reading");
    setElapsedMs(0);
    intervalRef.current = setInterval(
      () => setElapsedMs((p) => p + 100),
      100
    );
  };

  const handleFinished = () => {
    stopTimer();
    const minutes = elapsedMs / 60000;
    setWpm(Math.round(WORD_COUNT / minutes));
    setPhase("quiz");
  };

  const handleAnswer = (qi: number, ai: number) =>
    setAnswers((prev) => {
      const next = [...prev];
      next[qi] = ai;
      return next;
    });

  const handleSeeResults = () => {
    const correct = answers.filter((a, i) => a === QUESTIONS[i].correct).length;
    setComprehension(Math.round((correct / QUESTIONS.length) * 100));
    setPhase("results");
  };

  const handleRetry = () => {
    stopTimer();
    setPhase("intro");
    setElapsedMs(0);
    setAnswers([null, null, null]);
    setWpm(0);
    setComprehension(0);
  };

  const allAnswered = answers.every((a) => a !== null);
  const rating = getRating(wpm);
  const readfastTarget = Math.min(Math.max(Math.round(wpm * 2.8), wpm + 150), 600);
  const BAR_MAX = 700;

  return (
    <section className="min-h-screen bg-bg pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-5 lg:px-8">
        <AnimatePresence mode="wait">

          {/* ── INTRO ── */}
          {phase === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-12">
                <p className="text-xs tracking-[0.25em] uppercase text-accent font-mono mb-4">
                  Free Tool
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.08] tracking-tight mb-5">
                  Reading Speed Test
                </h1>
                <p className="text-lg text-muted leading-relaxed max-w-md mx-auto">
                  Find out exactly how fast you read — in words per minute — plus
                  a quick comprehension check. Takes under 2 minutes.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { value: `${WORD_COUNT}`, unit: "words" },
                  { value: "~1–2", unit: "minutes" },
                  { value: "3", unit: "quiz questions" },
                ].map((s) => (
                  <div
                    key={s.unit}
                    className="p-4 rounded-2xl bg-surface border border-border text-center"
                  >
                    <p className="text-2xl font-display font-bold">{s.value}</p>
                    <p className="text-[11px] text-muted font-mono uppercase tracking-wider mt-0.5">
                      {s.unit}
                    </p>
                  </div>
                ))}
              </div>

              {/* How it works */}
              <div className="p-6 rounded-2xl bg-surface border border-border mb-10">
                <p className="text-[11px] text-muted font-mono uppercase tracking-wider mb-4">
                  How it works
                </p>
                <ol className="space-y-3">
                  {[
                    "Click Start — the passage appears and your timer begins.",
                    "Read at your normal pace. Don't skim or rush.",
                    'Click "I\'ve Finished" the moment you read the last word.',
                    "Answer 3 quick comprehension questions.",
                    "Get your WPM score and see how you compare.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 text-accent text-[10px] font-mono font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="text-center">
                <button
                  onClick={handleStart}
                  className="inline-flex items-center gap-3 h-14 px-10 rounded-xl bg-accent text-bg text-base font-semibold hover:brightness-110 hover:scale-[1.02] transition-all duration-200"
                >
                  Start the Test
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
                <p className="text-xs text-muted mt-3">
                  Free · No sign-up required
                </p>
              </div>
            </motion.div>
          )}

          {/* ── READING ── */}
          {phase === "reading" && (
            <motion.div
              key="reading"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              {/* Timer bar */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs text-muted font-mono uppercase tracking-wider">
                  Read naturally — don&apos;t skim
                </p>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-mono font-bold text-lg tabular-nums">
                    {formatTime(elapsedMs)}
                  </span>
                </div>
              </div>

              {/* Passage */}
              <article className="p-8 rounded-2xl bg-surface border border-border mb-8">
                <p className="text-[11px] text-muted font-mono uppercase tracking-wider mb-5">
                  Reading passage · {WORD_COUNT} words
                </p>
                <div className="space-y-4 text-[17px] leading-[1.85] text-foreground/90">
                  {PASSAGE.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </article>

              <div className="text-center">
                <button
                  onClick={handleFinished}
                  className="inline-flex items-center gap-3 h-14 px-10 rounded-xl bg-accent text-bg text-base font-semibold hover:brightness-110 hover:scale-[1.02] transition-all duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  I&apos;ve Finished Reading
                </button>
                <p className="text-xs text-muted mt-3">
                  Tap as soon as you read the last word
                </p>
              </div>
            </motion.div>
          )}

          {/* ── QUIZ ── */}
          {phase === "quiz" && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-10">
                <p className="text-xs tracking-[0.25em] uppercase text-accent font-mono mb-3">
                  Comprehension Check
                </p>
                <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">
                  3 quick questions
                </h2>
                <p className="text-muted text-sm">
                  Based on the passage you just read. Answer from memory.
                </p>
              </div>

              <div className="space-y-5 mb-10">
                {QUESTIONS.map((q, qi) => (
                  <div
                    key={qi}
                    className="p-6 rounded-2xl bg-surface border border-border"
                  >
                    <p className="font-semibold text-foreground leading-snug mb-4">
                      <span className="text-accent font-mono text-sm mr-2">
                        Q{qi + 1}.
                      </span>
                      {q.question}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {q.options.map((opt, oi) => (
                        <button
                          key={oi}
                          onClick={() => handleAnswer(qi, oi)}
                          className={`text-left px-4 py-3 rounded-xl text-sm border transition-all duration-150 ${
                            answers[qi] === oi
                              ? "bg-accent/15 border-accent/40 text-foreground"
                              : "bg-bg border-border text-muted hover:border-accent/25 hover:text-foreground"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={handleSeeResults}
                  disabled={!allAnswered}
                  className="inline-flex items-center gap-3 h-14 px-10 rounded-xl bg-accent text-bg text-base font-semibold hover:brightness-110 hover:scale-[1.02] transition-all duration-200 disabled:opacity-35 disabled:pointer-events-none"
                >
                  See My Results
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
                {!allAnswered && (
                  <p className="text-xs text-muted mt-3">
                    Answer all 3 questions to continue
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {/* ── RESULTS ── */}
          {phase === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-10">
                <p className="text-xs tracking-[0.25em] uppercase text-accent font-mono mb-3">
                  Your Results
                </p>
                <h2 className="text-3xl sm:text-4xl font-display font-bold">
                  Your reading speed
                </h2>
              </div>

              {/* WPM card */}
              <div className="p-8 rounded-2xl bg-surface border border-border text-center mb-5">
                <motion.p
                  initial={{ scale: 0.75, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 16,
                    delay: 0.1,
                  }}
                  className={`text-8xl font-display font-bold tabular-nums mb-1 ${rating.color}`}
                >
                  {wpm}
                </motion.p>
                <p className="text-muted mb-4">words per minute</p>
                <span
                  className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold border ${rating.badge}`}
                >
                  {rating.label} Reader
                </span>
                <p className="text-muted text-sm mt-4 max-w-xs mx-auto leading-relaxed">
                  {rating.description}
                </p>
              </div>

              {/* Comprehension card */}
              <div className="p-6 rounded-2xl bg-surface border border-border mb-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold">Reading Comprehension</p>
                  <p
                    className={`text-2xl font-display font-bold ${comprehension >= 67 ? "text-accent" : "text-amber"}`}
                  >
                    {comprehension}%
                  </p>
                </div>
                <div className="h-2 rounded-full bg-bg overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${comprehension >= 67 ? "bg-accent" : "bg-amber"}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${comprehension}%` }}
                    transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                  />
                </div>
                <p className="text-xs text-muted mt-2">
                  {answers.filter((a, i) => a === QUESTIONS[i].correct).length}{" "}
                  of {QUESTIONS.length} questions correct
                </p>
              </div>

              {/* Comparison bars */}
              <div className="p-6 rounded-2xl bg-surface border border-border mb-8">
                <p className="text-sm font-semibold mb-6">How you compare</p>
                <div className="space-y-4">
                  {[
                    {
                      label: "Average reader",
                      value: 230,
                      cls: "bg-border",
                      textCls: "text-muted",
                      delay: 0.2,
                    },
                    {
                      label: "You",
                      value: wpm,
                      cls: "bg-foreground/50",
                      textCls: "text-foreground font-semibold",
                      delay: 0.4,
                    },
                    {
                      label: "You with ReadFast",
                      value: readfastTarget,
                      cls: "bg-accent",
                      textCls: "text-accent font-semibold",
                      delay: 0.6,
                    },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-3">
                      <p className={`text-xs w-36 shrink-0 ${row.textCls}`}>
                        {row.label}
                      </p>
                      <div className="flex-1 h-2 rounded-full bg-bg overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${row.cls}`}
                          initial={{ width: 0 }}
                          animate={{
                            width: `${Math.min((row.value / BAR_MAX) * 100, 100)}%`,
                          }}
                          transition={{
                            duration: 0.75,
                            delay: row.delay,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                      <p
                        className={`text-xs font-mono w-16 text-right shrink-0 ${row.textCls}`}
                      >
                        {row.value} WPM
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-muted/50 mt-5">
                  * ReadFast projection based on average improvement after 30 days of RSVP training.
                </p>
              </div>

              {/* CTA */}
              <div className="p-8 rounded-2xl bg-accent/5 border border-accent/15 text-center mb-8">
                <h3 className="text-2xl font-display font-bold mb-2">
                  {wpm < 300
                    ? "Ready to double your reading speed?"
                    : "Push past your current limit."}
                </h3>
                <p className="text-muted text-sm max-w-sm mx-auto mb-7 leading-relaxed">
                  ReadFast uses RSVP technology to train your reading speed — replacing skimming with focused, word-by-word reading that actually improves comprehension.
                </p>
                <StoreButtons utmContent="speed_test_result" className="justify-center" />
                <p className="text-xs text-muted mt-4">
                  Free to download · No ads · No data collection
                </p>
              </div>

              {/* Retry / Back */}
              <div className="flex gap-3 justify-center">
                <button
                  onClick={handleRetry}
                  className="h-10 px-5 rounded-lg text-sm text-muted border border-border hover:border-accent/30 hover:text-foreground transition-all"
                >
                  Take the test again
                </button>
                <Link
                  href="/"
                  className="h-10 px-5 rounded-lg text-sm text-muted border border-border hover:border-accent/30 hover:text-foreground transition-all inline-flex items-center"
                >
                  Back to ReadFast
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
