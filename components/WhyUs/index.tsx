import { Card } from "@/components/ui/Card";
import { Users, Zap, ShieldCheck, Headphones } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: <Users className="text-emerald-500" size={24} />,
      bg: "bg-emerald-50",
      title: "Industry Experts",
      desc: "Deep expertise across finance, HR and payroll."
    },
    {
      icon: <Zap className="text-purple-500" size={24} />,
      bg: "bg-purple-50",
      title: "Fast Recruitment",
      desc: "Shortlists in days — not months."
    },
    {
      icon: <ShieldCheck className="text-cyan-500" size={24} />,
      bg: "bg-cyan-50",
      title: "Payroll Specialists",
      desc: "HMRC-compliant, end-to-end managed."
    },
    {
      icon: <Headphones className="text-blue-500" size={24} />,
      bg: "bg-blue-50",
      title: "Dedicated Support",
      desc: "A named consultant, always on hand."
    }
  ];

  return (
    <section id="about" className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-normal tracking-widest text-blue-600 uppercase mb-4">
            Why Rimaya
          </p>
          <h2 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight">
            Built for the way UK businesses actually hire and pay
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="p-8 rounded-[2rem] border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-normal text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.desc}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
