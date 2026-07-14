"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId?: string, targetPath: string = '/') => {
    if (window.location.pathname === targetPath) {
      if (targetId) {
        const element = document.querySelector(targetId);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }
      } else {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center h-full">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 mr-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-900 to-blue-500 shadow-sm flex items-center justify-center text-white font-normal text-lg">
                R
              </div>
              <span className="font-normal text-xl text-slate-900 tracking-tight">Rimaya</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex h-full border-r border-slate-100">
              <Link href="/" onClick={(e) => handleScroll(e, undefined, '/')} className="px-4 xl:px-6 h-full flex items-center border-l border-slate-100 text-slate-800 font-medium text-sm hover:text-slate-900 hover:bg-slate-50 transition-colors">Home</Link>
              <Link href="/#services" onClick={(e) => handleScroll(e, '#services', '/')} className="px-4 xl:px-6 h-full flex items-center border-l border-slate-100 text-slate-500 font-medium text-sm hover:text-slate-900 hover:bg-slate-50 transition-colors">Services</Link>
              <Link href="/#jobs" onClick={(e) => handleScroll(e, '#jobs', '/')} className="px-4 xl:px-6 h-full flex items-center border-l border-slate-100 text-slate-500 font-medium text-sm hover:text-slate-900 hover:bg-slate-50 transition-colors">Jobs</Link>
              <Link href="/#about" onClick={(e) => handleScroll(e, '#about', '/')} className="px-4 xl:px-6 h-full flex items-center border-l border-slate-100 text-slate-500 font-medium text-sm hover:text-slate-900 hover:bg-slate-50 transition-colors">About</Link>
              <Link href="/contact" onClick={(e) => handleScroll(e, undefined, '/contact')} className="px-4 xl:px-6 h-full flex items-center border-l border-slate-100 text-slate-500 font-medium text-sm hover:text-slate-900 hover:bg-slate-50 transition-colors">Contact</Link>
              <Link href="/employer-hiring" className="px-4 xl:px-6 h-full flex items-center border-l border-slate-100 text-slate-500 font-medium text-sm hover:text-slate-900 hover:bg-slate-50 transition-colors">Employer Hiring</Link>
              <Link href="/candidate-support" className="px-4 xl:px-6 h-full flex items-center border-l border-slate-100 text-slate-500 font-medium text-sm hover:text-slate-900 hover:bg-slate-50 transition-colors">Candidate Support</Link>
            </div>
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/#testimonials" onClick={(e) => handleScroll(e, '#testimonials', '/')}>
              <Button variant="outline" className="hidden xl:inline-flex border-slate-200 text-slate-700 hover:bg-slate-50">What Our Clients Say</Button>
            </Link>
            <Link href="/contact" onClick={(e) => handleScroll(e, undefined, '/contact')}>
              <Button variant="primary">Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-500 hover:text-slate-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-lg">
            <Link href="/" onClick={(e) => handleScroll(e, undefined, '/')} className="block text-slate-900 font-medium text-base hover:text-blue-600">Home</Link>
            <Link href="/#services" onClick={(e) => handleScroll(e, '#services', '/')} className="block text-slate-500 font-medium text-base hover:text-slate-900">Services</Link>
            <Link href="/#jobs" onClick={(e) => handleScroll(e, '#jobs', '/')} className="block text-slate-500 font-medium text-base hover:text-slate-900">Jobs</Link>
            <Link href="/#about" onClick={(e) => handleScroll(e, '#about', '/')} className="block text-slate-500 font-medium text-base hover:text-slate-900">About</Link>
            <Link href="/contact" onClick={(e) => handleScroll(e, undefined, '/contact')} className="block text-slate-500 font-medium text-base hover:text-slate-900">Contact</Link>
            <Link href="/employer-hiring" onClick={() => setIsOpen(false)} className="block text-slate-500 font-medium text-base hover:text-slate-900">Employer Hiring</Link>
            <Link href="/candidate-support" onClick={() => setIsOpen(false)} className="block text-slate-500 font-medium text-base hover:text-slate-900">Candidate Support</Link>
            <Link href="/contact" onClick={(e) => handleScroll(e, undefined, '/contact')} className="block w-full mt-4">
              <Button variant="primary" className="w-full">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
