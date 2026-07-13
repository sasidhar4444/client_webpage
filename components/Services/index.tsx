import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, Wallet, Building2, TrendingUp } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 text-left">
            <p className="text-sm font-normal tracking-widest text-blue-600 uppercase mb-4">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight">
              Three services. One trusted partner.
            </h2>
            <p className="text-lg text-slate-500">
              Payroll is our specialty. Recruitment is our craft. Consulting is how we help you scale.
            </p>
          </div>

          {/* Cards Column */}
          <div className="lg:col-span-6 flex flex-col gap-8">

            {/* Payroll Card */}
            <Card className="relative rounded-[2rem] border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden group">
              <div className="absolute inset-0 z-0 bg-[url('/payroll-bg.png')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
              <div className="absolute inset-0 z-0 bg-white/85 backdrop-blur-[2px]"></div>

              <div className="relative z-10 p-8">
                <div className="absolute top-8 right-8">
                  <Badge variant="primary" className="bg-[#a3b18a] hover:bg-[#8f9d77] text-white border-transparent">
                    Primary service
                  </Badge>
                </div>

                <div className="w-12 h-12 rounded-xl bg-[#a3b18a] flex items-center justify-center mb-8 shadow-md">
                  <Wallet className="text-white" size={24} />
                </div>

                <h3 className="text-2xl font-normal text-slate-900 mb-4">Payroll Solutions</h3>
                <p className="text-slate-700 font-medium mb-8 leading-relaxed">
                  End-to-end managed payroll for UK employers, from processing to HMRC filings.
                </p>

                <ul className="space-y-4">
                  {["Payroll processing", "HMRC compliance", "Auto enrolment", "Digital payslips", "Reporting & analytics"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                      <CheckCircle2 size={18} className="text-[#a3b18a] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Recruitment Card */}
            <Card className="relative rounded-[2rem] border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden group">
              <div className="absolute inset-0 z-0 bg-[url('/hiring-bg.png')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
              <div className="absolute inset-0 z-0 bg-white/85 backdrop-blur-[2px]"></div>

              <div className="relative z-10 p-8">
                <div className="w-12 h-12 rounded-xl bg-[#a3b18a] flex items-center justify-center mb-8 shadow-md">
                  <Building2 className="text-white" size={24} />
                </div>

                <h3 className="text-2xl font-normal text-slate-900 mb-4">Recruitment</h3>
                <p className="text-slate-700 font-medium mb-8 leading-relaxed">
                  Hire the right people faster across finance, operations and executive roles.
                </p>

                <ul className="space-y-4">
                  {["Permanent hiring", "Contract staffing", "Temporary recruitment", "Executive search"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                      <CheckCircle2 size={18} className="text-[#a3b18a] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Consulting Card */}
            <Card className="relative rounded-[2rem] border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden group">
              <div className="absolute inset-0 z-0 bg-[url('/consulting-bg.png')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
              <div className="absolute inset-0 z-0 bg-white/85 backdrop-blur-[2px]"></div>

              <div className="relative z-10 p-8">
                <div className="w-12 h-12 rounded-xl bg-[#a3b18a] flex items-center justify-center mb-8 shadow-md">
                  <TrendingUp className="text-white" size={24} />
                </div>

                <h3 className="text-2xl font-normal text-slate-900 mb-4">Business Consulting</h3>
                <p className="text-slate-700 font-medium mb-8 leading-relaxed">
                  Strategic advisory to help you tighten operations and grow with confidence.
                </p>

                <ul className="space-y-4">
                  {["Financial advisory", "Process improvement", "Business growth", "Strategic planning"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                      <CheckCircle2 size={18} className="text-[#a3b18a] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}
