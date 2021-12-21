import React from 'react'
import "./About.css"
import { Container } from 'react-bootstrap'
import AboutOne from './Aboutpage/AboutOne'
import AboutTwo from './Aboutpage/AboutTwo'
import SectionSeven from './Landingpage/SectionSeven'
import AboutThree from './Aboutpage/AboutThree'
import AboutFour from './Aboutpage/AboutFour'
import TopCurve from './Aboutpage/TopCurve'
import { useEffect } from 'react'


function About() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Container className='aboutpge' fluid>
        <TopCurve />
        <AboutOne />
        <AboutTwo />
        <AboutThree />
        <AboutFour />
        <SectionSeven />
      </Container>
    </div>
  )
}

export default About
