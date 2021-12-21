import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

import "./sectionstart.css"



function SectionStart() {
    return (
      <Container className='sctn1-main-div' >
              <Row xs={1} md={2}>
    <Col data-aos="fade-up" >
    
    <h1 className="tag-lanta"  >
            Welcome to Lantaspera <br/>The Most Powerful <br/> SaaS Solution</h1> 
    <p className="caption-lanta">Customer driven customised application development <br/> inline with/backing trending technology and innovative ideas. We deliver better solutions to transform your business digitally. Leading SaaS platform to conjure your mesmerising fables and fairy tales.  </p>
    
    </Col>
    <Col data-aos="fade-left"><img  className="sectn1-img" alt="#" src="https://res.cloudinary.com/lanta/image/upload/v1640104867/landing_1_2_zo43pz.svg" /></Col>
  </Row>
  </Container>   
    )
}

export default SectionStart
