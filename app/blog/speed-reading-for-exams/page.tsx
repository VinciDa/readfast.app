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

const post = getPost("speed-reading-for-exams");

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  metadataBase: new URL("https://readfast.app"),
  alternates: {
    canonical: "/blog/speed-reading-for-exams/",
  },
  keywords: post.keywords,
  openGraph: {
    title: post.title,
    description: post.description,
    url: "https://readfast.app/blog/speed-reading-for-exams",
    siteName: "ReadFast",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Speed Reading for Exams — ReadFast Blog",
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
    question: "Does speed reading help on the SAT, GRE, GMAT, or LSAT?",
    answer:
      "Efficiency habits help; raw speed-reading without strategy usually does not. Timed verbal sections reward accurate passage maps, question-first tactics, and controlled pacing — not racing every line at maximum WPM. Pure speed without comprehension checking tends to lower scores.",
  },
  {
    question: "Should I read the questions before the passage?",
    answer:
      "Often yes on SAT, GRE, and GMAT reading sets — a quick look at question stems tells you what to hunt for. On LSAT Reading Comp, many top scorers still prefer a fast structural first pass, then questions; either way, you need a clear map of claim, stance, and structure before you answer.",
  },
  {
    question: "How fast should I read exam passages?",
    answer:
      "Fast enough to finish with time for hard questions, slow enough to answer main-idea and inference items correctly. For most people that is a controlled, above-comfort pace with a structural skim — not a personal WPM record. Accuracy first; then shave seconds.",
  },
  {
    question: "Can chunking and visual pacing help on test day?",
    answer:
      "Yes, if you have practiced them. Chunking reduces word-by-word drag; a light finger or cursor pacer cuts wandering eyes. Do not debut new eye techniques on exam morning — train them on practice tests first so they feel automatic under stress.",
  },
  {
    question: "What should I practice instead of extreme speed drills?",
    answer:
      "Passage mapping (main claim, author stance, structure, contrast signals), question-first or structural skims, fewer reflexive re-reads, and timed full sections. Measure both finish rate and accuracy. Speed alone is a vanity metric on exams.",
  },
];

const toc = [
  { id: "honest-truth", label: "The honest truth about exam speed" },
  { id: "passage-mapping", label: "Passage mapping that scores points" },
  { id: "question-first", label: "Question-first and structural skims" },
  { id: "efficiency-habits", label: "Apply efficiency habits carefully" },
  { id: "exam-by-exam", label: "Notes by exam family" },
  { id: "practice-plan", label: "A practice plan that transfers" },
  { id: "faq", label: "FAQ" },
];

