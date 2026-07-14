import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmployerHiring from "@/components/EmployerHiring";
import DelayedFadeIn from "@/components/DelayedFadeIn";

export default function EmployerHiringPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <DelayedFadeIn className="sticky top-0 z-50 w-full">
        <Navbar />
      </DelayedFadeIn>
      
      <div className="flex-grow">
        <EmployerHiring />
      </div>
      
      <DelayedFadeIn>
        <Footer />
      </DelayedFadeIn>
    </main>
  );
}
