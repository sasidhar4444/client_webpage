"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FileText, MessageSquare, BookOpen, ChevronRight, UploadCloud, Search } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CandidateSupport() {
  const resources = [
    {
      title: "CV Writing Guide",
      description: "Learn how to structure your CV, highlight your achievements, and catch a recruiter's eye.",
      icon: FileText,
      link: "#"
    },
    {
      title: "Interview Preparation",
      description: "Master behavioral questions, technical assessments, and how to present your best self.",
      icon: MessageSquare,
      link: "#"
    },
    {
      title: "Salary Negotiation",
      description: "Understand market rates and learn strategies to confidently negotiate your compensation package.",
      icon: BookOpen,
      link: "#"
    }
  ];

  const faqs = [
    {
      q: "Does it cost me anything to use Rimaya?",
      a: "No, our services are completely free for candidates. We are paid by the employers who hire through us."
    },
    {
      q: "Will my current employer know I'm looking?",
      a: "Absolutely not. We treat every application with the strictest confidentiality and will never contact your current employer."
    },
    {
      q: "What types of roles do you typically place?",
      a: "We specialize in Finance, Payroll, and Operations, ranging from entry-level administrative roles to executive leadership."
    },
    {
      q: "How long does the recruitment process take?",
      a: "Timelines vary by employer, but we aim to move quickly. Typically, candidates can go from first interview to offer in 2-4 weeks."
    }
  ];

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 bg-[url('/hiring2.png')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6 rounded-none text-sm font-semibold tracking-wide uppercase">
              <Users size={16} />
              Candidate Hub
            </div>
            <h1 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight leading-tight">
              Empowering your next career move.
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              We provide the resources, guidance, and connections you need to land your ideal role in finance, payroll, or operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/upload-cv">
                <Button size="lg" className="rounded-none bg-blue-600 hover:bg-blue-700 text-white border-none text-lg flex items-center gap-2">
                  <UploadCloud size={20} />
                  Upload your CV
                </Button>
              </Link>
              <Link href="/jobs">
                <button className="inline-flex items-center justify-center h-12 px-8 rounded-none bg-transparent hover:bg-white/10 text-white border border-white text-lg flex items-center gap-2 font-medium transition-colors">
                  <Search size={20} />
                  Search Live Jobs
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-6 tracking-tight">
              Career Resources
            </h2>
            <p className="text-lg text-slate-600">
              Expert advice curated by our recruitment specialists to help you stand out.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, idx) => (
              <Link href={resource.link} key={idx} className="block group">
                <Card className="p-8 rounded-none border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col hover:border-blue-600 bg-slate-50 group-hover:bg-white">
                  <div className="w-14 h-14 bg-blue-50 flex items-center justify-center rounded-none mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <resource.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{resource.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow">{resource.description}</p>
                  
                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform mt-auto">
                    Read guide <ChevronRight size={18} className="ml-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to know about working with Rimaya.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-8 rounded-none border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Have a question that isn't answered here?</p>
            <Link href="/contact">
              <Button variant="outline" className="rounded-none border-slate-300 text-slate-900 hover:bg-slate-100">
                Contact our support team
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

// Ensure we have the Users icon available
import { Users } from "lucide-react";
