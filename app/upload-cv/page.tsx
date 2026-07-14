import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CVUpload from "@/components/CVUpload";
import DelayedFadeIn from "@/components/DelayedFadeIn";

export default function UploadCVPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <DelayedFadeIn className="sticky top-0 z-50 w-full">
        <Navbar />
      </DelayedFadeIn>
      
      <div className="flex-grow">
        <CVUpload />
      </div>
      
      <DelayedFadeIn>
        <Footer />
      </DelayedFadeIn>
    </main>
  );
}
