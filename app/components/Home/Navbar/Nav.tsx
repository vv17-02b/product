'use client'

import { navLinks } from '@/app/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'
import ThemeToggle from '../../Helper/ThemeToggle'

type Props = {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true)
      else setNavBg(false)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, []);

  return (
    <div className={`fixed w-full transition-all duration-300 z-100 h-[12vh]
       flex items-center ${navBg ? 'bg-blue-500 shadow-md' : 'bg-blue-950 shadow-[0_8px_20px_rgba(0,0,0,0.6)]'
      }`}>
      <div className="flex items-center h-full justify-between sm:w-[80%] w-[90%] mx-auto">
        {/* logo */}
        <div className="text-white font-bold text-2xl sm:text-3xl">
          Logo
        </div>

        {/* NavLink */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="relative text-white font-semibold px-1 
              before:absolute before:top-0 before:left-0 before:h-0.5 before:w-0
               before:bg-white before:transition-all before:duration-300
                after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0
                 after:bg-white after:transition-all after:duration-300 hover:before:w-full
                  hover:after:w-full">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <div className="rainbow relative overflow-hidden rounded-full p-0.5 transition hover:scale-105 active:scale-100">
            <button
              className="
        flex items-center text-white font-medium rounded-full
        bg-gray-900/80 backdrop-blur
        px-4 py-2 text-xs
        sm:px-6 sm:py-2.5 sm:text-sm
        md:px-8 md:py-3 md:text-base
      "
            >
              <FaShoppingBag className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Buy Now
            </button>
          </div>

          <ThemeToggle />

          <HiBars3BottomRight
            onClick={openNav}
            className="w-7 h-7 sm:w-8 sm:h-8 text-white cursor-pointer lg:hidden"
          />
        </div>
      </div>
    </div>
  )
}

export default Nav
