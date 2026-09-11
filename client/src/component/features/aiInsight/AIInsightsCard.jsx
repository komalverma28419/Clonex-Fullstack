import React from "react";
import {Brain,Phone,Sparkles,TrendingUp,} from "lucide-react";

const AIInsightsCard = () => {
  const topics = [
    "Pricing",
    "Product Features",
    "Pro Plan",
    "Follow-up"]

  return (
    <div className="relative mx-auto w-full max-w-xl">

      <div className="absolute -inset-8 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-blue-100/30 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">

        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Brain size={19} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">AI Call Insights</p>
              <p className="text-xs text-slate-500">Automatically generated </p>
            </div>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-semibold text-emerald-600 dark:bg-emerald-500/10"> Analyzed
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 p-5">
          <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60">
            <Phone size={16} className="text-blue-500" />
            <p className="mt-3 text-xs text-slate-500">Customer Intent</p>
            <p className="mt-1 text-sm font-bold text-blue-600 dark:text-blue-400">Purchase</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60">
            <TrendingUp size={16} className="text-emerald-500"/>
            <p className="mt-3 text-xs text-slate-500">Lead Quality</p>
            <p className="mt-1 text-sm font-bold text-emerald-600">Qualified</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60">
            <Sparkles size={16} className="text-purple-500"/>
            <p className="mt-3 text-xs text-slate-500">Sentiment</p>
            <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">Positive</p>
          </div>
        </div>

        <div className="px-5">
          <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 dark:border-blue-500/20 dark:bg-blue-500/5">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-500/10">
                <Sparkles size={14} className="text-blue-600 dark:text-blue-400"/>
              </div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">AI Summary</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Customer is interested in the Pro plan and asked about pricing.
              They requested a follow-up from the sales team this week.
            </p>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Conversion Potential
              </p>
              <p className="mt-1 text-xs text-slate-500">AI-powered lead assessment</p>
            </div>
            <span className="text-lg font-bold text-blue-600 dark:text-blue-400">87%</span>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div
              className="h-full rounded-full bg-blue-600"
              style={{ width: "87%" }}
            />
          </div>
        </div>
        <div className="border-t border-slate-100 p-5 dark:border-slate-800">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Key Topics</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span key={topic}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
              >{topic}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )}
export default AIInsightsCard;