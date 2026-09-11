import React from 'react'
import Button from '../ui/Button'

const FreeTrial = () => {
  return (
    <section className='py-10 lg:py-14'>
      <div className='max-w-7xl mx-auto px-7 lg:px-12 xl:px-14'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-100 dark:bg-dark-alternate rounded-2xl p-10'>
            <div>
                <h3 className='font-bold text-2xl lg:text-3xl text-dark dark:text-dark-text'>Free Trial</h3>
                <p className='text-font dark:text-dark-muted text-sm lg:text-base mt-3'>Experience all features for free.</p>
            </div>
            <Button text="Get Start For Free" size='lg' className='mt-6 sm:mt-0'/>
        </div>
      </div>
    </section>
  )
}

export default FreeTrial
