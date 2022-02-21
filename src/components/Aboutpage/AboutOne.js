import { Container } from '@mui/material'
import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import "./aboutone.css"





function AboutOne() {


    return (

        <Container className="abt-two-mdiv">

            <Row xs={1} md={2}>
                <Col className="abt1-first-img" data-aos="fade-right">< Image src="https://res.cloudinary.com/lanta/image/upload/v1638173324/image_5_jowfs4.png" fluid /></Col>

                <Col className="abt1-sec-mdiv" data-aos="fade-left"  >

                    <Col ><h1 className="abt1-red-heading">KNOW MORE ABOUT SHOP</h1></Col>
                    <Col > <h1 className="abt1-big-heading">Trusted web services provider</h1></Col>


                    <Row className="srvc1-head1-sctn">
                        <Col xs={1}  ><h1 className="srvc1-redline-img">|</h1></Col>
                        <Col  ><p className="srvc1-red-tag">Lantaspera solely focus on clients project, build trust and creates more visibility for your business with our unconditional effort.</p></Col>
                    </Row>




                    <Col >  <p className="abt1-main-content" >We start our journey to fulfill our long cherished dream,with a fire of inspiration inside. We always try to give the best to our beloved clients that's the only moto we carry with us. We try to find solutions to your problems by effective communication and with our restless hard work. Your smile is our light to vision.</p>
                        <h5 className="abt1-foundername">Adrid Sadanand </h5>
                        <p className="abt1-ftag">Founder/COO</p>
                    </Col>
                </Col>

            </Row>




        </Container>
    )
}




export default AboutOne


