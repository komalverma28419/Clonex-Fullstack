import React from "react";
import {ShieldCheck, Sparkles} from "lucide-react";
import { div } from "framer-motion/client";

const valueData = [
  {
    id: 1,
    title: "Customer First",
    description: "Every feature begins with solving real customer challenges." ,   
    icon: "❤️"
  },
  {
    id: 2,
    title: "Innovation",
    description: "We constantly push technology forward to deliver smarter AI.",
    icon: "💡"  
  }
]

const CoreValues = () => {
  return (
    <section className="py-6 md:py-10 xl:py-14 relative overflow-hidden  bg-white dark:bg-dark-alternate transition-colors duration-500">

        <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14 relative">

          <div  className="max-w-3xl mx-auto text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl px-5 py-2">
              <Sparkles size={16} className="text-blue-600"/>
              <span className="font-medium text-blue-600 dark:text-blue-400">Our Core Values</span>
            </span>
            <p className="mt-4 text-font/60 dark:text-dark-muted/60">
              Our values define how we innovate, collaborate,and build trusted relationships with businesses around the world.
            </p>

          </div>

          <div className="mt-12 grid lg:grid-cols-12 gap-8">

            <div className="lg:col-span-7 group relative overflow-hidden rounded-[34px] border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl p-10 shadow-xl transition-all duration-500">

              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px] group-hover:bg-blue-500/20 transition-all duration-700"/>

              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-[34px] p-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-violet-500/0 opacity-0 group-hover:opacity-100 transition duration-700">
                <div className="h-full w-full rounded-[34px] bg-white/80 dark:bg-slate-900/80"/>
              </div>

              <div className="relative">

                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg">
                  <ShieldCheck className="text-white w-7 h-7 md:w-9 md:h-9"/>
                </div>

                <h3 className="mt-6 text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
                  Accountability
                </h3>
                <p className="mt-2 text-font dark:text-dark-muted text-sm md:text-base">
                  We believe accountability builds trust.Every commitment we make is backed by
                  responsibility, transparency, and measurable execution.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-4  gap-2">
                  {["Ownership","Transparency","Responsibility","Execution"].map((item)=>(
                    <span key={item}
                      className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-4 py-2 text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid gap-6">

              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500">
                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg">
                    <ShieldCheck size={20} className="text-white" />
                  </div>
                  <h3 className="mt-4 text-xl sm:text-2xl font-bold text-dark dark:text-dark-text">Integrity</h3>
                  <p className="text-sm md:text-base text-font dark:text-dark-muted">
                    We communicate honestly, build transparent relationships,
                    and uphold ethical standards in every decision.
                  </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {valueData.map((value) =>(
                  <div key={value.id} className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-5 transition duration-500 hover:shadow-xl">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-500/10">
                      {value.icon}
                    </div>
                    <h4 className="mt-2 text-xl font-bold text-dark dark:text-dark-text">{value.title}</h4>
                    <p className="text-sm text-font dark:text-dark-muted">{value.description}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
    </section>
  )
}
export default CoreValues