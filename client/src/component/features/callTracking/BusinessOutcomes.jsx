import React from "react";
import { Check } from "lucide-react";

const BusinessOutcomes = () => {
  const outcomes = [
    {
      title: "Measure Marketing",
      text: "Know which campaigns and channels generate valuable calls.",
    },
    {
      title: "Improve Lead Quality",
      text: "Understand which sources bring meaningful customer conversations.",
    },
    {
      title: "Reduce Missed Opportunities",
      text: "Identify missed calls and improve follow-up processes.",
    },
    {
      title: "Optimize ROI",
      text: "Use real call data to make smarter marketing decisions.",
    },
  ];

  return (
    <section className="bg-white dark:bg-dark-alternate py-6 md:py-10 xl:py-14">
      <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">

        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Business Outcomes
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Built to Help Your{" "}
            <span className="text-blue-600 dark:text-blue-400">Business Grow</span>
          </h2>
        </div>

        {/* Outcome Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item) => (
            <div key={item.title}
              className="rounded-2xl border border-slate-200 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/20 dark:border-slate-800 dark:hover:border-blue-500/30 dark:hover:shadow-none">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/10">
                <Check size={18} className="text-blue-600 dark:text-blue-400"/>
              </div>
              <h3 className="mt-5 font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{item.text}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
export default BusinessOutcomes;