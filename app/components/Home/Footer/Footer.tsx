import React from 'react'
import { FaDribbble, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="pt-16 pb-16  bg-gray-950 ">
      <div className="w-[80%] mx-auto items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1st part  */}
        <div>
          <div className="text-white font-bold text-3xl">  Logo </div>
          <p className='mt-5 font-semibold text-gray-300 text-sm'>
            We sell headphones with clear sound, powerful bass, long battery life, fast delivery,
            a warranty, competitive prices, and stylish designs for all users.
          </p>
          {/* social link  */}
          <div className="flex items-center text-white space-x-4 mt-6">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-full neon-border">
              <div className="w-8 h-8 bg-blue-700 flex items-center justify-center rounded-full z-10">
                <FaFacebookF size={18} className="text-white" />
              </div>
            </div>

            <div className="relative w-10 h-10 flex items-center justify-center rounded-full neon-border">
              <div className="w-8 h-8 bg-sky-500 flex items-center justify-center rounded-full z-10">
                <FaTwitter size={18} className="text-white" />
              </div>
            </div>

            <div className="relative w-10 h-10 flex items-center justify-center rounded-full neon-border">
              <div className="w-8 h-8 bg-green-500 flex items-center justify-center rounded-full z-10">
                <FaDribbble size={18} className="text-white" />
              </div>
            </div>

            <div className="relative w-10 h-10 flex items-center justify-center rounded-full neon-border">
              <div className="w-8 h-8 bg-red-500 flex items-center justify-center rounded-full z-10">
                <FaYoutube size={18} className="text-white" />
              </div>
            </div>
          </div>
        </div>
        {/* 2nd part  */}
        <div className="space-y-5">
          <h1 className='text-lg text-white font-bold'>Company</h1>
          <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>
            About Us
          </p>
          <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>
            Services
          </p>
          <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>
            Our Customers
          </p>
          <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>
            Portfolio
          </p>
          <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>
            Blogs
          </p>
        </div>

        {/* 3rd part  */}
        <div className="space-y-5">
          <h1 className='text-lg text-white font-bold'>Support</h1>
          <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>
            Legal Information
          </p>
          <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>
            Terms & Condition
          </p>
          <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>
            Repot Abuse
          </p>
          <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>
            Privacy Police
          </p>
        </div>

        {/* 4th part  */}
        <div>
          <h1 className='text-lg text-white font-bold'>Get in Toucht</h1>
          <div className="mt-6">
            <h2 className='text-white font-medium cursor-pointer text-sm'>
              Our Mobile Number
            </h2>
            <a href="#" className='text-gray-300 text-base mt-1  hover:text-gray-400 font-medium cursor-pointer'>
              0999999990
            </a>
          </div>
          <div className="mt-6">
            <h3 className='text-white text-sm'> Our Adress</h3>
            <p className='text-white text-base font-bold mt-1'>
              Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
      {/* Bottom part */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center
      text-gray-600 text-sm">
        <p className='text-gray-300 text-center md:text-left'>Copyright © 2025 Webdev. All rights reserved</p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0 group">
          <span>Social:</span>
          <span className='text-gray-300 group-hover:text-gray-800 transition-all duration-200'>
            <FaFacebookF size={18} className="text-white" />
          </span>
          <span className='text-gray-300 group-hover:text-gray-800 transition-all duration-200'>
            <FaTwitter size={18} className="text-white" />
          </span>
          <span className='text-gray-300group-hover:text-gray-800transition-all duration-200'>
            <FaDribbble size={18} className="text-white" />
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer