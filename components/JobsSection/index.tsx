import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Briefcase, UploadCloud, Search, Building, Users } from "lucide-react";
import Link from "next/link";

export default function JobsSection() {
  const openRoles = [
    { title: "Senior Accountant", location: "London : £58k" },
    { title: "HR Executive", location: "Manchester : £45k" },
    { title: "Finance Manager", location: "Remote : £70k" },
  ];

  return (
    <section id="jobs" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content - Text Section */}
          <div className="max-w-xl">
            <p className="text-sm font-normal tracking-widest text-blue-600 uppercase mb-4">
              Recruitment
            </p>

            <h2 className="text-4xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight leading-[1.15]">
              Hire smarter. Get hired faster.
            </h2>

            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              We match ambitious candidates with UK employers who need specialists. Whether you're hiring or looking, our team is with you at every step.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#a3b18a]/10 flex items-center justify-center shrink-0">
                  <UploadCloud size={20} className="text-[#a3b18a]" />
                </div>
                <span className="font-semibold text-slate-900 text-sm">Upload your CV</span>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#a3b18a]/10 flex items-center justify-center shrink-0">
                  <Search size={20} className="text-[#a3b18a]" />
                </div>
                <span className="font-semibold text-slate-900 text-sm">Search live jobs</span>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#a3b18a]/10 flex items-center justify-center shrink-0">
                  <Building size={20} className="text-[#a3b18a]" />
                </div>
                <span className="font-semibold text-slate-900 text-sm">Employer hiring</span>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#a3b18a]/10 flex items-center justify-center shrink-0">
                  <Users size={20} className="text-[#a3b18a]" />
                </div>
                <span className="font-semibold text-slate-900 text-sm">Candidate support</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/jobs">
                <Button size="lg">
                  Browse jobs
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="rounded-full">
                  Hire talent
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Open Roles */}
          <Card className="p-8 shadow-sm border-slate-100 bg-white rounded-[2rem]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-normal text-slate-900">Open roles</h3>
              <Link href="/jobs" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                View all
              </Link>
            </div>

            <div className="space-y-4">
              {openRoles.map((role, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl hover:border-slate-200 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center shrink-0">
                      <Briefcase size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-normal text-slate-900 text-base">{role.title}</p>
                      <p className="text-sm text-slate-500">{role.location}</p>
                    </div>
                  </div>
                  <Link href="/apply">
                    <Button variant="primary" className="rounded-full px-6 bg-slate-900 hover:bg-slate-800">
                      Apply
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}
