import React from 'react'
import Title from '../ui/Title'
import Button from '../ui/Button'


const FeatureSection = ({feature, index}) => {
    const imgPosition = index % 2 === 0 
  return (
    <section className={`py-6 md:py-10 xl:py-14 ${imgPosition ? "bg-[#FAFAFA] dark:bg-[#070c27]" : "" }`}>
        <div className='max-w-7xl mx-auto px-7 lg:px-12 xl:px-14'>
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-12 '>
                    <div className={`${imgPosition ? "lg:order-1" : "lg:order-2"}`}>
                        <Title text="OUR FEATURES" circleColor="#EFA434"/>
                        <h3 className='text-dark dark:text-dark-text font-extrabold text-xl 
                            md:text-2xl mt-8'>                           
                            {feature.title}
                        </h3>
                        <div className={`flex items-center mt-8 lg:hidden ${imgPosition ? "lg:order-1" : "lg:order-2"}`}>                       
                            <img src={feature.image} alt={feature.title} />
                        </div>                        
                        <p className='text-font dark:text-dark-muted leading-normal md:leading-7
                            text-sm md:text-base mt-5 mb-10'>
                            {feature.description} 
                        </p>
                        <Button text="Start Now" variant='primary' shine size='lg' className='sm:w-auto w-full' to="/pricing"/>                   
                    </div>
                    <div className={`items-center  hidden lg:flex ${imgPosition ? "lg:order-2" : "lg:order-1"}`}>                       
                        <img src={feature.image} alt={feature.title} />
                    </div>               
                </div>          
            </div>
    </section>
  )
}

export default FeatureSection

