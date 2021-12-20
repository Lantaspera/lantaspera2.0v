import React from 'react'
import {  Container } from 'react-bootstrap'
import "./Home.css"
import SectionOne from './Landingpage/SectionOne';
import ServiceCarousel from './Landingpage/ServiceCarousel';
import SectionThree from './Landingpage/SectionThree';
import SectionFour from './Landingpage/SectionFour';
import SectionFive from './Landingpage/SectionFive';
import SectionSix from './Landingpage/SectionSix';
import SectionSeven from './Landingpage/SectionSeven';
import { useEffect } from 'react'
import SectionStart from './Landingpage/SectionStart';






function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="home-page-main"  >
<Container >


<SectionOne/>
<ServiceCarousel/>
<SectionThree/>

<SectionFour/>
<SectionFive/>

<SectionSix/>
<SectionSeven/>

</Container>
    </div>
  )
}

export default Home
