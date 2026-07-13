"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function DelayedFadeIn({ children, className = "", duration = 2.5, delay = 0 }: { children: ReactNode, className?: string, duration?: number, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
