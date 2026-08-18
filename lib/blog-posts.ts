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
