"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // @ts-ignore
        body: new URLSearchParams(formData).toString(),
      });
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-blue-600 font-normal tracking-widest text-base uppercase mb-4 pl-[0.1em]">Contact</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#0f172a] tracking-tight mb-4">Talk to a Rimaya specialist</h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Tell us about your business or role — we'll get back to you within one working day.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Contact Cards */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-4 space-y-4"
            >
              {/* Email */}
              <div className="bg-white rounded-none p-6 border border-slate-200 shadow-md flex items-start gap-4 hover:border-l-4 hover:border-l-blue-600 transition-all">
                <div className="w-10 h-10 rounded-none bg-slate-50 border border-slate-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div className="pt-0.5">
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-slate-900 font-medium text-sm">hello@rimaya.co.uk</p>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-none p-6 border border-slate-200 shadow-md flex items-start gap-4 hover:border-l-4 hover:border-l-blue-600 transition-all">
                <div className="w-10 h-10 rounded-none bg-slate-50 border border-slate-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div className="pt-0.5">
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-slate-900 font-medium text-sm">+44 20 4577 2100</p>
                </div>
              </div>

              {/* Office */}
              <div className="bg-white rounded-none p-6 border border-slate-200 shadow-md flex items-start gap-4 hover:border-l-4 hover:border-l-blue-600 transition-all">
                <div className="w-10 h-10 rounded-none bg-slate-50 border border-slate-100 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="pt-0.5">
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Office</p>
                  <p className="text-slate-900 font-medium text-sm">124 City Road, London EC1V 2NX</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-8"
            >
              <div className="bg-white rounded-none p-8 lg:p-12 border border-slate-200 shadow-xl relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
                
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-500">Thank you for reaching out. We will get back to you within one working day.</p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 text-blue-600 font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form 
                    name="contact" 
                    method="POST" 
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-800 mb-2">Full name <span className="text-blue-600">*</span></label>
                        <input name="name" required type="text" className="w-full px-4 py-3 rounded-none border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-slate-900 text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-800 mb-2">Company</label>
                        <input name="company" type="text" className="w-full px-4 py-3 rounded-none border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-slate-900 text-sm" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-800 mb-2">Work email <span className="text-blue-600">*</span></label>
                        <input name="email" required type="email" className="w-full px-4 py-3 rounded-none border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-slate-900 text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-800 mb-2">Phone</label>
                        <input name="phone" type="tel" className="w-full px-4 py-3 rounded-none border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-slate-900 text-sm" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-2">I'm interested in</label>
                      <div className="relative">
                        <select name="interest" className="w-full px-4 py-3 rounded-none border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all appearance-none text-slate-900 text-sm">
                          <option>Payroll solutions</option>
                          <option>Recruitment services</option>
                          <option>Consulting</option>
                          <option>Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-2">Message</label>
                      <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-none border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none text-slate-900 text-sm placeholder:text-slate-400" placeholder="Tell us a little about your business or the role you're looking for."></textarea>
                    </div>

                    <div className="pt-2">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="bg-[#0f172a] text-white px-8 py-3.5 rounded-none font-medium hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-2 text-sm w-full sm:w-auto shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Sending..." : "Send message"}
                        {!isSubmitting && <Send size={16} className="ml-1" />}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
