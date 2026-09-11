import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Plus, X } from 'lucide-react'

const FaqItem = ({item, open, setOpen}) => {
    
  return (
    <div className={ `p-5 rounded-xl ${open ? "bg-primary dark:bg-primary/30" : "bg-neutral-300 dark:bg-dark-alternate"}`}>
      <button onClick={() =>setOpen()} className='flex w-full items-center justify-between'>
        <span className={`text-base md:text-lg text-start
          ${open ? "text-white font-bold text-lg lg:text-xl" : "text-dark dark:text-dark-text"}`}>
          {item.question}
        </span>
        <span className='sm:w-6 sm:h-6 w-5 h-5 rounded-full flex items-center justify-center bg-white shrink-0'>
          {open ? (<X size={18} className='text-primary'/>) : <Plus size={18} className='text-primary'/>}
        </span>
      </button>
      {/* .......................it opens instantly............................... */}
      {/* {open && (
        <p className='text-[15px] text-white/80 leading-7 mt-4'>{item.answer}</p>
      )} */}
      {/* ........................for smooth open need to max-h............................... */}

      <div className={`overflow-hidden transition-all duration-500
        ${open ? "max-h-40 opacity-100 mt-3" :"max-h-0 opacity-0"}`}>
        <p className='text-sm sm:text-[15px] text-white/80 dark:text-dark-muted leading-normal md:leading-7'>{item.answer}</p>
      </div>
    </div>
  )
}

export default FaqItem
