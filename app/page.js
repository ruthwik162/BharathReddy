"use client"
import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import ReactLenis from '@studio-freight/react-lenis'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

const page = () => {
  return (
    <ReactLenis root>
      <div className=''>
        <Hero />
        <About />
        <Expertise />
        <Services/>
        <Portfolio/>
        <Contact/>
      </div>
    </ReactLenis>
  )
}

export default page
