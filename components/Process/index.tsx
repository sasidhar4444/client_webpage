import { Search, UploadCloud, Handshake, MessageSquare } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: <Search className="text-white" size={24} />,
      step: "STEP 1",
      title: "Search Jobs",
      desc: "Browse curated live roles across the UK."
    },
    {
      icon: <UploadCloud className="text-white" size={24} />,
      step: "STEP 2",
      title: "Upload CV",
      desc: "Send your CV in seconds. We do the rest."
    },
    {
      icon: <Handshake className="text-white" size={24} />,
      step: "STEP 3",
      title: "Interview",
      desc: "We prepare you and coordinate every stage."
    },
    {
      icon: <MessageSquare className="text-white" size={24} />,
      step: "STEP 4",
      title: "Get Hired",
      desc: "Land the role — with ongoing support."
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-normal tracking-widest text-blue-600 uppercase mb-4">
            How it works
          </p>
          <h2 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight">
            A simple path from search to signed offer
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] border-t-[2px] border-dashed border-blue-200 -z-10" />

          <div className="grid md:grid-cols-4 gap-12">
            {steps.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20 ring-8 ring-white">
                  {item.icon}
                </div>
                <p className="text-xs font-normal text-slate-500 mb-2 uppercase tracking-wider">{item.step}</p>
                <h3 className="text-xl font-normal text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed max-w-[220px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
