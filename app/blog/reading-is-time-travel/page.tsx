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

const post = getPost("reading-is-time-travel");

export const metadata: Metadata = {
  title: "Reading Is the Closest Thing We Have to Time Travel",
  description: post.description,
  metadataBase: new URL("https://readfast.app"),
  alternates: {
    canonical: "/blog/reading-is-time-travel/",
  },
  keywords: post.keywords,
  openGraph: {
    title: "Reading Is the Closest Thing We Have to Time Travel",
    description:
      "Someone who lived 500 years ago can occupy your mind for an afternoon. Why deep reading expands one lifetime into many.",
    url: "https://readfast.app/blog/reading-is-time-travel",
    siteName: "ReadFast",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Reading Is the Closest Thing We Have to Time Travel — ReadFast Blog",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: post.date,
  },
  twitter: {
    card: "summary_large_image",
    title: "Reading Is the Closest Thing We Have to Time Travel",
    description:
      "Books let you borrow other lives. Protect sustained attention — and finish more of the pages that change how you see.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    question: "Why is reading compared to time travel?",
    answer:
      "Because a book lets a mind from another century, continent, or life occupy yours for a while. You reconstruct their ideas, worlds, and arguments from symbols on a page — then return to your own life carrying some of that perspective. Few other technologies let you borrow other lifetimes so patiently.",
  },
  {
    question: "Is modern digital reading the same as reading books?",
    answer:
      "Often no. Much digital reading is built for extraction — headlines, captions, search snippets — while books ask you to stay with an idea that does not reward you immediately. Both have uses, but only sustained reading trains deep attention.",
  },
  {
    question: "Do I need to read 50 books a year?",
    answer:
      "No. Racing through titles you barely remember is weaker than slowly finishing a few books that change how you think. Maximize ideas that stay with you, not a yearly count.",
  },
  {
    question: "How do I protect deep reading in a distracted world?",
    answer:
      "Schedule phone-free blocks, choose books worth staying with, and use paced reading when focus drifts. Measure comprehension, not only pages finished. Related guides cover skim culture, attention, and active reading habits.",
  },
  {
    question: "What makes reading different from watching a movie?",
    answer:
      "A movie shows you the character and scenery. A book makes your imagination build them. That collaborative work — reconstructing worlds from a handful of words — is a large part of why reading feels so powerful.",
  },
];

const toc = [
  { id: "ordinary-time-travel", label: "Ordinary time travel" },
  { id: "technology-of-books", label: "The peculiar technology of books" },
  { id: "modern-reading", label: "The problem with modern reading" },
  { id: "shape-of-thoughts", label: "Reading changes how you think" },
  { id: "better-questions", label: "Better questions, not just answers" },
  { id: "not-a-race", label: "You don't need 50 books a year" },
  { id: "conversation", label: "A conversation with someone who isn't there" },
  { id: "why-read", label: "So why read?" },
  { id: "faq", label: "FAQ" },
];

