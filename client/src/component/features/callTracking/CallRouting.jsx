import React from "react";
import { Check, Phone, Route } from "lucide-react";

const CallRouting = () => {
  const teams = [
    ["Sales", "24 calls"],
    ["Support", "18 calls"],
    ["Billing", "9 calls"],
  ];

  const features = [
    "IVR menus",
    "Call forwarding",
    "Team routing",
    "Business hours",
  ];

  return (
    <section className="bg-white dark:bg-dark-alternate py-6 md:py-10 xl:py-14">
      <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14 grid  items-center gap-14 lg:grid-cols-2 ">

        {/* Routing Visual */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-100/20 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none md:p-8">

          {/* Incoming Call */}
          <div className="text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/20">
              <Phone size={22} />
            </div>

            <p className="mt-4 text-sm font-semibold">
              Incoming Call
            </p>

            <p className="mt-1 text-xs text-slate-500">
              +91 1800 123 4567
            </p>

          </div>

          {/* Connector */}
          <div className="mx-auto my-6 h-8 border-l border-blue-300 dark:border-blue-500/30" />

          {/* Smart Routing */}
          <div className="mx-auto max-w-xs rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center dark:border-slate-800 dark:bg-slate-800/50">

            <Route
              size={20}
              className="mx-auto text-blue-500"
            />

            <p className="mt-2 text-sm font-semibold">
              Smart Call Routing
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Route the caller to the right team
            </p>

          </div>

          {/* Teams */}
          <div className="mt-6 grid grid-cols-3 gap-3">

            {teams.map(([name, calls]) => (
              <div
                key={name}
                className="rounded-xl border border-slate-100 p-3 text-center dark:border-slate-800"
              >
                <p className="text-xs font-semibold">
                  {name}
                </p>

                <p className="mt-1 text-[10px] text-slate-500">
                  {calls}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* Content */}
        <div>

          <span className="inline-flex rounded-full bg-blue-50 px-3.5 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
            Call Routing
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
            Route Every Call to the{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Right Team
            </span>
          </h2>

          <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
            Make sure every customer reaches the right person with smart
            routing, IVR, forwarding, and business-hour controls.
          </p>

          {/* Features */}
          <div className="mt-7 grid gap-3 sm:grid-cols-2">

            {features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-100 p-4 dark:border-slate-800"
              >
                <Check
                  size={16}
                  className="shrink-0 text-blue-500"
                />

                <span className="text-sm font-medium">
                  {item}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default CallRouting;