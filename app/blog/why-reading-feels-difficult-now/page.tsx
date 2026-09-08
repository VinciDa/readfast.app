import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import ArticleShell, { ArticleCta, InlineCallout } from "@/components/blog/ArticleShell";
import BlogJsonLd from "@/components/blog/BlogJsonLd";
import { getPost } from "@/lib/blog-posts";
import {
  buildBlogPostingJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqPageJsonLd,
} from "@/lib/blog-jsonld";

const post = getPost("why-reading-feels-difficult-now");

export const metadata: Metadata = {
  title: "Why Reading Feels So Difficult Now",
  description: post.description,
  metadataBase: new URL("https://readfast.app"),
  alternates: {
    canonical: "/blog/why-reading-feels-difficult-now/",
  },
  keywords: post.keywords,
  openGraph: {
    title: "Why Reading Feels So Difficult Now",
    description:
      "Books didn’t suddenly get boring — your brain learned scroll-reward-next. Why stillness feels hard, and how to get lost in a page again.",
    url: "https://readfast.app/blog/why-reading-feels-difficult-now",
    siteName: "ReadFast",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Why Reading Feels So Difficult Now — ReadFast Blog",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: post.date,
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Reading Feels So Difficult Now",
    description:
      "We’ve forgotten how to be bored — and reading requires stillness. Here’s how to rebuild the muscle.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    question: "Why does reading feel so hard now?",
    answer:
      "Most digital media trains a scroll–reward–next rhythm. Books ask for stillness before payoff. The gap between those speeds makes pages feel “boring” even when the book is fine — your attention has been working out on snacks, then facing a three-course meal.",
  },
  {
    question: "Is it normal to want to check my phone while reading?",
    answer:
      "Yes, especially after heavy phone or short-form use. The urge often peaks in the first ten to fifteen minutes. Put the phone somewhere inconvenient, ride out the boredom, and many readers find the urge weakens as they settle into the book.",
  },
  {
    question: "Does that mean I’m not a real reader?",
    answer:
      "No. Difficulty usually means a rhythm mismatch, not a permanent identity. Regular short sessions rebuild stamina. If focus issues are severe and lifelong across contexts, consider ADHD-related strategies — but phone-trained distraction alone is extremely common.",
  },
  {
    question: "Should I force myself to read faster to stay engaged?",
    answer:
      "Not as a contest. Sometimes paced reading helps forward momentum when the mind wants to exit; sometimes slow reading is the luxury. Finishing isn’t the same as reading. Prioritize ideas that stay with you over pages per hour.",
  },
  {
    question: "How long before reading feels easier again?",
    answer:
      "Often within a single session after the first ten or fifteen minutes, and more reliably across a few weeks of protected practice. Consistency beats hero marathons.",
  },
];

const toc = [
  { id: "forgotten-boredom", label: "We've forgotten how to be bored" },
  { id: "different-rhythm", label: "Your brain learned a different rhythm" },
  { id: "not-the-book", label: "Books didn't become boring" },
  { id: "first-pages", label: "The first few pages are hardest" },
  { id: "slow-luxury", label: "The hidden luxury of reading slowly" },
  { id: "not-a-contest", label: "Don't make it a productivity contest" },
  { id: "slow-is-the-feature", label: "Maybe difficulty is the feature" },
  { id: "faq", label: "FAQ" },
];

