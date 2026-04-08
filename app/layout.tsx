import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "ReadFast — Speed Reading App for iPhone & Android",
  description:
    "Read 3× faster with RSVP technology. ReadFast helps students, professionals, and ADHD readers focus, retain more, and power through PDFs and books. Free on iOS & Android.",
  metadataBase: new URL("https://readfast.app"),
  keywords: [
    "speed reading",
    "RSVP reading",
    "reading app",
    "focus",
    "ADHD reading",
    "PDF reader",
    "bionic reading",
    "text to speech",
  ],
  openGraph: {
    title: "ReadFast — Read 3× Faster. Retain What Matters.",
    description:
      "Speed reading app with RSVP technology, focus tools, and unlimited PDF imports. Free on iOS & Android.",
    url: "https://readfast.app",
    siteName: "ReadFast",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ReadFast — Speed Reading App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReadFast — Read 3× Faster. Retain What Matters.",
    description:
      "Speed reading app with RSVP technology, focus tools, and unlimited PDF imports.",
    images: ["/og-image.png"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ReadFast - Speed Reading",
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
  };

  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg text-foreground font-body">
        {children}
      </body>
    </html>
  );
}
