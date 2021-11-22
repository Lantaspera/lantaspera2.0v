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





function Home() {
  return (
    <div className="home-page-main">

<SectionOne/>
     
<Container className="section-two">
  <Row>
    <Col> <h2 className="heading-sectn2">Integrated solutions designed for small business.</h2></Col>
  </Row>
 <ServiceCarousel/>
 </Container>
<SectionThree/>

<SectionFour/>
<SectionFive/>
<SectionSix/>
<SectionSeven/>


    </div>
  )
}

export default Home
