import React, {useState } from 'react'
import { pricingDetail } from '../../data/pricingData'
import Button from '../ui/Button'
import PricingToggle from '../shared/pricing/PricingToggle'
import { ChevronDown} from 'lucide-react'
import { useToast } from '../../context/ToastContext'


const PricingBanner = () => {
  const [billing, setBilling] = useState("monthly")
  const [license, setLicense] = useState("0")
  const [selectPlan, setSelectPlan] = useState("")
  const {showToast} = useToast()


  const handleSubmit = () => {
    if(!selectPlan && Number(license) <= 0){
      showToast("error", "Please select a plan and enter mobile devices")
      return
    }
    if(!selectPlan){
      showToast("error", "Please select a plan")
      return
    }
    if(Number(license) <= 0){
      showToast("error", "License must be greater than 0")
      return
    }
    showToast("calculation successful", "success")
  }

  const plan = pricingDetail.find((item) => item.id === Number(selectPlan))
  const pricePerLicense = plan ? billing === "monthly" ? plan.price.monthly : plan.price.annually : 0

  const total = pricePerLicense * (Number(license) || 0)

  return (
    <section className='py-10 lg:py-14 dark:bg-dark-alternate'>
      <div className='max-w-7xl mx-auto px-7 lg:px-12 xl:px-14'>
        <div className=''>
            <h3 className='font-bold text-2xl lg:text-3xl text-dark dark:text-dark-text text-center'>
                Estimate Your Clonex Cost
            </h3>
            <p className='text-font/40 dark:text-dark-muted text-sm text-center mt-1'>
              Find the perfect plan for your business with a quick cost estimate.
            </p>
            <div className='max-w-3xl mx-auto mt-6 rounded-xl shadow-2xs border border-gray-300
             dark:border-dark-border px-16 py-10 bg-blue-50/20 dark:bg-dark-background'>
                <div className='flex justify-center'>
                  <PricingToggle billing={billing} setBilling={setBilling}/>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 mt-6'>
                  <div className='flex flex-col w-full'>
                    <label className='font-medium text-primary'>Purchase</label>
                    <div className='relative '>
                      <select  
                        value={selectPlan}
                        
                        onChange={(e) => setSelectPlan(e.target.value)} 
                        className='flex-1 appearance-none outline-none border w-full rounded-md p-3 mt-1
                        border-gray-300 dark:border-dark-border focus:border-primary/30
                          dark:focus:border-primary/60'>

                          <option value="" className='dark:bg-dark-background'>Select Plan</option>
                          {pricingDetail.map((item) =>(
                            <option key={item.id} value={item.id} className='dark:bg-dark-background border border-primary/60'>{item.title}</option>
                          ))}
                      </select>
                      <ChevronDown size={20}  className='absolute right-4 top-[31%] text-gray-400
                      pointer-events-none w-6 h-6 rounded-sm bg-gray-100 border border-gray-300'/>
                    </div>
                    
                  </div>
                    <div className='flex flex-col w-full'>
                      <label className='font-medium text-primary'>License For Phone Numbers</label>
                      <input type="number" 
                      placeholder='No. of licenses'
                      onFocus={(e) => e.target.select()} value={license} 
                        onChange={(e) =>setLicense(e.target.value)} 
                        className='flex-1 appearance-none outline-none border w-full rounded-md p-3 mt-1
                         border-gray-300 dark:border-dark-border focus:border-primary/30 
                          dark:focus:border-primary/60 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'/>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center mt-6'>
                  <h3 className='text-base sm:text-2xl font-medium mb-6'>It will cost 
                    <span className='text-3xl lg:text-4xl font-bold text-secondary'> ₹ {total.toLocaleString()}</span>
                     <span>/ {billing === "monthly" ? "month" : "year"}</span>
                  </h3>

                  <Button text="Request a Demo" size='md' onClick={handleSubmit} type='submit'/>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default PricingBanner



