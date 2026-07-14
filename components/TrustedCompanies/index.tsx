export default function TrustedCompanies() {
  const companies = [
    "Northwind",
    "Meridian",
    "Aster & Co.",
    "Kingsway",
    "Halcyon",
    "Foundry",
  ];

  return (
    <section className="py-6 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-normal tracking-widest text-slate-400 uppercase mb-8">
          Trusted by growing businesses
        </p>
        
        <div className="overflow-hidden flex whitespace-nowrap relative group">
          <div className="flex animate-marquee items-center shrink-0 gap-x-12 md:gap-x-20 pr-12 md:pr-20 group-hover:[animation-play-state:paused]">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="text-xl md:text-2xl font-normal text-slate-400/80 hover:text-slate-600 transition-colors cursor-default"
              >
                {company}
              </div>
            ))}
          </div>
          <div className="flex animate-marquee items-center shrink-0 gap-x-12 md:gap-x-20 pr-12 md:pr-20 group-hover:[animation-play-state:paused]" aria-hidden="true">
            {companies.map((company, index) => (
              <div 
                key={`dup-${index}`} 
                className="text-xl md:text-2xl font-normal text-slate-400/80 hover:text-slate-600 transition-colors cursor-default"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
