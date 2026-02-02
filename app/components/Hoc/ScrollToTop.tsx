'use client'

import React, { useEffect, useState } from 'react'
import { FaRegHandPointer } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true)
      else setIsVisible(false)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
      {isVisible && (
        <button
          onClick={handleScrollToTop}
          className="
            relative neon-border cursor-pointer
            bg-red-600 hover:bg-red-700
            text-white rounded-full w-12 h-12
            flex items-center justify-center
            focus:outline-none
            transition duration-200
            hover:scale-110
          "
        >
          <FaRegHandPointer size={18} />
        </button>
      )}
    </div>
  )
}

export default ScrollToTop
