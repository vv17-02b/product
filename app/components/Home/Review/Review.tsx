import React from 'react'
import ReviewSlider from './ReviewSlider'

const Review = () => {
    return (
        <section className="py-20">
            {/* container дає padding зліва/справа */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className='text-center text-2xl sm:text-3xl text-gray-900 dark:text-white font-bold'>
                    10k+ Customers &apos; s Trust Us
                </h1>
                <span className='w-30 h-1 bg-yellow-600 mt-2 mx-auto block'></span>
                <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto mt-16">
                 {/* Review Slider  */}
                 <ReviewSlider/>
                </div>
            </div>
        </section>
    )
}

export default Review