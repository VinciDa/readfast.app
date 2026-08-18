"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { RsvpToken } from "@/lib/rsvp";

export function useRsvpPlayer(tokens: RsvpToken[], wpm: number) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);
  const [elapsedMs, setElapsedMs] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const playStartedAt = useRef<number | null>(null);
  const accumulatedMs = useRef(0);
  const tokensRef = useRef(tokens);

  useEffect(() => {
    tokensRef.current = tokens;
  }, [tokens]);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const stampElapsed = useCallback(() => {
    if (playStartedAt.current != null) {
      accumulatedMs.current += Date.now() - playStartedAt.current;
      playStartedAt.current = null;
      setElapsedMs(accumulatedMs.current);
    }
  }, []);

  const pause = useCallback(() => {
    clearTimer();
    stampElapsed();
    setIsPlaying(false);
  }, [clearTimer, stampElapsed]);

  const reset = useCallback(() => {
    clearTimer();
    playStartedAt.current = null;
    accumulatedMs.current = 0;
    setElapsedMs(0);
    setIsPlaying(false);
    setIndex(0);
    setFinished(false);
    setStarted(false);
  }, [clearTimer]);

  const play = useCallback(() => {
    const list = tokensRef.current;
    if (list.length === 0) return;

    setIndex((current) => {
      if (finished || current >= list.length) return 0;
      return current;
    });
    if (finished) {
      setFinished(false);
      accumulatedMs.current = 0;
      setElapsedMs(0);
    }

    setStarted(true);
    playStartedAt.current = Date.now();
    setIsPlaying(true);
  }, [finished]);

  useEffect(() => {
    if (!isPlaying) return;

    const list = tokensRef.current;
    const word = list[index];
    if (!word) return;

    const interval = (60000 / Math.max(wpm, 1)) * (word.pause ?? 1);
    timerRef.current = setTimeout(() => {
      const next = index + 1;
      if (next >= tokensRef.current.length) {
        stampElapsed();
        setIsPlaying(false);
        setFinished(true);
      } else {
        setIndex(next);
      }
    }, interval);

    return clearTimer;
  }, [isPlaying, index, wpm, clearTimer, stampElapsed]);

  const current = started && !finished ? (tokens[index] ?? null) : null;
  const progress =
    tokens.length > 0 && started
      ? ((index + 1) / tokens.length) * 100
      : 0;

  return {
    isPlaying,
    index,
    finished,
    started,
    elapsedMs,
    current,
    progress,
    play,
    pause,
    reset,
  };
}
