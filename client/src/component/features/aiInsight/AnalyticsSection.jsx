import React from "react";
import { BarChart3, Check } from "lucide-react";

const AnalyticsSection = () => {
  const bars = [45, 65, 55, 75, 60, 88, 72];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const benefits = [
    "Track call volume and response times",
    "Measure lead and conversion performance",
    "Compare marketing channels",
    "Monitor team performance",
  ]

  return (
    <section className="bg-slate-50 py-6 dark:bg-dark-alternate md:py-10 xl:py-14">
      <div className="mx-auto max-w-7xl px-7 lg:px-12 xl:px-14">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/*------------------------------ Analytics UI------------------------------ */}
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-950 dark:shadow-none">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-dark dark:text-dark-text">Call Analytics</p>
                  <p className="mt-1 text-xs text-slate-500">Performance overview</p>
                </div>
                <BarChart3 size={19} className="text-blue-600 dark:text-blue-400"/>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-blue-50 p-4 dark:bg-blue-500/10">
                  <p className="text-xs text-slate-500">Calls</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">12.4K</p>
                  <p className="mt-1 text-xs font-medium text-emerald-600">+18.4%</p>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-4 dark:bg-emerald-500/10">
                  <p className="text-xs text-slate-500">Conversions</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">3.8K</p>
                  <p className="mt-1 text-xs font-medium text-emerald-600">+24.6%</p>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex h-44 items-end gap-5">
                  {bars.map((height, index) => (
                    <div key={index} className="flex h-full flex-1 items-end">
                      <div className="w-full rounded-t-lg bg-blue-500 transition-all duration-300 hover:bg-blue-600"
                        style={{height: `${height}%`}}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-3 grid grid-cols-7 text-center text-[10px] text-slate-400">
                  {days.map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/*----------------------------- Content ---------------------------*/}
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              <BarChart3 size={15} />
              Advanced Analytics
            </span>
            <h2 className="mt-4 text-3xl font-bold text-dark dark:text-dark-text md:text-4xl">
              See the Numbers Behind{" "}
              <span className="text-blue-600 dark:text-blue-400">Every Conversation</span>
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">Get a complete picture of your call performance with detailed analytics that help you understand what is working and where
              your team can improve.
            </p>
            <div className="mt-6 space-y-4">
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/10">
                    <Check size={13} className="text-blue-600 dark:text-blue-400"/>
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">{item}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )}
export default AnalyticsSection;