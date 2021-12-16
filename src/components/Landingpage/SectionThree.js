import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./sectionthree.css"
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

function SectionThree() {
    return (
        <Container className="sctn3-maindiv" >
    <Row xs={1} md={2}>
    <Col >
     <Col><h2 className="sectn3-heading">Discover how we can help you to grow your business fast.</h2></Col>
     <Col><p className="sectn3-tagline">We creates more visibility for your business providing a digital storefont.</p></Col>
     <Col>
     <p className="about-cntnt-para"><CheckOutlinedIcon color="error" fontSize="small" />    Build an SEO-Friendly Website.</p>
     
            <p className="about-cntnt-para"><CheckOutlinedIcon color="error" fontSize="small" />   Market  your business through webpresence. </p>
            <p className="about-cntnt-para"><CheckOutlinedIcon color="error" fontSize="small" />   Conveys your brand story.</p>
     </Col>

    </Col>
    <Col data-aos="fade-left"><img data-aos="fade-left" className="sectn3-img" alt="#" src="https://res.cloudinary.com/lanta/image/upload/v1638999453/Layer_1_qbmrf5.svg" /></Col>
    
  </Row>
      </Container>
    )
}

export default SectionThree
