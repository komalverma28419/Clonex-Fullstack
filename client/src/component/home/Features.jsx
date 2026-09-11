import React from 'react'
import FeatureSection from './FeatureSection'
import { features } from '../../data/featureData'

const Features = () => {
  return (
    <>
      {features.map((feature, index) => (
        <FeatureSection key={feature.id}
        feature={feature}
        index = {index}
        />
      ))}
    </>
  )
}

export default Features

