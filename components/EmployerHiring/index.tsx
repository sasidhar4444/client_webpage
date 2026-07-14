"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, TrendingUp, Users, Clock, ArrowRight, Building } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EmployerHiring() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your hiring request. A specialized recruiter will contact you within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };

  const benefits = [
    {
      title: "Pre-vetted Network",
      description: "Access an exclusive talent pool of highly qualified professionals, thoroughly vetted for both skill and cultural fit.",
      icon: Users
    },
    {
      title: "Faster Placements",
      description: "Reduce your time-to-hire by up to 40% with our streamlined, proactive recruitment methodology.",
      icon: Clock
    },
    {
      title: "Industry Expertise",
      description: "Benefit from specialized recruiters who deeply understand the nuances of the finance, payroll, and operations sectors.",
      icon: TrendingUp
    }
  ];

  const steps = [
    { num: "01", title: "Consultation", desc: "We discuss your specific needs, company culture, and the exact requirements for the role." },
    { num: "02", title: "Sourcing", desc: "Our team leverages our extensive network and targeted outreach to find the perfect candidates." },
    { num: "03", title: "Interview", desc: "We manage the logistics, presenting you only with top-tier candidates ready to make an impact." },
    { num: "04", title: "Placement", desc: "From offer negotiation to onboarding support, we ensure a seamless transition for your new hire." }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 bg-[url('/business2.png')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6 rounded-none text-sm font-semibold tracking-wide uppercase">
              <Building size={16} />
              Employer Services
            </div>
            <h1 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight leading-tight">
              Build your dream team with precision.
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              We connect ambitious UK employers with exceptional specialists in finance, payroll, and operations. Let us handle the recruitment, so you can focus on growth.
            </p>
            <div className="flex gap-4">
              <Link href="#contact-employer">
                <Button size="lg" className="rounded-none bg-blue-600 hover:bg-blue-700 text-white border-none text-lg px-8 py-6">
                  Start Hiring Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-6 tracking-tight">
              Why partner with Rimaya?
            </h2>
            <p className="text-lg text-slate-600">
              We don't just fill seats; we build high-performing teams that drive your business forward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="p-8 rounded-none border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 bg-white group hover:border-blue-600">
                <div className="w-14 h-14 bg-blue-50 flex items-center justify-center rounded-none mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <benefit.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32 z-20 bg-white/90 lg:bg-transparent py-4 lg:py-0">
              <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-6 tracking-tight">
                Our proven recruitment methodology
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                A structured, transparent approach designed to deliver the best talent with minimal disruption to your daily operations.
              </p>
            </div>
            
            <div className="lg:w-2/3">
              <div className="space-y-12">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 border-2 border-slate-200 rounded-none flex items-center justify-center text-xl font-bold text-slate-400 group-hover:border-blue-600 group-hover:text-blue-600 transition-colors bg-white z-10">
                        {step.num}
                      </div>
                      {idx !== steps.length - 1 && (
                        <div className="w-0.5 h-full bg-slate-200 mt-4 group-hover:bg-blue-200 transition-colors"></div>
                      )}
                    </div>
                    <div className="pt-3 pb-8">
                      <h3 className="text-2xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-employer" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-t-4 border-t-blue-600 border-x border-b border-slate-200 p-10 md:p-14 rounded-none shadow-xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-normal text-slate-900 mb-4 tracking-tight">
                Tell us about your hiring needs
              </h2>
              <p className="text-slate-600">
                Fill out the form below and one of our specialized recruiters will contact you within 24 hours.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-none border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="e.g. Acme Corp" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-none border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="John Doe" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-none border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-none border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="+44 123 456 7890" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Role(s) you are looking to fill</label>
                <input type="text" className="w-full px-4 py-3 rounded-none border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="e.g. Senior Payroll Manager, Finance Director" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Additional Details</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-none border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="Any specific requirements, timelines, or context..."></textarea>
              </div>

              <Button type="submit" className="w-full bg-slate-900 hover:bg-blue-600 text-white rounded-none py-6 text-lg transition-colors mt-4">
                Submit Hiring Request
              </Button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
