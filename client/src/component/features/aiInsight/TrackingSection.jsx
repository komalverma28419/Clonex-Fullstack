import React from "react";
import { PhoneCall, Target, BarChart3, ChevronRight} from "lucide-react";

const TrackingSection = () => {
  const features = [
    {
      icon: PhoneCall,
      title: "Track Every Call",
      description:
        "Capture and organize every customer call so your team never misses an important conversation.",
    },
    {
      icon: Target,
      title: "Know What Converts",
      description:
        "Connect calls with marketing campaigns and discover which channels generate your best leads.",
    },
    {
      icon: BarChart3,
      title: "Measure Performance",
      description:
        "Get a clear view of call volume, lead quality, conversion rates, and team performance.",
    }
  ]

  return (
    <section className="bg-slate-50 dark:bg-dark-alternate py-6 md:py-10 xl:py-14">
      <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            Smarter Call Tracking
          </span>
          <h2 className="mt-3 text-3xl font-bold text-dark dark:text-dark-text md:text-4xl">
            Know What Happens on Every Call
          </h2>
          <p className="mt-2 text-font dark:text-dark-muted">Give your team the visibility they 
            need to understand every customer interaction and turn more conversations into revenue.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title}
                className="group rounded-xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/30 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-500/30 dark:hover:shadow-none">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <Icon size={21} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-dark dark:text-dark-text">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-font/60 dark:text-dark-muted">{item.description}</p>
                <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400">Learn more
                  <ChevronRight size={15} />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )}
export default TrackingSection;