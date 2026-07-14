"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { UploadCloud, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";

export default function ApplyPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch("/", {
        method: "POST",
        // Do not set Content-Type header when sending FormData with files; 
        // the browser will automatically set it to multipart/form-data with the correct boundary.
        body: formData,
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <section className="flex-grow py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white border border-slate-100 shadow-xl rounded-[2rem] p-8 md:p-12">
            {!isSubmitted ? (
              <>
                <div className="mb-10 text-center">
                  <h1 className="text-3xl md:text-4xl font-normal text-slate-900 mb-4">
                    Apply Online
                  </h1>
                  <p className="text-slate-500">
                    Fill out the form below and upload your CV to apply for open roles.
                  </p>
                </div>

                <form 
                  name="application" 
                  method="POST" 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="application" />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-slate-900 mb-2">First Name</label>
                      <input 
                        name="firstName"
                        type="text" 
                        id="firstName" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#a3b18a]/50 focus:border-[#a3b18a] transition-all bg-slate-50 focus:bg-white"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-slate-900 mb-2">Last Name</label>
                      <input 
                        name="lastName"
                        type="text" 
                        id="lastName" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#a3b18a]/50 focus:border-[#a3b18a] transition-all bg-slate-50 focus:bg-white"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
                      <input 
                        name="email"
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#a3b18a]/50 focus:border-[#a3b18a] transition-all bg-slate-50 focus:bg-white"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">Phone Number</label>
                      <input 
                        name="phone"
                        type="tel" 
                        id="phone" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#a3b18a]/50 focus:border-[#a3b18a] transition-all bg-slate-50 focus:bg-white"
                        placeholder="+44 7700 900077"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-slate-900 mb-2">Target Role / Industry</label>
                    <select 
                      name="role"
                      id="role" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#a3b18a]/50 focus:border-[#a3b18a] transition-all bg-slate-50 focus:bg-white text-slate-700"
                    >
                      <option>Finance & Accounting</option>
                      <option>Payroll</option>
                      <option>Human Resources</option>
                      <option>Operations</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-semibold text-slate-900 mb-2">Cover Letter / Message</label>
                    <textarea 
                      name="coverLetter"
                      id="coverLetter" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#a3b18a]/50 focus:border-[#a3b18a] transition-all bg-slate-50 focus:bg-white resize-none"
                      placeholder="Tell us a bit about your experience..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Upload CV</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-xl hover:bg-slate-50 hover:border-[#a3b18a] transition-colors cursor-pointer group relative">
                      <div className="space-y-2 text-center relative z-10 pointer-events-none">
                        <UploadCloud className="mx-auto h-12 w-12 text-slate-400 group-hover:text-[#a3b18a] transition-colors" />
                        <div className="flex text-sm text-slate-600 justify-center">
                          <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-[#a3b18a] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#a3b18a]">
                            <span>Upload a file</span>
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-slate-500">
                          PDF, DOC, DOCX up to 10MB
                        </p>
                      </div>
                      <input 
                        id="file-upload" 
                        name="cv-upload" 
                        type="file" 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" 
                        required 
                        accept=".pdf,.doc,.docx" 
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-[#a3b18a] hover:bg-[#8f9d77] text-white disabled:opacity-70 disabled:cursor-not-allowed">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-[#a3b18a]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-[#a3b18a]" />
                </div>
                <h2 className="text-3xl font-normal text-slate-900 mb-4">Application Submitted!</h2>
                <p className="text-lg text-slate-500 mb-8 max-w-md mx-auto">
                  Thank you for applying. We have received your CV and will be in touch shortly if your profile matches our requirements.
                </p>
                <Link href="/jobs">
                  <Button variant="outline" className="rounded-full">
                    Back to Jobs
                  </Button>
                </Link>
              </div>
            )}
          </div>
          
        </div>
      </section>

      <Footer />
    </main>
  );
}
