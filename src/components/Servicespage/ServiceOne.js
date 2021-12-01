import React from 'react'
import "./serviceone.css"
import { Col, Container, Row, Image } from 'react-bootstrap'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';


function ServiceOne() {
    return (
        <div>
            <Container>
                <Row xs={1} md={2}>
                    <Col>
                       <Col> <h1 className="srvc1-red-heading">WELCOME TO OUR COMPANY</h1></Col>
                        <Col><h1 className="srvc1-head1-sctn">
                            <span className="srvc1-head-1">What We </span>
                            <span className="srvc1-head-2">D</span>
                            <span className="srvc1-head-1">o</span>

                        </h1></Col>
                        <Row className="srvc1-head1-sctn">
                            <Col xs={1} md={.5} ><h1 className="srvc1-redline-img">|</h1></Col>
                            <Col xs={11} md={11.5}><p className="srvc1-red-tag">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor gjkjmdjm cfgjghhjm fxthsgjn fgjj fjygjgh fgjdyj</p></Col>
                        </Row>
                        <Col><p className="srvc1-para-1">sellers who aspire to be good, do good, and spread goodness. We democratic, self-sustaining, two-sided marketplace which thrives on trust and is built on community and quality content.</p></Col>
                        <Col>
                            <p className="srvc1-cntnt-para"><CheckOutlinedIcon color="error" fontSize="small" />    Build an SEO-Friendly Website.</p>
                            <p className="srvc1-cntnt-para"><CheckOutlinedIcon color="error" fontSize="small" />    Tell Your Brand Story.</p>
                            <p className="srvc1-cntnt-para"><CheckOutlinedIcon color="error" fontSize="small" />    Leverage Social Media Marketing.</p>
                        </Col>
                    </Col>

                    <Col>< Image className="srvc1-first-img" src="https://res.cloudinary.com/lanta/image/upload/v1638380595/image_6_ijof1n.png" fluid /></Col>

                </Row>
            </Container>
        </div>
    )
}

export default ServiceOne
