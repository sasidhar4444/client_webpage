"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`fixed bottom-24 right-6 z-[100] transition-all duration-300 ${isVisible ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'}`}>
      <button
        onClick={scrollToTop}
        className="w-12 h-12 bg-white text-slate-700 hover:text-blue-600 hover:border-blue-600 border-2 border-slate-300 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} strokeWidth={2.5} />
      </button>
    </div>
  );
}
