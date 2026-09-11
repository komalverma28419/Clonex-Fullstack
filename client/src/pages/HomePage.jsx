import React from 'react'
import Hero from '../component/home/Hero'
import About from '../component/home/About'
import Features from '../component/home/Features'
import TrustedBy from '../component/shared/TrustedBy'
import Crm from '../component/home/Crm'
import Growth from '../component/ui/Growth'
import Review from '../component/home/Review'
import PricingPlan from '../component/shared/pricing/PricingPlan'
import FAQ from '../component/shared/faq/FAQ'
import NewsLetter from '../component/shared/NewsLetter'


const HomePage = () => {
  return (
    <>
     <Hero/>
     <About/>
     <Features/>
     <TrustedBy/>
     <Crm/>
     <Growth/>
     <Review/>
     <PricingPlan/>
     <FAQ/>
     <NewsLetter/>
    </>
  )
}

export default HomePage