export default function WhyReadingFeelsDifficultNowPage() {
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
            title="Practice staying — then let the noise fade"
            primaryHref="/reading-speed-test"
            primaryLabel="Test Your Reading Speed"
            secondaryHref="/"
            secondaryLabel="Download ReadFast Free"
          >
            <p>
              ReadFast&apos;s paced mode gives restless attention a forward
              track so the first ten minutes don&apos;t win. Download free,
              baseline comprehension, and rebuild the stillness books require.
            </p>
          </ArticleCta>
        }
      >
        <h2 id="forgotten-boredom">We&apos;ve forgotten how to be bored</h2>
        <p>You sit down to read a book.</p>
        <p>
          You make yourself comfortable. You open the first page. You read three
          paragraphs. Then, for absolutely no reason, you wonder whether you
          have any new messages.
        </p>
        <p>
          You check your phone. Nothing. You put it down. Thirty seconds later,
          you pick it up again. Still nothing. You open the book. You read
          another page. Your mind wanders. Suddenly you&apos;re thinking about
          something that happened three years ago.
        </p>
        <p>
          You have just experienced one of the defining problems of modern life:{" "}
          <strong>we have forgotten how to be bored.</strong>
        </p>
        <p>
          And reading requires boredom. Not all of it, of course — a good book
          can be thrilling. But before the thrill comes something much less
          exciting: stillness.
        </p>

        <h2 id="different-rhythm">Your brain has learned a different rhythm</h2>
        <p>
          Most of the things we interact with today are designed to give us
          something quickly. Scroll. Reward. Next. Scroll. Reward. Next.
        </p>
        <p>
          A short video ends and another begins before you&apos;ve had time to
          decide whether you wanted to watch it. A notification appears. A
          message arrives. A headline demands your attention. Even when nothing
          interesting is happening, something is always happening.
        </p>
        <p>
          Books operate on a completely different economy. They don&apos;t care
          that you&apos;re impatient. The first chapter might spend twenty pages
          introducing a character. The argument you&apos;ve been waiting for
          might arrive halfway through the book. The interesting idea might
          require three boring ideas before it makes sense.
        </p>
        <p>
          There is no infinite scroll. There is no algorithm desperately trying
          to keep you entertained. The book simply sits there. Waiting. And your
          brain has to adjust to its speed.
        </p>
        <p>
          That clash shows up everywhere online attention goes — from{" "}
          <Link href="/blog/tiktok-changing-how-we-read">
            short-form video
          </Link>{" "}
          to{" "}
          <Link href="/blog/smartphones-killing-attention-span">
            phones nearby while you try to focus
          </Link>
          .
        </p>

        <h2 id="not-the-book">
          Reading isn&apos;t difficult because books became boring
        </h2>
        <p>
          Sometimes we blame the book. <em>&ldquo;I just can&apos;t get into
          it.&rdquo;</em> Maybe. But sometimes the problem isn&apos;t the book.
          It&apos;s the distance between the speed of the book and the speed
          your brain has become accustomed to.
        </p>
        <p>
          Imagine eating only snacks for months and then sitting down to a
          three-course meal. The meal hasn&apos;t suddenly become bad. Your
          appetite has changed.
        </p>
        <p>
          Reading can feel the same way. We&apos;ve trained ourselves to consume
          information in tiny, highly stimulating pieces. Then we pick up a
          400-page book and expect our attention to behave. It doesn&apos;t.
          Attention is a muscle, and we&apos;ve been giving it a very strange
          workout. Related:{" "}
          <Link href="/blog/why-people-read-shorter-content">
            why people are reading shorter things
          </Link>
          .
        </p>

        <InlineCallout
          title="Measure the gap — then train the muscle"
          utmContent="blog_why_reading_feels_difficult_now"
        >
          <p>
            A free{" "}
            <Link href="/reading-speed-test">reading speed test</Link> with
            comprehension shows whether you&apos;re still building meaning or
            just fighting the urge to exit. Use it as a baseline before you
            rebuild longer sessions.
          </p>
        </InlineCallout>

        <h2 id="first-pages">The first few pages are often the hardest</h2>
        <p>
          This is why something interesting happens when you start reading
          regularly. At first, reading feels like work. Then, after ten or
          fifteen minutes, something shifts.
        </p>
        <p>
          Your thoughts slow down. The urge to check your phone weakens. You
          stop noticing the room. The sentences begin to disappear. You&apos;re
          no longer looking at words. You&apos;re thinking through them.
        </p>
        <p>
          This is the state people often describe as <em>getting lost in a
          book.</em> But perhaps you&apos;re not getting lost. Perhaps
          you&apos;re finally becoming <strong>less scattered</strong>.
        </p>
        <p>
          If that settle-in never comes, practical focus tactics help — including{" "}
          <Link href="/blog/how-to-focus-while-reading-adhd">
            techniques for ADHD and restless attention
          </Link>{" "}
          and a{" "}
          <Link href="/blog/visual-pacer-reading-speed">visual pacer</Link> so
          your eyes have somewhere to go besides your pocket.
        </p>

        <h2 id="slow-luxury">There is a hidden luxury in reading slowly</h2>
        <p>
          Modern life rewards speed. Reply faster. Learn faster. Work faster.
          Consume faster. Finish more.
        </p>
        <p>
          Reading offers a rare opportunity to do the opposite. You can spend
          ten minutes on one page. You can reread a paragraph because it was
          beautiful. You can stop halfway through a chapter because an idea
          bothered you. You can stare out of a window and think about something
          the author wrote.
        </p>
        <p>
          Nothing happens. And that&apos;s the point. For a few minutes, you
          aren&apos;t optimizing anything. You&apos;re simply thinking — the
          same expanded perception celebrated in{" "}
          <Link href="/blog/reading-is-time-travel">
            reading as time travel
          </Link>
          .
        </p>

        <h2 id="not-a-contest">
          Don&apos;t turn reading into another productivity contest
        </h2>
        <p>
          The internet has managed to turn even reading into a competition. Five
          books a month. Fifty books a year. A bookshelf organized by color. A
          tracker showing your annual progress.
        </p>
        <p>
          There&apos;s nothing wrong with any of this if it makes reading
          enjoyable. But finishing a book isn&apos;t the same as reading it. You
          can finish a book and remember almost nothing. You can spend an
          afternoon reading ten pages and carry one sentence around for twenty
          years. The second experience is probably more valuable.
        </p>
        <p>
          A book isn&apos;t a treadmill. You don&apos;t get extra points for
          reaching the end. For retention over vanity volume, see{" "}
          <Link href="/blog/how-to-remember-what-you-read">
            how to remember what you read
          </Link>
          .
        </p>

        <blockquote>
          The book doesn&apos;t ask &ldquo;What would you like next?&rdquo; It
          asks &ldquo;Can you stay here for a while?&rdquo;
        </blockquote>

        <h2 id="slow-is-the-feature">
          Perhaps we need books precisely because they are slow
        </h2>
        <p>
          There is an uncomfortable possibility here. Maybe the difficulty of
          reading is not a problem we need to eliminate. Maybe it&apos;s the
          feature.
        </p>
        <p>
          A book forces you to remain somewhere. With an idea. With a character.
          With an argument. With yourself. It doesn&apos;t constantly ask{" "}
          <strong>&ldquo;What would you like next?&rdquo;</strong> It asks{" "}
          <strong>&ldquo;Can you stay here for a while?&rdquo;</strong>
        </p>
        <p>
          That is becoming an unusually difficult question — and perhaps an
          unusually valuable one. Because if you can learn to sit with a book
          for an hour without reaching for your phone, you aren&apos;t merely
          becoming a better reader. You&apos;re practicing the ability to
          control where your mind goes.
        </p>
        <p>
          In a world fighting for your attention every second, that may be one
          of the most useful skills you can have.
        </p>
        <p>
          So the next time reading feels difficult, don&apos;t immediately
          conclude that you aren&apos;t a reader. Put the phone somewhere
          inconvenient. Open the book. Read slowly. Let the first ten minutes be
          boring. Your brain may complain. Let it.
        </p>
        <p>
          Eventually, the noise starts to fade. And somewhere underneath it,
          there is something wonderfully old-fashioned waiting for you:{" "}
          <strong>a thought that belongs entirely to you.</strong>
        </p>
        <p>
          When you want help staying on the line — not racing for a leaderboard
          — ReadFast&apos;s paced reading keeps forward momentum through that
          restless opening stretch. Download free, protect a short daily block,
          and practice the question books still ask best: can you stay?
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
