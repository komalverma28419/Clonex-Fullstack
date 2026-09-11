import React from "react";
import {
  ArrowRight,
  BarChart3,
  Headphones,
  Phone,
  Target,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Call Attribution",
      description:
        "Connect every inbound call to the campaign, channel, keyword, or landing page that generated it.",
    },
    {
      icon: Phone,
      title: "Dynamic Number Insertion",
      description:
        "Show unique tracking numbers to visitors based on their marketing source.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description:
        "Monitor call volume, sources, duration, answered calls, and missed calls in one place.",
    },
    {
      icon: Headphones,
      title: "Call Intelligence",
      description:
        "Review conversations and understand the quality and outcome of customer interactions.",
    },
  ];

  return (
    <section className="bg-slate-50 dark:bg-dark-background py-6 md:py-10 xl:py-14">
      <div className="mx-auto max-w-7xl px-7 lg:px-12 xl:px-14">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Powerful Features
          </span>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Everything You Need to{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Track Every Call
            </span>
          </h2>

          <p className="mt-5 text-slate-600 dark:text-slate-400">
            Powerful tools to help your team understand, measure, and
            optimize every customer conversation.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/30 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/30 dark:hover:shadow-none"
              >

                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <Icon size={20} />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-semibold">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>

                {/* Learn More */}
                <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                  Learn more
                  <ArrowRight size={13} />
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Features;