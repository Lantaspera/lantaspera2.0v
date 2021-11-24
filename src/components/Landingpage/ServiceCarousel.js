import React from 'react'
import "./servicecarousel.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'react-bootstrap/Image'
import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import LanguageIcon from '@mui/icons-material/Language';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        slidesToSlide:5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide:3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function ServiceCarousel() {
    return (
        <div>
            
            <Container className="section-two">
  <Row>
    <Col> <h2 className="heading-sectn2">Integrated solutions designed for small business.</h2></Col>
  </Row>

  </Container>
            {/* <Carousel draggable={false} responsive={responsive} infinite={true} autoPlay={true} arrows={false}  >
     

            </Carousel> */}

            <Row>
    <Col>
    <Card style={{ width: '18rem' }}>
   

  <Card.Body>
  
 <Col><LanguageIcon/></Col>
    <Card.Title className="sctn2-cardheading">Web development</Card.Title>
    <Card.Text  className="sctn2-cardtext">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    </Card.Text>
 <Col><a className="sctn2-atag">Learn more</a></Col>
  </Card.Body>
</Card>
    
    </Col>
  
  </Row>

        </div>
    )
}

export default ServiceCarousel
