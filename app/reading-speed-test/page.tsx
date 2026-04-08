import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReadingSpeedTest from "@/components/ReadingSpeedTest";

export const metadata: Metadata = {
  title: "Free Reading Speed Test — Check Your WPM in 2 Minutes | ReadFast",
  description:
    "Take our free reading speed test and calculate your reading speed in words per minute (WPM). Check reading comprehension too — then discover how to read 3× faster with ReadFast.",
  metadataBase: new URL("https://readfast.app"),
  alternates: {
    canonical: "https://readfast.app/reading-speed-test",
  },
  keywords: [
    "reading speed test",
    "check reading speed",
    "calculate reading speed",
    "check my reading speed",
    "how fast do i read",
    "words per minute test",
    "WPM test",
    "reading comprehension test",
    "speed reading test",
    "free reading test",
  ],
  openGraph: {
    title: "Free Reading Speed Test — Check Your WPM in 2 Minutes",
    description:
      "Calculate your reading speed for free. Read a passage, answer 3 comprehension questions, and get your WPM score instantly.",
    url: "https://readfast.app/reading-speed-test",
    siteName: "ReadFast",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ReadFast Free Reading Speed Test",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Reading Speed Test — Check Your WPM in 2 Minutes",
    description:
      "Calculate your reading speed for free. Get your WPM score + comprehension check in under 2 minutes.",
    images: ["/og-image.png"],
  },
};

export default function ReadingSpeedTestPage() {
  return (
    <>
      <Navbar />
      <main>
        <ReadingSpeedTest />
      </main>
      <Footer />
    </>
  );
}
