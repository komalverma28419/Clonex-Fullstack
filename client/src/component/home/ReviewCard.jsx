import React from 'react'

const ReviewCard = ({review}) => {
  return (
    <div className=''>
      <div className='flex flex-col items-center text-center '>
        <img src={review.image} alt="" className='w-16 h-16 rounded-full object-cover'/>
        <p className='mt-4 text-sm xl:text-base text-white/90 dark:text-dark-muted leading-normal md:leading-7'>
          {review.review}
        </p>
        <div className='mt-6'>
            <h4 className='text-white dark:text-dark-text font-bold text-xl lg:text-2xl'>{review.name}</h4>
            <p className='text-[#F9F9F9] dark:text-dark-muted/40 text-xs md:text-[15px]'>{review.role}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
