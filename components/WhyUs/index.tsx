import { Card } from "@/components/ui/Card";
import { Users, Zap, ShieldCheck, Headphones } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: Users,
      bg: "bg-blue-50",
      title: "Industry Experts",
      desc: "Deep expertise across finance, HR and payroll."
    },
    {
      icon: Zap,
      bg: "bg-blue-50",
      title: "Fast Recruitment",
      desc: "Shortlists in days — not months."
    },
    {
      icon: ShieldCheck,
      bg: "bg-blue-50",
      title: "Payroll Specialists",
      desc: "HMRC-compliant, end-to-end managed."
    },
    {
      icon: Headphones,
      bg: "bg-blue-50",
      title: "Dedicated Support",
      desc: "A named consultant, always on hand."
    }
  ];

  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-base font-normal tracking-widest text-blue-600 uppercase mb-4 pl-[0.1em]">
            Why Rimaya
          </p>
          <h2 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight">
            Built for the way UK businesses actually hire and pay
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="group border border-slate-200 bg-white flex flex-col hover:border-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className={`w-14 h-14 rounded-none ${feature.bg} flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300`}>
                  <feature.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
