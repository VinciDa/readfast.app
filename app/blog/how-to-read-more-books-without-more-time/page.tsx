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
  buildHowToJsonLd,
} from "@/lib/blog-jsonld";

const post = getPost("how-to-read-more-books-without-more-time");

export const metadata: Metadata = {
  title: "How to Read More Books Without More Time",
  description:
    "You don’t need an empty calendar — you need better habits, selective quitting, and a faster reading baseline. Practical systems for clearing your TBR without guilt.",
  metadataBase: new URL("https://readfast.app"),
  alternates: {
    canonical: "/blog/how-to-read-more-books-without-more-time/",
  },
  keywords: post.keywords,
  openGraph: {
    title: "How to Read More Books Without More Time",
    description:
      "Habit stacking, DNF permission, a smarter TBR, and a higher WPM baseline — so more books fit the life you already have.",
    url: "https://readfast.app/blog/how-to-read-more-books-without-more-time",
    siteName: "ReadFast",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "How to Read More Books Without More Time — ReadFast Blog",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: post.date,
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Read More Books Without More Time",
    description:
      "You don’t need more hours — you need habits, selective quitting, and a faster baseline. Clear your TBR without guilt.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    question: "How many books can you realistically finish in a year?",
    answer:
      "It depends on length, difficulty, and daily minutes — not willpower slogans. A consistent 15–20 minutes a day on average-length books often lands in the 20–40 books per year range for many adults, especially if some titles are audiobooks or lighter reads.",
  },
  {
    question: "Is it okay to quit books you don’t like?",
    answer:
      "Yes. Life is finite and your attention is not a loyalty program. A simple rule like the 30-page rule (or 10% of the book) gives permission to DNF without endless second-guessing — unless the book is required for work or study.",
  },
  {
    question: "Do audiobooks count as reading?",
    answer:
      "For learning and story completion, yes — they count toward a reading life. They use overlapping but not identical skills versus silent reading. Use them as a complement for commute and chores, not as a total replacement if you also want to train visual reading speed.",
  },
  {
    question: "What is the fastest way to raise how many books I finish?",
    answer:
      "Usually three levers together: protect a small daily slot, quit books that are not earning their place, and raise baseline WPM with comprehension intact. Any one lever helps; all three compound.",
  },
  {
    question: "Should I track pages or minutes?",
    answer:
      "Minutes are kinder when schedules are messy; pages are motivating when you like visible progress. Many readers do both: a 15-minute floor plus a weekly page or chapter target so the habit survives bad weeks.",
  },
];

const toc = [
  { id: "time-myth", label: "You don't need more hours" },
  { id: "fifteen-minutes", label: "The 15-minute habit stack" },
  { id: "dnf", label: "Permission to DNF" },
  { id: "tbr", label: "Active vs someday TBR" },
  { id: "scroll", label: "Replace scroll time" },
  { id: "audio", label: "Audiobooks and TTS" },
  { id: "baseline", label: "Raise your WPM baseline" },
  { id: "faq", label: "FAQ" },
];

const howToSteps = [
  {
    name: "Pick a daily anchor",
    text: "Attach reading to an existing habit — after coffee, on the commute, or before sleep — so the cue is automatic.",
  },
  {
    name: "Protect fifteen minutes",
    text: "Set a minimum session of 15 minutes. Showing up matters more than heroic weekend catch-up sessions.",
  },
  {
    name: "Keep one active book",
    text: "Limit in-progress titles to one primary book (plus optional audio) so progress stays visible.",
  },
  {
    name: "Apply a quit rule",
    text: "If a book has not earned your attention by page 30 or 10% of its length, shelve or abandon it without guilt.",
  },
  {
    name: "Trade one scroll block",
    text: "Replace one daily phone-scroll window with reading — same pocket of time, higher return.",
  },
  {
    name: "Train baseline speed",
    text: "Practice efficient reading techniques weekly so the same fifteen minutes covers more pages over time.",
  },
];

