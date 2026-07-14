"use client";

import { Card } from "@/components/ui/Card";
import { Star, User, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const firstCard = container.children[0] as HTMLElement;
      if (firstCard) {
        // Temporarily disable CSS snapping for the smooth train ride
        container.style.scrollSnapType = 'none';

        const itemWidth = firstCard.offsetWidth + 24; // width + gap
        const visibleItems = Math.max(1, Math.floor(container.clientWidth / itemWidth));
        const scrollAmount = itemWidth * visibleItems;

        const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
        const maxScroll = container.scrollWidth - container.clientWidth;
        const clampedTarget = Math.max(0, Math.min(targetScroll, maxScroll));

        const startScroll = container.scrollLeft;
        const distance = clampedTarget - startScroll;
        const duration = 600; // 600ms for a heavy, train-like slide
        let startTime: number | null = null;

        // Ease In Out Quad for smooth acceleration and deceleration
        const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);

          container.scrollLeft = startScroll + distance * easeInOutQuad(progress);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            // Re-enable snapping when done
            container.style.scrollSnapType = '';
          }
        };

        requestAnimationFrame(animate);
      }
    }
  };
  const testimonials = [
    {
      date: "May 25, 2024",
      title: "Happy Client",
      quote: "Rimaya team was of great support to my recruitment process.",
      type: "icon"
    },
    {
      date: "March 5, 2024",
      title: "Rimaya Recruiting went beyond to assist...",
      quote: "Rimaya Recruiting went beyond to assist me throughout the entire recruitment journey.",
      type: "initial",
      initial: "M",
      bg: "bg-pink-700"
    },
    {
      date: "March 4, 2024",
      title: "RIMAYA Consultancy exemplifies...",
      quote: "RIMAYA Consultancy exemplifies excellence in every aspect. Their unparalleled dedication is truly remarkable.",
      type: "icon"
    },
    {
      date: "March 2, 2024",
      title: "Excellent F&A Outsourcing",
      quote: "Rimaya Ltd exceeded my expectations as a recent graduate looking for a great career start.",
      type: "icon"
    },
    {
      date: "December 10, 2023",
      title: "Best work placement experience",
      quote: "Great team, quick response, good service. I had a wonderful experience.",
      type: "icon"
    },
    {
      date: "November 27, 2023",
      title: "Superb consultancy service!",
      quote: "I used their job consultancy service. I found their onboarding process to be very smooth.",
      type: "icon"
    },
    {
      date: "November 26, 2023",
      title: "me to...",
      quote: "Continuous feedback really helped me to improve my skills for the job market.",
      type: "icon"
    },
    {
      date: "September 28, 2023",
      title: "I recently used a job consultancy...",
      quote: "I recently used a job consultancy service, and I must say Rimaya is the best.",
      type: "icon"
    },
    {
      date: "August 23, 2023",
      title: "Very nice services...",
      quote: "Very nice services provided from Rimaya. I like the treatment and professionalism.",
      type: "initial",
      initial: "N",
      bg: "bg-slate-700"
    },
    {
      date: "August 20, 2023",
      title: "Best recruitment consultants ever",
      quote: "I've had the best experience working with the team at Rimaya.",
      type: "icon"
    },
    {
      date: "August 20, 2023",
      title: "Excellent",
      quote: "Rimaya provided a very good service, before, during, and after the placement.",
      type: "icon"
    },
    {
      date: "August 16, 2023",
      title: "It's very good hiring and onboarding...",
      quote: "It's a very good hiring and onboarding process for me. Mansi was extremely helpful.",
      type: "icon"
    }
  ];

  return (
    <section id="testimonials" className="py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="w-full flex flex-col items-center justify-center text-center mb-16">
          <p className="text-base font-normal tracking-widest text-blue-600 uppercase mb-2 pr-2">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight pr-2">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-12 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-slate-900 hover:scale-105 transition-all border border-slate-100 hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-12 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-slate-900 hover:scale-105 transition-all border border-slate-100 hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-12 pt-8 px-4 -mx-4 hide-scrollbar"
          >
            {testimonials.map((item, i) => (
              <div key={i} className="relative min-w-[280px] max-w-[280px] sm:min-w-[320px] sm:max-w-[320px] md:min-w-[360px] md:max-w-[360px] snap-center shrink-0 my-4">
                <div className="group h-full p-8 rounded-none border border-slate-200 bg-white hover:border-slate-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-left relative z-0 overflow-hidden">
                  
                  {/* Animated Left Accent Line */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>

                  {/* Decorative Quote */}
                  <Quote size={80} className="absolute -top-4 -right-4 text-slate-50 opacity-50 -z-10 rotate-12 group-hover:text-blue-50 transition-colors duration-500" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div key={star} className="bg-[#00b67a] p-[3px] rounded-none">
                        <Star size={14} className="text-white fill-white" />
                      </div>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 pr-10">{item.title}</h3>

                  {/* Quote */}
                  <p className="text-[15px] text-slate-600 leading-relaxed flex-grow">
                    "{item.quote}"
                  </p>

                  {/* Footer (Avatar + Info) */}
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100">
                    {item.type === "initial" ? (
                      <div className={`w-12 h-12 rounded-none ${item.bg} text-white flex items-center justify-center font-semibold text-lg`}>
                        {item.initial}
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-none bg-blue-50 flex items-center justify-center text-blue-300">
                        <User size={24} fill="currentColor" />
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">Verified Client</p>
                      <p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">{item.date}</p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Hide Scrollbar Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
