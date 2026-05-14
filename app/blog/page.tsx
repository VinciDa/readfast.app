import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ReadFast Blog | Speed Reading, Focus, and Comprehension",
  description:
    "Explore ReadFast blog posts on speed reading, comprehension, and practical techniques to improve your reading habits.",
  metadataBase: new URL("https://readfast.app"),
  alternates: {
    canonical: "/blog/",
  },
};

const posts = [
  {
    href: "/blog/speed-reading",
    title: "Speed Reading: 5 Techniques to Read Faster with Better Focus",
    description:
      "Learn practical speed reading methods like visual pacing, chunking, and reduced regression.",
  },
  {
    href: "/blog/speed-reading-comprehension",
    title:
      "The Need for Speed? Why Comprehension Matters More Than Racing Through Pages",
    description:
      "A comprehension-first take on speed reading and why deep reading leads to better retention.",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="max-w-4xl mx-auto px-5 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
            ReadFast Blog
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-4">
            Reading Insights and Guides
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-10">
            Browse the latest articles on speed reading, comprehension, and
            practical strategies to read with more clarity.
          </p>

          <div className="space-y-5">
            {posts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="block rounded-2xl border border-border bg-surface/60 p-6 sm:p-7 transition-colors hover:bg-surface-alt/70"
              >
                <h2 className="font-display text-2xl mb-2">{post.title}</h2>
                <p className="text-muted leading-relaxed">{post.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
