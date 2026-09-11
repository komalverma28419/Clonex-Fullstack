import React from "react";
import { Check, PhoneCall, Play } from "lucide-react";

const CallIntelligence = () => {
  const points = [
    "Review call recordings",
    "Track call duration and outcomes",
    "Understand customer conversations",
    "Identify follow-up opportunities" ]
  const waveform = [30, 50, 25, 60, 42,75, 35, 65, 45, 80,55, 35, 70, 45, 60,30, 55, 75, 40, 65]

  return (
    <section className="bg-white dark:bg-dark-alternate py-6 md:py-10 xl:py-14">
      <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14 grid items-center gap-14 lg:grid-cols-2">

        <div>
          <span className="inline-flex rounded-full bg-blue-50 px-3.5 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">Call Intelligence</span>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            Understand Every{" "}
            <span className="text-blue-600 dark:text-blue-400">Customer Conversation</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400"> Review customer conversations, understand call outcomes, and give your team the context they need to improve every interaction.
          </p>
          <div className="mt-6 space-y-3">
            {points.map((item) => (
              <div key={item} className="flex gap-3">
                <Check size={17} className="mt-1 shrink-0 text-blue-500"/>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-100/20 dark:border-dark-border dark:bg-slate-900 dark:shadow-none">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/10">
                <PhoneCall size={19} className="text-blue-600 dark:text-blue-400"/>
              </div>
              <div>
                <p className="text-sm font-semibold"> Customer Call</p>
                <p className="text-xs text-slate-500">Today · 10:42 AM</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-600 dark:bg-emerald-500/10">Completed</span>
          </div>

          <div className="mt-6 rounded-2xl bg-slate-50 p-5 dark:bg-slate-800/60">
            <div className="flex items-center gap-4">
              <button type="button" aria-label="Play call recording"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700">
                <Play size={17} fill="currentColor"/>
              </button>
              <div className="flex-1">
                <div className="flex h-8 items-center gap-1">
                  {waveform.map((height, index) => (
                    <span key={index} className="w-1 rounded-full bg-blue-400"
                      style={{height: `${height}%`,}}/>
                  ))}
                </div>
                <div className="mt-1 flex justify-between text-[10px] text-slate-400">
                  <span>00:00</span>
                  <span>04:32</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <div className="rounded-xl border border-slate-100 p-4 dark:border-slate-800">
              <p className="text-xs text-slate-500">Call Source</p>
              <p className="mt-1 text-sm font-semibold">Google Ads · Summer Campaign</p>
            </div>
            <div className="rounded-xl border border-slate-100 p-4 dark:border-slate-800">
              <p className="text-xs text-slate-500">Call Outcome</p>
              <p className="mt-1 text-sm font-semibold">Qualified Lead</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )}
export default CallIntelligence;