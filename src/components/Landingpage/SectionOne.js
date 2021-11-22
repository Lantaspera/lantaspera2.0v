import React from 'react'
import "./sectionone.css"
import { Col, Container, Row } from 'react-bootstrap'

function SectionOne() {
    return (
        <div>
             <Container className="section-one">
        <Row xs={1} md={2}>
          <Col> <h2 className="tag-lanta">Welcome To Lantaspera <br /> Most Powerfull <br /> SaaS Solution </h2>
          <p className="caption-lanta">Lantaspera is designed with your customers in mind, <br /> so you can track and analyze all your data in<br /> one central location. There are no limits to <br /> how you can look at your data.</p></Col>
          <Col><img className="first-image-cs" alt="#" src="https://res.cloudinary.com/lanta/image/upload/v1635942105/image_1_o6nkna.jpg" /></Col>
          <Col></Col>
        </Row>
      </Container>
        </div>
    )
}

export default SectionOne
