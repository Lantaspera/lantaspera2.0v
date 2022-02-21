import React from 'react'
import "./About.css"
import AboutOne from './Aboutpage/AboutOne'
import AboutTwo from './Aboutpage/AboutTwo'
import AboutFour from './Aboutpage/AboutFour'
import TopCurve from './Aboutpage/TopCurve'
import { useEffect } from 'react'


function About() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='aboutpge' >
        <TopCurve />
        <AboutOne/>
       <AboutTwo/>
       <AboutFour/>
      
    </div>
  )
}

export default About
