import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Zap, Users, Building, FileCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-4 md:pt-8 pb-10 lg:pt-10 lg:pb-16 bg-[url('/hero-bg.jpg')] bg-cover bg-center">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <div className="max-w-2xl bg-white/85 backdrop-blur-md p-8 sm:p-10 rounded-[2rem] shadow-xl border border-white/50">
            <Badge variant="default" className="mb-6 font-medium text-slate-700 gap-1.5 py-1 px-3 bg-white/60 border-white/40 backdrop-blur-md hover:bg-white/80 shadow-sm">
              <Zap size={14} className="text-[#4E8F52]" />
              Trusted UK Payroll & Recruitment
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-[#4E8F52] tracking-tight leading-[1.1] mb-6 animate-fade-up drop-shadow-sm">
              Recruiting Accountancy, <br />
              Finance, and Admin <br />
              Professionals in the UK
            </h1>

            <p className="text-lg text-slate-700 mb-8 max-w-lg leading-relaxed font-medium">
              Rimaya Ltd delivers HMRC-compliant payroll, expert recruitment across finance and operations, and strategic consulting — everything a growing UK business needs, from one dedicated partner.
            </p>

            <div className="hidden flex-wrap gap-4 mb-12">
              <Button size="lg" className="gap-2 group">
                Hire Talent <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white">
                Find Jobs
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm font-normal text-slate-800 drop-shadow-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <span>HMRC compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-emerald-500" />
                <span>ICO registered</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={18} className="text-cyan-500 fill-cyan-500" />
                <span>4.9/5 client rating</span>
              </div>
            </div>
          </div>

          {/* Right Dashboard Mockup */}
          <div className="hidden relative mx-auto w-full max-w-[480px] lg:max-w-[500px] xl:max-w-[580px]">

            {/* Main Card */}
            <Card className="p-6 md:p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border-slate-100/60 bg-white/95 backdrop-blur-sm rounded-[2rem]">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-xs font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                  payroll.rimaya.co.uk
                </div>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <Building className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Companies served</p>
                  <p className="text-2xl font-normal text-slate-900">120+</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight">£248,930.14</h2>
                <div className="mt-3 flex justify-end">
                  <Badge variant="success" className="gap-1 px-3 py-1 bg-emerald-50 text-emerald-600 border-emerald-100">
                    <CheckCircle2 size={14} /> Filed to HMRC
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-2xl">
                  <p className="text-xs font-medium text-slate-500 mb-1">Employees</p>
                  <p className="font-normal text-slate-900">142</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl">
                  <p className="text-xs font-medium text-slate-500 mb-1">PAYE</p>
                  <p className="font-normal text-slate-900">£38.4k</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl">
                  <p className="text-xs font-medium text-slate-500 mb-1">Pensions</p>
                  <p className="font-normal text-slate-900">£12.1k</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Amelia Clarke", role: "Senior Accountant", amount: "£4,820", initials: "AC" },
                  { name: "Priya Patel", role: "Payroll Manager", amount: "£3,940", initials: "PP" },
                  { name: "Thomas Reid", role: "Finance Analyst", amount: "£3,210", initials: "TR" }
                ].map((emp, i) => (
                  <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-2xl transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-normal shadow-sm">
                        {emp.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">{emp.name}</p>
                        <p className="text-xs text-slate-500">{emp.role}</p>
                      </div>
                    </div>
                    <p className="font-semibold text-slate-900 text-sm">{emp.amount}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Floating Widgets */}
            <Card className="absolute -left-2 sm:left-4 -bottom-12 p-4 shadow-xl border-slate-100 rounded-2xl animate-float bg-white flex items-center gap-3 z-20">
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                <FileCheck size={20} className="text-slate-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">Payroll experts</p>
                <p className="font-normal text-slate-900 text-sm">Certified team</p>
              </div>
            </Card>

            <Card className="absolute -right-2 sm:-right-6 lg:-right-8 top-32 p-4 shadow-xl border-slate-100 rounded-2xl animate-float-slow bg-white flex items-center gap-3 z-20">
              <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center">
                <Users size={20} className="text-cyan-500" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">Candidates placed</p>
                <p className="font-normal text-slate-900 text-sm">4,000+</p>
              </div>
            </Card>

            <Card className="absolute -right-2 sm:-right-4 -bottom-6 p-4 shadow-xl border-slate-100 rounded-2xl animate-float-delayed bg-white flex items-center gap-3 z-20">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                <Zap size={20} className="text-emerald-500" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">Time to hire</p>
                <p className="font-normal text-slate-900 text-sm">Under 14 days</p>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}
