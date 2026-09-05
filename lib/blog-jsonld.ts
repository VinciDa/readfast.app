import type { BlogPost } from "@/lib/blog-posts";
import { getPostLastModified } from "@/lib/blog-posts";

const BASE_URL = "https://readfast.app";

export type FaqItem = {
  question: string;
  answer: string;
};

export type HowToStep = {
  name: string;
  text: string;
};

export function buildBlogPostingJsonLd(
  post: BlogPost,
  options?: { description?: string; image?: string },
) {
  const url = `${BASE_URL}${post.href}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: options?.description ?? post.description,
    url,
    datePublished: post.date,
    dateModified: getPostLastModified(post),
    image: options?.image ?? `${BASE_URL}${post.ogImage ?? "/og-image.png"}`,
    author: {
      "@type": "Organization",
      name: "ReadFast",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "ReadFast",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/readfast-logo.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function buildFaqPageJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BASE_URL}/blog/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${BASE_URL}${post.href}/`,
      },
    ],
  };
}

export function buildHowToJsonLd(
  name: string,
  description: string,
  steps: HowToStep[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
