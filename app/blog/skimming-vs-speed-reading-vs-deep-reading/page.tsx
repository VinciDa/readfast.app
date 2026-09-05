import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import ArticleShell, {
  ArticleCta,
  InlineCallout,
} from "@/components/blog/ArticleShell";
import BlogJsonLd from "@/components/blog/BlogJsonLd";
import { getPost } from "@/lib/blog-posts";
import {
  buildBlogPostingJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqPageJsonLd,
} from "@/lib/blog-jsonld";

const post = getPost("skimming-vs-speed-reading-vs-deep-reading");

export const metadata: Metadata = {
  title: "Skimming vs Speed Reading vs Deep Reading: When to Use Each",
  description:
    "These three modes solve different problems. A clear comparison of intent, technique, and trade-offs — so you stop using the wrong mode for the page in front of you.",
  metadataBase: new URL("https://readfast.app"),
  alternates: {
    canonical: "/blog/skimming-vs-speed-reading-vs-deep-reading/",
  },
  keywords: post.keywords,
  openGraph: {
    title: "Skimming vs Speed Reading vs Deep Reading: When to Use Each",
    description:
      "Skimming, speed reading, and deep reading are not rivals — they are tools. Learn intent, technique, and when each mode wins.",
    url: "https://readfast.app/blog/skimming-vs-speed-reading-vs-deep-reading",
    siteName: "ReadFast",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Skimming vs Speed Reading vs Deep Reading — ReadFast Blog",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: post.date,
  },
  twitter: {
    card: "summary_large_image",
    title: "Skimming vs Speed Reading vs Deep Reading: When to Use Each",
    description:
      "Stop using one reading mode for every page. A clear comparison of skimming, speed reading, and deep reading.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    question: "Is skimming the same as speed reading?",
    answer:
      "No. Skimming deliberately skips large parts of the text to find structure or relevance. Speed reading aims to cover most or all of the words faster through better eye movement and pacing. You can skim slowly and still miss detail; you can speed-read carefully and retain far more than a skim.",
  },
  {
    question: "When should I deep read instead of going fast?",
    answer:
      "Use deep reading when stakes are high: exams, contracts, research you will cite, nuanced arguments, or anything you must teach or remember weeks later. Speed is a poor trade if a misunderstanding costs real time or money later.",
  },
  {
    question: "Can I combine modes in one sitting?",
    answer:
      "Yes — and you should. A common pattern is skim for map, speed-read the relevant sections, then deep-read the paragraphs that carry the thesis, data, or instructions. Mode-switching is a skill, not indecision.",
  },
  {
    question: "Does speed reading always hurt comprehension?",
    answer:
      "Not when pace stays within your trained range and the material is a fair match for that pace. Comprehension collapses when people push past their skill ceiling or use speed techniques on text that needs careful parsing. Match mode to task.",
  },
  {
    question: "What mode should students use for assigned readings?",
    answer:
      "Start with a short skim of headings and first sentences, speed-read for overview if the chapter is long, then deep-read the sections tied to learning objectives or likely exam themes. Blindly deep-reading every page is often worse than a layered approach.",
  },
];

const toc = [
  { id: "three-modes", label: "Three modes, three jobs" },
  { id: "comparison", label: "Side-by-side comparison" },
  { id: "decision", label: "A simple decision framework" },
  { id: "mistakes", label: "Common mode mistakes" },
  { id: "practice", label: "How to practice switching" },
  { id: "faq", label: "FAQ" },
];

