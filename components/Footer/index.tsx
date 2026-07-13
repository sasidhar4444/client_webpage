import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-normal text-lg">
                R
              </div>
              <span className="font-normal text-xl text-white tracking-tight">Rimaya Ltd</span>
            </div>
            
            <p className="text-sm leading-relaxed mb-8 max-w-sm">
              Payroll, recruitment and business consulting for UK companies that want to hire smarter, stay compliant and grow with confidence.
            </p>
            
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-cyan-500 shrink-0 mt-0.5" />
                <span>124 City Road, London EC1V 2NX, United Kingdom</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-cyan-500 shrink-0" />
                <span>hello@rimaya.co.uk</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-cyan-500 shrink-0" />
                <span>+44 20 4577 2100</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-normal mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-normal mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Payroll</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Recruitment</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-normal mb-6">Jobs</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Browse Jobs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Upload CV</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Employers</Link></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2026 Rimaya Ltd. Registered in England & Wales.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
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
            <Link href="#" className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors">
              <Mail size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
