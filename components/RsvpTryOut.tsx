"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import StoreButtons from "@/components/StoreButtons";
import RsvpWord from "@/components/rsvp/RsvpWord";
import { useRsvpPlayer } from "@/components/rsvp/useRsvpPlayer";
import {
  RSVP_PASTE_CAP,
  RSVP_SPEEDS,
  RSVP_TRYOUT_TEXT,
  RSVP_WORD_CAP,
  estimateMinutes,
  formatDuration,
  processRsvpText,
} from "@/lib/rsvp";
import { track } from "@/lib/analytics";

const APP_HOOKS = [
  {
    title: "PDFs & books",
    body: "Import the full document instead of pasting a slice.",
  },
  {
    title: "Progress that sticks",
    body: "WPM history, streaks, and a reading list — not a one-off demo.",
  },
  {
    title: "Read anywhere",
    body: "Focus audio, offline, and ADHD-friendly tools on iOS & Android.",
  },
];

export default function RsvpTryOut() {
  const [text, setText] = useState(RSVP_TRYOUT_TEXT);
  const [wpm, setWpm] = useState(300);
  const doc = useMemo(() => processRsvpText(text), [text]);
  const player = useRsvpPlayer(doc.tokens, wpm);
  const { play, pause, isPlaying, finished } = player;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.code !== "Space") return;
      e.preventDefault();
      if (finished) return;
      if (isPlaying) pause();
      else if (!player.started) {
        track("rsvp_start", {
          wpm,
          word_count: doc.tokens.length,
          truncated: doc.truncated,
        });
        play();
      } else play();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [play, pause, isPlaying, finished, player.started, wpm, doc.tokens.length, doc.truncated]);

  const playable = doc.tokens.length;
  const minutes = estimateMinutes(playable, wpm);
  const utmComplete = doc.truncated ? "rsvp_limit_complete" : "rsvp_complete";

  const handleStart = () => {
    track("rsvp_start", {
      wpm,
      word_count: playable,
      truncated: doc.truncated,
    });
    player.play();
  };

  return (
    <section className="min-h-screen bg-bg pt-20 pb-28 lg:pt-24 lg:pb-20">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <AnimatePresence mode="wait">
          {!player.started && !player.finished && (
            <Setup
              key="setup"
              text={text}
              wpm={wpm}
              playable={playable}
              minutes={minutes}
              totalWords={doc.totalWords}
              truncated={doc.truncated}
              overflow={doc.overflow}
              onText={setText}
              onWpm={setWpm}
              onStart={handleStart}
            />
          )}

          {player.started && !player.finished && (
            <Reading
              key="reading"
              wpm={wpm}
              playable={playable}
              truncated={doc.truncated}
              overflow={doc.overflow}
              player={player}
              onWpm={setWpm}
              onExit={() => {
                track("rsvp_exit", {
                  wpm,
                  progress: Math.round(player.progress),
                });
                player.reset();
              }}
            />
          )}

          {player.finished && (
            <Complete
              key="complete"
              wpm={wpm}
              wordsRead={playable}
              elapsedMs={player.elapsedMs}
              truncated={doc.truncated}
              overflow={doc.overflow}
              utmContent={utmComplete}
              onAgain={() => {
                track("rsvp_try_another");
                player.reset();
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Setup({
  text,
  wpm,
  playable,
  minutes,
  totalWords,
  truncated,
  overflow,
  onText,
  onWpm,
  onStart,
}: {
  text: string;
  wpm: number;
  playable: number;
  minutes: number;
  totalWords: number;
  truncated: boolean;
  overflow: number;
  onText: (value: string) => void;
  onWpm: (value: number) => void;
  onStart: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
    >
      <div className="text-center mb-8 lg:mb-10">
        <p className="text-xs tracking-[0.25em] uppercase text-accent font-mono mb-4">
          RSVP try-out
        </p>
        <h1 className="text-3xl sm:text-5xl font-display font-bold leading-[1.08] tracking-tight mb-4">
          Feel RSVP. Then read the rest in the app.
        </h1>
        <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl mx-auto">
          Paste a short excerpt, lock your eyes on the mint letter, and read
          one word at a time. Nothing is saved. The app is where PDFs, progress,
          and daily reading live.
        </p>
      </div>

      {truncated && (
        <div className="p-5 sm:p-6 rounded-2xl bg-accent/5 border border-accent/25 mb-6">
          <p className="text-sm font-semibold mb-1">
            This try-out plays the first {RSVP_WORD_CAP.toLocaleString()} of{" "}
            {totalWords.toLocaleString()} words.
          </p>
          <p className="text-sm text-muted mb-5 leading-relaxed">
            {overflow.toLocaleString()} words won&apos;t fit here — that&apos;s
            on purpose. Import the full document in ReadFast.
          </p>
          <StoreButtons
            utmContent="rsvp_limit_paste"
            className="justify-center sm:justify-start"
          />
        </div>
      )}

      <div className="rounded-2xl bg-surface border border-border overflow-hidden mb-6">
        <div className="flex items-center justify-between px-5 py-3 border-b border-border">
          <p className="text-[11px] text-muted font-mono uppercase tracking-wider">
            Paste text
          </p>
          <button
            type="button"
            onClick={() => onText("")}
            className="text-[11px] font-mono uppercase tracking-wider text-muted hover:text-foreground"
          >
            Clear
          </button>
        </div>
        <textarea
          value={text}
          onChange={(e) => {
            const next = e.target.value;
            const words = next.trim().split(/\s+/).filter(Boolean);
            if (words.length > RSVP_PASTE_CAP) {
              onText(words.slice(0, RSVP_PASTE_CAP).join(" "));
              return;
            }
            onText(next);
          }}
          rows={8}
          placeholder="Paste a paragraph or short excerpt…"
          className="w-full bg-bg px-5 py-4 text-sm leading-relaxed text-foreground placeholder-muted resize-y min-h-[160px] focus:outline-none"
        />
        <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 border-t border-border text-[11px] font-mono text-muted">
          <span>
            {playable.toLocaleString()}
            {truncated ? ` / ${RSVP_WORD_CAP}` : ""} words
            {truncated ? ` · ${totalWords.toLocaleString()} pasted` : ""}
          </span>
          <span>
            ~{minutes} min at {wpm} WPM
          </span>
        </div>
      </div>

      <SpeedPicker wpm={wpm} onWpm={onWpm} />

      <div className="text-center mt-8">
        <button
          type="button"
          disabled={playable === 0}
          onClick={onStart}
          className="inline-flex items-center gap-3 h-14 px-10 rounded-xl bg-accent text-bg text-base font-semibold hover:brightness-110 hover:scale-[1.02] transition-all duration-200 disabled:opacity-40 disabled:hover:scale-100"
        >
          {truncated
            ? `Start ${RSVP_WORD_CAP}-word preview`
            : "Start RSVP"}
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
          Keep your gaze on the mint letter · Space to play/pause · Nothing is
          uploaded
        </p>
      </div>
    </motion.div>
  );
}

function Reading({
  wpm,
  playable,
  truncated,
  overflow,
  player,
  onWpm,
  onExit,
}: {
  wpm: number;
  playable: number;
  truncated: boolean;
  overflow: number;
  player: ReturnType<typeof useRsvpPlayer>;
  onWpm: (value: number) => void;
  onExit: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
    >
      <div className="flex items-center justify-between gap-3 mb-6">
        <p className="text-xs text-muted font-mono uppercase tracking-wider">
          Eyes on the mint letter
        </p>
        <p className="text-[11px] text-muted font-mono">
          {truncated
            ? `${overflow.toLocaleString()} words left for the app`
            : "Preview · not saved"}
        </p>
      </div>

      <div className="rounded-2xl bg-surface border border-border overflow-hidden">
        <div className="relative bg-bg min-h-[280px] sm:min-h-[320px] flex items-center justify-center px-4 py-12">
          <RsvpWord token={player.current} size="lg" />
        </div>

        <div className="px-5 pt-4">
          <div className="h-1 bg-surface-alt rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-100"
              style={{ width: `${player.progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 mb-4 text-[10px] text-muted font-mono">
            <span>
              {Math.min(player.index + 1, playable)} / {playable}
            </span>
            <span>{wpm} WPM</span>
          </div>
        </div>

        <div className="px-5 pb-5 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {player.isPlaying ? (
              <button
                type="button"
                onClick={player.pause}
                className="flex items-center gap-2 h-10 px-5 rounded-lg bg-surface-alt border border-border text-foreground text-sm font-semibold hover:border-accent/40"
              >
                Pause
              </button>
            ) : (
              <button
                type="button"
                onClick={player.play}
                className="flex items-center gap-2 h-10 px-5 rounded-lg bg-accent text-bg text-sm font-semibold hover:brightness-110"
              >
                Resume
              </button>
            )}
            <button
              type="button"
              onClick={onExit}
              className="h-10 px-4 rounded-lg text-sm text-muted hover:text-foreground border border-border hover:border-accent/40"
            >
              Exit
            </button>
            <p className="ml-auto text-[11px] text-muted font-mono hidden sm:block">
              Space play/pause
            </p>
          </div>
          <SpeedPicker wpm={wpm} onWpm={onWpm} compact />
        </div>
      </div>
    </motion.div>
  );
}

function Complete({
  wpm,
  wordsRead,
  elapsedMs,
  truncated,
  overflow,
  utmContent,
  onAgain,
}: {
  wpm: number;
  wordsRead: number;
  elapsedMs: number;
  truncated: boolean;
  overflow: number;
  utmContent: string;
  onAgain: () => void;
}) {
  useEffect(() => {
    track("rsvp_complete", {
      wpm,
      words_read: wordsRead,
      truncated,
    });
  }, [wpm, wordsRead, truncated]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-center mb-8">
        <p className="text-xs tracking-[0.25em] uppercase text-accent font-mono mb-4">
          That&apos;s RSVP
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3">
          {truncated
            ? "The rest of your document is in the app."
            : "You just felt the ReadFast reading mode."}
        </h2>
        <p className="text-muted max-w-md mx-auto leading-relaxed">
          {truncated
            ? `You previewed ${wordsRead.toLocaleString()} words. ${overflow.toLocaleString()} more never left this tab — import them in ReadFast.`
            : "This page is a try-out. The app is how you read books, PDFs, and articles at this speed every day."}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-8">
        {[
          { value: wordsRead.toLocaleString(), unit: "words" },
          { value: `${wpm}`, unit: "WPM" },
          { value: formatDuration(elapsedMs), unit: "time" },
        ].map((s) => (
          <div
            key={s.unit}
            className="p-3 sm:p-4 rounded-2xl bg-surface border border-border text-center"
          >
            <p className="text-2xl font-display font-bold">{s.value}</p>
            <p className="text-[11px] text-muted font-mono uppercase tracking-wider mt-0.5">
              {s.unit}
            </p>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-3 mb-8">
        {APP_HOOKS.map((hook) => (
          <div
            key={hook.title}
            className="p-4 rounded-2xl bg-surface border border-border"
          >
            <p className="text-sm font-semibold mb-1">{hook.title}</p>
            <p className="text-xs text-muted leading-relaxed">{hook.body}</p>
          </div>
        ))}
      </div>

      <div className="p-8 rounded-2xl bg-accent/5 border border-accent/15 text-center mb-8">
        <h3 className="text-2xl font-display font-bold mb-2">
          {truncated
            ? "Import the full document."
            : "Keep this speed on everything you read."}
        </h3>
        <p className="text-muted text-sm max-w-sm mx-auto mb-7 leading-relaxed">
          ReadFast is free to download. No ads, no data collection — RSVP,
          PDFs, and progress on iOS & Android.
        </p>
        <StoreButtons utmContent={utmContent} className="justify-center" />
        <p className="text-xs text-muted mt-4">
          Free to download · No ads · No data collection
        </p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <button
          type="button"
          onClick={onAgain}
          className="h-10 px-5 rounded-lg text-sm text-muted border border-border hover:border-accent/30 hover:text-foreground transition-all"
        >
          Try another excerpt
        </button>
        <Link
          href="/reading-speed-test"
          onClick={() => track("rsvp_to_speed_test")}
          className="h-10 px-5 rounded-lg text-sm text-muted border border-border hover:border-accent/30 hover:text-foreground transition-all inline-flex items-center"
        >
          Check your WPM
        </Link>
      </div>
    </motion.div>
  );
}

function SpeedPicker({
  wpm,
  onWpm,
  compact = false,
}: {
  wpm: number;
  onWpm: (value: number) => void;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "" : "rounded-2xl bg-surface border border-border p-5"}>
      <div className="flex items-center justify-between mb-3">
        <p className="text-[11px] text-muted font-mono uppercase tracking-wider">
          Reading speed
        </p>
        <p className="text-sm font-mono text-accent font-semibold">{wpm} WPM</p>
      </div>
      <input
        type="range"
        min={200}
        max={600}
        step={10}
        value={wpm}
        onChange={(e) => onWpm(Number(e.target.value))}
        className="w-full accent-[#3EFFA8] h-1 bg-border rounded-lg appearance-none cursor-pointer mb-3"
      />
      <div className="flex rounded-lg bg-bg border border-border overflow-hidden">
        {RSVP_SPEEDS.map((s) => (
          <button
            key={s.value}
            type="button"
            onClick={() => onWpm(s.value)}
            className={`flex-1 px-3 py-2 text-xs font-mono transition-colors ${
              wpm === s.value
                ? "bg-accent text-bg"
                : "text-muted hover:text-foreground"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