export default function SkimmingVsSpeedReadingVsDeepReadingPage() {
  return (
    <>
      <BlogJsonLd
        data={[
          buildBlogPostingJsonLd(post),
          buildFaqPageJsonLd(faqs),
          buildBreadcrumbJsonLd(post),
        ]}
      />
      <ArticleShell
        post={post}
        toc={toc}
        cta={
          <ArticleCta
            title="Train the mode you underuse"
            primaryHref="/reading-speed-test"
            primaryLabel="Test Your Reading Speed"
            secondaryHref="/"
            secondaryLabel="Download ReadFast Free"
          >
            <p>
              Most people only have one gear. Measure your baseline, then use
              ReadFast to practice efficient pace on material that deserves
              speed — and save deep attention for the pages that need it.
            </p>
          </ArticleCta>
        }
      >
        <p>
          People argue about reading as if there were one correct speed. There
          isn&apos;t. Skimming, speed reading, and deep reading solve different
          problems. Using the wrong mode for the page in front of you is how
          you either waste an afternoon — or finish fast and learn nothing.
        </p>
        <p>
          This article keeps the distinction honest: what each mode is for,
          how it feels in practice, and a decision framework you can run in
          under thirty seconds before you start a document.
        </p>

        <h2 id="three-modes">Three modes, three jobs</h2>
        <p>
          <strong>Skimming</strong> is triage. You are hunting for relevance,
          structure, and &ldquo;is this worth my time?&rdquo; You skip
          deliberately. Completeness is not the goal.
        </p>
        <p>
          <strong>Speed reading</strong> is efficient coverage. You still aim
          to take in most of the words, but with fewer regressions, wider
          fixations, and a steadier forward pace. It is not magic; it is
          trained efficiency. For technique depth, start at the{" "}
          <Link href="/blog/speed-reading">speed reading hub</Link>.
        </p>
        <p>
          <strong>Deep reading</strong> is understanding under load. You slow
          down, reread when needed, annotate, and let working memory finish
          the job. This is the mode that builds lasting comprehension — the
          case made at length in{" "}
          <Link href="/blog/speed-reading-comprehension">
            speed reading and comprehension
          </Link>
          .
        </p>

        <InlineCallout
          title="Know your default gear before you switch"
          utmContent="blog_skimming-vs-speed-reading-vs-deep-reading"
        >
          <p>
            Most readers discover they only have one comfortable pace. A quick
            WPM + comprehension test shows whether your &ldquo;normal&rdquo; is
            already close to efficient speed reading — or still deep-reading
            everything by default.
          </p>
        </InlineCallout>

        <h2 id="comparison">Side-by-side comparison</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Skimming</th>
              <th>Speed reading</th>
              <th>Deep reading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Intent</strong>
              </td>
              <td>Filter and orient</td>
              <td>Cover more text efficiently</td>
              <td>Understand and retain</td>
            </tr>
            <tr>
              <td>
                <strong>Technique</strong>
              </td>
              <td>
                Headings, first/last sentences, keywords; skip freely
              </td>
              <td>
                Chunking, pacer, reduced regression; most words still read
              </td>
              <td>
                Slow pace, notes, rereads, questions to the text
              </td>
            </tr>
            <tr>
              <td>
                <strong>When to use</strong>
              </td>
              <td>
                Inbox, news, long reports, deciding what matters
              </td>
              <td>
                Familiar topics, articles, lighter nonfiction, review passes
              </td>
              <td>
                Exams, contracts, research, dense arguments, first encounters
              </td>
            </tr>
            <tr>
              <td>
                <strong>Trade-off</strong>
              </td>
              <td>
                Miss nuance and exceptions; easy to false-negative a good piece
              </td>
              <td>
                Can thin out on hard prose if you push past skill
              </td>
              <td>
                Slow; overused on low-stakes text it becomes avoidance
              </td>
            </tr>
            <tr>
              <td>
                <strong>Success looks like</strong>
              </td>
              <td>
                You know what to read next — or what to ignore
              </td>
              <td>
                High coverage with quiz-level recall still intact
              </td>
              <td>
                You can explain, apply, or argue the ideas cleanly
              </td>
            </tr>
          </tbody>
        </table>

        <h2 id="decision">A simple decision framework</h2>
        <p>
          Before you open the PDF or chapter, answer three questions. The
          answers pick the mode.
        </p>
        <ol>
          <li>
            <strong>What is the cost of being wrong?</strong> High cost
            (legal, medical, graded, client-facing) &rarr; lean deep. Low cost
            (curiosity, news, status updates) &rarr; skim first.
          </li>
          <li>
            <strong>How familiar is the material?</strong> Familiar vocabulary
            and structure &rarr; speed reading is fair game. Brand-new field or
            dense jargon &rarr; deep or hybrid.
          </li>
          <li>
            <strong>What do you need to walk away with?</strong> A yes/no on
            relevance &rarr; skim. A working summary &rarr; speed. The ability
            to teach or decide &rarr; deep.
          </li>
        </ol>
        <p>
          A practical hybrid for long assigned reading: five-minute skim for
          map &rarr; speed pass on mid-priority sections &rarr; deep pass only
          on objectives, definitions, and contested claims. That sequence often
          beats &ldquo;I will carefully read all 40 pages&rdquo; plans that
          collapse after page eight.
        </p>
        <p>
          At work the same framework applies to decks and reports: skim the
          executive summary and headings, speed-read the narrative sections you
          own, deep-read numbers, commitments, and anything you might have to
          defend in a meeting. Matching mode to stake is how professionals stay
          fast without getting blindsided.
        </p>
        <aside className="blog-callout">
          <h3>Thirty-second mode check</h3>
          <p>
            If you cannot state why you are reading this document in one
            sentence, you are not ready to choose a mode — you are ready to
            skim until the purpose appears.
          </p>
        </aside>

        <h2 id="mistakes">Common mode mistakes</h2>
        <p>
          <strong>Skimming everything.</strong> Feels busy; builds a brittle
          knowledge base. You recognize titles and buzzwords but cannot
          reconstruct arguments.
        </p>
        <p>
          <strong>Speed-reading sacred text.</strong> Pushing pace on
          unfamiliar philosophy, law, or math is how comprehension myths get
          born. The technique is not the villain; the mismatch is.
        </p>
        <p>
          <strong>Deep-reading the internet.</strong> Treating every article
          like a seminar paper is a great way to never finish your actual work.
          Depth is a budget. Spend it where return is highest.
        </p>
        <p>
          For raising your efficient gear without turning every page into a
          skim, follow{" "}
          <Link href="/blog/how-to-read-faster-without-losing-comprehension">
            how to read faster without losing comprehension
          </Link>
          .
        </p>

        <h2 id="practice">How to practice switching</h2>
        <p>
          Mode flexibility is trainable. Once a week, take the same short
          article and run three passes: skim (2 minutes), speed read (timed),
          deep read (notes). Compare what each pass gave you. The exercise
          makes the trade-offs visceral instead of theoretical.
        </p>
        <p>
          On workdays, label the top of your reading list: S / Sp / D. Force a
          choice before you start. Habit beats intention. Over a month you will
          notice how often you were deep-reading low-stakes email — or skimming
          the one memo that needed care.
        </p>
        <p>
          Over time, your default should become intentional choice rather than
          whatever mood you woke up with. Readers who only ever skim feel
          informed and stay shallow. Readers who only ever deep-read drown in
          volume. Readers who only chase speed start missing the point of the
          page. Range is the skill.
        </p>
        <p>
          Skimming finds the battlefield. Speed reading crosses it efficiently.
          Deep reading wins the fights that matter. Use all three on purpose.
        </p>

        <h2 id="faq">FAQ</h2>
        {faqs.map((faq) => (
          <Fragment key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </Fragment>
        ))}
      </ArticleShell>
    </>
  );
}
