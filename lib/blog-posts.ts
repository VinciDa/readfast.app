export type BlogPost = {
  slug: string;
  href: string;
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
};

export const posts: BlogPost[] = [
  {
    slug: "stop-regression-reading",
    href: "/blog/stop-regression-reading",
    title:
      "Reading Regression: Why You Keep Re-Reading Lines (And How to Stop)",
    description:
      "Your eyes jump backwards 15–20% of the time without you noticing. Most of it is habit, not need. Learn what causes reading regression and how to build forward momentum instead.",
    date: "2026-09-03",
    readingMinutes: 6,
  },
  {
    slug: "chunking-speed-reading",
    href: "/blog/chunking-speed-reading",
    title:
      "You're Reading One Word at a Time. Chunking Fixes That.",
    description:
      "Your eyes can capture multiple words in a single glance — but most readers never use that ability. Learn what chunking is, why it works, and three exercises to make it automatic.",
    date: "2026-09-03",
    readingMinutes: 6,
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
  },
  {
    slug: "speed-reading",
    href: "/blog/speed-reading",
    title: "Speed Reading: 5 Techniques to Read Faster with Better Focus",
    description:
      "Learn practical speed reading methods like visual pacing, chunking, and reduced regression.",
    date: "2026-04-17",
    readingMinutes: 3,
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
  },
];

export function getPost(slug: string): BlogPost {
  const post = posts.find((entry) => entry.slug === slug);
  if (!post) {
    throw new Error(`Unknown blog post: ${slug}`);
  }
  return post;
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
