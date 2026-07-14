import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CandidateSupport from "@/components/CandidateSupport";
import DelayedFadeIn from "@/components/DelayedFadeIn";

export default function CandidateSupportPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <DelayedFadeIn className="sticky top-0 z-50 w-full">
        <Navbar />
      </DelayedFadeIn>
      
      <div className="flex-grow">
        <CandidateSupport />
      </div>
      
      <DelayedFadeIn>
        <Footer />
      </DelayedFadeIn>
    </main>
  );
}
