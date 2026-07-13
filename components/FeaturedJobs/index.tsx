import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Briefcase, MapPin, Wallet, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedJobs() {
  const filters = ["Remote", "Hybrid", "Full Time", "Contract", "Finance", "Payroll", "Accounting"];

  const jobs = [
    {
      title: "Senior Accountant",
      company: "Meridian Finance",
      location: "London",
      salary: "£55k - £65k",
      type: "Full Time",
      exp: "5+ years",
      badges: ["Finance", "Hybrid"]
    },
    {
      title: "Payroll Manager",
      company: "Rimaya Ltd",
      location: "Manchester",
      salary: "£48k - £58k",
      type: "Full Time",
      exp: "4+ years",
      badges: ["Payroll", "Hybrid"]
    },
    {
      title: "Finance Business Partner",
      company: "Halcyon Group",
      location: "Remote",
      salary: "£65k - £75k",
      type: "Full Time",
      exp: "6+ years",
      badges: ["Finance", "Remote"]
    },
    {
      title: "HR Executive",
      company: "Kingsway Retail",
      location: "Birmingham",
      salary: "£40k - £48k",
      type: "Full Time",
      exp: "3+ years",
      badges: ["HR", "Hybrid"]
    },
    {
      title: "Accounts Assistant",
      company: "Foundry Studio",
      location: "Leeds",
      salary: "£28k - £34k",
      type: "Contract",
      exp: "1+ years",
      badges: ["Accounting", "Contract"]
    },
    {
      title: "Head of Payroll Ops",
      company: "Northwind Ltd",
      location: "London",
      salary: "£80k - £95k",
      type: "Full Time",
      exp: "8+ years",
      badges: ["Payroll", "Full Time"]
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-normal tracking-widest text-blue-600 uppercase mb-4">
            Featured Roles
          </p>
          <h2 className="text-4xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight">
            Live jobs, hand-picked by our team
          </h2>
          <p className="text-lg text-slate-500">
            Explore roles across finance, payroll and operations from the UK's most exciting employers.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter, i) => (
            <button
              key={i}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${i === 0
                  ? "bg-slate-900 text-white"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {jobs.map((job, i) => (
            <Card key={i} className="p-8 rounded-[2rem] border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">

              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <Briefcase className="text-white" size={20} />
                </div>
                <div className="flex gap-2">
                  {job.badges.map((badge, j) => (
                    <Badge key={j} className="bg-slate-50 text-slate-600 border border-slate-100 font-medium">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-normal text-slate-900 mb-1">{job.title}</h3>
              <p className="text-slate-500 mb-8">{job.company}</p>

              <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-8 mt-auto">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <MapPin size={16} className="text-slate-400" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Wallet size={16} className="text-slate-400" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Clock size={16} className="text-slate-400" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Briefcase size={16} className="text-slate-400" />
                  <span>{job.exp}</span>
                </div>
              </div>

              <Link href="/apply">
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full">
                  Apply now
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/jobs">
            <Button variant="outline" className="rounded-full gap-2">
              View all jobs <ArrowRight size={16} />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
