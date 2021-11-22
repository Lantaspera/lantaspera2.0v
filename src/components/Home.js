import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Home.css"
import SectionOne from './Landingpage/SectionOne';
import ServiceCarousel from './Landingpage/ServiceCarousel';
import SectionThree from './Landingpage/SectionThree';
import SectionFour from './Landingpage/SectionFour';
import SectionFive from './Landingpage/SectionFive';
import SectionSix from './Landingpage/SectionSix';
import SectionSeven from './Landingpage/SectionSeven';
import SectionImage from './Landingpage/SectionImage';





function Home() {
  return (
    <div className="home-page-main">
<Container fluid>
<SectionOne/>
     

 <ServiceCarousel/>

<SectionThree/>

<SectionFour/>
<SectionFive/>
{/* <SectionImage/> */}
<SectionSix/>
<SectionSeven/>

</Container>
    </div>
  )
}

export default Home
