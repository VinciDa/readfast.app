export type BlogCategory =
  | "technique"
  | "science"
  | "data"
  | "audience"
  | "comparison"
  | "habits";

export type BlogPost = {
  slug: string;
  href: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  readingMinutes: number;
  category: BlogCategory;
  tags: string[];
  keywords: string[];
  ogImage?: string;
};

export const posts: BlogPost[] = [
  {
    slug: "how-to-remember-what-you-read",
    href: "/blog/how-to-remember-what-you-read",
    title: "How to Remember What You Read: Science-Backed Techniques",
    description:
      "Most of what you read fades within a week. Learn retrieval practice, spaced repetition, and active recall — the methods that actually move ideas into long-term memory.",
    date: "2026-09-05",
    readingMinutes: 8,
    category: "habits",
    tags: ["memory", "retention", "active-recall", "spaced-repetition", "comprehension"],
    keywords: [
      "how to remember what you read",
      "remember what you read",
      "reading retention tips",
      "active recall reading",
      "spaced repetition reading",
    ],
  },
  {
    slug: "why-you-forget-what-you-read",
    href: "/blog/why-you-forget-what-you-read",
    title: "Why You Forget 90% of What You Read (And the Fix)",
    description:
      "Passive reading feels productive — then the material vanishes. Here’s why the forgetting curve hits readers so hard, why re-reading fails, and what to do instead.",
    date: "2026-09-05",
    readingMinutes: 7,
    category: "science",
    tags: ["memory", "forgetting-curve", "retention", "study", "comprehension"],
    keywords: [
      "why do I forget what I read",
      "forget what you read",
      "forgetting curve reading",
      "why re-reading doesn't work",
      "reading retention",
    ],
  },
  {
    slug: "active-reading-strategies",
    href: "/blog/active-reading-strategies",
    title: "Active Reading Strategies: How to Read With Intent and Remember More",
    description:
      "Active reading turns pages into knowledge. Preview, question, annotate, and recall — plus how PQ4R beats passive highlighting for dense material.",
    date: "2026-09-05",
    readingMinutes: 7,
    category: "technique",
    tags: ["active-reading", "pq4r", "annotation", "comprehension", "study"],
    keywords: [
      "active reading strategies",
      "active reading",
      "how to read actively",
      "pq4r method",
      "read with intent",
    ],
  },
  {
    slug: "how-to-read-faster-at-work",
    href: "/blog/how-to-read-faster-at-work",
    title:
      "How to Read Faster at Work: Emails, Reports, and Slack Without Falling Behind",
    description:
      "Inbox overload is a methodology problem, not a willpower problem. Learn triage, structure-mapping, and paced reading that keep professionals on top of documents.",
    date: "2026-09-05",
    readingMinutes: 7,
    category: "audience",
    tags: ["professionals", "productivity", "email", "reports", "rsvp"],
    keywords: [
      "how to read faster at work",
      "read emails faster",
      "process reports faster",
      "professional reading tips",
      "information overload reading",
    ],
  },
  {
    slug: "audiobooks-vs-reading-vs-speed-reading",
    href: "/blog/audiobooks-vs-reading-vs-speed-reading",
    title: "Audiobooks vs Reading vs Speed Reading: Which Is Actually Better?",
    description:
      "Research shows listening and reading are closer than the internet claims — with important caveats for dense material and multitasking. Here’s when each mode wins.",
    date: "2026-09-05",
    readingMinutes: 8,
    category: "comparison",
    tags: ["audiobooks", "reading", "speed-reading", "tts", "comprehension"],
    keywords: [
      "audiobooks vs reading",
      "audiobooks vs speed reading",
      "is listening as good as reading",
      "reading vs listening comprehension",
      "audiobook retention",
    ],
  },
  {
    slug: "text-to-speech-vs-rsvp",
    href: "/blog/text-to-speech-vs-rsvp",
    title: "Text-to-Speech vs RSVP: What's the Difference and When to Use Each",
    description:
      "TTS keeps your eyes free; RSVP keeps your focus locked. Learn which mode fits commuting, deep work, ADHD focus, and dense study — and when to combine them.",
    date: "2026-09-05",
    readingMinutes: 6,
    category: "comparison",
    tags: ["tts", "rsvp", "speed-reading", "accessibility", "focus"],
    keywords: [
      "text to speech vs rsvp",
      "tts vs speed reading",
      "rsvp reading vs audiobook",
      "when to use text to speech",
      "rsvp vs listening",
    ],
  },
  {
    slug: "speed-reading-for-exams",
    href: "/blog/speed-reading-for-exams",
    title: "Speed Reading for Exams: What Works for SAT, GRE, GMAT, and LSAT",
    description:
      "On timed verbal sections, raw speed without strategy backfires. Learn passage mapping, structural skimming, and question-first tactics that raise accuracy and pace.",
    date: "2026-09-05",
    readingMinutes: 7,
    category: "audience",
    tags: ["exams", "gre", "gmat", "sat", "students", "comprehension"],
    keywords: [
      "speed reading for exams",
      "speed reading for gre",
      "gmat reading comprehension strategy",
      "sat reading tips",
      "lsat reading speed",
    ],
  },
  {
    slug: "peripheral-vision-exercises-reading",
    href: "/blog/peripheral-vision-exercises-reading",
    title: "Peripheral Vision Reading Exercises: Widen Your Visual Span to Read Faster",
    description:
      "Your visual span limits how many letters you can process per fixation. Train it with word-span drills and Schulte tables — with honest caveats about what transfers.",
    date: "2026-09-05",
    readingMinutes: 7,
    category: "technique",
    tags: ["peripheral-vision", "visual-span", "schulte", "chunking", "exercises"],
    keywords: [
      "peripheral vision reading",
      "visual span reading",
      "schulte table reading",
      "eye span exercises",
      "widen peripheral vision reading",
    ],
  },
  {
    slug: "reading-habits-of-successful-people",
    href: "/blog/reading-habits-of-successful-people",
    title: "How Successful People Read: Habits Behind 50+ Books a Year",
    description:
      "Gates, Buffett, Obama, and others don’t just “read a lot” — they protect blocks of time, annotate hard, and treat reading as work. Steal the systems, not just the stats.",
    date: "2026-09-05",
    readingMinutes: 7,
    category: "habits",
    tags: ["habits", "productivity", "books", "inspiration", "tbr"],
    keywords: [
      "reading habits of successful people",
      "how successful people read",
      "bill gates reading habits",
      "warren buffett reading",
      "how to read 50 books a year",
    ],
  },
  {
    slug: "reading-tools-for-dyslexia",
    href: "/blog/reading-tools-for-dyslexia",
    title: "Reading Tools for Dyslexia: What Actually Helps (Honest Guide)",
    description:
      "Evidence-backed tools for dyslexic readers: TTS with synced highlighting, spacing and font controls, and paced reading — without overselling miracle fonts or cures.",
    date: "2026-09-05",
    readingMinutes: 7,
    category: "audience",
    tags: ["dyslexia", "accessibility", "tts", "focus", "tools"],
    keywords: [
      "reading tools for dyslexia",
      "dyslexia reading app",
      "best apps for dyslexia reading",
      "text to speech dyslexia",
      "opendyslexic font effectiveness",
    ],
  },
  {
    slug: "how-to-read-faster-without-losing-comprehension",
    href: "/blog/how-to-read-faster-without-losing-comprehension",
    title:
      "How to Read Faster Without Losing Comprehension: A Practical Plan",
    description:
      "Speed without understanding is just skimming. Learn the five evidence-backed habits that raise WPM while keeping comprehension intact — and how to measure both.",
    date: "2026-09-05",
    readingMinutes: 8,
    category: "technique",
    tags: [
      "speed-reading",
      "comprehension",
      "chunking",
      "subvocalization",
      "visual-pacer",
      "regression",
    ],
    keywords: [
      "how to read faster without losing comprehension",
      "read faster with comprehension",
      "increase reading speed",
      "speed reading techniques",
      "reading comprehension tips",
    ],
  },
  {
    slug: "average-reading-speed-by-age",
    href: "/blog/average-reading-speed-by-age",
    title: "Average Reading Speed by Age: WPM Charts and What They Mean",
    description:
      "Adults average about 238 WPM for silent non-fiction reading. See grade-level and adult benchmarks, why the old “300 WPM” figure is wrong, and how to interpret your own score.",
    date: "2026-09-05",
    readingMinutes: 7,
    category: "data",
    tags: ["reading-speed", "wpm", "benchmarks", "statistics"],
    keywords: [
      "average reading speed",
      "average reading speed by age",
      "reading speed wpm",
      "words per minute by age",
      "average adult reading speed",
    ],
  },
  {
    slug: "does-speed-reading-actually-work",
    href: "/blog/does-speed-reading-actually-work",
    title: "Does Speed Reading Actually Work? What the Research Says",
    description:
      "Honest look at the evidence: realistic gains to 400–600 WPM with solid comprehension are trainable. Claims of 1,000+ WPM are usually skimming. Here’s what holds up.",
    date: "2026-09-05",
    readingMinutes: 8,
    category: "science",
    tags: ["speed-reading", "research", "rsvp", "comprehension"],
    keywords: [
      "does speed reading work",
      "speed reading research",
      "speed reading science",
      "is speed reading real",
      "speed reading myths",
    ],
  },
  {
    slug: "does-bionic-reading-work",
    href: "/blog/does-bionic-reading-work",
    title: "Does Bionic Reading Work? What Studies Actually Found",
    description:
      "Bolding the first half of each word went viral — but controlled tests find little or no speed or comprehension gain. Here’s the evidence, and better ways to read faster.",
    date: "2026-09-05",
    readingMinutes: 7,
    category: "science",
    tags: ["bionic-reading", "research", "speed-reading", "typography"],
    keywords: [
      "does bionic reading work",
      "bionic reading research",
      "bionic reading study",
      "bionic reading effectiveness",
      "bionic reading myth",
    ],
  },
  {
    slug: "what-is-rsvp-reading",
    href: "/blog/what-is-rsvp-reading",
    title: "What Is RSVP Reading? Rapid Serial Visual Presentation Explained",
    description:
      "RSVP flashes words at a fixed point so your eyes stop scanning. Learn how it works, where comprehension holds, where it drops, and how to try it in your browser.",
    date: "2026-09-05",
    readingMinutes: 7,
    category: "technique",
    tags: ["rsvp", "speed-reading", "spritz", "reading-technology"],
    keywords: [
      "what is rsvp reading",
      "rsvp reading",
      "rapid serial visual presentation",
      "rsvp speed reading",
      "spritz reading",
    ],
  },
  {
    slug: "best-reading-apps-for-adhd",
    href: "/blog/best-reading-apps-for-adhd",
    title: "Best Reading Apps for ADHD in 2026: Focus Tools That Help You Finish",
    description:
      "ADHD readers often abandon pages mid-paragraph. Compare RSVP, focus-mode, and text-to-speech apps — and see which approaches actually help you finish what you start.",
    date: "2026-09-05",
    readingMinutes: 8,
    category: "audience",
    tags: ["adhd", "apps", "focus", "comparison"],
    keywords: [
      "best reading apps for adhd",
      "adhd reading app",
      "focus reading app",
      "adhd reading tools",
      "apps to help adhd read",
    ],
  },
  {
    slug: "how-to-focus-while-reading-adhd",
    href: "/blog/how-to-focus-while-reading-adhd",
    title: "How to Focus While Reading with ADHD: Techniques That Stick",
    description:
      "Practical focus tactics for ADHD brains: shorter sessions, external pacing, dual-channel input, and environments that reduce re-reading the same sentence five times.",
    date: "2026-09-05",
    readingMinutes: 7,
    category: "audience",
    tags: ["adhd", "focus", "techniques", "habits"],
    keywords: [
      "how to focus while reading adhd",
      "adhd reading tips",
      "focus while reading",
      "adhd can't focus on reading",
      "reading strategies for adhd",
    ],
  },
  {
    slug: "speed-reading-apps-compared",
    href: "/blog/speed-reading-apps-compared",
    title: "Best Speed Reading Apps Compared (2026): RSVP, Highlight & TTS",
    description:
      "Side-by-side comparison of ReadFast, Spreeder, Outread, Reedy, and Speechify — methods, platforms, pricing, and who each app is best for.",
    date: "2026-09-05",
    readingMinutes: 9,
    category: "comparison",
    tags: ["apps", "comparison", "rsvp", "spreeder", "outread"],
    keywords: [
      "best speed reading apps",
      "speed reading apps compared",
      "spreeder alternative",
      "best rsvp app",
      "outread vs spreeder",
    ],
  },
  {
    slug: "how-to-read-pdfs-faster-students",
    href: "/blog/how-to-read-pdfs-faster-students",
    title: "How to Read PDFs and Textbooks Faster: A Student’s Guide",
    description:
      "Assigned readings pile up fast. Learn a preview–pace–recall system for PDFs and textbooks, plus tools that keep speed and comprehension in balance.",
    date: "2026-09-05",
    readingMinutes: 7,
    category: "audience",
    tags: ["students", "pdf", "textbooks", "study"],
    keywords: [
      "how to read pdfs faster",
      "read textbooks faster",
      "speed reading for students",
      "pdf reading tips",
      "how to read assigned readings faster",
    ],
  },
  {
    slug: "reading-speed-test-results-explained",
    href: "/blog/reading-speed-test-results-explained",
    title: "Reading Speed Test Results Explained: Is Your WPM Score Good?",
    description:
      "Just finished a WPM test? Learn what your score and comprehension percentage mean, realistic targets by reader type, and the next training steps that actually move the needle.",
    date: "2026-09-05",
    readingMinutes: 6,
    category: "data",
    tags: ["reading-speed-test", "wpm", "comprehension", "benchmarks"],
    keywords: [
      "reading speed test results",
      "is my reading speed good",
      "wpm score meaning",
      "reading comprehension score",
      "what is a good reading speed",
    ],
  },
  {
    slug: "skimming-vs-speed-reading-vs-deep-reading",
    href: "/blog/skimming-vs-speed-reading-vs-deep-reading",
    title: "Skimming vs Speed Reading vs Deep Reading: When to Use Each",
    description:
      "These three modes solve different problems. A clear comparison of intent, technique, and trade-offs — so you stop using the wrong mode for the page in front of you.",
    date: "2026-09-05",
    readingMinutes: 6,
    category: "technique",
    tags: ["skimming", "speed-reading", "deep-reading", "comprehension"],
    keywords: [
      "skimming vs speed reading",
      "speed reading vs deep reading",
      "skimming vs reading",
      "when to skim",
      "deep reading",
    ],
  },
  {
    slug: "how-to-read-more-books-without-more-time",
    href: "/blog/how-to-read-more-books-without-more-time",
    title: "How to Read More Books Without More Time",
    description:
      "You don’t need an empty calendar — you need better habits, selective quitting, and a faster reading baseline. Practical systems for clearing your TBR without guilt.",
    date: "2026-09-05",
    readingMinutes: 7,
    category: "habits",
    tags: ["habits", "tbr", "productivity", "books"],
    keywords: [
      "how to read more books",
      "read more without more time",
      "reading habit",
      "tbr pile",
      "how to read more",
    ],
  },
  {
    slug: "stop-regression-reading",
    href: "/blog/stop-regression-reading",
    title:
      "Reading Regression: Why You Keep Re-Reading Lines (And How to Stop)",
    description:
      "Your eyes jump backwards 15–20% of the time without you noticing. Most of it is habit, not need. Learn what causes reading regression and how to build forward momentum instead.",
    date: "2026-09-03",
    readingMinutes: 6,
    category: "technique",
    tags: ["regression", "visual-pacer", "speed-reading", "eye-movement"],
    keywords: [
      "reading regression",
      "stop re-reading",
      "why do I re-read lines",
      "eye regression reading",
      "reduce reading regression",
    ],
  },
  {
    slug: "chunking-speed-reading",
    href: "/blog/chunking-speed-reading",
    title: "You're Reading One Word at a Time. Chunking Fixes That.",
    description:
      "Your eyes can capture multiple words in a single glance — but most readers never use that ability. Learn what chunking is, why it works, and three exercises to make it automatic.",
    date: "2026-09-03",
    readingMinutes: 6,
    category: "technique",
    tags: ["chunking", "speed-reading", "fixation", "peripheral-vision"],
    keywords: [
      "chunking speed reading",
      "chunking reading technique",
      "reading in chunks",
      "word chunking",
      "read faster",
    ],
  },
  {
    slug: "visual-pacer-reading-speed",
    href: "/blog/visual-pacer-reading-speed",
    title:
      "Your Eyes Drift Backwards While You Read. A Visual Pacer Fixes That.",
    description:
      "Most readers regress 10–20 times per 100 words without realising it. Learn what a visual pacer is, why it works, and how to use one to read faster starting today.",
    date: "2026-09-03",
    readingMinutes: 6,
    category: "technique",
    tags: ["visual-pacer", "regression", "speed-reading", "focus"],
    keywords: [
      "visual pacer reading",
      "finger reading technique",
      "eye drift reading",
      "reading pacer",
      "increase reading speed",
    ],
  },
  {
    slug: "reduce-subvocalization",
    href: "/blog/reduce-subvocalization",
    title:
      "The Voice in Your Head Is Reading This Right Now — And It's Slowing You Down",
    description:
      "Your inner voice is capping your reading speed at talking pace. Learn what subvocalization actually is and five field-tested ways to quiet it.",
    date: "2026-08-18",
    readingMinutes: 7,
    category: "technique",
    tags: ["subvocalization", "speed-reading", "inner-voice"],
    keywords: [
      "reduce subvocalization",
      "subvocalization",
      "inner voice reading",
      "stop subvocalizing",
      "subvocalization speed reading",
    ],
  },
  {
    slug: "speed-reading",
    href: "/blog/speed-reading",
    title: "Speed Reading: 5 Techniques to Read Faster with Better Focus",
    description:
      "Learn practical speed reading methods like visual pacing, chunking, and reduced regression.",
    date: "2026-04-17",
    readingMinutes: 3,
    category: "technique",
    tags: [
      "speed-reading",
      "techniques",
      "visual-pacer",
      "chunking",
      "subvocalization",
      "regression",
    ],
    keywords: [
      "speed reading",
      "speed reading techniques",
      "how to speed read",
      "read faster",
      "reading comprehension",
    ],
  },
  {
    slug: "speed-reading-comprehension",
    href: "/blog/speed-reading-comprehension",
    title:
      "The Need for Speed? Why Comprehension Matters More Than Racing Through Pages",
    description:
      "A comprehension-first take on speed reading and why deep reading leads to better retention.",
    date: "2026-05-14",
    readingMinutes: 2,
    category: "science",
    tags: ["comprehension", "deep-reading", "speed-reading"],
    keywords: [
      "speed reading comprehension",
      "speed reading vs comprehension",
      "deep reading",
      "read better",
      "reading retention",
    ],
  },
];

export function getPost(slug: string): BlogPost {
  const post = posts.find((entry) => entry.slug === slug);
  if (!post) {
    throw new Error(`Unknown blog post: ${slug}`);
  }
  return post;
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPost(slug);
  const scored = posts
    .filter((entry) => entry.slug !== slug)
    .map((entry) => {
      const sharedTags = entry.tags.filter((tag) =>
        current.tags.includes(tag),
      ).length;
      const sameCategory = entry.category === current.category ? 2 : 0;
      return { entry, score: sharedTags + sameCategory };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.entry.date.localeCompare(a.entry.date);
    });

  const related = scored.slice(0, limit).map((item) => item.entry);
  if (related.length >= limit) return related;

  const extras = posts.filter(
    (entry) =>
      entry.slug !== slug && !related.some((r) => r.slug === entry.slug),
  );
  return [...related, ...extras].slice(0, limit);
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function getPostLastModified(post: BlogPost): string {
  return post.updated ?? post.date;
}
