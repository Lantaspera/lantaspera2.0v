import React from 'react'
import "./serviceone.css"
import { Col, Container, Row, Image } from 'react-bootstrap'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';


function ServiceOne() {
    return (

        <Container className="srvc1-mdiv"  >
            <Row xs={1} md={2} className='srvc1-m-row' >
                <Col data-aos="fade-right">

                    <Col> <h1 className="srvc1-red-heading">CAST YOUR EYES TO KNOW MORE ON</h1></Col>
                    <Col><h1 className="srvc1-head1-sctn">
                        <span className="srvc1-head-1">What We </span>
                        <span className="srvc1-head-2">D</span>
                        <span className="srvc1-head-1">o</span>

                    </h1></Col>

                    <Row className="srvc1-head1-sctn">
                        <Col xs={1} md={.5} ><h1 className="srvc1-redline-img">|</h1></Col>
                        <Col xs={11} md={11.5}><p className="srvc1-red-tag">We deliver unique,dynamic,responsive and superior performance website as per specific business needs of our clients.</p></Col>
                    </Row>
                    <Col><p className="srvc1-para-1">Our experts utilizes cutting-edge technologies and platforms to complement your business objectives.<br />  We craft an online presence that solidifies your business and build trust in customers. </p></Col>
                    <Col>
                        <p className="srvc1-cntnt-para"><CheckOutlinedIcon color="error" fontSize="small" /> We maintain seamless communication.</p>
                        <p className="srvc1-cntnt-para"><CheckOutlinedIcon color="error" fontSize="small" />   Dynamic and proven approach. </p>
                        <p className="srvc1-cntnt-para"><CheckOutlinedIcon color="error" fontSize="small" />    Leverage Social Media Marketing.</p>
                    </Col>

                </Col>
                <Col data-aos="fade-left">< Image className="srvc1-first-img" src="https://res.cloudinary.com/lanta/image/upload/v1638380595/image_6_ijof1n.png" fluid /></Col>

            </Row>
        </Container>

    )
}

export default ServiceOne
