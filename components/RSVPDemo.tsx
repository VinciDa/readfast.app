"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { getORPIndex } from "@/lib/platform";
import StoreButtons from "./StoreButtons";

const SAMPLE_TEXT =
  "Speed reading is not about skipping words. It is about training your brain to process language faster. With RSVP technology, each word appears at the center of your vision, eliminating the need for eye movement. Your focus stays locked. Your comprehension stays high. And you finish reading in a fraction of the time.";

const SPEEDS = [
  { label: "250 WPM", value: 250 },
  { label: "400 WPM", value: 400 },
  { label: "600 WPM", value: 600 },
];

export default function RSVPDemo() {
  const [text, setText] = useState(SAMPLE_TEXT);
  const [speed, setSpeed] = useState(250);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentWord, setCurrentWord] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [finished, setFinished] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wordsRef = useRef<string[]>([]);

  const stop = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsPlaying(false);
  }, []);

  const play = useCallback(() => {
    const words = text.trim().split(/\s+/);
    if (words.length === 0) return;
    wordsRef.current = words;
    setFinished(false);
    setIsPlaying(true);
    setWordIdx(0);
    setCurrentWord(words[0]);
  }, [text]);

  useEffect(() => {
    if (!isPlaying) return;
    const words = wordsRef.current;
    if (wordIdx >= words.length) {
      setIsPlaying(false);
      setFinished(true);
      return;
    }
    const interval = 60000 / speed;
    timerRef.current = setTimeout(() => {
      const next = wordIdx + 1;
      if (next >= words.length) {
        setIsPlaying(false);
        setFinished(true);
      } else {
        setWordIdx(next);
        setCurrentWord(words[next]);
      }
    }, interval);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, wordIdx, speed]);

  const reset = () => {
    stop();
    setCurrentWord("");
    setWordIdx(0);
    setFinished(false);
  };

  const orpIdx = currentWord ? getORPIndex(currentWord) : 0;
  const progress =
    wordsRef.current.length > 0
      ? (wordIdx / wordsRef.current.length) * 100
      : 0;

  return (
    <section id="demo" className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-accent font-mono mb-4">
            Free Reading Speed Test
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Check your reading speed
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Paste any text, pick a speed, and see how fast your reading can go
            — then take it further with ReadFast.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-surface border border-border overflow-hidden"
        >
          <div className="relative bg-bg min-h-[200px] flex items-center justify-center p-8 border-b border-border">
            {!isPlaying && !finished && !currentWord && (
              <p className="text-muted text-sm">
                Press play to start the demo
              </p>
            )}
            {(isPlaying || currentWord) && !finished && (
              <div className="text-center">
                <div className="flex items-baseline justify-center min-h-[64px]">
                  <span className="text-4xl sm:text-5xl font-display font-bold word-flash">
                    {currentWord.split("").map((char, i) => (
                      <span
                        key={`${wordIdx}-${i}`}
                        className={
                          i === orpIdx ? "text-accent" : "text-foreground"
                        }
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                </div>
                <div className="mt-6 w-full max-w-xs mx-auto">
                  <div className="h-1 bg-surface-alt rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-muted font-mono">
                    <span>
                      {wordIdx + 1} / {wordsRef.current.length}
                    </span>
                    <span>{speed} WPM</span>
                  </div>
                </div>
              </div>
            )}
            {finished && (
              <div className="text-center py-4">
                <p className="text-2xl font-display font-bold mb-2">Done!</p>
                <p className="text-muted mb-6">
                  Ready for the real thing?
                </p>
                <StoreButtons
                  utmContent="demo_cta"
                  className="justify-center"
                />
              </div>
            )}
          </div>

          <div className="p-5 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex rounded-lg bg-bg border border-border overflow-hidden">
                {SPEEDS.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setSpeed(s.value)}
                    className={`px-4 py-2 text-xs font-mono transition-colors ${
                      speed === s.value
                        ? "bg-accent text-bg"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              <div className="flex gap-2 ml-auto">
                {!isPlaying ? (
                  <button
                    onClick={play}
                    className="flex items-center gap-2 h-9 px-5 rounded-lg bg-accent text-bg text-sm font-semibold hover:brightness-110 transition-all"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Play
                  </button>
                ) : (
                  <button
                    onClick={stop}
                    className="flex items-center gap-2 h-9 px-5 rounded-lg bg-surface-alt border border-border text-foreground text-sm font-semibold hover:border-accent/40 transition-all"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                    Pause
                  </button>
                )}
                <button
                  onClick={reset}
                  className="h-9 px-4 rounded-lg text-sm text-muted hover:text-foreground border border-border hover:border-accent/40 transition-all"
                >
                  Reset
                </button>
              </div>
            </div>

            <textarea
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                reset();
              }}
              rows={4}
              placeholder="Paste any text here..."
              className="w-full bg-bg border border-border rounded-xl p-4 text-sm text-foreground placeholder-muted resize-none focus:outline-none focus:border-accent/40 transition-colors font-body"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
