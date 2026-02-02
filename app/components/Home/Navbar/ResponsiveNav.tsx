'use client'
import React, {  useState } from 'react'
import Nav from './Nav'
import MobileNavbar from './MobileNavbar'


const ResponsiveNav = () => {

  const [showNav, setShowNav] = useState(false)
  const handeleNavOpen = () => setShowNav(true)
  const handeleNavClose = () => setShowNav(false)

  return (
    <div>
      <Nav openNav={handeleNavOpen} />
      <MobileNavbar showNav={showNav} closeNav={handeleNavClose} />
    </div>
  )
}

export default ResponsiveNav
