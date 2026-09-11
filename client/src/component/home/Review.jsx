import React, { useEffect, useState } from 'react'
import { reviews } from '../../data/review'
import ReviewCard from './ReviewCard'
import { ChevronRight, ChevronLeft } from 'lucide-react'

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const handlePrev = () =>{
    if(currentIndex > 0){
      setCurrentIndex((prev) => prev - 1)
    }
  }
  const handleNext = () =>{
    if(currentIndex < lastIndex){
      setCurrentIndex((next) => next + 1)
    }
  }
  // const cardToShow = window.innerWidth >= 1024 ? 2 : 1
  const [cardToShow, setCardToShow] = useState(2) 
  useEffect(() =>{
    const handleResize = () =>{
      setCardToShow(window.innerWidth >= 1024 ? 2 : 1)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  },[])

  const lastIndex =  reviews.length - cardToShow


 
  
  return (
    <section className='py-6 md:py-10 xl:py-14 bg-[#FAFAFA] dark:bg-dark-background'>
      <div className='max-w-7xl mx-auto px-7 lg:px-12 xl:px-14'>
        <div className=''>
          <h3 className=' text-2xl lg:text-3xl text-dark dark:text-dark-text font-bold text-center'>
            What our clients says about us
          </h3>
          <div className='flex items-center gap-6 bg-[#0742A6] dark:bg-dark-alternate rounded-3xl mt-8 p-6'>
            <button onClick={handlePrev} disabled = {currentIndex === 0}
            className={`w-10 h-10 sm:w-11 sm:h-11 xl:w-12 xl:h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300
              ${currentIndex === 0 ? "bg-gray-400 cursor-not-allowed opacity-50"
                  : "bg-secondary dark:bg-primary hover:scale-105 cursor-pointer"
              }`}>
              <ChevronLeft/>
            </button>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
              {reviews.slice(currentIndex, currentIndex + cardToShow).map((review, index, arr) => (
                <div key={review.id} className={`${index !== arr.length-1 ? "px-6 lg:border-r lg:border-white/20 dark:lg:border-dark-border" :""}`}>
                  <ReviewCard  review = {review}/>
                </div>
              ))}
            </div>
            <button onClick={handleNext} disabled ={currentIndex === lastIndex}
            className={`cursor-pointe w-10 h-10 sm:w-11 sm:h-11 xl:w-12 xl:h-12 rounded-full 
              transition-all duration-300 shrink-0 flex items-center justify-center 
            ${currentIndex === lastIndex ? "bg-dark-muted cursor-not-allowed opacity-50" 
            : "bg-secondary dark:bg-primary cursor-pointer hover:scale-105"}`} >
              <ChevronRight/>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review
