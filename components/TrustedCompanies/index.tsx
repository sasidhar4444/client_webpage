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
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="text-xl md:text-2xl font-normal text-slate-400/80 hover:text-slate-600 transition-colors cursor-default"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
