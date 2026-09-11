import React from 'react'
import Title from '../ui/Title'
import AboutCard from './AboutCard'
import { aboutCardData } from '../../data/aboutCardsData'
import Button from '../ui/Button'


const About = () => {
    
  return (
    <section className=' py-6 md:py-10 xl:py-14'>
      <div className='max-w-7xl mx-auto px-7 lg:px-12 xl:px-14'>
        <div className='grid grid-cols-1 xl:grid-cols-[1.5fr_2fr] gap-6'>
            <div className='space-y-7'>
                <Title text="About us" circleColor="#F2055C"/>
                <h3 className='text-dark dark:text-dark-text font-extrabold text-2xl md:text-3xl lg:text-4xl'>About Close call</h3>
                <p className='text-font dark:text-dark-muted leading-normal md:leading-7 text-sm
                  md:text-base'>Clonex is a modern business communication platform designed to simplify 
                  call management and improve team productivity. It enables businesses to track, manage, 
                  and analyze call activities through an intuitive dashboard, providing real-time insights
                  into team performance and customer interactions.
                </p>
                <Button text="Start Now" variant='tertiary' size='md' to="/pricing"/>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 items-center justify-items-center'>
                {aboutCardData.map((item) =>(
                    <AboutCard 
                      key={item.id}
                      imageSrc={item.imageSrc}
                      category={item.category}
                      title={item.title}
                      linkTo={item.linkTo}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
