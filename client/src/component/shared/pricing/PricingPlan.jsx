import React, { useState } from 'react'
import PricingToggle from './PricingToggle'
import PricingCard from './PricingCard'
import { pricingDetail } from '../../../data/pricingData'

const PricingPlan = () => {
  const[billing, setBilling] = useState("monthly")
  return (
    <section className='py-6 md:py-10 xl:py-14 dark:bg-dark-alternate'>
      <div className='max-w-7xl mx-auto px-7 lg:px-12 xl:px-14 '>
        <div>
            <h3 className='font-bold text-2xl lg:text-3xl text-dark dark:text-dark-text text-center'>
              SIMPLE PRICING. GREAT VALUE.
            </h3>
            <p className='text-sm text-font dark:text-dark-muted text-center tracking-wide mt-2'>
              Pay securely online and manage the booking via desktop or via the mobile app.
            </p>
            <div className='flex justify-center mt-8'>
              <PricingToggle billing={billing} setBilling={setBilling}/>
            </div>
            <div className='grid grid-cols-1 min-[900px]:grid-cols-3 gap-8 mt-10 '>
              {pricingDetail.map((plan) =>(
                <PricingCard key={plan.id} plan={plan} billing={billing}/>
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default PricingPlan
