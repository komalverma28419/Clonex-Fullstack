import React from 'react'
import Button from '../../ui/Button'
import { Check } from 'lucide-react'

const PricingCard = ({plan, billing}) => {
const pricePlan = billing === "monthly" ? plan.price.monthly : plan.price.annually
    return (
        
        <div className='group relative rounded-2xl overflow-hidden'>
            <div className="hidden dark:block absolute inset-0">
                <div className="wave-border" />
            </div>

            <div className={`shadow-2xl rounded-2xl p-8 relative z-10 m-[2px]
            ${plan.featured ? "bg-primary dark:bg-secondary" : "bg-white dark:bg-dark-background"}`}>
            <h4 className={`text-center font-bold text-lg md:text-xl 
            ${plan.featured ?"text-white" : "text-dark dark:text-dark-text"}`}>
                {plan.title}
            </h4>
            <p className={`mt-2 text-sm lg:text-base text-center 
                ${plan.featured ? "text-white/70" : "text-font/70 dark:text-dark-muted/70"}`}>
                {plan.description}
            </p>

            <div className='text-center my-5 md:my-6'>
                <span className={`font-bold text-2xl md:text-3xl lg:text-4xl 
                    ${plan.featured ? "text-white" : " text-dark dark:text-dark-text"}`}>
                    ₹ {pricePlan}
                </span>
                <span className={`font-medium text-sm lg:text-base 
                    ${plan.featured ? "text-white/70" : "text-font/70 dark:text-dark-muted/70"}`}>
                    /{billing === "monthly" ? "month" : "year"}
                </span>
            </div>

            <Button text="Select Plan" variant={plan.featured ? "secondary" : "primary"} className="w-full"/>

            <ul className='md:mt-6 mt-5'>
                {plan.features.map((feature, index) => (
                <li key={index} className='flex items-center gap-2 py-1.5'>
                    <span className={`w-5 h-5 md:w-6 md:h-6 rounded-full inline-flex items-center
                    justify-center shrink-0 ${feature.available ? "bg-secondary dark:bg-primary/80 ": "bg-font/30"}`}>
                        <Check stroke='white' className='w-3 h-3 md:w-4 lg:h-4'/>
                    </span>
                    <span className={`text-sm lg:text-base 
                        ${feature.available ?
                            plan.featured ?
                            "text-white/70" :
                            "text-dark dark:text-dark-text" 
                            : "text-font/70 dark:text-dark-muted/70 line-through"
                         }`}>
                        {feature.name}
                    </span>                    
                </li>
                ))}
            </ul>
        </div>
        </div>
        
  )
}

export default PricingCard
