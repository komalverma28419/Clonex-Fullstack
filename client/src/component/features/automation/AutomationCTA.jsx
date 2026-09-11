import React from "react";
import { ArrowRight, Workflow } from "lucide-react";
import Button from "../../ui/Button";

const AutomationCTA = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-6 md:py-10 xl:py-14">

      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-7 lg:px-12 xl:px-14 text-center">

        <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400">
          <Workflow size={15} />
          Automate Smarter
        </span>

        <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
          Put Your Workflows{" "}
          <span className="text-blue-400">
            on Autopilot
          </span>
        </h2>

        <p className="mx-auto mt-2 text-slate-400">
          Build smarter workflows, eliminate repetitive tasks, and let your
          team focus on what matters most.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button text="Get Started" icon={<ArrowRight size={17} />} size="md" variant="tertiary"/>
          <Button text="Request Demo" size="md" variant="tertiary" to="/request-demo"/>
        </div>
      </div>
    </section>
  )
}

export default AutomationCTA;