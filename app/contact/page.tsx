import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-blue-500 font-normal tracking-widest text-[11px] uppercase mb-4">Contact</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#0f172a] tracking-tight mb-4">Talk to a Rimaya specialist</h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Tell us about your business or role — we'll get back to you within one working day.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-4 space-y-4">
              {/* Email */}
              <div className="bg-white rounded-[1.5rem] p-6 border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-400 flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div className="pt-0.5">
                  <p className="text-[10px] font-normal text-slate-400 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-slate-900 font-medium text-sm">hello@rimaya.co.uk</p>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-[1.5rem] p-6 border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-400 flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div className="pt-0.5">
                  <p className="text-[10px] font-normal text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-slate-900 font-medium text-sm">+44 20 4577 2100</p>
                </div>
              </div>

              {/* Office */}
              <div className="bg-white rounded-[1.5rem] p-6 border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-400 flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="pt-0.5">
                  <p className="text-[10px] font-normal text-slate-400 uppercase tracking-wider mb-1">Office</p>
                  <p className="text-slate-900 font-medium text-sm">124 City Road, London EC1V 2NX</p>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-[2rem] p-8 lg:p-10 border border-slate-100 shadow-sm">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full name <span className="text-blue-500">*</span></label>
                      <input type="text" className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                      <input type="text" className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 text-sm" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Work email <span className="text-blue-500">*</span></label>
                      <input type="email" className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 text-sm" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">I'm interested in</label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-white text-slate-700 text-sm">
                        <option>Payroll solutions</option>
                        <option>Recruitment services</option>
                        <option>Consulting</option>
                        <option>Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-slate-900 text-sm placeholder:text-slate-400" placeholder="Tell us a little about your business or the role you're looking for."></textarea>
                  </div>

                  <div>
                    <button type="button" className="bg-[#0f172a] text-white px-6 py-3.5 rounded-full font-medium hover:bg-slate-800 transition-all flex items-center gap-2 mt-2 text-sm">
                      Send message
                      <Send size={14} className="ml-1" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
