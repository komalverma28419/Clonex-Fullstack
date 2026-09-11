import React from "react";

const Integrations = () => {
  const integrations = [
    "Google Ads",
    "Meta Ads",
    "HubSpot",
    "Salesforce",
    "Slack",
    "Zapier",
  ];

  return (
    <section className="bg-slate-50 dark:bg-dark-background py-6 md:py-10 xl:py-14">
      <div className="mx-auto max-w-7xl px-7 text-center lg:px-12 xl:px-14">

        {/* Heading */}
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Integrations
        </span>

        <h2 className="mt-4 text-3xl font-bold md:text-4xl">
          Connect Call Data With{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Your Workflow
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
          Bring your call data into the tools your marketing and sales teams
          already use.
        </p>

        {/* Integration Cards */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

          {integrations.map((item) => (
            <div
              key={item}
              className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500/30"
            >
              {item}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Integrations;