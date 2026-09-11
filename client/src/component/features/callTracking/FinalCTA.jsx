import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../../ui/Button";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-500 via-slate-600 to-indigo-400 py-6 md:py-10 xl:py-14">
      <div className="relative max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">

        <div className="flex flex-col items-center">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium  text-blue-100">Start Tracking Smarter</span>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Make Every Call Count?
          </h2>
          <p className="mt-4 text-blue-100">Turn your call data into meaningful insights and make every customer conversation more valuable.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button text="Get Started" icon={<ArrowRight size={17} />} size="md" to="/pricing"/>
            <Button text="Request Demo" size="md" to="/request-demo"/>
          </div>
        </div>

      </div>
    </section>
  )}
export default FinalCTA