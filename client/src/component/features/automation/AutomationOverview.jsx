import React from "react";
import { Zap, GitBranch, Clock3 } from "lucide-react";

const AutomationOverview = () => {
  const automationFeatures = [
    {
      icon: Zap,
      title: "Automate Repetitive Tasks",
      description:
        "Eliminate manual work by automatically handling repetitive tasks and processes.",
    },
    {
      icon: GitBranch,
      title: "Build Custom Workflows",
      description:
        "Create flexible workflows that match the way your team works.",
    },
    {
      icon: Clock3,
      title: "Trigger Actions Automatically",
      description:
        "Set actions to happen instantly when specific events or conditions are met.",
    }
  ]

  return (
    <section className="bg-slate-50 dark:bg-dark-alternate py-6 md:py-10 xl:py-14">
      <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Work Smarter</span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-dark-text md:text-4xl">
            Let Automation Handle the Busywork
          </h2>
          <p className="mt-2 text-font dark:text-dark-muted">Create automated workflows that take care of repetitive processes while your team focuses on meaningful customer interactions.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {automationFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/30 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-500/30 dark:hover:shadow-none">

                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <Icon size={21} />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-dark dark:text-dark-text">{item.title}</h3>
                <p className="mt-1 text-sm text-font dark:text-dark-muted">{item.description}</p> 
              </div>
            )
          })}
        </div>
        
      </div>
    </section>
  )}
export default AutomationOverview;