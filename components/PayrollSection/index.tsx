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
            <p className="text-base font-normal tracking-widest text-blue-600 uppercase mb-4">
              Payroll Solutions
            </p>

            <h2 className="text-4xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight leading-[1.15]">
              Payroll that runs itself and stays HMRC compliant.
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

              <Card className="p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100/60 border-t-4 border-t-[#a3b18a] bg-white/95 backdrop-blur-sm rounded-none">

                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Payroll run</p>
                    <h3 className="text-2xl font-normal text-slate-900">November 2025</h3>
                  </div>
                  <Badge variant="success" className="bg-emerald-50 text-emerald-600 border-transparent px-3 py-1">
                    On schedule
                  </Badge>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="bg-white border border-slate-100 border-l-2 border-l-[#a3b18a] shadow-sm p-5 rounded-none"
                  >
                    <p className="text-sm font-medium text-slate-500 mb-2">Gross</p>
                    <p className="font-normal text-xl text-slate-900">£312,880</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="bg-white border border-slate-100 border-l-2 border-l-[#a3b18a] shadow-sm p-5 rounded-none"
                  >
                    <p className="text-sm font-medium text-slate-500 mb-2">Net</p>
                    <p className="font-normal text-xl text-slate-900">£248,930</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="bg-white border border-slate-100 shadow-sm p-5 rounded-none"
                  >
                    <p className="text-sm font-medium text-slate-500 mb-2">Deductions</p>
                    <p className="font-normal text-xl text-slate-900">£63,950</p>
                  </motion.div>
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-500 mb-6">Payroll trend</p>
                  <div className="h-32 w-full relative">
                    {(() => {
                      const max = 100;
                      const width = 1000;
                      const height = 200;
                      const points = bars.map((val, i) => ({
                        x: (i / (bars.length - 1)) * width,
                        y: height - (val / max) * height
                      }));

                      let pathD = `M ${points[0].x},${points[0].y}`;
                      for (let i = 0; i < points.length - 1; i++) {
                        const curr = points[i];
                        const next = points[i + 1];
                        const cp1x = curr.x + (next.x - curr.x) / 2;
                        const cp1y = curr.y;
                        const cp2x = curr.x + (next.x - curr.x) / 2;
                        const cp2y = next.y;
                        pathD += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${next.x},${next.y}`;
                      }
                      const areaD = `${pathD} L ${width},${height} L 0,${height} Z`;

                      return (
                        <svg viewBox="0 -40 1000 260" className="w-full h-full overflow-visible">
                          <defs>
                            <linearGradient id="trendGradient" x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0%" stopColor="#4E8F52" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#4E8F52" stopOpacity="0" />
                            </linearGradient>
                          </defs>

                          {/* Grid Lines */}
                          {[0, 50, 100, 150, 200].map((y, i) => (
                            <line key={i} x1="0" y1={y} x2="1000" y2={y} stroke="#f8fafc" strokeWidth="2" />
                          ))}

                          <motion.path
                            d={areaD}
                            fill="url(#trendGradient)"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                          <motion.path
                            d={pathD}
                            fill="none"
                            stroke="#4E8F52"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                          />

                          {/* Data Points */}
                          {points.map((p, i) => (
                            <motion.circle
                              key={i}
                              cx={p.x}
                              cy={p.y}
                              r="4"
                              fill="#ffffff"
                              stroke="#4E8F52"
                              strokeWidth="3"
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 1 + (i * 0.05), duration: 0.3 }}
                            />
                          ))}

                          {/* Data Labels (Peaks only) */}
                          {points.map((p, i) => {
                            const isPeak = i > 0 && bars[i] > bars[i - 1] && (i === bars.length - 1 || bars[i] > bars[i + 1]);
                            if (!isPeak) return null;
                            const valK = Math.floor(bars[i] * 3.1288);
                            return (
                              <motion.text
                                key={`text-${i}`}
                                x={i === points.length - 1 ? p.x - 5 : p.x}
                                y={p.y - 20}
                                fill="#64748b"
                                fontSize="22"
                                fontWeight="600"
                                textAnchor={i === points.length - 1 ? "end" : "middle"}
                                initial={{ opacity: 0, y: p.y - 10 }}
                                whileInView={{ opacity: 1, y: p.y - 20 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.2 + (i * 0.05), duration: 0.3 }}
                              >
                                £{valK}k
                              </motion.text>
                            );
                          })}
                        </svg>
                      );
                    })()}
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
