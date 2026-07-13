import FeaturedJobs from "@/components/FeaturedJobs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function JobsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      


      <FeaturedJobs />
      
      <Footer />
    </main>
  );
}
