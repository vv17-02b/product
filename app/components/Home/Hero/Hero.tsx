import React from 'react'
import Particle from '../../Particle'
import Image from 'next/image'


const Hero = () => {
  return (
    <div className="relative w-full h-screen  flex justify-center flex-col bg-black bg_clip">
      {/* Particles на весь*/}
      <Particle />
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Text Content  */}
        <div>
          {/* Heading  */}
          <h1 className=' text-3xl md:text-4xl text-[#eeb808] lg:text-5xl mt-6 mb-6 font-bold  leading-10
       md:leading-14 = 3.5rem'>Superiop sound, tangible quality
          </h1>
          {/* Description  */}
          <p className=" text-xs sm:text-sm lg:text-base font-medium
            bg-linear-to-r from-[#e9b408] via-white to-[#03eeda] bg-size-[200%_100%] bg-left
            bg-clip-text text-transparent transition-all duration-300 group-hover:bg-right 
            drop-shadow-[0_0_6px_rgba(3,238,218,0.6)]" >
            Sit back, relax, and prepare to experience a new level of audio excellence.
            These headphones blend cutting-edge technology with refined craftsmanship to deliver the ultimate
            listening experience.
          </p>
          {/* Buttons  */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {/* Кнопка зліва → направо */}
            <div className="button-bg rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100">
              <a className="block relative overflow-hidden px-8 py-2.5 text-sm font-medium text-white rounded-full bg-gray-800">
                Buy Now
              </a>
            </div>

            {/* Кнопка справа → наліво */}
            <div className="button-bg button-bg--reverse rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100">
              <a className="block px-8 py-2.5 text-sm font-medium rounded-full bg-gray-600 text-white">
                Explore Now
              </a>
            </div>
          </div>

        </div>
        {/* Image Content */}
        <div className="mx-auto hidden xl:block">
          <Image
            src="/images/hero1.png"
            alt="Hero image"
            width={380}
            height={380}
            priority
          />

        </div>
      </div>
    </div>
  )
}

export default Hero
