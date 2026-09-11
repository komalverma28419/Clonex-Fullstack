import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import { growthData } from '../../data/growthData'

const Growth = () => {
  return (
    <section className='relative overflow-hidden py-6 md:py-10 xl:py-14 dark:bg-dark-alternate'>

      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"/>

      <div className='max-w-7xl mx-auto px-7 lg:px-12 xl:px-14'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-4'>
            {growthData.map((data , index) =>(
                <div key={index} className='flex flex-col items-center gap-0.5 lg:gap-2'>
                    <h3 className='text-2xl md:text-4xl lg:text-5xl'>
                        <AnimatedCounter end={data.number} suffix={data.suffix} numberClassName="text-primary"
                        suffixClassName='text-secondary'/>
                    </h3>
                    <p className='text-font dark:text-dark-muted text-sm lg:text-bse'>{data.text}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Growth
