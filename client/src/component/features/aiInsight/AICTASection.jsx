import React from "react";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Button from "../../ui/Button";

const AICTASection = () => {
  return (
    <section className="relative overflow-hidden bg-dark-alternate py-6 md:py-10 xl:py-14">
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="relative text-center max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">

        <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400">
          <Sparkles size={15} />
          Start Tracking Smarter
        </span>
        <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
          Turn Every Call Into Your{" "}
          <span className="text-blue-400"> Next Opportunity</span>
        </h2>
        <p className="mx-auto mt-2 text-slate-400">Start tracking your calls, understand your customers
          , and give your team the insights they need to convert more opportunities.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button text="Get Started for Free" icon={<ArrowRight size={17} />} size="md" to="/pricing" variant="tertiary"/>
          <Button text="Request Demo" size="md" variant="tertiary" to="/request-demo"/>
        </div>

      </div>
    </section>
  )}
export default AICTASection;