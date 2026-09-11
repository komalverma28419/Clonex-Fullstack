import React from "react";
import { TrendingUp } from "lucide-react";

const CallAnalytics = () => {
  const stats = [
    ["Total Calls", "12,482", "+12.4%"],
    ["Answered", "10,921", "+8.2%"],
    ["Missed", "1,561", "-4.6%"],
    ["Avg. Duration", "04:32", "+6.8%"]]
  const sources = [
    ["Google Ads", "482", "82%"],
    ["Organic Search", "326", "67%"],
    ["Facebook", "218", "51%"],
    ["Instagram", "156", "38%"]]

  return (
    <section className="bg-slate-50 dark:bg-dark-background py-6 md:py-10 xl:py-14">
      <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">

        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase text-blue-600 dark:text-blue-400">Call Analytics</span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Turn Every Call Into{" "}
            <span className="text-blue-600 dark:text-blue-400">Actionable Data</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">Get a clear view of your 
            call performance and understand which channels are driving meaningful conversations.</p>
        </div>

        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl 
        shadow-blue-100/20 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none md:p-7">
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map(([title, value, growth]) => (
              <div key={title} className="rounded-2xl border border-slate-100 p-5 dark:border-slate-800">
                <p className="text-xs text-slate-500">{title}</p>
                <div className="mt-2 flex items-end justify-between">
                  <p className="text-2xl font-bold">{value}</p>
                  <span className="text-xs font-semibold text-emerald-500">{growth}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
            <div className="rounded-2xl border border-slate-100 p-5 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Call Trends</p>
                  <p className="mt-1 text-xs text-slate-500">Number of calls over time</p>
                </div>
                <TrendingUp className="text-blue-500" size={18}/>
              </div>

              <div className="relative mt-8 h-48">
                <div className="absolute inset-0 flex flex-col justify-between">
                  <span className="border-t border-slate-100 dark:border-slate-800" />
                  <span className="border-t border-slate-100 dark:border-slate-800" />
                  <span className="border-t border-slate-100 dark:border-slate-800" />
                  <span className="border-t border-slate-100 dark:border-slate-800" />
                </div>

                <svg viewBox="0 0 700 180" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                  <path d="M0 145 C60 120 90 130 140 100 C190 70 220 115 270 80 C320 48 350 95 400 65 C450 35 500 70 545 45 C600 15 650 40 700 18 L700 180 L0 180 Z"
                   fill="rgb(59 130 246 / 0.10)"/>
                  <path d="M0 145 C60 120 90 130 140 100 C190 70 220 115 270 80 C320 48 350 95 400 65 C450 35 500 70 545 45 C600 15 650 40 700 18" fill="none" stroke="rgb(59 130 246)"
                    strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 p-5 dark:border-slate-800">
              <p className="font-semibold">Calls by Source</p>
              <div className="mt-6 space-y-5">
                {sources.map(([name, calls, width]) => (
                  <div key={name}>
                    <div className="mb-2 flex justify-between text-xs">
                      <span className="text-slate-500">{name}</span>
                      <span className="font-semibold">{calls}</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <div className="h-full rounded-full bg-blue-500" style={{ width }}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
export default CallAnalytics