import Navbar from "@/components/Navbar";
import DelayedFadeIn from "@/components/DelayedFadeIn";
import Hero from "@/components/Hero";
import TrustedCompanies from "@/components/TrustedCompanies";
import Services from "@/components/Services";
import PayrollSection from "@/components/PayrollSection";
import JobsSection from "@/components/JobsSection";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <DelayedFadeIn className="sticky top-0 z-50 w-full">
        <Navbar />
      </DelayedFadeIn>
      <main>
        <DelayedFadeIn duration={1.5}>
          <Hero />
        </DelayedFadeIn>
        <DelayedFadeIn>
          <TrustedCompanies />
          <Services />
          <PayrollSection />
          <JobsSection />
          <Process />
          <WhyUs />
          <Testimonials />
          <FAQ />
          <CTA />
        </DelayedFadeIn>
      </main>
      <DelayedFadeIn>
        <Footer />
      </DelayedFadeIn>
    </>
  );
}
