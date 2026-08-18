import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RsvpTryOut from "@/components/RsvpTryOut";
import MobileStickyBar from "@/components/MobileStickyBar";

export const metadata: Metadata = {
  title: "Try RSVP Speed Reading Free — Then Read PDFs in the App | ReadFast",
  description:
    "Paste a short excerpt and try RSVP in your browser. Feel one-word-at-a-time reading, then download ReadFast to import PDFs, track WPM, and keep going on iOS & Android.",
  metadataBase: new URL("https://readfast.app"),
  alternates: {
    canonical: "/rsvp/",
  },
  keywords: [
    "RSVP reading",
    "RSVP speed reader",
    "try RSVP",
    "speed reading online",
    "rapid serial visual presentation",
    "speed reading app",
    "read faster",
  ],
  openGraph: {
    title: "Try RSVP Speed Reading Free — Then Read PDFs in the App",
    description:
      "A 500-word RSVP try-out in your browser. Download ReadFast to import PDFs, books, and your reading list.",
    url: "https://readfast.app/rsvp",
    siteName: "ReadFast",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ReadFast RSVP try-out",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Try RSVP Speed Reading Free — Then Read PDFs in the App",
    description:
      "A 500-word RSVP try-out in your browser. Download ReadFast to keep going.",
    images: ["/og-image.png"],
  },
};

export default function RsvpPage() {
  return (
    <>
      <Navbar />
      <main>
        <RsvpTryOut />
      </main>
      <Footer />
      <MobileStickyBar utmContent="rsvp_sticky" />
    </>
  );
}
