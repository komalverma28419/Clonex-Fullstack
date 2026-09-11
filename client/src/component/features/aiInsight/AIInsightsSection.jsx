import React from "react";
import {Check, Sparkles} from "lucide-react";
import AIInsightsCard from "./AIInsightsCard";

const AIInsightsSection = () => {
  const aiInsights = [
    {
      title: "Understand Customer Intent",
      description:
        "Automatically identify what customers are looking for and why they are calling.",
    },
    {
      title: "Detect Sentiment",
      description:
        "Understand whether conversations are positive, neutral, or need attention.",
    },
    {
      title: "Identify Lead Quality",
      description:
        "Recognize qualified leads and high-value opportunities from conversations.",
    },
    {
      title: "Get Instant Summaries",
      description:
        "Turn lengthy conversations into concise summaries your team can act on.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white dark:bg-dark-background py-6 md:py-10 xl:py-14">

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="relative  grid max-w-7xl mx-auto px-7 lg:px-12 xl:px-14 items-center gap-14 lg:grid-cols-2">

        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            <Sparkles size={15} />
            AI-Powered Insights
          </span>
          <h2 className="mt-5 text-3xl font-bold text-dark dark:text-dark-text md:text-4xl">
            Turn Conversations Into{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Actionable Intelligence
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-font/60 dark:text-dark-muted ">
            Let AI analyze your customer calls to uncover trends, understand customer intent, and surface insights that help your team make smarter decisions.
          </p>
          <div className="mt-6 space-y-4">
            {aiInsights.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/10">
                  <Check size={14} strokeWidth={2.5} className="text-blue-600 dark:text-blue-400"/>
                </div>
                <div>
                  <h3 className="font-semibold text-dark dark:text-white">{item.title}</h3>
                  <p className="text-sm text-font/60 dark:text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*--------------------------------- Right UI-------------------------------------- */}
        <AIInsightsCard/>

      </div>
    </section>
  )}
export default AIInsightsSection;