import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, Wallet, Building2, TrendingUp } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-base font-normal tracking-widest text-blue-600 uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight">
            Three services. One trusted partner.
          </h2>
          <p className="text-lg text-slate-500">
            Payroll is our specialty. Recruitment is our craft. Consulting is how we help you scale.
          </p>
        </div>

        {/* Cards Row */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Payroll Card */}
          <Card className="relative rounded-none border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden group bg-white">
            
            {/* Animated Bottom Border */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[[lab(36_30.43_-81.2_/_0.91)]] transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20"></div>

            {/* Background Watermark Icon */}
            <div className="absolute -bottom-8 -right-8 text-slate-50 opacity-80 group-hover:scale-110 group-hover:-rotate-12 group-hover:text-slate-100 transition-all duration-700 z-0 pointer-events-none">
              <Wallet size={180} strokeWidth={1} />
            </div>

            <div className="relative z-10 p-8">
              <div className="absolute top-8 right-8">
                <Badge variant="primary">
                  Primary service
                </Badge>
              </div>

              <div className="relative w-12 h-12 mb-8">
                <div className="absolute inset-0 bg-[[lab(36_30.43_-81.2_/_0.91)]] rounded-xl blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative w-12 h-12 rounded-xl bg-[[lab(36_30.43_-81.2_/_0.91)]] flex items-center justify-center shadow-md">
                  <Wallet className="text-white" size={22} />
                </div>
              </div>

              <h3 className="text-xl font-normal text-slate-900 mb-3 group-hover:text-[[lab(36_30.43_-81.2_/_0.91)]] transition-colors">Payroll Solutions</h3>
              <p className="text-sm text-slate-700 font-medium mb-6 leading-relaxed">
                End-to-end managed payroll for UK employers, from processing to HMRC filings.
              </p>

              <ul className="space-y-3">
                {["Payroll processing", "HMRC compliance", "Auto enrolment", "Digital payslips", "Reporting & analytics"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-800 font-medium">
                    <CheckCircle2 size={16} className="text-[[lab(36_30.43_-81.2_/_0.91)]] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Recruitment Card */}
          <Card className="relative rounded-none border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden group bg-white">

            {/* Animated Bottom Border */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[[lab(36_30.43_-81.2_/_0.91)]] transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20"></div>

            {/* Background Watermark Icon */}
            <div className="absolute -bottom-8 -right-8 text-slate-50 opacity-80 group-hover:scale-110 group-hover:-rotate-12 group-hover:text-slate-100 transition-all duration-700 z-0 pointer-events-none">
              <Building2 size={180} strokeWidth={1} />
            </div>

            <div className="relative z-10 p-8">
              <div className="relative w-12 h-12 mb-8">
                <div className="absolute inset-0 bg-[[lab(36_30.43_-81.2_/_0.91)]] rounded-xl blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative w-12 h-12 rounded-xl bg-[[lab(36_30.43_-81.2_/_0.91)]] flex items-center justify-center shadow-md">
                  <Building2 className="text-white" size={22} />
                </div>
              </div>

              <h3 className="text-xl font-normal text-slate-900 mb-3 group-hover:text-[[lab(36_30.43_-81.2_/_0.91)]] transition-colors">Recruitment</h3>
              <p className="text-sm text-slate-700 font-medium mb-6 leading-relaxed">
                Hire the right people faster across finance, operations and executive roles.
              </p>

              <ul className="space-y-3">
                {["Permanent hiring", "Contract staffing", "Temporary recruitment", "Executive search"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-800 font-medium">
                    <CheckCircle2 size={16} className="text-[[lab(36_30.43_-81.2_/_0.91)]] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Consulting Card */}
          <Card className="relative rounded-none border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden group bg-white">

            {/* Animated Bottom Border */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[[lab(36_30.43_-81.2_/_0.91)]] transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20"></div>

            {/* Background Watermark Icon */}
            <div className="absolute -bottom-8 -right-8 text-slate-50 opacity-80 group-hover:scale-110 group-hover:-rotate-12 group-hover:text-slate-100 transition-all duration-700 z-0 pointer-events-none">
              <TrendingUp size={180} strokeWidth={1} />
            </div>

            <div className="relative z-10 p-8">
              <div className="relative w-12 h-12 mb-8">
                <div className="absolute inset-0 bg-[[lab(36_30.43_-81.2_/_0.91)]] rounded-xl blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative w-12 h-12 rounded-xl bg-[[lab(36_30.43_-81.2_/_0.91)]] flex items-center justify-center shadow-md">
                  <TrendingUp className="text-white" size={22} />
                </div>
              </div>

              <h3 className="text-xl font-normal text-slate-900 mb-3 group-hover:text-[[lab(36_30.43_-81.2_/_0.91)]] transition-colors">Business Consulting</h3>
              <p className="text-sm text-slate-700 font-medium mb-6 leading-relaxed">
                Strategic advisory to help you tighten operations and grow with confidence.
              </p>

              <ul className="space-y-3">
                {["Financial advisory", "Process improvement", "Business growth", "Strategic planning"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-800 font-medium">
                    <CheckCircle2 size={16} className="text-[[lab(36_30.43_-81.2_/_0.91)]] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}
