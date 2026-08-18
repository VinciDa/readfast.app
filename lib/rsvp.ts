import { getORPIndex } from "@/lib/platform";

/** Hard cap on what we keep in the paste box so the tab stays snappy. */
export const RSVP_PASTE_CAP = 2000;
/** Web try-out cap — enough to feel RSVP, not enough to replace the app. */
export const RSVP_WORD_CAP = 500;

export const RSVP_DEMO_TEXT =
  "Speed reading is not about skipping words. It is about training your brain to process language faster. With RSVP technology, each word appears at the center of your vision, eliminating the need for eye movement. Your focus stays locked. Your comprehension stays high. And you finish reading in a fraction of the time.";

export const RSVP_TRYOUT_TEXT = `Keep your eyes on the highlighted letter. Do not chase the words — let them come to you. Rapid Serial Visual Presentation places one word at a time at the center of your vision, so your eyes stop jumping across the page.

Most adults read around two hundred to two hundred fifty words per minute because saccades and subvocalization slow them down. RSVP removes that wasted motion. At three hundred words per minute this short try-out takes under a minute. At four hundred, even less.

This browser try-out is a taste, not a library. There is no save, no PDF import, and no history. Paste a short excerpt, feel the pace, then continue in the ReadFast app — where your books, articles, and documents actually live.

Focus on the mint character. Breathe. Let comprehension follow the word, not the other way around. That locked focal point is the whole trick. Once it clicks, you will want it on everything you read.`;

export const RSVP_SPEEDS = [
  { label: "250", value: 250 },
  { label: "400", value: 400 },
  { label: "600", value: 600 },
] as const;

export type RsvpToken = {
  text: string;
  orp: number;
  pause: number;
};

export type RsvpDocument = {
  tokens: RsvpToken[];
  totalWords: number;
  truncated: boolean;
  overflow: number;
};

export function tokenizeText(text: string): string[] {
  return text.trim().split(/\s+/).filter(Boolean);
}

export function toRsvpToken(word: string): RsvpToken {
  let pause = 1;
  if (/[.!?]$/.test(word)) pause = 2;
  else if (/[,;:]$/.test(word)) pause = 1.5;

  return {
    text: word,
    orp: getORPIndex(word),
    pause,
  };
}

export function processRsvpText(
  text: string,
  cap = RSVP_WORD_CAP,
): RsvpDocument {
  const words = tokenizeText(text);
  return {
    tokens: words.slice(0, cap).map(toRsvpToken),
    totalWords: words.length,
    truncated: words.length > cap,
    overflow: Math.max(0, words.length - cap),
  };
}

export function splitToken(token: RsvpToken) {
  const idx = Math.min(token.orp, Math.max(0, token.text.length - 1));
  return {
    prefix: token.text.slice(0, idx),
    focal: token.text[idx] ?? "",
    suffix: token.text.slice(idx + 1),
  };
}

export function estimateMinutes(wordCount: number, wpm: number) {
  if (wordCount <= 0 || wpm <= 0) return 0;
  return Math.max(1, Math.ceil(wordCount / wpm));
}

export function formatDuration(ms: number) {
  const totalSec = Math.max(0, Math.round(ms / 1000));
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  if (m === 0) return `${s}s`;
  return `${m}m ${String(s).padStart(2, "0")}s`;
}
