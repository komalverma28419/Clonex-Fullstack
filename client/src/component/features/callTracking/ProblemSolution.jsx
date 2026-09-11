import React from "react";
import { ArrowRight, Check, X } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    "You don't know which campaign generated the call",
    "Offline conversations are disconnected from marketing data",
    "Missed calls can mean missed opportunities",
    "Measuring marketing ROI becomes difficult",]
  const solutions = [
    "Know exactly where every call comes from",
    "Connect calls with campaigns and traffic sources",
    "Identify missed calls and follow-up opportunities",
    "Use real call data to optimize marketing ROI",]

  return (
    <section className="relative overflow-hidden dark:bg-dark-alternate py-6 md:py-10 xl:py-14">
      <div className="mx-auto max-w-7xl px-7 lg:px-12 xl:px-14">

        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Why Call Tracking?</span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Your Calls Tell a Story.<br />
            <span className="text-blue-600 dark:text-blue-400"> We Help You Understand It.</span>
          </h2>
          <p className="mt-2 text-slate-600 dark:text-muted">
            Traditional analytics can show where visitors come from. Call tracking helps you understand 
            what happens when they pick up the phone.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900/50">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200 dark:bg-slate-800">
                <X size={18} className="text-slate-500" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500"> Without</p>
                <h3 className="font-bold">Traditional Tracking</h3>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {problems.map((item) => (
                <div key={item} className="flex gap-3">
                  <X size={17} className="mt-1 shrink-0 text-slate-400" />
                  <p className="text-sm text-font dark:text-dark-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
            <ArrowRight size={19} />
          </div>

          <div className="rounded-3xl border border-blue-200 bg-blue-50/50 p-7 shadow-xl shadow-blue-100/30 dark:border-blue-500/20 dark:bg-blue-500/5 dark:shadow-none">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Check size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  With
                </p>
                <h3 className="font-bold">Call Tracking</h3>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {solutions.map((item) => (
                <div key={item} className="flex gap-3">
                  <Check size={17} className="mt-1 shrink-0 text-blue-500" />
                  <p className="text-sm text-font dark:text-dark-muted">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
export default ProblemSolution;