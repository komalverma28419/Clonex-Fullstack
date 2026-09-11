import React from 'react'

const PolicyHero = ({heading}) => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950 py-6 md:py-10 xl:py-14 ">
      {/*------------------------------- Aurora glow - left --------------------------*/}
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-400/20 blur-[100px] dark:bg-blue-500/15" />
      {/* -----------------Aurora glow - right---------------------------------------- */}
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-[100px] dark:bg-cyan-500/15" />
        <div className="absolute inset-0 opacity-50 dark:opacity-20"
        style={{
            backgroundImage:`
            linear-gradient(rgba(59, 130, 246, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
        }}/>

      <div className="relative z-10  max-w-7xl text-center mx-auto px-7 lg:px-12 xl:px-14">
        <h1 className='mx-auto mt-2 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-[46px]'>{heading}</h1>
        <div className="mx-auto mt-4 h-px w-24 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-60" />
      </div>

    </section>
  )
}
export default PolicyHero


