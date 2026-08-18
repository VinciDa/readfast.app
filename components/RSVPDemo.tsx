"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import StoreButtons from "./StoreButtons";
import RsvpWord from "@/components/rsvp/RsvpWord";
import { useRsvpPlayer } from "@/components/rsvp/useRsvpPlayer";
import { RSVP_DEMO_TEXT, RSVP_SPEEDS, processRsvpText } from "@/lib/rsvp";
import { useState } from "react";

const DEMO_TOKENS = processRsvpText(RSVP_DEMO_TEXT).tokens;

export default function RSVPDemo() {
  const [speed, setSpeed] = useState(250);
  const player = useRsvpPlayer(DEMO_TOKENS, speed);

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
            15-second RSVP demo
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Feel it before you download
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            One word at a time, locked on the mint letter. This is a taste —
            the app is where you read PDFs, books, and your whole list.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-surface border border-border overflow-hidden"
        >
          <div className="relative bg-bg min-h-[220px] flex items-center justify-center p-8 border-b border-border">
            {!player.started && !player.finished && (
              <p className="text-muted text-sm">Press play to start the demo</p>
            )}
            {player.started && !player.finished && (
              <div className="w-full">
                <RsvpWord token={player.current} size="md" />
                <div className="mt-8 w-full max-w-xs mx-auto">
                  <div className="h-1 bg-surface-alt rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-100"
                      style={{ width: `${player.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-muted font-mono">
                    <span>
                      {player.index + 1} / {DEMO_TOKENS.length}
                    </span>
                    <span>{speed} WPM</span>
                  </div>
                </div>
              </div>
            )}
            {player.finished && (
              <div className="text-center py-4 px-2">
                <p className="text-2xl font-display font-bold mb-2">
                  That&apos;s RSVP.
                </p>
                <p className="text-muted mb-6 max-w-sm mx-auto">
                  Keep this speed on PDFs, books, and articles — free on iOS
                  &amp; Android.
                </p>
                <StoreButtons
                  utmContent="demo_cta"
                  className="justify-center"
                />
                <p className="mt-5">
                  <Link
                    href="/rsvp"
                    className="text-sm text-accent hover:brightness-110"
                  >
                    Or try a short excerpt in the browser →
                  </Link>
                </p>
              </div>
            )}
          </div>

          <div className="p-5 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex rounded-lg bg-bg border border-border overflow-hidden">
                {RSVP_SPEEDS.map((s) => (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => setSpeed(s.value)}
                    className={`px-4 py-2 text-xs font-mono transition-colors ${
                      speed === s.value
                        ? "bg-accent text-bg"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {s.label} WPM
                  </button>
                ))}
              </div>

              <div className="flex gap-2 ml-auto">
                {!player.isPlaying ? (
                  <button
                    type="button"
                    onClick={player.play}
                    className="flex items-center gap-2 h-9 px-5 rounded-lg bg-accent text-bg text-sm font-semibold hover:brightness-110 transition-all"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    {player.started && !player.finished ? "Resume" : "Play"}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={player.pause}
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
                  type="button"
                  onClick={player.reset}
                  className="h-9 px-4 rounded-lg text-sm text-muted hover:text-foreground border border-border hover:border-accent/40 transition-all"
                >
                  Reset
                </button>
              </div>
            </div>

            <p className="text-xs text-muted leading-relaxed">
              Demo text is fixed on purpose.{" "}
              <Link href="/rsvp" className="text-accent hover:brightness-110">
                Try RSVP with your own excerpt
              </Link>{" "}
              (500-word cap) — or{" "}
              <Link
                href="/reading-speed-test"
                className="text-foreground/80 hover:text-foreground"
              >
                check your WPM
              </Link>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
