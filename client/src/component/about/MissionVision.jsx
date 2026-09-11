import { contentData } from "../../data/aboutMissionData";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";




const MissionVision = () => {
  const [activeTab, setActiveTab] = useState(contentData[0].id);
  const activeContent = contentData.find((item) => item.id === activeTab);

  return (
    <section className=" py-6 md:py-10 xl:py-14 dark:bg-dark-background">
      <div className="relative max-w-7xl mx-auto px-7 lg:px-12 xl:px-14 z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300/60 dark:border-slate-700/60 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-dark dark:text-dark-text">
            <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping" />
            Mission and Vision
          </div>

          <p className="mt-4 text-sm md:text-base text-font/60 dark:text-dark-muted/60">
            We are redefining how teams measure and maximize voice communication through cutting-edge neural intelligence.
          </p>

          {/* Interactive Toggle Tabs */}
          <div className="mt-6 p-1.5 bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/50 dark:border-slate-700/50 backdrop-blur-xl rounded-xl inline-flex gap-2">
            {contentData.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 ${
                    isActive 
                      ? "text-slate-900 dark:text-white" 
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <div
                      className="absolute inset-0 bg-white dark:bg-slate-700/80 border border-slate-200 dark:border-slate-600/60 rounded-xl shadow-md dark:shadow-lg"
                    />
                  )}
                  <Icon size={18} className={`relative z-10 ${isActive ? "text-cyan-600 dark:text-cyan-400" : ""}`} />
                  <span className="relative z-10">{tab.type}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Dynamic Display Grid */}
        <div className="mt-12 relative">
            <div
              key={activeTab}
              className="grid lg:grid-cols-12 gap-8 items-stretch"
            >
              
              {/* Main Card */}
              <div className="lg:col-span-5 relative group flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/50 backdrop-blur-2xl overflow-hidden shadow-xl dark:shadow-none">
                {/* Background Dynamic Glow */}
                <div className={`absolute -top-24 -right-24 w-80 h-80 rounded-full ${activeContent.colorTheme.glow} blur-[100px] pointer-events-none transition-colors duration-500`} />
                
                <div>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                    <span className={`px-3 py-1 rounded-md text-xs font-semibold border ${activeContent.colorTheme.accentBg} ${activeContent.colorTheme.accentBorder} ${activeContent.colorTheme.accentText}`}>
                      {activeContent.tagline}
                    </span>
                    <span className="text-xs text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-md">
                      {activeContent.metric}
                    </span>
                  </div>

                  <h3 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {activeContent.type}
                  </h3>

                  <p className="mt-2 text-font dark:text-dark-muted text-sm  md:text-lg">
                    {activeContent.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-700/50 flex items-center justify-between sm:flex-row flex-col">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Target Benchmark 2026</span>
                  <a
                    href="#learn-more"
                    className="inline-flex items-center gap-1 text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
                  >
                    <span>Read Whitepaper</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Pillars Grid */}
              <div className="lg:col-span-7 grid sm:grid-cols-1 gap-4">
                {activeContent.pillars.map((pillar, idx) => {
                  const PillarIcon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="group/pillar  p-4 md:p-6  rounded-2xl bg-white/50 dark:bg-slate-800/30 border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/80 hover:bg-white/80 dark:hover:bg-slate-800/50 backdrop-blur-xl transition-all duration-300 flex items-start gap-5 shadow-sm dark:shadow-none"
                    >
                      <div className={` p-1.5 md:p-2 rounded-lg md:rounded-xl border ${activeContent.colorTheme.accentBg} ${activeContent.colorTheme.accentBorder} ${activeContent.colorTheme.accentText} shrink-0`}>
                        <PillarIcon className="w-4 h-4 md:w-7 md:h-7" />
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white group-hover/pillar:text-cyan-600 dark:group-hover/pillar:text-cyan-400 transition-colors">
                          {pillar.title}
                        </h4>
                        <p className="mt-1 text-sm text-font dark:text-dark-muted">
                          {pillar.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
        </div>

      </div>
    </section>
  )
}

export default MissionVision