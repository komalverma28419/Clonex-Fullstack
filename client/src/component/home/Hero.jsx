import React from 'react'
import Button from '../ui/Button'
import heroImg from "../../assets/images/heroImg.png"
import bgHero from "../../assets/images/bgHero.png"
import playStore from '../../assets/images/playStore.png'
import appStore from '../../assets/images/appStore.png'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className='py-6 md:py-10 xl:py-14 relative overflow-hidden bg-black/5 dark:bg-dark-alternate'>
      <div className="absolute bottom-0 right-0 h-[50%] w-[50%] hidden lg:block bg-orange-400/80 rounded-tl-[110px]" />
      <div className='max-w-7xl mx-auto px-7 lg:px-12 xl:px-14'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
          <div className=''>
            <span className='text-[#133FE3] text-xs tracking-[0.4px]'>INTRODUCING</span>
            <h1 className='text-3xl lg:text-[42px] font-bold leading-normal md:leading-10 lg:leading-14 dark:text-dark-text  text-dark mt-6'>Energize your Tele Calling Efforts with Data-driven Call Insights</h1>
            <p className='text-font dark:text-dark-muted mt-6 md:text-base text-sm'>Track the calling performance of all team members from a central dashboard with Callyzer mobile app.</p>
            <div className='mt-8 flex flex-col sm:flex-row  gap-8'>
              <Button text="Get Started for Free" size='md' shine to="/pricing"/>
              <Button text="Learn More" variant='tertiary' size='md' icon={<ArrowRight size={18}/>} shine to="/about"/>
            </div>
          </div>

          <div className='relative z-10 hidden lg:block'>
            <img src={heroImg} alt="" />

            <div className='flex items-center justify-end gap-4'>
              <a href=""><img src={appStore} alt="Download on the App Store" /></a>
              <a href=""><img src={playStore} alt="Get it on Google Play" /></a>
            </div>

          </div>
          <div>
            
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
