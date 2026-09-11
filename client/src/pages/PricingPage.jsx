import React from 'react'
import PricingPlan from '../component/shared/pricing/PricingPlan'
import FreeTrial from '../component/pricing/FreeTrial'
import PricingBanner from '../component/pricing/PricingBanner'
import FAQ from '../component/shared/faq/FAQ'

const PricingPage = () => {
  return (
    <>
      <PricingPlan/>
      <FreeTrial/>
      <PricingBanner/>
      <FAQ/>
    </>
  )
}

export default PricingPage
