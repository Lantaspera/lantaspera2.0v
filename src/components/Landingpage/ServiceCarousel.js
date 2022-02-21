import React from 'react'
import "./servicecarousel.css"
import { Link } from 'react-router-dom'
import "react-multi-carousel/lib/styles.css";
import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { GiPencilRuler } from "react-icons/gi";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { AiOutlineCloudSync } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";







function ServiceCarousel() {
    return (
        <Container className='sctn2-main-div' fluid>

            <Row className="section-two" data-aos="fade-up">
                <Col data-aos="fade-up"> <h2 className="heading-sectn2">Integrated solutions designed for small business.</h2></Col>
            </Row>



            <Container   >
                <Row xs={1} md={3} >

                    <Col data-aos="fade-up"
                        data-aos-duration="1000">
                        <Row>
                            <Col>
                                <Card className="sctn2-card-div" ><Link className='sctn2-link-tag' to="/services">


                                    <Card.Body>

                                        <Col> <button className="sctn2-icon-div"> <AiOutlineCodeSandbox className="sctn2-icon" size={50} /></button></Col>
                                        <Card.Title className="sctn2-cardheading">Web Design</Card.Title>
                                        <Card.Text className="sctn2-cardtext">
                                            Our web designing services ensure a well formatted content and a well planned information architecture.....
                                        </Card.Text>
                                        <Col className="sctn2-atag"></Col><Link className="sctn2-atag" to="/webdesign">
                                            Learn more
                                        </Link>
                                    </Card.Body></Link>
                                </Card>

                            </Col>

                        </Row>
                    </Col>

                    <Col data-aos="fade-up"
                        data-aos-duration="4000" >
                        <Row>
                            <Col>
                                <Card className="sctn2-card-div"><Link className='sctn2-link-tag' to="/services">


                                    <Card.Body>

                                        <Col> <button className="sctn2-icon-div"> <FaLaptopCode className="sctn2-icon" size={50} /></button></Col>
                                        <Card.Title className="sctn2-cardheading">Web Development </Card.Title>
                                        <Card.Text className="sctn2-cardtext">
                                            Our web development services provide qualitative services including unique web content, quick and.....
                                        </Card.Text>
                                        <Col className="sctn2-atag"><Link className="sctn2-atag" to="/webdevelopment">
                                            Learn more
                                        </Link></Col>
                                    </Card.Body></Link>
                                </Card>

                            </Col>

                        </Row>
                    </Col>

                    <Col data-aos="fade-up"
                        data-aos-duration="8000" >
                        <Row>
                            <Col>
                                <Card className="sctn2-card-div"><Link className='sctn2-link-tag' to="/services">


                                    <Card.Body>

                                        <Col> <button className="sctn2-icon-div"> < MdOutlineAppSettingsAlt className="sctn2-icon" size={50} /></button></Col>
                                        <Card.Title className="sctn2-cardheading">App Development</Card.Title>
                                        <Card.Text className="sctn2-cardtext">
                                            Our App development services provide well designed, well featured, eye catching app having great UI.....
                                        </Card.Text>
                                        <Col className="sctn2-atag"><Link className="sctn2-atag" to="/appdevelopment">
                                            Learn more
                                        </Link></Col>
                                    </Card.Body></Link>
                                </Card>

                            </Col>

                        </Row></Col>
                </Row>




                <Row xs={1} md={3}>
                    <Col data-aos="fade-up"
                        data-aos-duration="1000" >
                        <Row>
                            <Col>
                                <Card className="sctn2-card-div"><Link className='sctn2-link-tag' to="/services">


                                    <Card.Body>

                                        <Col> <button className="sctn2-icon-div"> < GiPencilRuler className="sctn2-icon" size={50} /></button></Col>
                                        <Card.Title className="sctn2-cardheading">Graphic Design</Card.Title>
                                        <Card.Text className="sctn2-cardtext">
                                            Our expertise uses perfect designs and color
                                            theory for creating fresh communication and.....
                                        </Card.Text>
                                        <Col className="sctn2-atag"><Link className="sctn2-atag" to="/graphicdesign">
                                            Learn more
                                        </Link></Col>
                                    </Card.Body></Link>
                                </Card>

                            </Col>

                        </Row></Col>
                    <Col data-aos="fade-up"
                        data-aos-duration="4000" ><Row>
                            <Col>
                                <Card className="sctn2-card-div"><Link className='sctn2-link-tag' to="/services">


                                    <Card.Body>

                                        <Col> <button className="sctn2-icon-div"> <AiOutlineCloudSync className="sctn2-icon" size={50} /></button></Col>
                                        <Card.Title className="sctn2-cardheading">Digital Market </Card.Title>
                                        <Card.Text className="sctn2-cardtext">
                                            Our team experts establishes your online identity,
                                            build trust  stimulate customer interactivity.....
                                        </Card.Text>
                                        <Col className="sctn2-atag"><Link className="sctn2-atag" to="/digitalmarket">
                                            Learn more
                                        </Link></Col>
                                    </Card.Body></Link>
                                </Card>

                            </Col>

                        </Row></Col>

                    <Col data-aos="fade-up"
                        data-aos-duration="4000" ><Row>
                            <Col>
                                <Card className="sctn2-card-div"><Link className='sctn2-link-tag' to="/services">


                                    <Card.Body>

                                        <Col> <button className="sctn2-icon-div"> <BiMessageRoundedDots className="sctn2-icon" size={50} /></button></Col>
                                        <Card.Title className="sctn2-cardheading">Social Media Campaign </Card.Title>
                                        <Card.Text className="sctn2-cardtext">
                                            A social media campaign is a coordinated
                                            marketing effort to reinforce or assist with a business.....v
                                        </Card.Text>
                                        <Col className="sctn2-atag"><Link className="sctn2-atag" to="/socialmedia">
                                            Learn more
                                        </Link></Col>
                                    </Card.Body></Link>
                                </Card>

                            </Col>

                        </Row></Col>

                </Row>
            </Container>
        </Container>


    )
}

export default ServiceCarousel
