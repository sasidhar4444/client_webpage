import { Button } from "@/components/ui/Button";

export default function CTA() {
  return (
    <section id="contact" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 text-white py-20 px-6 text-center">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight">
              Ready to grow your business or career?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10">
              Whether you're hiring, job hunting, or scaling operations — let's talk.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="!bg-white !text-slate-900 hover:!bg-slate-100 rounded-full font-semibold">
                Hire Talent
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="!bg-transparent !text-white !border-white/20 hover:!bg-white/10 hover:!text-white rounded-full font-semibold"
              >
                Browse Jobs
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
