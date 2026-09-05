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

const post = getPost("reading-tools-for-dyslexia");

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  metadataBase: new URL("https://readfast.app"),
  alternates: {
    canonical: "/blog/reading-tools-for-dyslexia/",
  },
  keywords: post.keywords,
  openGraph: {
    title: post.title,
    description: post.description,
    url: "https://readfast.app/blog/reading-tools-for-dyslexia",
    siteName: "ReadFast",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Reading Tools for Dyslexia — ReadFast Blog",
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
    question: "What reading tools help most with dyslexia?",
    answer:
      "For many people, text-to-speech with synchronized highlighting, larger fonts, more line spacing and margins, and a calmer reading layout help more than any single “miracle font.” Individual preference still matters — test changes with real material you care about.",
  },
  {
    question: "Does the OpenDyslexic font actually work?",
    answer:
      "Evidence is mixed. Some readers prefer OpenDyslexic or other specialty fonts and feel more comfortable; controlled studies do not show a universal leap in accuracy or speed for everyone. Preference is a valid reason to use a font — just do not treat it as a cure.",
  },
  {
    question: "Can RSVP or paced reading help dyslexia?",
    answer:
      "Sometimes. Presenting words at a controlled pace can reduce losing your place and support focus for some readers. Others find it stressful or less comprehensible. It is an option to try, not a requirement — and never a replacement for assessment or instruction when those are needed.",
  },
  {
    question: "Is ReadFast a treatment for dyslexia?",
    answer:
      "No. ReadFast is a reading app with tools like Focus mode, text-to-speech, and adjustable display settings that some dyslexic readers find useful. It is not a medical treatment, diagnosis, or cure. Seek qualified professional support for assessment and structured literacy help.",
  },
  {
    question: "Should I get a professional evaluation?",
    answer:
      "If reading remains disproportionately hard despite tools and practice, yes — talk with a qualified clinician or educational specialist. Tools can reduce friction; diagnosis and evidence-based instruction address the underlying profile.",
  },
];

const toc = [
  { id: "honest-frame", label: "An honest frame" },
  { id: "tts", label: "TTS with synced highlighting" },
  { id: "spacing", label: "Fonts, spacing, and margins" },
  { id: "specialty-fonts", label: "Specialty fonts: mixed evidence" },
  { id: "paced-reading", label: "RSVP and paced reading" },
  { id: "readfast", label: "Where ReadFast fits" },
  { id: "professional-support", label: "Professional support still matters" },
  { id: "faq", label: "FAQ" },
];

