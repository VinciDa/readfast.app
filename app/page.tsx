import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import RSVPDemo from "@/components/RSVPDemo";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <Features />
        <SocialProof />
        <RSVPDemo />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
