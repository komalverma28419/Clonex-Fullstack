import React, { useState } from 'react'
import { faqData } from '../../../data/faqData'
import FaqItem from './FaqItem'

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(null)
  return (
    <section className='py-6 md:py-10 xl:py-14'>
      <div className='max-w-7xl mx-auto px-7 lg:px-12 xl:px-14'>
        <div className='max-w-4xl mx-auto'>
            <h3 className='font-bold text-2xl lg:text-3xl text-dark dark:text-dark-text text-center'>
              Frequently Asked Questions
            </h3>
            <div className='mt-14 flex flex-col gap-4'>
              {faqData.map((item) =>(
                <FaqItem key={item.id} item={item}
                  open={activeFaq === item.id}
                  setOpen= {() =>setActiveFaq(activeFaq === item.id ? null : item.id)}
                />
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
