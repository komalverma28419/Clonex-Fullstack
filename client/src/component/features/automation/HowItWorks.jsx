import React from "react";
import {
  Settings2,
  Zap,
  GitBranch,
  Mail,
  Check,
  ChevronRight,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose a Trigger",
      text: "Decide what event should start your workflow.",
    },
    {
      number: "02",
      title: "Set Your Actions",
      text: "Choose what should happen when the trigger occurs.",
    },
    {
      number: "03",
      title: "Let Automation Run",
      text: "Your workflow executes automatically based on your rules.",
    },
  ]

  return (
    <section className="bg-white dark:bg-dark-background py-6 md:py-10 xl:py-14">
      <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              <Settings2 size={15} />
              How It Works
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-4xl">
              Build Workflows That{" "}
              <span className="text-blue-600 dark:text-blue-400"> Work For You</span>
            </h2>

            <p className="mt-4 text-slate-600 dark:text-dark-muted">Set up simple automation rules 
              and let your workflows handle the next step automatically.
            </p>

            <div className="mt-6 space-y-4">
              {steps.map((item) => (
                <div key={item.number} className="flex gap-4 items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                    {item.number}
                  </div>

                  <div>
                    <h3 className="font-semibold text-dark dark:text-dark-text">{item.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-dark-muted/60"> {item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow Builder */}
          <div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-dark dark:text-white">Workflow Builder</p>
                  <p className="mt-1 text-xs text-slate-500"> Lead follow-up automation</p>
                </div>
                <button className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
                  Save
                </button>
              </div>

              <div className="mt-5 space-y-3">

                <div className="flex items-center gap-4 rounded-xl border border-blue-100 bg-white p-4 dark:border-blue-500/20 dark:bg-slate-950">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                    <Zap size={18} />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Trigger</p>
                    <p className="mt-1 text-xs text-slate-500">New lead created</p>
                  </div>
                  <Check size={17} className="text-emerald-500" />
                </div>

                <div className="ml-5 h-4 w-px bg-slate-200 dark:bg-slate-700" />

                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                    <GitBranch size={18} />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Condition
                    </p>
                    <p className="mt-1 text-xs text-slate-500">Lead score is greater than 70</p>
                  </div>
                  <ChevronRight size={17} className="text-slate-400" />
                </div>

                <div className="ml-5 h-4 w-px bg-slate-200 dark:bg-slate-700" />

                <div className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-white p-4 dark:border-emerald-500/20 dark:bg-slate-950">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                    <Mail size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Action</p>
                    <p className="mt-1 text-xs text-slate-500">Send personalized follow-up</p>
                  </div>
                  <Check size={17} className="text-emerald-500" />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )}
export default HowItWorks;