import React from 'react'
import { Row, Col } from 'react-bootstrap'
import "./sectionstart.css"



function SectionStart() {
  return (
    <div className='sctn1-main-div' >
      <Row xs={1} md={2} className='sctn1-m-row'>
        <Col data-aos="fade-up" md={5} >
          <Col>
            <h1 className="tag-lanta"  > Welcome to Lantaspera <br />The Most Powerful <br /> SaaS Solution</h1> </Col>
          <Col> <p className="caption-lanta">Customer driven customised application development <br /> inline with/backing trending technology and innovative ideas. We deliver better solutions to transform your business digitally. Leading SaaS platform to conjure your mesmerising fables and fairy tales.
          </p></Col>

        </Col>
        <Col data-aos="fade-left" md={6}><img className="sectn1-img" alt="#" src="https://res.cloudinary.com/lanta/image/upload/v1640104867/landing_1_2_zo43pz.svg" /></Col>
      </Row>
    </div>
  )
}

export default SectionStart
