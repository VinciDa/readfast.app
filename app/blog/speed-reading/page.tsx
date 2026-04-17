import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Speed Reading: 5 Techniques to Read Faster Without Losing Comprehension",
  description:
    "Learn practical speed reading techniques you can start using today: visual pacing, subvocalization reduction, chunking, skimming, and reduced regression.",
  metadataBase: new URL("https://readfast.app"),
  alternates: {
    canonical: "https://readfast.app/blog/speed-reading",
  },
  keywords: [
    "speed reading",
    "speed reading techniques",
    "how to speed read",
    "read faster",
    "reading comprehension",
    "subvocalization",
    "chunking",
    "visual pacer",
    "skimming",
    "reduce regression",
  ],
  openGraph: {
    title: "Speed Reading: 5 Techniques to Read Faster",
    description:
      "Use these speed reading methods to increase words per minute while preserving comprehension.",
    url: "https://readfast.app/blog/speed-reading",
    siteName: "ReadFast",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Speed Reading Techniques by ReadFast",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speed Reading: 5 Techniques to Read Faster",
    description:
      "Master visual pacing, chunking, and more to improve speed reading and focus.",
    images: ["/og-image.png"],
  },
};

const techniques = [
  {
    title: "1) Visual Pacer",
    body: "A visual pacer means using your finger, a pen, or your mouse cursor to guide your eyes across the line. This simple movement acts like a metronome for your attention. Instead of letting your eyes wander or pause too long on familiar words, you maintain a consistent rhythm. Over time, this trains your visual system to process text more efficiently and makes speed reading feel less mentally exhausting.",
  },
  {
    title: "2) Subvocalization Reduction",
    body: "Subvocalization is the inner voice that pronounces words in your head. It is useful for difficult material, but it can cap your reading speed at roughly your speaking speed. In speed reading practice, the goal is not to remove understanding, but to reduce unnecessary inner narration on simple phrases. You can train this by lightly increasing pace, using a visual pacer, and focusing on meaning chunks instead of mentally sounding every word.",
  },
  {
    title: "3) Chunking",
    body: "Chunking is the skill of reading groups of words together instead of one word at a time. Your eyes can capture multiple words in a single fixation, and your brain is good at filling in context quickly. Start with two-word clusters, then move to short phrases. As this improves, your eyes make fewer stops per line, which increases speed while keeping comprehension intact.",
  },
  {
    title: "4) Scanning and Skimming",
    body: "Scanning and skimming are strategic reading modes for information-heavy content. A practical method is to read the first and last sentences of each paragraph to identify the central idea quickly. This helps you decide where to slow down for detail and where to move faster. Used correctly, skimming is not careless reading - it is selective reading based on intent.",
  },
  {
    title: "5) Reduced Regression",
    body: "Regression is the habit of repeatedly jumping backward to re-read words you just saw. While occasional review is normal, constant back-tracking drains time and breaks flow. Speed reading encourages forward momentum: finish the section first, then revisit only if comprehension is genuinely low. This approach builds confidence, improves focus, and prevents your eyes from getting stuck in a loop.",
  },
];

export default function SpeedReadingBlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
            Blog
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-6">
            Speed Reading: 5 Techniques to Read Faster with Better Focus
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-10">
            Speed reading is not about rushing through text blindly. The real
            goal is to improve the rate at which you process words while
            keeping comprehension high. The techniques below are practical,
            trainable, and used by readers who want to get through books,
            articles, and PDFs in less time.
          </p>

          <section className="space-y-8 mb-12">
            {techniques.map((technique) => (
              <div
                key={technique.title}
                className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-7"
              >
                <h2 className="font-display text-2xl mb-3">{technique.title}</h2>
                <p className="text-foreground/90 leading-relaxed">
                  {technique.body}
                </p>
              </div>
            ))}
          </section>

          <section className="rounded-2xl border border-border bg-surface-alt/60 p-6 sm:p-8">
            <h2 className="font-display text-2xl sm:text-3xl mb-4">
              Build Your Speed Reading Habit
            </h2>
            <p className="text-muted leading-relaxed mb-5">
              Start with 10 to 15 minutes of daily practice. Use one technique
              at a time for a week, then layer the next one. Consistent training
              is what turns these methods into automatic reading behavior.
            </p>
            <p className="text-muted leading-relaxed mb-7">
              If you want to measure your baseline first, take a short reading
              speed test and track your progress over time.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/reading-speed-test"
                className="inline-flex items-center h-11 px-5 rounded-lg bg-accent text-bg font-semibold transition-all duration-200 hover:brightness-110"
              >
                Take the Reading Speed Test
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
