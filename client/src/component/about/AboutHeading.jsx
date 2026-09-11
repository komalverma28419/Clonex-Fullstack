import React from "react";


const AboutHeading = () => {
  return (
    <section className="relative overflow-hidden py-6 md:py-10 xl:py-14 transition-colors duration-500">
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-cyan-100 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950"/>
      
      <div className="relative max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">
        <span className="inline-flex rounded-full bg-blue-100 dark:bg-blue-500/10 px-4 py-2 text-blue-700 dark:text-blue-400 font-medium">
          About Clonex
        </span>

        <h1 className="text-3xl lg:text-[42px] font-bold leading-normal md:leading-10 lg:leading-14 text-slate-900 dark:text-white">
          Make Calling
          <span className="text-blue-600 dark:text-blue-400">
            {" "}Smarter
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-400">
          AI-powered call intelligence that helps businesses track conversations,
          improve sales performance, and make better decisions.
        </p>

      </div>
</section>
)}
export default AboutHeading;



