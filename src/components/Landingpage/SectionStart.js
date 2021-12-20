import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "./sectionstart.css"

function SectionStart() {
    return (
        <Container fluid="md">
              <Row xs={1} md={2}>
    <Col  md={5}>
    
    <h1 data-aos="zoom-in">
            Welcome to Lantaspera <br/>The Most Powerfull <br/> SaaS Solution</h1>
    <p  >Customer driven customised application development inline with/backing trending technology and innovative ideas. We deliver better solutions to transform your business digitally. Leading SaaS platform to conjure your mesmerising fables and fairy tales.  </p>
    
    </Col>
    <Col className='hello'  md={7}>
       
    <svg width="728" height="612" viewBox="0 0 728 612" fill="none" xmlns="http://www.w3.org/2000/svg">
<path data-aos="fade-down-right" d="M1.35726 24.94C-1.86601 12.2949 7.68808 0 20.7376 0H709C720.046 0 729 8.95431 729 20V592C729 603.046 720.046 612 709 612H166.542C157.399 612 149.42 605.8 147.161 596.94L1.35726 24.94Z" fill="#ED1C24" fill-opacity="0.6"/>
<image href="https://res.cloudinary.com/lanta/image/upload/v1638997120/landing_1_1_zxi1bw.svg" x="80" y="70" />
</svg>
    </Col>
   
  </Row>
        </Container>
    )
}

export default SectionStart
