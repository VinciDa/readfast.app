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

const post = getPost("reading-speed-test-results-explained");

export const metadata: Metadata = {
  title: "Reading Speed Test Results Explained: Is Your WPM Score Good?",
  description:
    "Just finished a WPM test? Learn what your score and comprehension percentage mean, realistic targets by reader type, and the next training steps that actually move the needle.",
  metadataBase: new URL("https://readfast.app"),
  alternates: {
    canonical: "/blog/reading-speed-test-results-explained/",
  },
  keywords: post.keywords,
  openGraph: {
    title: "Reading Speed Test Results Explained: Is Your WPM Score Good?",
    description:
      "WPM alone is incomplete. Learn how to read your score with comprehension %, what each band means, and what to do next.",
    url: "https://readfast.app/blog/reading-speed-test-results-explained",
    siteName: "ReadFast",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Reading Speed Test Results Explained — ReadFast Blog",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: post.date,
  },
  twitter: {
    card: "summary_large_image",
    title: "Reading Speed Test Results Explained: Is Your WPM Score Good?",
    description:
      "WPM alone is incomplete. Pair it with comprehension % to know what your score really means — and what to do next.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    question: "What is a good reading speed for adults?",
    answer:
      "Most adults read around 200–300 words per minute with solid comprehension on general nonfiction. 300–400 wpm with 70%+ comprehension is a strong everyday pace. Above 400 wpm is excellent if comprehension holds; without it, the number is mostly vanity.",
  },
  {
    question: "Why does my WPM change between tests?",
    answer:
      "Passage difficulty, familiarity with the topic, sleep, focus, and even screen size all shift results. Treat a single score as a snapshot, not a permanent label. Average two or three tests on similar material for a fairer baseline.",
  },
  {
    question: "Is high WPM with low comprehension useful?",
    answer:
      "Rarely. If you finish fast but cannot answer basic questions about the text, you scanned rather than read. Effective reading multiplies speed by understanding — a slower score with high comprehension usually outperforms a flashy WPM with a weak quiz result.",
  },
  {
    question: "How often should I retest my reading speed?",
    answer:
      "Every two to four weeks during focused training is enough. Retesting daily creates noise and anxiety. Keep conditions similar: same time of day, quiet space, and a passage of comparable difficulty.",
  },
  {
    question: "Can I improve both WPM and comprehension at once?",
    answer:
      "Yes, but not by chasing max speed first. Raise pace gradually while keeping comprehension above roughly 70%. Techniques like chunking, a visual pacer, and reducing unnecessary subvocalization help both metrics when practiced on material you actually need to understand.",
  },
];

const toc = [
  { id: "two-numbers", label: "WPM and comprehension together" },
  { id: "score-bands", label: "How to interpret your score" },
  { id: "why-comprehension", label: "Why comprehension matters more" },
  { id: "next-steps", label: "Next steps by score band" },
  { id: "retest", label: "How to retest fairly" },
  { id: "faq", label: "FAQ" },
];

