import React from 'react';
import "./Home.css";
import ServiceCarousel from './Landingpage/ServiceCarousel';
import SectionThree from './Landingpage/SectionThree';
import SectionFour from './Landingpage/SectionFour';
import SectionFive from './Landingpage/SectionFive';
import SectionSix from './Landingpage/SectionSix';
import { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';








function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='home-page-main' >


      <Container className='section-one-landing'>

        <Row xs={1} md={2} className='sctn1-m-row'>
          <Col data-aos="fade-up" className='sctn1-sub-col1' >
            <Col>
              <h1 className="tag-lanta"  > Welcome to Lantaspera <br />The Most Powerful <br /> SaaS Solution</h1> </Col>
            <Col> <p className="caption-lanta">Customer driven customised application development <br /> inline with/backing trending technology and innovative ideas. We deliver better solutions to transform your business digitally. Leading SaaS platform to conjure your mesmerising fables and fairy tales.
            </p></Col>

          </Col>
          <Col data-aos="fade-left" md={6} ><img className="sectn1-img" alt="#" src="https://res.cloudinary.com/lanta/image/upload/v1640104867/landing_1_2_zo43pz.svg" /></Col>
        </Row>
      </Container>
      {/* ......................................................................................................................................... */}

      <Container className='section-two-landing'>
        <ServiceCarousel />
      </Container>

      {/* ......................................................................................................................................... */}
      <Container className='section-three-landing'>
        <SectionThree />
      </Container>
      {/* ......................... section 4.................................................................................................................. */}

      <SectionFour />
      {/* ............................................................................................................................................. */}

      <Container className='section-five-landing'>
        <SectionFive />
      </Container>
      {/* .............................................................................................................................................. */}

      <Container className='section-six-landing'>
        <SectionSix />
      </Container>
    </div>


  )
}

export default Home