export default function ReadingToolsForDyslexiaPage() {
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
            title="Try calmer reading tools — without the hype"
            primaryHref="/reading-speed-test"
            primaryLabel="Test Your Reading Speed"
            secondaryHref="/"
            secondaryLabel="Download ReadFast Free"
          >
            <p>
              Adjust display, try Focus mode, and use TTS if it helps you stay
              with the page. Tools should reduce friction — not pretend to cure
              dyslexia.
            </p>
          </ArticleCta>
        }
      >
        <h2 id="honest-frame">An honest frame</h2>
        <p>
          Dyslexia is a real, neurobiological difference in how many people
          process written language. No app, font, or color overlay{" "}
          <strong>cures</strong> it. What good tools can do is reduce
          unnecessary friction: losing your place, visual crowding, and the
          exhaustion of decoding every line with no support.
        </p>
        <p>
          This guide is accessibility-minded and non-exploitative. It summarizes
          what tends to help many readers, where evidence is mixed, and how to
          try options without buying miracle claims. If you are also navigating
          attention challenges, see{" "}
          <Link href="/blog/how-to-focus-while-reading-adhd">
            how to focus while reading with ADHD
          </Link>{" "}
          for related, practical care — overlapping needs are common, and
          neither article replaces clinical advice.
        </p>

        <aside className="blog-callout">
          <h3>Your preference counts</h3>
          <p>
            Dyslexia is not one uniform experience. A setting that helps your
            friend may annoy you. Use short A/B tests on real homework or
            articles, keep what lowers effort, and discard the rest without
            guilt.
          </p>
        </aside>

        <h2 id="tts">TTS with synced highlighting</h2>
        <p>
          Among digital supports,{" "}
          <strong>text-to-speech (TTS) with synchronized highlighting</strong>{" "}
          is one of the most consistently useful. Hearing the words while seeing
          them highlighted can support decoding, keep place, and free attention
          for meaning. Many students and adults with dyslexia report that dual
          input (audio + visual) makes longer passages sustainable.
        </p>
        <p>
          TTS is not &ldquo;cheating.&rdquo; It is an access method — similar in
          spirit to glasses for vision. You can still annotate, pause, and
          re-hear a sentence. For a clearer comparison of audio-led vs.
          rapid serial presentation approaches, see{" "}
          <Link href="/blog/text-to-speech-vs-rsvp">
            text-to-speech vs. RSVP
          </Link>
          .
        </p>
        <p>
          Practical tip: start TTS slightly slower than conversational speed on
          hard material, then nudge faster only when comprehension stays
          steady. Synced highlight is doing real work when you can look away
          briefly and still find your place when you return.
        </p>

        <h2 id="spacing">Fonts, spacing, and margins</h2>
        <p>
          Crowded text is harder for many dyslexic readers. Practical display
          changes with relatively solid face validity include:
        </p>
        <ul>
          <li>Larger font size than default web or ebook settings</li>
          <li>Increased line spacing so lines do not collide visually</li>
          <li>Wider margins or a narrower measure (shorter line length)</li>
          <li>Higher contrast that is comfortable — not harsh glare</li>
        </ul>
        <p>
          These adjustments are low-risk and often underused. Before chasing
          exotic fonts, try making the page physically easier to track. Many
          people feel an immediate drop in effort from spacing alone.
        </p>

        <InlineCallout
          title="Adjust the page before you blame yourself"
          utmContent="blog_reading_tools_for_dyslexia"
        >
          <p>
            If reading feels exhausting, change size, spacing, and TTS first.
            ReadFast&rsquo;s adjustable display and Focus mode exist for that
            kind of friction reduction — not as a diagnosis or fix.
          </p>
        </InlineCallout>

        <h2 id="specialty-fonts">Specialty fonts: mixed evidence</h2>
        <p>
          Fonts such as <strong>OpenDyslexic</strong> and other specialty
          typefaces are often marketed with strong promises. The research
          picture is more modest:{" "}
          <em>mixed evidence</em>. Some readers prefer them and report greater
          comfort; controlled studies do not show a reliable, universal
          improvement in speed or accuracy for all dyslexic readers compared
          with well-chosen standard fonts at good sizes and spacing.
        </p>
        <p>
          That does not mean you should avoid specialty fonts. Preference is a
          legitimate accessibility reason. It does mean you should be skeptical
          of anyone selling a font as a breakthrough treatment. Try it beside a
          clear, large sans-serif with generous spacing — and keep whichever
          combination you comprehend with less strain.
        </p>
        <p>
          The same honesty applies to colored overlays and tinted backgrounds.
          Some readers swear by them; others notice no change. Run a fair test:
          same text, same size, overlay on vs. off, then judge fatigue and
          recall — not how &ldquo;official&rdquo; the product looks.
        </p>

        <h2 id="paced-reading">RSVP and paced reading</h2>
        <p>
          <strong>RSVP</strong> (rapid serial visual presentation) and other
          paced-reading modes show one word or short chunk at a controlled rate,
          often in a fixed screen location. For some dyslexic readers, that
          reduces skipping lines and supports sustained attention. For others,
          the pressure of a fixed pace increases stress and hurts comprehension.
        </p>
        <p>
          Honest takeaway: paced reading{" "}
          <em>may help some people, not all</em>. Use short trials. If you leave
          sessions more tired and less clear on content, it is not your tool —
          even if a marketing page insists otherwise. Pair any pacing experiment
          with a quick recall check so you are not mistaking forward motion for
          understanding.
        </p>

        <blockquote>
          Good accessibility tools lower the cost of reading. They do not erase
          dyslexia, and they should never shame you for needing support.
        </blockquote>

        <h2 id="readfast">Where ReadFast fits</h2>
        <p>
          ReadFast is <strong>one option among many</strong>, not a cure. Features
          that some dyslexic readers find useful include:
        </p>
        <ul>
          <li>
            <strong>Focus mode</strong> — fewer on-screen distractions while you
            stay with the text
          </li>
          <li>
            <strong>Text-to-speech</strong> — audio support alongside the written
            word
          </li>
          <li>
            <strong>Adjustable display</strong> — size and layout controls so
            the page fits your eyes
          </li>
        </ul>
        <p>
          Use it if it helps you finish more of what you need to read with less
          exhaustion. Ignore it if another reader, browser extension, or
          school-provided tool fits better. Accessibility is personal, and brand
          loyalty should never outrank comfort and comprehension.
        </p>
        <p>
          If you try ReadFast, give yourself a fair week: pick one class
          reading or work document, enable the supports that feel promising, and
          notice energy and recall — not just whether the interface looks
          modern. Tools earn their place by outcomes, not by marketing copy.
        </p>

        <h2 id="professional-support">Professional support still matters</h2>
        <p>
          Tools are not a substitute for{" "}
          <strong>professional diagnosis and support</strong> when reading
          difficulty is significant. Structured literacy instruction,
          educational accommodations, and clinical guidance can address needs
          that an app cannot. If you suspect dyslexia in yourself or a child,
          seek qualified evaluation rather than self-diagnosing from a font
          quiz.
        </p>
        <p>
          Accommodations at school or work — extra time, accessible formats,
          audiobooks as allowed — are not shortcuts. They are equity. Pair them
          with tools you control on your own devices so daily reading does not
          depend on a single setting.
        </p>
        <p>
          Meanwhile, you are allowed to make reading kinder: TTS, spacing,
          quieter interfaces, and paced modes when they help. Combine practical
          tools with real support. That is the honest path — not a promise that
          any single product will rewrite how your brain meets the page.
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
