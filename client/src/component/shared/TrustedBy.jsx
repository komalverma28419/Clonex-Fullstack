import React, { useState } from 'react'
import { trustedData } from '../../data/trustedData'
import { motion } from 'framer-motion'
import AnimatedCounter from '../ui/AnimatedCounter'


const TrustedBy = () => {
  return (
    <section className='py-6 md:py-10 xl:py-14 dark:bg-dark-alternate'>
        <div className='max-w-7xl mx-auto px-7 lg:px-12 xl:px-14'>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-xl font-medium text-font dark:text-dark-muted text-center'>
                    Trusted by{" "}<AnimatedCounter end={4000} suffix='+'/> {" "}companies
                </h3>
                <div className='relative overflow-hidden w-full mt-10'>
                    <div className="absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white dark:from-dark-alternate to-transparent" />
                    <motion.div className='flex gap-10 lg:gap-12 xl:gap-14 w-max'
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity
                        }}
                    >
                        {[...trustedData, ...trustedData].map((logo, index) =>(
                            <img key ={index} src={logo.image} alt={logo.name} className='w-20 lg:w-24 xl:w-28 h-full'/>
                        ))}
                    </motion.div>
                    <div className="absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white dark:from-dark-alternate to-transparent" />
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default TrustedBy

