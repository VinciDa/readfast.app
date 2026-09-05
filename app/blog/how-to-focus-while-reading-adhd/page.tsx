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

const post = getPost("how-to-focus-while-reading-adhd");

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  metadataBase: new URL("https://readfast.app"),
  alternates: {
    canonical: "/blog/how-to-focus-while-reading-adhd/",
  },
  keywords: post.keywords,
  openGraph: {
    title: post.title,
    description: post.description,
    url: "https://readfast.app/blog/how-to-focus-while-reading-adhd",
    siteName: "ReadFast",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "How to Focus While Reading with ADHD — ReadFast Blog",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: post.date,
  },
  twitter: {
    card: "summary_large_image",
    title: post.title,
    description: post.description,
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    question: "Why do I keep re-reading the same sentence with ADHD?",
    answer:
      "ADHD often weakens sustained attention and working-memory hold on what you just read. Your eyes keep moving, but the meaning does not stick — so you loop back to check. External pacing, shorter sessions, and fewer distractions reduce how often that loop kicks in.",
  },
  {
    question: "How long should an ADHD reading session be?",
    answer:
      "Start with 10–15 minutes of focused reading, then take a short break. Many ADHD readers get more done in three short blocks than in one long stretch that collapses halfway through. Extend the blocks only after the shorter ones feel reliable.",
  },
  {
    question: "Does a finger or digital pacer really help ADHD focus?",
    answer:
      "Yes for many people. An external pace gives your attention something concrete to follow, which cuts mind-wandering and reflexive re-reading. It will not replace medication or therapy if you need those — it is a practical reading tool, not a cure.",
  },
  {
    question: "Should I use audiobooks instead of reading?",
    answer:
      "Use whatever format lets you finish. Audiobooks, print, PDF, or dual-channel (audio plus text) are all valid. Switching formats is not cheating; it is matching the medium to how your brain holds attention that day.",
  },
  {
    question: "What is Focus mode in ReadFast?",
    answer:
      "Focus mode strips the reading screen down to the text and a controlled pace, so notifications and chrome compete less for attention. It pairs well with short sessions and a visual pacer when you need to finish a chapter without drifting.",
  },
];

const toc = [
  { id: "why-adhd-loses-place", label: "Why ADHD brains lose their place" },
  { id: "short-sessions", label: "Work in 10–15 minute sessions" },
  { id: "external-pacing", label: "Use an external pacer" },
  { id: "dual-channel", label: "Try dual-channel when it helps" },
  { id: "environment", label: "Build a low-friction environment" },
  { id: "movement", label: "Allow movement and fidgeting" },
  { id: "switch-formats", label: "Give yourself permission to switch formats" },
  { id: "putting-it-together", label: "Putting it together" },
  { id: "faq", label: "FAQ" },
];

