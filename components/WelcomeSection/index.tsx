"use client";

import { motion } from "framer-motion";
import DelayedFadeIn from "@/components/DelayedFadeIn";

export default function WelcomeSection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight drop-shadow-sm"
        >
          Welcome to Rimaya Recruitment
        </motion.h2>

        <DelayedFadeIn>
          <div className="w-16 h-1.5 bg-blue-600 mx-auto mb-8 rounded-full shadow-sm"></div>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
            We work round the clock to support both candidates and clients throughout the full recruitment process. With access to all leading job boards, Social media, local networking and having general knowledge of the UK market we are in a great place to support you and your businesses.
          </p>
        </DelayedFadeIn>
      </div>
    </section>
  );
}
