"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Briefcase, MapPin, Wallet, Clock, UploadCloud, CheckCircle2, FileText, Loader2 } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CVUpload() {
  const [uploadState, setUploadState] = useState<"idle" | "analyzing" | "complete">("idle");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadState("analyzing");
      // Simulate CV parsing and matching delay
      setTimeout(() => {
        setUploadState("complete");
      }, 2500);
    }
  };

  const matchedJobs = [
    {
      title: "Senior Accountant",
      company: "Meridian Finance",
      location: "London",
      salary: "£55k - £65k",
      type: "Full Time",
      exp: "5+ years",
      badges: ["Finance", "Hybrid"]
    },
    {
      title: "Finance Business Partner",
      company: "Halcyon Group",
      location: "Remote",
      salary: "£65k - £75k",
      type: "Full Time",
      exp: "6+ years",
      badges: ["Finance", "Remote"]
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-normal text-slate-900 mb-4 tracking-tight">
            Find your perfect match
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Upload your CV and our intelligent system will instantly match you with roles that fit your experience and skills.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {uploadState === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-12 border-2 border-dashed border-slate-300 bg-white rounded-none shadow-sm flex flex-col items-center justify-center text-center transition-all hover:border-blue-500 hover:bg-slate-50 group">
                <div className="w-20 h-20 bg-blue-50 rounded-none flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <UploadCloud className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">Upload your CV</h3>
                <p className="text-slate-500 mb-8 max-w-sm">
                  Drag and drop your CV here, or click to browse. We accept PDF, DOCX, and TXT files.
                </p>
                <div className="relative">
                  <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleFileUpload}
                  />
                  <Button size="lg" className="rounded-none bg-blue-600 hover:bg-blue-700 pointer-events-none">
                    Select File
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}

          {uploadState === "analyzing" && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <div className="w-20 h-20 bg-blue-50 rounded-none flex items-center justify-center mb-6">
                <Loader2 className="text-blue-600 animate-spin" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Analyzing your experience...</h3>
              <p className="text-slate-500">Matching your skills against our live database of roles.</p>
            </motion.div>
          )}

          {uploadState === "complete" && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-green-50 border border-green-200 rounded-none p-6 mb-10 flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-none flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900">Analysis Complete!</h3>
                  <p className="text-green-700">We've found {matchedJobs.length} roles that strongly match your profile.</p>
                </div>
                <Button 
                  variant="outline" 
                  className="ml-auto rounded-none border-green-300 text-green-700 hover:bg-green-100 hidden sm:flex"
                  onClick={() => setUploadState("idle")}
                >
                  Upload another CV
                </Button>
              </div>

              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Your Top Matches</h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {matchedJobs.map((job, i) => (
                  <Card key={i} className="p-6 rounded-none border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col h-full hover:border-blue-600 group">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-none bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <Briefcase className="text-blue-600 group-hover:text-white transition-colors" size={20} />
                      </div>
                      <div className="flex gap-2">
                        {job.badges.map((badge, j) => (
                          <Badge key={j} className="bg-slate-50 text-slate-600 border border-slate-200 font-medium rounded-none">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900 mb-1">{job.title}</h3>
                    <p className="text-slate-500 mb-6">{job.company}</p>

                    <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-8 mt-auto">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <MapPin size={16} className="text-slate-400" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Wallet size={16} className="text-slate-400" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Clock size={16} className="text-slate-400" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <FileText size={16} className="text-slate-400" />
                        <span>{job.exp}</span>
                      </div>
                    </div>

                    <Link href="/apply">
                      <Button className="w-full bg-slate-900 hover:bg-blue-600 transition-colors text-white rounded-none">
                        Apply for this role
                      </Button>
                    </Link>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
