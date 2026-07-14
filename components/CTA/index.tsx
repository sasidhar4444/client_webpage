"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="py-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-[2.5rem] overflow-hidden min-h-[420px] sm:min-h-[500px] lg:min-h-[600px] text-left"
        >
          {/* Background Image & Overlays */}
          <div className="absolute inset-0 bg-[url('/grow.png')] bg-cover bg-[position:-35px_center] lg:bg-[center_15%]" />
          <div className="absolute inset-0 bg-slate-900/10" />
          {/* Buttons Positioned Next to Text */}
          <div className="absolute bottom-20 sm:bottom-24 lg:bottom-[4.5rem] right-4 sm:right-8 lg:right-auto lg:left-[28%] z-10 w-[140px] sm:w-[200px]">
            <div className="flex flex-col gap-4 justify-start">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
              >
                <Link href="/employer-hiring" className="w-full block">
                  <Button className="w-full !bg-white !text-slate-900 hover:!bg-slate-100 rounded-full font-semibold shadow-lg !h-10 sm:!h-14 !text-sm sm:!text-lg">
                    Hire Talent
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
              >
                <Link href="/#jobs" className="w-full block">
                  <Button
                    variant="outline"
                    className="w-full !bg-slate-900/40 backdrop-blur-md !text-white !border-white/20 hover:!bg-slate-900/60 hover:!text-white rounded-full font-semibold shadow-lg !h-10 sm:!h-14 !text-sm sm:!text-lg"
                  >
                    Search jobs
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
        </div>
    </section>
  );
}
