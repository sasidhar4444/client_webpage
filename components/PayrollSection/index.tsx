"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PayrollSection() {
  const bars = [30, 40, 35, 50, 45, 60, 55, 70, 65, 80, 75, 90, 85, 100];

  return (
    <section className="py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Top Content */}
          <div className="lg:col-span-5">
            <p className="text-sm font-normal tracking-widest text-blue-600 uppercase mb-4">
              Payroll Solutions
            </p>

            <h2 className="text-4xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight leading-[1.15]">
              Payroll that runs itself — and stays HMRC-compliant.
            </h2>

            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              From RTI submissions to auto-enrolment and pension uploads, our specialists handle every detail so you can focus on the business. Employees get modern digital payslips; you get clean reporting.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10 w-full text-left">
              {[
                "RTI & HMRC filings",
                "Statutory pay & leave",
                "Multi-entity payroll",
                "Auto-enrolment pensions",
                "P60s, P45s, P11Ds",
                "Cloud-based dashboard"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <CheckCircle2 size={18} className="text-[#a3b18a] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="gap-2 group">
              Talk to a payroll expert <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Bottom Dashboard Mockup */}
          <div className="lg:col-span-7 flex justify-end w-full">
            <div className="relative w-full max-w-lg lg:ml-auto">

              <Card className="p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border-slate-100/60 bg-white/95 backdrop-blur-sm rounded-[2rem]">

                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Payroll run</p>
                    <h3 className="text-2xl font-normal text-slate-900">November 2025</h3>
                  </div>
                  <Badge variant="success" className="bg-emerald-50 text-emerald-600 border-transparent px-3 py-1">
                    On schedule
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="bg-white border border-slate-100 shadow-sm p-5 rounded-2xl"
                  >
                    <p className="text-sm font-medium text-slate-500 mb-2">Gross</p>
                    <p className="font-normal text-xl text-slate-900">£312,880</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="bg-white border border-slate-100 shadow-sm p-5 rounded-2xl"
                  >
                    <p className="text-sm font-medium text-slate-500 mb-2">Net</p>
                    <p className="font-normal text-xl text-slate-900">£248,930</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="bg-white border border-slate-100 shadow-sm p-5 rounded-2xl"
                  >
                    <p className="text-sm font-medium text-slate-500 mb-2">Deductions</p>
                    <p className="font-normal text-xl text-slate-900">£63,950</p>
                  </motion.div>
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-500 mb-6">Payroll trend</p>
                  <div className="h-32 flex items-end justify-between gap-2">
                    {bars.map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0, opacity: 0 }}
                        whileInView={{ height: `${height}%`, opacity: 0.9 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + (i * 0.05), ease: "easeOut" }}
                        whileHover={{ opacity: 1 }}
                        className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-md cursor-pointer"
                      />
                    ))}
                  </div>
                </div>

              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
