import React from 'react'
import Title from '../ui/Title'

const OurStory = () => {
  return (
    <section className="py-6 md:py-10 xl:py-14 relative overflow-hidden dark:bg-dark-background">
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"/>
        <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14 text-center">
      
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300/60 dark:border-slate-700/60 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping" />
                OUR STORY
            </div>

            <h2 className="mt-4 text-2xl lg:text-4xl font-bold text-dark dark:text-dark-text">
                Every Great Conversation
                <span className="text-primary"> Starts with Better Insights</span>
            </h2>
             <div className="mt-8 rounded-3xl border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-8 md:p-10 shadow-xl">
                <p className="text-sm md:text-base leading-8 text-font dark:text-dark-muted">
                    We recognized that managing business calls, tracking team
                    performance, and extracting meaningful insights from customer
                    conversations were often complex and time-consuming. To overcome
                    these challenges, we built an AI-powered platform that combines
                    intelligent automation, real-time analytics, and actionable
                    reporting into one seamless experience. Our mission is to simplify
                    communication, empower teams with data-driven decisions, and help
                    businesses improve productivity, strengthen customer relationships,
                    and achieve sustainable growth through smarter conversations.
                </p>
        </div>
  </div>
</section>
  )
}

export default OurStory