export default function HowToReadMoreBooksWithoutMoreTimePage() {
  return (
    <>
      <BlogJsonLd
        data={[
          buildBlogPostingJsonLd(post),
          buildFaqPageJsonLd(faqs),
          buildBreadcrumbJsonLd(post),
          buildHowToJsonLd(
            "How to build a habit for reading more books",
            "A practical system to finish more books with the time you already have: habit stacking, selective quitting, and a faster reading baseline.",
            howToSteps,
          ),
        ]}
      />
      <ArticleShell
        post={post}
        toc={toc}
        cta={
          <ArticleCta
            title="Same calendar, more pages"
            primaryHref="/reading-speed-test"
            primaryLabel="Test Your Reading Speed"
            secondaryHref="/"
            secondaryLabel="Download ReadFast Free"
          >
            <p>
              Habits clear the calendar friction. Training raises what those
              minutes can hold. ReadFast is there when you want paced practice
              on the books and PDFs you already planned to finish.
            </p>
          </ArticleCta>
        }
      >
        <p>
          The reading advice industrial complex loves empty calendars: wake at
          five, read for two hours, become a new person. Most of us do not have
          that life. We have jobs, kids, phones, and a to-be-read pile that has
          started to feel like a moral failure.
        </p>
        <p>
          You do not need more time. You need a smaller habit, permission to
          quit, a saner TBR, and — quietly — a higher words-per-minute baseline
          so the minutes you already have cover more ground.
        </p>

        <h2 id="time-myth">You don&apos;t need more hours</h2>
        <p>
          Book count is mostly a function of consistent minutes &times; pages
          per minute &times; finish rate. People obsess over the first
          variable and ignore the other two. Buying another hardcover does not
          raise any of them. Protecting a daily slot, abandoning dead books,
          and reading a bit more efficiently does.
        </p>
        <p>
          Average adult silent reading often sits near 200–300 wpm. That is
          enough for a serious reading life if the minutes show up. Context for
          those norms lives in{" "}
          <Link href="/blog/average-reading-speed-by-age">
            average reading speed by age
          </Link>
          .
        </p>

        <h2 id="fifteen-minutes">The 15-minute habit stack</h2>
        <p>
          Fifteen minutes is small enough to survive a bad day and large enough
          to finish chapters over a week. Stack it onto something you already
          do: coffee, lunch, the train, or the last plug-in of the phone
          charger at night.
        </p>
        <p>
          Rules that help: one cue, one place when possible, and a minimum you
          refuse to negotiate. Bonus minutes are allowed; zero minutes is the
          failure mode. Weekend binge sessions are optional dessert, not the
          meal. If fifteen minutes still feels heavy, start with ten for two
          weeks, then step up — the goal is a ritual that survives real life,
          not a plan that looks impressive on paper.
        </p>
        <aside className="blog-callout">
          <h3>Identity over intensity</h3>
          <p>
            &ldquo;I read every day&rdquo; beats &ldquo;I will finish twelve
            books this month.&rdquo; Streaks built on tiny sessions outlast
            ambitious plans that shatter on Tuesday.
          </p>
        </aside>

        <InlineCallout
          title="Make those fifteen minutes cover more"
          utmContent="blog_how-to-read-more-books-without-more-time"
        >
          <p>
            Habit gets you to the page. Training decides how far the page goes.
            When you want a soft nudge toward faster, still-honest reading,
            ReadFast is built for short paced sessions — not for guilt.
          </p>
        </InlineCallout>

        <h2 id="dnf">Permission to DNF</h2>
        <p>
          Did Not Finish is not a character flaw. It is portfolio management.
          The 30-page rule (or ~10% of a long book) is a clean default: give the
          author a fair opening act, then decide. If nothing has hooked your
          attention — voice, stakes, usefulness — put it down.
        </p>
        <p>
          Exceptions are honest: assigned reading, professional must-reads, or
          a book you are reading for a friend&apos;s book club. Everything else
          is optional culture, not a vow. Quitting early raises your finish rate
          on books that deserve the slot.
        </p>

        <h2 id="tbr">Active vs someday TBR</h2>
        <p>
          An unbounded TBR is a wishlist wearing a to-do list&apos;s clothes.
          Split it:
        </p>
        <ul>
          <li>
            <strong>Active (3–7 titles):</strong> Next up. Visible. Finite.
          </li>
          <li>
            <strong>Someday:</strong> Interesting, not scheduled. No guilt
            clock.
          </li>
        </ul>
        <p>
          Keep one primary book in progress. A second is fine if it is a
          different format (print + audio) or a radically different genre so
          mood has somewhere to go. Five simultaneous novels usually means zero
          finished novels.
        </p>

        <h2 id="scroll">Replace scroll time</h2>
        <p>
          You already have reading time. It is hiding inside the reflex open of
          a social feed. You do not need to delete the internet. You need one
          traded block: the first ten minutes in bed, the queue at pickup, the
          coffee cooldown.
        </p>
        <p>
          Make the swap physical when you can — book or reader app already open
          to the page — so friction favors the book. Willpower speeches at
          midnight lose to a locked phone and a chapter waiting.
        </p>

        <h2 id="audio">Audiobooks and TTS as complements</h2>
        <p>
          Audio is how busy readers reclaim chores, drives, and walks. Text-to-
          speech can do the same for articles and PDFs. Neither replaces silent
          reading for every goal, but both multiply minutes that would otherwise
          be zero.
        </p>
        <p>
          Use audio for story, overview, and authors you love by ear. Keep
          silent reading for dense argument, diagrams, and anything you annotate.
          Counting only eye-on-page books is a purity test, not a strategy.
        </p>

        <h2 id="baseline">Raise your WPM baseline</h2>
        <p>
          Habits decide whether you show up. Speed decides how much those
          minutes buy. A reader who moves from 220 to 320 wpm with comprehension
          intact gets roughly 45% more pages from the same fifteen-minute block
          — without finding a new hour in the day.
        </p>
        <p>
          That gain comes from boring, proven work: fewer regressions, phrase-
          level chunking, a steadier pace on familiar prose. The practical path
          is in{" "}
          <Link href="/blog/how-to-read-faster-without-losing-comprehension">
            how to read faster without losing comprehension
          </Link>
          . Measure occasionally so you are not guessing.
        </p>
        <p>
          Soft truth: an app will not want the book for you. It can make short
          practice sessions easier and keep pace honest while you train. Pair
          that with the habit stack above and the TBR stops feeling like a
          museum of unfinished intentions.
        </p>
        <p>
          Track lightly for a month: dates you showed up, books finished, books
          abandoned, and one retest of reading speed. You are looking for a
          trend, not a perfect dashboard. If minutes are steady but pages are
          flat, invest in technique. If pages are fine but finishes are rare,
          fix the TBR and DNF rules. Diagnose the bottleneck; do not add another
          aspirational morning routine.
        </p>
        <p>
          More books without more time is not a personality transplant. It is a
          system: show up for fifteen minutes, quit what is not working, keep
          the active list small, steal back a scroll slot, use audio where it
          fits, and slowly raise the speed of the reading you already do.
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