export default function HowToFocusWhileReadingAdhdPage() {
  return (
    <>
      <BlogJsonLd
        data={[
          buildBlogPostingJsonLd(post),
          buildFaqPageJsonLd(faqs),
          buildBreadcrumbJsonLd(post),
          buildHowToJsonLd(
            "How to focus while reading with ADHD",
            "Practical steps to reduce re-reading and finish more pages when attention drifts.",
            [
              {
                name: "Set a 10–15 minute timer",
                text: "Read one short block with a clear end time instead of an open-ended session.",
              },
              {
                name: "Add an external pacer",
                text: "Use a finger, pen, or digital highlight so your eyes have a forward track to follow.",
              },
              {
                name: "Reduce competing inputs",
                text: "Put the phone away, enable focus mode, and keep only the document in front of you.",
              },
              {
                name: "Stop before collapse",
                text: "End on a clean break, note your place, and return for the next short block.",
              },
            ],
          ),
        ]}
      />
      <ArticleShell
        post={post}
        toc={toc}
        cta={
          <ArticleCta
            title="Need a quieter track for your eyes?"
            primaryHref="/"
            primaryLabel="Try ReadFast Focus Mode"
            secondaryHref="/"
            secondaryLabel="Download ReadFast Free"
          >
            <p>
              If an external pace helps you stay on the line, ReadFast&apos;s
              Focus mode keeps the screen spare and the highlight moving at a
              speed you choose — useful for short ADHD-friendly sessions, not a
              promise that focus will magically become easy.
            </p>
          </ArticleCta>
        }
      >
        <p>
          You start a paragraph. Halfway through, your mind is elsewhere. You
          look back at the same sentence for the third time and still cannot say
          what it meant. That loop is exhausting — and for many ADHD readers, it
          is the default, not a rare bad day.
        </p>
        <p>
          This is not a character flaw and it is not fixed by &ldquo;trying
          harder.&rdquo; ADHD affects attention regulation and working memory:
          the systems that hold the last few words in mind while you take in the
          next ones. When those systems flicker, your eyes keep moving but
          meaning does not stick — so you re-read to catch up.
        </p>
        <p>
          The techniques below are practical, not miraculous. They reduce how
          often you lose the thread. They will not turn every textbook into
          light fiction. Use what helps; ignore what does not.
        </p>

        <h2 id="why-adhd-loses-place">Why ADHD brains lose their place</h2>
        <p>
          Two things collide when ADHD meets long text. First,{" "}
          <strong>sustained attention</strong> is expensive. A dense page offers
          little novelty, so the brain hunts for stimulation elsewhere —
          notifications, a related thought, the ceiling. Second,{" "}
          <strong>working memory</strong> may drop the previous clause before
          the sentence finishes. You arrive at the period without a coherent
          picture, so you go back.
        </p>
        <p>
          Re-reading then becomes a coping strategy. Sometimes it is necessary.
          Often it is reflexive: you jump back before you have even decided
          whether you understood. That habit costs time and drains motivation,
          which makes the next page feel harder still.
        </p>
        <p>
          So the goal is not &ldquo;never re-read.&rdquo; The goal is fewer
          involuntary loops — and sessions short enough that you finish them
          before attention collapses.
        </p>

        <h2 id="short-sessions">Work in 10–15 minute sessions</h2>
        <p>
          Open-ended reading (&ldquo;I&apos;ll just get through this
          chapter&rdquo;) is a trap when focus is fragile. Set a timer for{" "}
          <strong>10 or 15 minutes</strong>. Read until it rings. Stop. Stand
          up, drink water, change posture. Then start another block if you still
          have capacity.
        </p>
        <p>
          Short blocks do three useful things. They give your brain a visible
          finish line. They make it easier to protect the session from
          interruptions. And they prevent the demoralising pattern of staring at
          a page for an hour while absorbing twenty minutes of content.
        </p>
        <aside className="blog-callout">
          <h3>Stop while you still have fuel</h3>
          <p>
            Ending a block on purpose feels unnatural if you grew up equating
            &ldquo;good reading&rdquo; with endurance. For ADHD, stopping on a
            timer is often the difference between three productive blocks and one
            long, half-conscious slog.
          </p>
        </aside>
        <p>
          If 15 minutes still feels too long, start at 8. Consistency beats
          heroic sessions that never repeat.
        </p>

        <h2 id="external-pacing">Use an external pacer</h2>
        <p>
          When attention drifts, a blank page of static text gives your eyes
          nowhere to be. A <strong>visual pacer</strong> — your finger, a pen,
          or a digital highlight moving under the line — supplies a forward
          track. Your eyes follow the guide; backward glances become less
          automatic.
        </p>
        <p>
          Start simple: put your finger under the line and move it slightly
          faster than feels comfortable. Do not pause to narrate every word.
          If meaning drops out completely, slow a notch — then push forward
          again. The discomfort of a gentle pace is useful feedback; the panic
          of a sprint is not.
        </p>
        <p>
          Digital pacers do the same job with less hand fatigue. Apps that
          highlight or advance text at a steady rate are especially helpful for
          ADHD because the pace does not depend on how motivated your arm feels
          after page twelve. For more on why this works, see our guide to the{" "}
          <Link href="/blog/visual-pacer-reading-speed">
            visual pacer for reading speed
          </Link>
          .
        </p>

        <InlineCallout
          title="External pace, quieter screen"
          utmContent="blog_how-to-focus-while-reading-adhd"
          toolHref="/"
          toolLabel="Open ReadFast"
        >
          <p>
            If finger-tracking helps but long PDFs still scatter your attention,
            try a short session in ReadFast Focus mode: paced highlight, fewer
            distractions, stop when the timer says so.
          </p>
        </InlineCallout>

        <h2 id="dual-channel">Try dual-channel when it helps</h2>
        <p>
          Some ADHD readers focus better when <strong>eyes and ears</strong>{" "}
          work together: text on screen plus audio of the same passage, or
          quietly mouthing along while a pacer moves. Dual-channel input is
          optional — not required, and not better for everyone.
        </p>
        <p>
          Use it when silent reading keeps slipping into daydreams. Drop it when
          the audio becomes another thing to manage. The test is simple: do you
          finish more pages with clearer recall? If yes, keep it. If no, go back
          to visual-only pacing.
        </p>

        <h2 id="environment">Build a low-friction environment</h2>
        <p>
          Willpower is a terrible firewall. Change the setup instead:
        </p>
        <ul>
          <li>
            <strong>Phone out of reach</strong> — not face-down next to the
            book. Another room is better.
          </li>
          <li>
            <strong>Focus / Do Not Disturb mode</strong> on your laptop or
            tablet so banners cannot steal the next saccade.
          </li>
          <li>
            <strong>One document visible</strong> — close the seventeen other
            tabs that &ldquo;might be relevant.&rdquo;
          </li>
          <li>
            <strong>Same place when possible</strong> — a consistent reading
            spot reduces the decision cost of starting.
          </li>
        </ul>
        <p>
          Environment design will not create focus from nothing. It removes the
          easiest exits so your short session has a chance to complete.
        </p>

        <h2 id="movement">Allow movement and fidgeting</h2>
        <p>
          Sitting perfectly still is not a moral achievement. Many ADHD readers
          concentrate better with a fidget tool, a standing desk, a walking pad,
          or simply the freedom to shift posture. If your school or workplace
          treated stillness as proof of attention, unlearn that for private
          reading time.
        </p>
        <p>
          Pair movement with the timer and the pacer: body busy at a low level,
          eyes on a forward track. That combination is often more sustainable
          than forcing a statue pose until your mind rebels.
        </p>

        <h2 id="switch-formats">
          Give yourself permission to switch formats
        </h2>
        <p>
          Print, ebook, PDF, audiobook, or a paced reading app — finishing the
          material matters more than purity of method. Some days your brain will
          hold a novel and reject a journal article. Some nights audio is the
          only channel that works. That is strategy, not failure.
        </p>
        <p>
          If you are comparing tools built for ADHD-friendly reading — RSVP,
          focus modes, text-to-speech — we break down options separately in{" "}
          <Link href="/blog/best-reading-apps-for-adhd">
            best reading apps for ADHD
          </Link>
          . This article stays on techniques you can use with almost any format.
        </p>

        <h2 id="putting-it-together">Putting it together</h2>
        <p>
          A realistic ADHD reading block looks like this: phone away, focus mode
          on, timer set to 12 minutes, finger or digital pacer under the line,
          permission to stand or fidget, stop when the timer ends. Note where
          you stopped in one line. Take a break. Repeat if you have another
          block in you.
        </p>
        <p>
          None of this guarantees perfect comprehension on hard material. It
          does raise the odds that you will finish today&apos;s pages without
          re-reading the same sentence until you hate the book and yourself. That
          is a better baseline — and a better place to build from.
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
