import React from "react";
import { Check, ChevronRight } from "lucide-react";

const CallAttribution = () => {
  const points = [
    "Track calls from every marketing channel",
    "Identify high-performing campaigns",
    "Understand which sources generate quality leads"]

  const attributionSteps = [
    {  
      icon: "G",
      title: "Google Ads",
      subtitle: "Paid Search Campaign",
    },
    {
      icon: "◎",
      title: "Your Website",
      subtitle: "Landing Page Visit",
    },
    {
      icon: "☎",
      title: "Incoming Call",
      subtitle: "+91 1800 123 4567",
    }]

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-dark-background py-6 md:py-10 xl:py-14">
      <div className="grid items-center gap-14 lg:grid-cols-2 max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">

        <div>
          <span className="inline-flex rounded-full bg-blue-50 px-3.5 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
            Call Attribution
          </span>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            Know Exactly Where{" "}
            <span className="text-blue-600 dark:text-blue-400">Your Calls Come From</span>
          </h2>
          <p className="mt-2 text-font dark:text-dark-muted">Connect every inbound call
            to the campaign, channel, keyword,or landing page that brought the customer to your business.
          </p>

          <div className="mt-6 space-y-3">
            {points.map((item) => (
              <div key={item} className="flex gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/10">
                  <Check size={13} className="text-blue-600" />
                </div>
                <p className="text-sm text-font/80 dark:text-dark-muted/80">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-blue-100/30 dark:border-dark-border dark:bg-slate-900 dark:shadow-none md:p-6">

          {attributionSteps.map((item, index) => (
            <React.Fragment key={item.title}>
              <div className="flex items-center gap-4 rounded-lg border border-slate-100 bg-slate-50 
                p-3 dark:border-slate-800 dark:bg-slate-800/50">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white font-bold text-blue-600 shadow-sm dark:bg-slate-700 dark:text-blue-400">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{item.subtitle}</p>
                </div>
              </div>
              {index !== 2 && (
                <div className="flex justify-center py-1.5">
                  <ChevronRight size={18} className="rotate-90 text-blue-400"/>
                </div>
              )}
            </React.Fragment>
          ))}
          <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-500/20 dark:bg-emerald-500/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500"> Attributed Source</p>
                <p className="mt-1 text-sm font-semibold">Google Ads · Summer Campaign</p>
              </div>
              <span className="text-xs font-semibold text-emerald-600">Matched</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
export default CallAttribution;