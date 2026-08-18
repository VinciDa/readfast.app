import { splitToken, type RsvpToken } from "@/lib/rsvp";

export default function RsvpWord({
  token,
  size = "lg",
}: {
  token: RsvpToken | null;
  size?: "md" | "lg";
}) {
  if (!token) {
    return (
      <p className="text-muted text-sm text-center">Press play to begin</p>
    );
  }

  const { prefix, focal, suffix } = splitToken(token);
  const type =
    size === "lg"
      ? "text-4xl sm:text-5xl lg:text-[3.5rem]"
      : "text-3xl sm:text-4xl";

  return (
    <div className="relative w-full max-w-xl mx-auto px-2 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-accent/70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-0 h-3 w-px -translate-x-1/2 bg-accent/70"
      />
      <div
        className={`flex items-baseline justify-center min-h-[4.5rem] font-mono font-bold tracking-tight ${type}`}
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="flex-1 text-right text-foreground/80 tabular-nums">
          {prefix}
        </span>
        <span className="w-[1.05ch] text-center text-accent">{focal}</span>
        <span className="flex-1 text-left text-foreground/80 tabular-nums">
          {suffix}
        </span>
      </div>
    </div>
  );
}