export default function ReadingIsTimeTravelPage() {
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
            title="Protect the kind of attention books require"
            primaryHref="/reading-speed-test"
            primaryLabel="Test Your Reading Speed"
            secondaryHref="/"
            secondaryLabel="Download ReadFast Free"
          >
            <p>
              Deep reading expands one lifetime into many — but only if you can
              stay with the page. ReadFast&apos;s paced mode helps you finish
              more of the books that change how you see. Download free.
            </p>
          </ArticleCta>
        }
      >
        <h2 id="ordinary-time-travel">Ordinary time travel</h2>
        <p>There is something strange about reading.</p>
        <p>
          You sit alone in a room, staring at marks on a page, and somehow a
          voice appears inside your head. Not your voice. Someone else&apos;s.
        </p>
        <p>
          A person who may have lived 500 years ago, spoken a different
          language, lived on another continent, and died long before you were
          born can suddenly occupy your mind for an afternoon. They can make
          you angry. They can change your opinion. They can make you see the
          world differently. And then, when you close the book, they disappear.
        </p>
        <p>
          Reading might be the most ordinary form of time travel we&apos;ve
          invented.
        </p>

        <h2 id="technology-of-books">The peculiar technology of books</h2>
        <p>
          Think about what a book actually does. A writer takes something that
          exists inside their mind and converts it into symbols. You look at
          those symbols and reconstruct the idea inside your own mind. That is
          an astonishing piece of technology.
        </p>
        <p>When you read a sentence like:</p>
        <blockquote>&ldquo;He stood at the edge of the cliff.&rdquo;</blockquote>
        <p>
          You don&apos;t merely decode the words. Your brain constructs a cliff.
          You imagine the height. The wind. The person standing there. Perhaps
          even the feeling in your stomach as you look down. The author provides
          a handful of words. Your brain builds an entire world.
        </p>
        <p>
          In that sense, reading isn&apos;t really consuming information.{" "}
          <strong>
            It&apos;s collaborating with the author to create an experience.
          </strong>
        </p>
        <p>
          And perhaps that&apos;s why reading feels so different from watching
          something. A movie shows you the character. A book makes you build the
          character. A video gives you the scenery. A book makes your
          imagination render it. Reading leaves some of the work to you — and
          that work is precisely what makes it powerful.
        </p>

        <h2 id="modern-reading">The problem with modern reading</h2>
        <p>
          But something has changed. We read more than ever, yet somehow we
          read less.
        </p>
        <p>
          Messages. Notifications. Tweets. News headlines. Instagram captions.
          Search results. Product descriptions. Ten tabs open simultaneously.
          Our eyes move constantly, but our minds rarely stay in one place for
          long.
        </p>
        <p>
          This is a very different kind of reading. Most digital reading is
          designed for <strong>extraction</strong>: What&apos;s the point?
          What&apos;s the answer? What happened? Should I click this? Can I
          move on?
        </p>
        <p>
          Books ask for something else. They ask you to stay. To tolerate a
          sentence that doesn&apos;t immediately reward you. To follow an
          argument for twenty pages before reaching its conclusion. To sit with
          an unfamiliar idea without immediately agreeing or disagreeing with
          it.
        </p>
        <p>
          In other words, reading books trains something increasingly rare:{" "}
          <strong>sustained attention.</strong> For why skim culture is winning
          the feed, see{" "}
          <Link href="/blog/why-people-read-shorter-content">
            why people are reading shorter things
          </Link>
          . For how phones fragment focus, see{" "}
          <Link href="/blog/smartphones-killing-attention-span">
            whether smartphones are killing our attention span
          </Link>
          .
        </p>

        <InlineCallout
          title="Can you still stay with a page?"
          utmContent="blog_reading_is_time_travel"
        >
          <p>
            Take a free{" "}
            <Link href="/reading-speed-test">reading speed test</Link> that
            pairs WPM with a comprehension check. If you finish fast but cannot
            explain what you read, extraction won — collaboration with the
            author did not.
          </p>
        </InlineCallout>

        <h2 id="shape-of-thoughts">Reading changes the shape of your thoughts</h2>
        <p>
          There is another reason reading matters. The quality of your thoughts
          is partly determined by the concepts available to you.
        </p>
        <p>
          If your vocabulary for describing an experience is simply{" "}
          <em>&ldquo;I feel bad,&rdquo;</em> then many different emotional
          states get compressed into the same tiny box. But once you encounter
          words like <em>melancholy</em>, <em>resentment</em>,{" "}
          <em>anticipation</em>, <em>nostalgia</em>, <em>alienation</em>,{" "}
          <em>awe</em>, or <em>ambivalence</em>, your internal world becomes
          more detailed. You can distinguish things you previously experienced
          as one vague feeling.
        </p>
        <p>
          The same thing happens with ideas. Before reading about economics, you
          might see rising prices simply as &ldquo;things becoming
          expensive.&rdquo; After learning about inflation, supply constraints,
          monetary policy, and purchasing power, you have several new lenses
          through which to interpret the same event.
        </p>
        <p>
          Reading gives you <strong>mental vocabulary</strong>. And mental
          vocabulary gives you more ways to think. To keep those ideas from
          fading, pair deep reading with{" "}
          <Link href="/blog/how-to-remember-what-you-read">
            techniques for remembering what you read
          </Link>
          .
        </p>

        <h2 id="better-questions">The best books don&apos;t give you answers</h2>
        <p>
          This is perhaps the biggest misconception about reading. People often
          approach books like containers of information:{" "}
          <em>&ldquo;What will I get from this book?&rdquo;</em>
        </p>
        <p>
          But the most valuable books often don&apos;t give you answers. They
          give you better questions. You finish a great book and discover that
          the world has become slightly more complicated. Things that once
          seemed obvious now seem questionable. People you previously judged
          seem more understandable. Opinions you held confidently acquire
          footnotes. You start noticing patterns that were invisible before.
        </p>
        <p>
          That&apos;s not knowledge in the conventional sense. It&apos;s
          something closer to <strong>expanded perception</strong> — the kind{" "}
          <Link href="/blog/active-reading-strategies">
            active reading
          </Link>{" "}
          makes room for when you engage instead of extract.
        </p>

        <h2 id="not-a-race">You don&apos;t need to read 50 books a year</h2>
        <p>
          There is also a strange productivity culture around reading. People
          track books. They post reading lists. They set yearly targets.{" "}
          <em>&ldquo;I read 73 books this year.&rdquo;</em>
        </p>
        <p>
          But reading isn&apos;t a race. If you spend three months slowly
          working through one book that permanently changes how you think, it
          may be worth more than racing through thirty books you barely
          remember.
        </p>
        <p>
          The goal isn&apos;t to maximize the number of books you finish. It&apos;s
          to maximize the number of ideas that stay with you. Some books should
          be consumed quickly. Some should be studied. Some should be argued
          with. Some should be abandoned. And some should be read twice.
        </p>
        <p>
          Because sometimes you don&apos;t reread a book because you forgot what
          it said. You reread it because{" "}
          <strong>you&apos;ve changed since the first time you read it.</strong>{" "}
          The words stayed the same. You didn&apos;t.
        </p>
        <p>
          If you still want volume without emptying your calendar, see{" "}
          <Link href="/blog/how-to-read-more-books-without-more-time">
            how to read more books without more time
          </Link>{" "}
          — and the habits behind{" "}
          <Link href="/blog/reading-habits-of-successful-people">
            how successful people actually read
          </Link>
          .
        </p>

        <h2 id="conversation">
          A book is a conversation with someone who isn&apos;t there
        </h2>
        <p>
          Perhaps this is the most beautiful thing about reading. A book is a
          conversation where the other person cannot interrupt you.
        </p>
        <p>
          You can disagree with Aristotle. Argue with Nietzsche. Laugh at
          Dickens. Question Darwin. Learn from Einstein. Follow the thoughts of
          someone who lived centuries ago. You can enter the mind of a person
          without needing an invitation.
        </p>
        <p>
          And unlike a conversation, you can pause. Underline a sentence. Go
          back ten pages. Think for an hour. Close the book. Return tomorrow.
          The author waits. Few technologies are this patient.
        </p>

        <aside className="blog-callout">
          <h3>Depth needs a protected lane</h3>
          <p>
            Short-form feeds train burst attention; books train staying power.
            Separate the modes — see{" "}
            <Link href="/blog/tiktok-changing-how-we-read">
              how TikTok-style video changes reading
            </Link>{" "}
            and{" "}
            <Link href="/blog/skimming-vs-speed-reading-vs-deep-reading">
              when to skim vs read deeply
            </Link>
            .
          </p>
        </aside>

        <h2 id="why-read">So why read?</h2>
        <p>
          Not because successful people read. Not because intelligent people
          read. Not because someone on the internet told you that reading will
          make you smarter.
        </p>
        <p>
          Read because your life is limited to one perspective: your own. You
          get one childhood. One set of experiences. One brain. One lifetime.
        </p>
        <p>
          Books allow you to temporarily borrow other people&apos;s lives. You
          can experience a war you never fought. A country you&apos;ve never
          visited. A century you never lived through. A profession you never
          practiced. A mind nothing like your own.
        </p>
        <p>
          And when you return to your own life, you bring some of those
          perspectives with you. Maybe that&apos;s what reading really is. Not
          escaping your life. <strong>Expanding it.</strong>
        </p>
        <p>
          You still have only one lifetime. But if you read deeply enough, it
          can contain many. And that might be the closest thing humanity has
          ever invented to time travel.
        </p>
        <p>
          ReadFast exists to protect that practice on digital pages — paced
          sessions so sustained attention has a chance against the extraction
          internet. Download free, baseline your focus with a comprehension
          check, and give the next great book the staying power it asks for.
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
