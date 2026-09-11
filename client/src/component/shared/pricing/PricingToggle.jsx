import React from 'react'

const PricingToggle = ({billing, setBilling}) => {
    const handleClick = () => {
        setBilling(billing === "monthly" ? "annually" : "monthly")
    } 
  return (
    <div className='flex items-center gap-6'>
      <span className={billing === "monthly" ? "font-semibold" : "text-gray-500"}>Monthly</span>
      <button onClick={handleClick} className='w-14 h-7 rounded-full bg-secondary dark:bg-primary relative'>
        <div className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all duration-300
            ${billing === "monthly" ? "left-1" : "left-8"}`}/>
      </button>
      <span className={billing === "annually" ? "font-semibold" : "text-gray-500"}>Annually</span>
    </div>
  )
}

export default PricingToggle
