import React from "react";
import { Clock3, Zap, Target } from "lucide-react";

const AutomationBenefits = () => {
  const benefits = [
    {
      icon: Clock3,
      title: "Save Time",
      text: "Reduce repetitive tasks and give your team more time for high-value work.",
    },
    {
      icon: Zap,
      title: "Work Faster",
      text: "Execute important actions instantly without waiting for manual intervention.",
    },
    {
      icon: Target,
      title: "Improve Conversions",
      text: "Make sure every lead receives the right follow-up at the right time.",
    },
  ];

  return (
    <section className="bg-slate-50 dark:bg-dark-alternate py-6 md:py-10 xl:py-14">
      <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            Why Workflow Automation
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Less Manual Work. More Time to Grow.
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-950">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <Icon size={21} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-dark dark:text-dark-text">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-dark-muted">{item.text}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )}
export default AutomationBenefits;