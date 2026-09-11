import React from "react";
import { Zap, Brain, ShieldCheck, Headphones} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Real-Time Tracking",
      text: "Know when calls happen and respond faster.",
    },
    {
      icon: Brain,
      title: "AI Intelligence",
      text: "Turn conversations into useful business insights.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Data",
      text: "Keep your customer conversation data protected.",
    },
    {
      icon: Headphones,
      title: "Better Support",
      text: "Help your team deliver better customer experiences.",
    },
  ];

  return (
    <section className="bg-white dark:bg-dark-background py-6 md:py-10 xl:py-14">
      <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            Built for Better Conversations
          </span>
          <h2 className="mt-3 text-3xl font-bold text-dark dark:text-dark-text md:text-4xl">
            Everything Your Team Needs to Convert More Calls
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">From tracking and analytics to AI-powered insights, get the tools you need to turn customer conversations into measurable growth.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title}
                className="rounded-2xl border border-slate-200 p-6 dark:border-dark-border">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.text}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )}
export default BenefitsSection