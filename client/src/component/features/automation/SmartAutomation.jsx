import React from "react";
import { Bot, Check, Sparkles } from "lucide-react";

const SmartAutomation = () => {
  const smartFeatures = [
    "Automatically assign new leads",
    "Send follow-up messages",
    "Update lead status",
    "Notify team members",
  ];

  return (
    <section className="bg-slate-50  dark:bg-dark-alternate py-6 md:py-10 xl:py-14">
      <div className="mx-auto grid items-center gap-14 lg:grid-cols-2 max-w-7xl px-7 lg:px-12 xl:px-14">

        {/* UI */}
        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-950">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Bot size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Smart Automation</p>
                <p className="text-xs text-slate-500">4 actions running automatically</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {smartFeatures.map((feature) => (
                <div key={feature}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-900">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-500/10">
                    <Check size={14} className="text-blue-600 dark:text-blue-400"/>
                  </div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                  <span className="ml-auto text-[10px] font-semibold text-emerald-600"> Active </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
            <Sparkles size={15} />
            Smart Automation
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Keep Every Lead Moving{" "}
            <span className="text-blue-600 dark:text-blue-400"> Automatically</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-dark-muted"> Make sure every lead gets the right action at the right time without relying on manual reminders or spreadsheets.</p>

          <div className="mt-5 space-y-3">
            {smartFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/10">
                  <Check size={13} className="text-blue-600 dark:text-blue-400"/>
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )}
export default SmartAutomation;