export default function SpeedReadingForExamsPage() {
  return (
    <>
      <BlogJsonLd
        data={[
          buildBlogPostingJsonLd(post),
          buildFaqPageJsonLd(faqs),
          buildBreadcrumbJsonLd(post),
          buildHowToJsonLd(
            "How to read faster for timed exams without tanking accuracy",
            "Use passage mapping, a structural or question-first skim, and controlled efficiency habits — then verify with timed practice accuracy, not raw WPM.",
            [
              {
                name: "Map the passage before details",
                text: "On a first pass, capture the main claim, author stance, paragraph jobs, and any contrast or exception signals.",
              },
              {
                name: "Choose a skim strategy",
                text: "Glance at question stems (question-first) or do a fast structural skim — then read with a purpose instead of line-by-line panic.",
              },
              {
                name: "Apply chunking and pacing carefully",
                text: "Read in phrases, keep a light visual pacer, and cut reflexive regressions only where meaning still holds.",
              },
              {
                name: "Train under timed conditions",
                text: "Practice full sections, score accuracy and finish rate together, and adjust pace only when comprehension stays solid.",
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
            title="Know your pace before you practice for exams"
            primaryHref="/reading-speed-test"
            primaryLabel="Test Your Reading Speed"
            secondaryHref="/"
            secondaryLabel="Download ReadFast Free"
          >
            <p>
              A baseline WPM plus a comprehension check tells you whether you
              need efficiency habits, strategy work, or both — before you burn
              another practice set racing the clock.
            </p>
          </ArticleCta>
        }
      >
        <h2 id="honest-truth">The honest truth about exam speed</h2>
        <p>
          On the SAT, GRE, GMAT, and LSAT,{" "}
          <em>pure</em> speed-reading without strategy usually hurts scores.
          These sections do not reward the highest words-per-minute. They reward
          accurate answers under a clock. If you blast through a passage at
          personal-best pace and then miss main-idea, purpose, and inference
          questions, you did not &ldquo;speed read&rdquo; — you skimmed past
          the points that pay.
        </p>
        <p>
          What does help is{" "}
          <strong>strategic efficiency</strong>: knowing what to extract on the
          first pass, where to slow down, and how to keep your eyes from wasting
          time on reflexive re-reads. That overlaps with real reading skill —{" "}
          <Link href="/blog/how-to-read-faster-without-losing-comprehension">
            reading faster without losing comprehension
          </Link>{" "}
          — but exam reading is a different sport from pleasure reading or
          textbook study. Treat it like one.
        </p>

        <aside className="blog-callout">
          <h3>Score &gt; WPM</h3>
          <p>
            Your practice metric should be accuracy and section finish rate, not
            a raw speed number. Raise pace only when you can still explain the
            author&rsquo;s claim and why a wrong answer is wrong.
          </p>
        </aside>

        <h2 id="passage-mapping">Passage mapping that scores points</h2>
        <p>
          Before you memorize details, build a four-part map. Most correct
          answers hang off one of these:
        </p>
        <ol>
          <li>
            <strong>Main claim</strong> — What is the passage ultimately
            arguing or explaining? One sentence.
          </li>
          <li>
            <strong>Author stance</strong> — Supportive, critical, cautious,
            descriptive? Tone questions live here.
          </li>
          <li>
            <strong>Structure</strong> — What does each paragraph do? Setup,
            evidence, counterpoint, application, conclusion.
          </li>
          <li>
            <strong>Contrast signals</strong> — Words like{" "}
            <em>however</em>, <em>unlike</em>, <em>paradoxically</em>,{" "}
            <em>whereas</em>, and sharp shifts in viewpoint. Exam writers love
            to test the turn.
          </li>
        </ol>
        <p>
          You do not need a formal outline on scratch paper every time. You need
          a mental bookmark: &ldquo;Paragraph 2 is the counterargument;
          paragraph 3 answers it.&rdquo; That map lets you find detail answers
          fast without re-reading the whole thing from the top.
        </p>

        <h2 id="question-first">Question-first and structural skims</h2>
        <p>
          Two proven ways to avoid line-by-line panic:
        </p>
        <h3>Question-first</h3>
        <p>
          Glance at the question stems (not the answer choices yet) so you know
          what the set cares about — vocabulary-in-context, a specific
          paragraph, primary purpose, or an inference. Then read with those
          targets in mind. This works especially well on SAT and many GRE/GMAT
          reading sets where questions point at discrete locations.
        </p>
        <h3>Structural skim</h3>
        <p>
          Read first and last sentences of paragraphs, plus any obvious contrast
          or conclusion language, then fill in denser mid-paragraph material as
          needed. This is closer to how strong LSAT Reading Comp scorers often
          work: get the architecture first, then return surgically.
        </p>
        <p>
          Neither approach is magic. Both beat the default of starting at word
          one and hoping the clock is kind. Pair them with the PDF and dense-text
          habits in{" "}
          <Link href="/blog/how-to-read-pdfs-faster-students">
            how to read PDFs faster as a student
          </Link>{" "}
          when you practice on digital materials.
        </p>

        <InlineCallout
          title="Baseline your reading before the next practice test"
          utmContent="blog_speed_reading_for_exams"
        >
          <p>
            A free{" "}
            <Link href="/reading-speed-test">reading speed test</Link> gives
            WPM and a simple comprehension check. On exams, that comprehension
            number matters more than the speed brag.
          </p>
        </InlineCallout>

        <h2 id="efficiency-habits">Apply efficiency habits carefully</h2>
        <p>
          Classic speed-reading tools help on exams only when they stay
          subordinate to accuracy.
        </p>
        <h3>Chunking</h3>
        <p>
          Fixating on every single word burns seconds you do not have. Train
          your eyes to take in short phrases — the same skill covered in{" "}
          <Link href="/blog/chunking-speed-reading">
            chunking for speed reading
          </Link>
          . On test day, chunking should feel like smoother intake, not a
          circus trick you are trying to remember under stress.
        </p>
        <h3>Fewer regressions</h3>
        <p>
          Habitual micro-re-reads (&ldquo;wait, did I get that?&rdquo;) are
          expensive. Push forward unless meaning truly breaks, then jump back
          with a purpose — usually to a mapped paragraph, not a random restart.
          Details live in{" "}
          <Link href="/blog/stop-regression-reading">
            how to stop regression while reading
          </Link>
          .
        </p>
        <h3>Visual pacing</h3>
        <p>
          A light finger or cursor under the line can keep eyes from drifting
          during long passages. Keep the pace controlled: slightly above
          comfort, never frantic. Frantic pacing is how people &ldquo;finish
          early&rdquo; with a pile of wrong answers. If your testing center or
          digital interface makes a finger awkward, practice the same rhythm
          with a mouse highlight or simply with intentional phrase landings so
          the habit is not dependent on one prop.
        </p>
        <p>
          One more caution: do not stack every efficiency tip on exam morning.
          Introduce chunking, regression control, and pacing on homework and
          practice tests weeks ahead. Under adrenaline, only automatic habits
          survive. New tricks become new ways to second-guess yourself.
        </p>

        <blockquote>
          On a timed verbal section, the goal is not maximum WPM. It is maximum
          correct answers per minute of attention.
        </blockquote>

        <h2 id="exam-by-exam">Notes by exam family</h2>
        <p>
          <strong>SAT Reading / Writing:</strong> Passages are shorter and
          question-first tactics shine. Map purpose quickly; do not over-invest
          in decorative details the questions never touch. When two answers
          both &ldquo;sound right,&rdquo; return to your stance and structure
          notes — the trap choice usually matches a detail but misses the
          author&rsquo;s job in that paragraph.
        </p>
        <p>
          <strong>GRE Verbal:</strong> Dense academic prose rewards structure
          and vocabulary-in-context patience. Speed helps only after you can
          still paraphrase the author&rsquo;s point. Long sentences are not a
          cue to panic-skim; they are a cue to find the subject, verb, and
          contrast clause, then move on.
        </p>
        <p>
          <strong>GMAT Critical Reasoning / Reading:</strong> Argument
          structure is the game. Identify conclusion and evidence before you
          hunt for &ldquo;weaken&rdquo; or &ldquo;strengthen&rdquo; answers at
          full tilt. Reading every word equally fast is the wrong optimization;
          reading the argument&rsquo;s spine carefully and the fluff lightly is
          the right one.
        </p>
        <p>
          <strong>LSAT Reading Comp:</strong> Long comparative passages punish
          shallow skimming. Invest in a solid first-pass map; then answer from
          the map and return only when a question demands a line reference.
          Comparative passages especially: label viewpoints A and B early so
          you never blur who claims what when the clock is loud.
        </p>
        <p>
          Across all four, the pattern repeats: strategy first, efficiency
          second, ego-speed never. If a technique from pleasure reading
          conflicts with accuracy on a practice section, drop it for test day
          and keep it for textbooks instead.
        </p>

        <h2 id="practice-plan">A practice plan that transfers</h2>
        <ol>
          <li>
            <strong>Baseline</strong> — Take a{" "}
            <Link href="/reading-speed-test">reading speed test</Link> and note
            both WPM and recall quality.
          </li>
          <li>
            <strong>Untimed maps</strong> — For a week, practice writing a
            four-part passage map after each practice passage. Accuracy of the
            map matters more than clock time.
          </li>
          <li>
            <strong>Add the skim</strong> — Layer question-first or structural
            skim on top of mapping until it feels natural.
          </li>
          <li>
            <strong>One efficiency habit</strong> — Add chunking{" "}
            <em>or</em> regression control <em>or</em> a light pacer — not all
            three in the same week.
          </li>
          <li>
            <strong>Full timed sections</strong> — Score accuracy and finish
            rate. Only raise pace when both stay acceptable.
          </li>
        </ol>
        <p>
          Common failure mode: practicing only untimed accuracy, then
          discovering on the real clock that you still re-read every other
          sentence. Alternate: one day map-heavy and untimed, next day timed
          with a hard stop, always reviewing wrong answers by asking{" "}
          <em>which part of the map did I miss?</em> That review teaches more
          than another blind speed drill.
        </p>
        <p>
          Ignore courses that promise exam miracles through extreme WPM alone.
          Steal the useful parts of efficient reading, keep strategy in charge,
          and let your practice-test score — not a stopwatch vanity number —
          decide whether you are ready. If you want the broader skill stack
          outside exam mode, return to{" "}
          <Link href="/blog/how-to-read-faster-without-losing-comprehension">
            reading faster without losing comprehension
          </Link>{" "}
          and train those habits on non-test material so they feel boringly
          automatic when the proctor says begin.
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