export default function ReadingSpeedTestResultsExplainedPage() {
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
            title="Don't guess — measure again"
            primaryHref="/reading-speed-test"
            primaryLabel="Test Your Reading Speed"
            secondaryHref="/"
            secondaryLabel="Download ReadFast Free"
          >
            <p>
              A single score is useful. A score after a few weeks of deliberate
              practice is proof. Take the free test, note both WPM and
              comprehension, then train with ReadFast and retest under similar
              conditions.
            </p>
          </ArticleCta>
        }
      >
        <p>
          You finished the{" "}
          <Link href="/reading-speed-test">reading speed test</Link>, saw a
          words-per-minute number, and immediately wondered: is that good? Fair
          question — and incomplete. Raw WPM without comprehension is like
          reporting how fast you drove without saying whether you arrived at the
          right place.
        </p>
        <p>
          This guide walks through both numbers together, what common score
          bands mean in practice, and the next training step that fits where you
          are — not where a viral &ldquo;2,000 wpm&rdquo; claim pretends you
          should be.
        </p>

        <h2 id="two-numbers">WPM and comprehension together</h2>
        <p>
          Words per minute measures throughput: how much text you covered in a
          timed window. Comprehension percentage measures whether that text
          stuck — typically via a short quiz after the passage. Neither number
          alone tells the full story.
        </p>
        <p>
          A useful mental model is <strong>effective reading</strong>: roughly
          WPM &times; (comprehension as a decimal). Someone at 400 wpm with 50%
          comprehension has about the same effective output as someone at 200
          wpm with 100% — and the second reader usually remembers more when it
          matters. High speed with weak recall feels productive in the moment
          and evaporates by tomorrow.
        </p>
        <p>
          Most adults land near 200–300 wpm on general English prose with decent
          understanding. That range is not a failure; it matches decades of
          reading research on silent reading for typical adults. For age-based
          benchmarks and how school norms compare, see{" "}
          <Link href="/blog/average-reading-speed-by-age">
            average reading speed by age
          </Link>
          .
        </p>

        <InlineCallout
          title="Get a clean baseline in under two minutes"
          utmContent="blog_reading-speed-test-results-explained"
        >
          <p>
            Retake the free ReadFast speed test when you&apos;re focused and
            rested. Write down both WPM and comprehension % — you&apos;ll need
            both to choose the right next step below.
          </p>
        </InlineCallout>

        <h2 id="score-bands">How to interpret your score</h2>
        <p>
          Use these bands as orientation, not judgment. Passage difficulty
          shifts every score. Still, patterns emerge when comprehension stays
          in a healthy range (roughly 70%+ on a fair quiz).
        </p>

        <table>
          <thead>
            <tr>
              <th>WPM band</th>
              <th>Typical meaning</th>
              <th>If comprehension is solid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Under 200</td>
              <td>Below average adult silent reading</td>
              <td>
                Likely heavy subvocalization, frequent regressions, or fatigue —
                all trainable
              </td>
            </tr>
            <tr>
              <td>200–300</td>
              <td>Average adult range</td>
              <td>
                Strong foundation; speed work can raise ceiling without drama
              </td>
            </tr>
            <tr>
              <td>300–400</td>
              <td>Above average / efficient reader</td>
              <td>
                Already faster than most peers; refine technique for denser text
              </td>
            </tr>
            <tr>
              <td>400–600</td>
              <td>Fast with practice or lighter material</td>
              <td>
                Excellent if quiz scores hold; verify on harder passages
              </td>
            </tr>
            <tr>
              <td>600+</td>
              <td>Very fast — often skimming territory</td>
              <td>
                Treat as a signal to recheck comprehension before celebrating
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          If your comprehension quiz is under ~60%, drop one band in how you
          interpret the result. A &ldquo;450 wpm&rdquo; run with a 40% quiz is
          not elite reading; it is fast scanning. That distinction saves you
          from training the wrong skill.
        </p>

        <h2 id="why-comprehension">Why comprehension matters more</h2>
        <p>
          Speed is a means. Understanding is the job. Meetings, exams, research,
          and novels all punish the reader who finishes early and remembers
          nothing. Comprehension also protects you from false confidence: the
          brain is good at feeling &ldquo;done&rdquo; after eyes move across a
          page.
        </p>
        <p>
          That does not mean you should stay slow forever. It means you raise
          pace only while meaning holds. The practical plan in{" "}
          <Link href="/blog/how-to-read-faster-without-losing-comprehension">
            how to read faster without losing comprehension
          </Link>{" "}
          follows that rule: widen eye span, cut unnecessary regression, quiet
          excess subvocalization — then retest.
        </p>
        <aside className="blog-callout">
          <h3>A quick honesty check</h3>
          <p>
            If you cannot summarize the passage in two sentences without looking
            back, the WPM number is advertising, not evidence. Summary first,
            bragging rights second.
          </p>
        </aside>

        <h2 id="next-steps">Next steps by score band</h2>
        <p>
          Pick the row that matches your latest test (with comprehension in
          mind), then do the smallest useful next action — not a twelve-week
          overhaul.
        </p>

        <table>
          <thead>
            <tr>
              <th>Your band</th>
              <th>Priority</th>
              <th>First action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Under 200 wpm</td>
              <td>Remove friction</td>
              <td>
                Use a finger or digital pacer; practice 10 minutes daily on easy
                articles; retest in two weeks
              </td>
            </tr>
            <tr>
              <td>200–300 wpm</td>
              <td>Build efficiency</td>
              <td>
                Learn phrase chunking; reduce re-reading; keep quiz scores
                above 70% while nudging pace up
              </td>
            </tr>
            <tr>
              <td>300–400 wpm</td>
              <td>Protect depth</td>
              <td>
                Alternate speed sessions with deep reading; push speed only on
                familiar topics
              </td>
            </tr>
            <tr>
              <td>400–600 wpm</td>
              <td>Validate transfer</td>
              <td>
                Retest on harder nonfiction; train RSVP/paced reading for
                long-form PDFs and reports
              </td>
            </tr>
            <tr>
              <td>High WPM, low quiz</td>
              <td>Slow to understand</td>
              <td>
                Drop pace 20–30%, preview headings, answer three recall
                questions after each section
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          Whatever your band, the loop is the same: measure &rarr; train one
          technique &rarr; remeasure. Skipping the quiz turns training into
          theater. If you only have energy for one skill this month, pick the
          bottleneck your results imply — pacing and regressions under 200,
          chunking in the middle bands, transfer testing when you are already
          fast.
        </p>
        <p>
          Resist the urge to jump straight to extreme drills you saw online.
          Flashy exercises that spike WPM for a screenshot usually crater
          comprehension on the next work email. Boring consistency wins.
        </p>

        <h2 id="retest">How to retest fairly</h2>
        <p>
          Compare apples to apples. Use similar passage length and difficulty,
          sit in a quiet place, and avoid testing right after a stressful day if
          you can help it. Note the date, WPM, and comprehension % in a simple
          note. Trends over a month matter more than any single spike.
        </p>
        <p>
          When you are ready, take the test again — same tool, honest
          conditions, both metrics recorded. That is how you know whether
          training worked, not whether you felt faster. If the new WPM rose and
          the quiz held or improved, keep the habit. If WPM rose and the quiz
          fell, dial pace back and rebuild — speed that costs understanding is
          not progress.
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
