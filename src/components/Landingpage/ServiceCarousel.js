import React from 'react'
import "./servicecarousel.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'react-bootstrap/Image'
import { Row, Col, Container } from 'react-bootstrap';



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
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

            <Carousel draggable={false} responsive={responsive} infinite={true} autoPlay={true} arrows={false} slidesToSlide={3} >
<Container className="secnd-section-crsl">
                <Row xs={1} md={1}>
                    <Col><Image className="section2-img" src="https://res.cloudinary.com/lanta/image/upload/v1633713713/3456379_q3hwof.jpg" roundedCircle /></Col>
                    <Col> <h3 className="section2-details1" >Designers </h3></Col>
                    <Col> <p className="section2-details2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p></Col>
                </Row>

</Container>
<Container className="secnd-section-crsl">
                <Row xs={1} md={1}>
                    <Col><Image className="section2-img" src="https://res.cloudinary.com/lanta/image/upload/v1633713713/3456379_q3hwof.jpg" roundedCircle /></Col>
                    <Col> <h3 className="section2-details1" >Marketing </h3></Col>
                    <Col> <p className="section2-details2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p></Col>
                </Row>

</Container>
<Container className="secnd-section-crsl">
                <Row xs={1} md={1}>
                    <Col><Image className="section2-img" src="https://res.cloudinary.com/lanta/image/upload/v1633713713/3456379_q3hwof.jpg" roundedCircle /></Col>
                    <Col> <h3 className="section2-details1" >web developement </h3></Col>
                    <Col> <p className="section2-details2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p></Col>
                </Row>

</Container>


<Container className="secnd-section-crsl">
                <Row xs={1} md={1}>
                    <Col><Image className="section2-img" src="https://res.cloudinary.com/lanta/image/upload/v1633713713/3456379_q3hwof.jpg" roundedCircle /></Col>
                    <Col> <h3 className="section2-details1" >Desi </h3></Col>
                    <Col> <p className="section2-details2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p></Col>
                </Row>

</Container>
<Container className="secnd-section-crsl">
                <Row xs={1} md={1}>
                    <Col><Image className="section2-img" src="https://res.cloudinary.com/lanta/image/upload/v1633713713/3456379_q3hwof.jpg" roundedCircle /></Col>
                    <Col> <h3 className="section2-details1" >Ma </h3></Col>
                    <Col> <p className="section2-details2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p></Col>
                </Row>

</Container>
<Container className="secnd-section-crsl">
                <Row xs={1} md={1}>
                    <Col><Image className="section2-img" src="https://res.cloudinary.com/lanta/image/upload/v1633713713/3456379_q3hwof.jpg" roundedCircle /></Col>
                    <Col> <h3 className="section2-details1" >web </h3></Col>
                    <Col> <p className="section2-details2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p></Col>
                </Row>

</Container>

            </Carousel>;

           

        </div>
    )
}

export default ServiceCarousel
