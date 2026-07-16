import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Navigation } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Image 
                src="/Rimaya_logo.jpeg" 
                alt="Rimaya Recruitment" 
                width={240} 
                height={80} 
                className="h-24 w-auto object-contain"
              />
            </div>

            <p className="text-sm leading-relaxed mb-8 max-w-sm">
              Payroll, recruitment and business consulting for UK companies that want to hire smarter, stay compliant and grow with confidence.
            </p>

            <h4 className="text-white font-normal mb-6 mt-8">Corporate Office</h4>
            <div className="space-y-4 text-sm">
              <a href="https://maps.app.goo.gl/V4dPngjhpeH19wFN7" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-blue-400 transition-colors">
                <Navigation size={18} className="text-white shrink-0 mt-0.5" />
                <span>Rimaya Ltd, 22, Westfield Garden, RM6 4BY, Romford, UK</span>
              </a>
              <a href="tel:+447448111418" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span>+44 7448111418</span>
              </a>
              <a href="mailto:Info@rimaya.co.uk" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <Mail size={18} className="text-white shrink-0" />
                <span>Info@rimaya.co.uk</span>
              </a>
              <a href="tel:02034906598" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <span className="shrink-0 text-base leading-none w-[18px] inline-flex justify-center">☎️</span>
                <span>020 34906598</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-normal mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-normal mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/#payroll" className="hover:text-white transition-colors">Payroll</Link></li>
              <li><Link href="/#recruitment" className="hover:text-white transition-colors">Recruitment</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-normal mb-6">Jobs</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/jobs" className="hover:text-white transition-colors">Browse Jobs</a></li>
              <li><a href="/apply" className="hover:text-white transition-colors">Upload CV</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Employers</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <p className="text-xs text-slate-500">
            © 2026 Rimaya Ltd. Registered in England & Wales.
          </p>
          <div className="flex items-center gap-4 md:pr-24">
            <Link href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors">
              <Mail size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
