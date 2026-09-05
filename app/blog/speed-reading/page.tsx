import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { ArticleCta } from "@/components/blog/ArticleShell";
import BlogJsonLd from "@/components/blog/BlogJsonLd";
import { getPost } from "@/lib/blog-posts";
import {
  buildBlogPostingJsonLd,
  buildBreadcrumbJsonLd,
} from "@/lib/blog-jsonld";

const post = getPost("speed-reading");

export const metadata: Metadata = {
  title: "Speed Reading: 5 Techniques to Read Faster Without Losing Comprehension",
  description:
    "Learn practical speed reading techniques you can start using today: visual pacing, subvocalization reduction, chunking, skimming, and reduced regression.",
  metadataBase: new URL("https://readfast.app"),
  alternates: {
    canonical: "/blog/speed-reading/",
  },
  keywords: post.keywords,
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
    publishedTime: post.date,
  },
  twitter: {
    card: "summary_large_image",
    title: "Speed Reading: 5 Techniques to Read Faster",
    description:
      "Master visual pacing, chunking, and more to improve speed reading and focus.",
    images: ["/og-image.png"],
  },
};

export default function SpeedReadingBlogPage() {
  return (
    <>
      <BlogJsonLd
        data={[buildBlogPostingJsonLd(post), buildBreadcrumbJsonLd(post)]}
      />
      <ArticleShell
        post={post}
        lede="Speed reading is not about rushing through text blindly. The real goal is to improve the rate at which you process words while keeping comprehension high. The techniques below are practical, trainable, and used by readers who want to get through books, articles, and PDFs in less time."
        cta={
          <ArticleCta
            title="Build your speed reading habit"
            primaryHref="/reading-speed-test"
            primaryLabel="Test Your Reading Speed"
            secondaryHref="/"
            secondaryLabel="Download ReadFast Free"
          >
            <p>
              Start with 10 to 15 minutes of daily practice. Use one technique at
              a time for a week, then layer the next one. Consistent training is
              what turns these methods into automatic reading behavior.
            </p>
          </ArticleCta>
        }
      >
        <h2 id="visual-pacer">1. Visual pacer</h2>
        <p>
          A visual pacer means using your finger, a pen, or your mouse cursor to
          guide your eyes across the line. This simple movement acts like a
          metronome for your attention. Instead of letting your eyes wander or
          pause too long on familiar words, you maintain a consistent rhythm.
          Over time, this trains your visual system to process text more
          efficiently. Deep dive:{" "}
          <Link href="/blog/visual-pacer-reading-speed">
            how a visual pacer stops eye drift
          </Link>
          .
        </p>

        <h2 id="subvocalization">2. Subvocalization reduction</h2>
        <p>
          Subvocalization is the inner voice that pronounces words in your head.
          It is useful for difficult material, but it can cap your reading speed
          at roughly your speaking speed. In speed reading practice, the goal is
          not to remove understanding, but to reduce unnecessary inner narration
          on simple phrases. Full guide:{" "}
          <Link href="/blog/reduce-subvocalization">
            how to reduce subvocalization
          </Link>
          .
        </p>

        <h2 id="chunking">3. Chunking</h2>
        <p>
          Chunking is the skill of reading groups of words together instead of
          one word at a time. Your eyes can capture multiple words in a single
          fixation, and your brain is good at filling in context quickly. Start
          with two-word clusters, then move to short phrases. See:{" "}
          <Link href="/blog/chunking-speed-reading">
            chunking exercises for phrase-level reading
          </Link>
          .
        </p>

        <h2 id="scanning-skimming">4. Scanning and skimming</h2>
        <p>
          Scanning and skimming are strategic reading modes for information-heavy
          content. A practical method is to read the first and last sentences of
          each paragraph to identify the central idea quickly. Used correctly,
          skimming is not careless reading — it is selective reading based on
          intent. Compare modes in{" "}
          <Link href="/blog/skimming-vs-speed-reading-vs-deep-reading">
            skimming vs speed reading vs deep reading
          </Link>
          .
        </p>

        <h2 id="reduced-regression">5. Reduced regression</h2>
        <p>
          Regression is the habit of repeatedly jumping backward to re-read words
          you just saw. While occasional review is normal, constant back-tracking
          drains time and breaks flow. Speed reading encourages forward momentum:
          finish the section first, then revisit only if comprehension is
          genuinely low. Learn more:{" "}
          <Link href="/blog/stop-regression-reading">
            how to stop reading regression
          </Link>
          .
        </p>
      </ArticleShell>
    </>
  );
}
