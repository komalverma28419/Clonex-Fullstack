import React from 'react'
import crm from "../../assets/images/crm.png"
import appStore from "../../assets/images/appStore.png"
import playStore from "../../assets/images/playStore.png"

const Crm = () => {
  return (
    <section className='py-6 md:py-10 xl:py-14 bg-[#0742A6] dark:bg-dark-background'>
        <div className='max-w-7xl mx-auto px-7 lg:px-12 xl:px-14'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='hidden md:block'>
                    <img src={crm} alt=""  className='w-full'/>
                </div>
                <div className='space-y-5 lg:space-y-7'>
                    <p className='px-4 py-1.5 bg-secondary rounded-4xl inline-flex lg:text-base text-sm'>Mobile Experience</p>
                    <h3 className='text-white font-semibold text-2xl lg:text-3xl xl:text-4xl'>Headline of Modern and Digital Lending Platform</h3>
                    <p className='text-white text-sm lg:text-base dark:text-dark-muted'>Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending 
                        strategy to streamline the lending process
                    </p>
                    <div className='flex gap-4 lg:gap-6'>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <img src={playStore} alt="Get it on Google Play" className='w-35 lg:w-45'/>
                        </a>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <img src={appStore} alt="Get it on Google Play" className='w-35 lg:w-45' />
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Crm
