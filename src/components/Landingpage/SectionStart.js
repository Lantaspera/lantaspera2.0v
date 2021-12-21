import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import SampleImage from '../svg/SampleImage'
import "./sectionstart.css"



function SectionStart() {
    return (
      <div className='sctn1-main-div'>
              <Row xs={1} md={2}>
    <Col md={5} className='sctn1-fst-col'data-aos="fade-up" >
    
    <h1 className="tag-lanta"  >
            Welcome to Lantaspera <br/>The Most Powerfull <br/> SaaS Solution</h1> 
    <p className="caption-lanta">Customer driven customised application development <br/> inline with/backing trending technology and innovative ideas. We deliver better solutions to transform your business digitally. Leading SaaS platform to conjure your mesmerising fables and fairy tales.  </p>
    
    </Col>
    <Col md={6} className='sctn1-imge' >
    
    <SampleImage  />
   
    </Col>
   
  </Row>
  </div>   
    )
}

export default SectionStart
