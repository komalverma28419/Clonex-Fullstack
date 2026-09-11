import React from "react";
import { UserPlus, Mail, Bell, Target } from "lucide-react";

const AutomationUseCases = () => {
  const useCases = [
    {
      icon: UserPlus,
      title: "Lead Management",
      description:
        "Automatically assign, organize, and follow up with new leads.",
    },
    {
      icon: Mail,
      title: "Follow-Up Automation",
      description:
        "Send timely emails and messages without manually tracking every follow-up.",
    },
    {
      icon: Bell,
      title: "Instant Notifications",
      description:
        "Keep your team informed whenever an important action or event occurs.",
    },
    {
      icon: Target,
      title: "Sales Automation",
      description:
        "Move leads through your sales process with automated actions and rules.",
    },
  ]
  return (
    <section className="bg-white dark:bg-dark-background py-6 md:py-10 xl:py-14">
      <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            Automation Use Cases
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Automate More of Your Day-to-Day Work
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Create workflows for the processes that matter most to your business.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-slate-800 dark:hover:border-blue-500/30" >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )}
export default AutomationUseCases;