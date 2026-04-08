import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { withBasePath } from "@/lib/base-path";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ReadFast — Speed Reading App | Improve Reading Speed & Comprehension",
  description:
    "Improve your reading speed from 200 to 600+ WPM. ReadFast replaces skimming with RSVP technology — boosting reading comprehension so you get through books, PDFs, and articles 3× faster. Free reading app for iOS & Android.",
  metadataBase: new URL("https://readfast.app"),
  icons: {
    icon: withBasePath("/readfast-logo.jpg?v=2"),
    apple: withBasePath("/readfast-logo.jpg?v=2"),
  },
  keywords: [
    "speed reading",
    "reading app",
    "reading speed",
    "reading speed test",
    "check reading speed",
    "reading comprehension",
    "skimming",
    "RSVP reading",
    "reading book",
    "my reading",
    "ADHD reading",
    "PDF reader",
    "bionic reading",
    "text to speech",
  ],
  openGraph: {
    title: "ReadFast — Speed Reading App | Test & Improve Your Reading Speed",
    description:
      "Ditch skimming. Boost your reading speed and comprehension with RSVP technology, focus tools, and unlimited PDF imports. Free reading app for iOS & Android.",
    url: "https://readfast.app",
    siteName: "ReadFast",
    images: [
      {
        url: withBasePath("/og-image.png"),
        width: 1200,
        height: 630,
        alt: "ReadFast — Speed Reading App to Boost Reading Speed and Comprehension",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReadFast — Speed Reading App | Test & Improve Your Reading Speed",
    description:
      "Ditch skimming. Boost your reading speed and comprehension with RSVP technology, focus tools, and unlimited PDF imports.",
    images: [withBasePath("/og-image.png")],
  },
  other: {
    "apple-itunes-app": "app-id=6754703001",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ReadFast - Speed Reading",
    description:
      "Speed reading app using RSVP technology to boost reading speed and comprehension. Read books, PDFs, and articles 3× faster without skimming.",
    applicationCategory: "EducationApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      ratingCount: "1",
    },
    featureList: [
      "Speed reading with RSVP technology",
      "Reading speed test and tracking",
      "Improved reading comprehension",
      "PDF reader with smart text extraction",
      "Bionic reading mode",
      "Text-to-speech",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can I check my reading speed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can check your reading speed using ReadFast's built-in reading speed test. Paste any text into the demo, set a WPM (words per minute) target, and see if you can keep up. Most people read at 200–250 WPM — ReadFast helps you train up to 600+ WPM.",
        },
      },
      {
        "@type": "Question",
        name: "What is a good reading speed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The average reading speed is around 200–250 WPM. A good reading speed with solid comprehension is 300–400 WPM. With RSVP speed reading training, readers can comfortably reach 500–600+ WPM while maintaining strong reading comprehension.",
        },
      },
      {
        "@type": "Question",
        name: "Is skimming bad for reading comprehension?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skimming trades comprehension for speed — you read faster but retain less. RSVP speed reading is different: it trains your brain to process every word faster, so you improve both reading speed and reading comprehension at the same time.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best speed reading app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ReadFast is a top-rated speed reading app for iOS and Android. It uses RSVP technology, bionic reading, focus mode, and text-to-speech to help you read books, PDFs, and articles up to 3× faster — free to download with no ads.",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg text-foreground font-body">
        {children}
      </body>
    </html>
  );
}
