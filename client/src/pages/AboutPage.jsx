import React from 'react'
import AboutHeading from '../component/about/AboutHeading'
import AboutHero from '../component/about/AboutHero'
import Growth from '../component/ui/Growth'
import MissionVision from '../component/about/MissionVision'
import CoreValues from '../component/about/CoreValues'
import OurStory from '../component/about/OurStory'
import Choose from '../component/about/Choose'
import NewsLetter from '../component/shared/NewsLetter'

const AboutPage = () => {
  return (
    <>
      <AboutHeading/>
      <AboutHero/>
      <Growth/>
      <MissionVision/>
      <CoreValues/>
      <OurStory/>
      <Choose/>
      <NewsLetter/>
     
    </>
  )
}

export default AboutPage
