import React from 'react'
import { Circle } from 'lucide-react'


const Title = ({text,circleColor , className=""}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Circle size={24} fill={circleColor} stroke='none'/>  
      <h3>{text}</h3>
      <div className='h-px w-20 bg-black dark:bg-dark-text'></div>
    </div>
  )
}

export default Title
