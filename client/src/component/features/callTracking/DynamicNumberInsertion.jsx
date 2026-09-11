import React from "react";
import { Check, Globe, Phone } from "lucide-react";

const DynamicNumberInsertion = () => {
  const points = [
    "Show unique tracking numbers to different visitors",
    "Connect calls with campaigns and traffic sources",
    "Understand which marketing channels generate calls"]

  return (
    <section className="relative overflow-hidden bg-white dark:bg-dark-alternate py-6 md:py-10 xl:py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-7 lg:grid-cols-2 lg:px-12 xl:px-14">

        <div className="order-2 lg:order-1">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-blue-100/30 dark:border-dark-border dark:bg-slate-900 dark:shadow-none md:p-6">

            <div className="flex items-center gap-3 border-b border-slate-100 pb-4 dark:border-slate-800">
              <Globe size={18} className="text-blue-500" />
              <div>
                <p className="text-sm font-semibold">Your Website</p>
                <p className="text-xs text-slate-500">example.com</p>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-slate-50 p-5 dark:bg-slate-800/60">
              <p className="text-xs text-slate-500">Visitor Source</p>
              <p className="mt-1 font-semibold">Google Ads</p>
            </div>

            <div className="flex justify-center py-2">
              <div className="h-6 border-l border-blue-300 dark:border-blue-500/30" />
            </div>

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 dark:border-dark-border/20 dark:bg-blue-500/10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-blue-600 dark:text-blue-400">Dynamic Tracking Number</p>
                  <p className="mt-1 text-lg font-bold">+91 1800 123 4567</p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-3 dark:bg-emerald-500/10">
              <span className="text-xs text-slate-600 dark:text-slate-400">Visitor number assigned</span>
              <span className="text-xs font-semibold text-emerald-600">Active</span>
            </div>

          </div>
        </div>

        <div className="order-1 lg:order-2">

          <span className="inline-flex rounded-full bg-blue-50 px-3.5 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">Dynamic Number Insertion</span>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            Show the{" "}
            <span className="text-blue-600 dark:text-blue-400">Right Number</span>{" "}
            to Every Visitor
          </h2>
          <p className="mt-5 text-slate-600 dark:text-slate-400">Automatically replace your 
            website phone number with a unique tracking number based on where each visitor came from.
          </p>
          <div className="mt-6 space-y-3">
            {points.map((item) => (
              <div key={item} className="flex gap-3">
                <Check size={17} className="mt-1 shrink-0 text-blue-500"/>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
export default DynamicNumberInsertion;