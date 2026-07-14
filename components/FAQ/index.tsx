"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What size businesses do you support?",
      a: "We support a wide range of businesses, from growing startups needing their first structured payroll and recruitment processes, to established enterprises looking to streamline operations."
    },
    {
      q: "Is your payroll service HMRC compliant?",
      a: "Yes, our payroll services are 100% HMRC compliant. We handle all RTI submissions, auto-enrolment, and statutory calculations, so you don't have to worry about penalties."
    },
    {
      q: "How quickly can you fill a role?",
      a: "Depending on the role's complexity, we typically provide a shortlist of highly qualified candidates within 3 to 7 days, significantly reducing your time-to-hire."
    },
    {
      q: "Do you support contract and temporary hiring?",
      a: "Absolutely. We have a robust network of contractors and temporary staff ready to step in for short-term projects, maternity cover, or seasonal peaks."
    },
    {
      q: "How do I apply for a job?",
      a: "You can apply directly through our Jobs portal. Just upload your CV and fill out a short form. Our team will review your application and get in touch."
    },
    {
      q: "What does consulting cover?",
      a: "Our consulting services cover HR strategy, operational efficiency, financial advisory, and process improvement to help you scale smoothly and sustainably."
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-base font-normal tracking-widest text-blue-600 uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-4xl font-normal text-slate-900 tracking-tight">
            Answers to the questions we hear most
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border rounded-none overflow-hidden transition-all duration-300 border-l-4 ${isOpen ? "border-slate-200 border-l-blue-600 bg-slate-50" : "border-slate-100 border-l-transparent bg-white hover:border-slate-200"
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-inset"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                  <span className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    {isOpen ? <Minus size={20} className="text-slate-500" /> : <Plus size={20} className="text-slate-500" />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-200 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
