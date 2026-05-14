import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Speed Reading and Comprehension: Why Deep Reading Still Wins",
  description:
    "Speed reading can feel productive, but comprehension drives real learning. Learn why reading slower often creates better retention and understanding.",
  metadataBase: new URL("https://readfast.app"),
  alternates: {
    canonical: "/blog/speed-reading-comprehension/",
  },
  keywords: [
    "speed reading",
    "reading comprehension",
    "speed reading vs comprehension",
    "deep reading",
    "slow reading",
    "read better",
  ],
  openGraph: {
    title: "The Need for Speed? Why Comprehension Matters More",
    description:
      "Reading isn't a race. Learn why deep comprehension outperforms speed reading when retention matters.",
    url: "https://readfast.app/blog/speed-reading-comprehension",
    siteName: "ReadFast",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Speed Reading and Comprehension by ReadFast",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Comprehension Matters More Than Speed Reading",
    description:
      "Speed can help, but comprehension is the goal. Here is how to read better, not just faster.",
    images: ["/og-image.png"],
  },
};

export default function SpeedReadingComprehensionBlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
            Blog
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-6">
            The Need for Speed? Why Comprehension Matters More Than Racing
            Through Pages
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-10">
            We live in an age of information overload. Between overflowing
            inboxes, nonstop notifications, and endless reading lists, speed
            reading feels like a superpower. But reading is not a race.
            Comprehension is the only metric that matters.
          </p>

          <section className="space-y-8 mb-12 text-foreground/90 leading-relaxed">
            <div className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-7 space-y-4">
              <h2 className="font-display text-2xl">
                The Illusion of "Reading"
              </h2>
              <p>
                Scanning text at very high words per minute is often decoding,
                not reading. You may visually process words while missing
                syntax, emotional tone, and logical structure.
              </p>
              <p>
                If you finish quickly but cannot recall the argument shortly
                after, the reading speed did not produce useful understanding.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-7 space-y-4">
              <h2 className="font-display text-2xl">
                Why the Brain Resists Speed
              </h2>
              <p>
                Deep reading depends on cognitive processes that aggressive
                speed reading often suppresses:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Subvocalization:</strong> Internal speech helps with
                  syntax and nuance.
                </li>
                <li>
                  <strong>Back-skipping (Regression):</strong> Revisiting dense
                  lines supports meaning, not failure.
                </li>
                <li>
                  <strong>Working Memory:</strong> Going too fast can overload
                  memory before sentences resolve.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-7 space-y-4">
              <h2 className="font-display text-2xl">
                The Case for Slow, Strategic Reading
              </h2>
              <p>
                Skimming might work for low-stakes material, but dense writing,
                legal terms, and nuanced ideas need slower attention. Deep
                reading creates a dialogue with the text, and that is where
                learning happens.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-surface-alt/60 p-6 sm:p-8">
            <h2 className="font-display text-2xl sm:text-3xl mb-4">
              How to Read Better (Not Faster)
            </h2>
            <ol className="list-decimal pl-5 text-muted leading-relaxed mb-7 space-y-4">
              <li>
                <strong>Preview, don&apos;t rush:</strong> Take 60 seconds to
                review headings and paragraph starters first.
              </li>
              <li>
                <strong>Match pace to content:</strong> Slow down for complex
                or high-stakes text; speed up for routine reading.
              </li>
              <li>
                <strong>Use the 80/20 rule:</strong> Skim to identify valuable
                sections, then read those deeply.
              </li>
            </ol>
            <p className="text-muted leading-relaxed mb-7">
              Comprehension is not a hurdle to clear on the way to speed. It is
              the entire point of reading.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/reading-speed-test"
                className="inline-flex items-center h-11 px-5 rounded-lg bg-accent text-bg font-semibold transition-all duration-200 hover:brightness-110"
              >
                Measure Your Reading Speed
              </Link>
              <Link
                href="/"
                className="inline-flex items-center h-11 px-5 rounded-lg border border-border text-foreground hover:bg-surface transition-colors"
              >
                Explore ReadFast
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
