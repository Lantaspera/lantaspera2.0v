import React from 'react'
import "./About.css"
import { Container } from 'react-bootstrap'
import AboutOne from './Aboutpage/AboutOne'
import AboutTwo from './Aboutpage/AboutTwo'
import SectionSeven from './Landingpage/SectionSeven'
import AboutThree from './Aboutpage/AboutThree'
import AboutFour from './Aboutpage/AboutFour'


function About() {
    return (
        <div>
       <Container fluid>

           <AboutOne/>
           <AboutTwo/>
           <AboutThree/>
           <AboutFour/>

<SectionSeven/>
           </Container>
        </div>
    )
}

export default About
