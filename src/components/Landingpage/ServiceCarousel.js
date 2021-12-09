import React from 'react'
import "./servicecarousel.css"
import {Link} from 'react-router-dom'
import "react-multi-carousel/lib/styles.css";

import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { GiPencilRuler } from "react-icons/gi";
import { MdOutlineAppSettingsAlt } from "react-icons/md";




function ServiceCarousel() {
    return (
        <div >

            <Container className="section-two" data-aos="fade-up">
                <Row>
                    <Col> <h2 className="heading-sectn2">Integrated solutions designed for small business.</h2></Col>
                </Row>

            </Container>

            <Container  >
                <Row xs={1} md={3} >
                    <Col data-aos="flip-left">
                    <Row>
                        <Col>
                            <Card className="sctn2-card-div">


                                <Card.Body>

                                    <Col> <button className="sctn2-icon-div"> <FaLaptopCode className="sctn2-icon" size={50} /></button></Col>
                                    <Card.Title className="sctn2-cardheading">Web development</Card.Title>
                                    <Card.Text className="sctn2-cardtext">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    </Card.Text>
                                    <Col className="sctn2-atag"></Col><Link to="/webdesign">
                    <li>Learn more</li>
                </Link>
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row></Col>
                    <Col data-aos="flip-left">
                    <Row>
                        <Col>
                            <Card className="sctn2-card-div">


                                <Card.Body>

                                    <Col> <button className="sctn2-icon-div"> <GiPencilRuler className="sctn2-icon" size={50} /></button></Col>
                                    <Card.Title className="sctn2-cardheading">Automation  </Card.Title>
                                    <Card.Text className="sctn2-cardtext">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    </Card.Text>
                                    <Col className="sctn2-atag"><a >Learn more</a></Col>
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row></Col>
                    <Col data-aos="flip-left">
                    <Row>
                        <Col>
                            <Card className="sctn2-card-div">


                                <Card.Body>

                                    <Col> <button className="sctn2-icon-div"> <AiOutlineCodeSandbox className="sctn2-icon" size={50} /></button></Col>
                                    <Card.Title className="sctn2-cardheading">Web Designing</Card.Title>
                                    <Card.Text className="sctn2-cardtext">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    </Card.Text>
                                    <Col className="sctn2-atag"><a >Learn more</a></Col>
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row></Col>
                </Row>
                <Row xs={1} md={3}>
                    <Col data-aos="flip-left">
                    <Row>
                        <Col>
                            <Card className="sctn2-card-div">


                                <Card.Body>

                                    <Col> <button className="sctn2-icon-div"> < MdOutlineAppSettingsAlt className="sctn2-icon" size={50} /></button></Col>
                                    <Card.Title className="sctn2-cardheading">Application</Card.Title>
                                    <Card.Text className="sctn2-cardtext">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    </Card.Text>
                                    <Col className="sctn2-atag"><a >Learn more</a></Col>
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row></Col>
                    <Col data-aos="flip-left"><Row>
                        <Col>
                            <Card className="sctn2-card-div">


                                <Card.Body>

                                    <Col> <button className="sctn2-icon-div"> <GiPencilRuler className="sctn2-icon" size={50} /></button></Col>
                                    <Card.Title className="sctn2-cardheading">Automation  </Card.Title>
                                    <Card.Text className="sctn2-cardtext">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    </Card.Text>
                                    <Col className="sctn2-atag"><a >Learn more</a></Col>
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row></Col>
                    <Col data-aos="flip-left">
                    <Row>
                        <Col>
                            <Card className="sctn2-card-div">


                                <Card.Body>

                                    <Col> <button className="sctn2-icon-div"> <FaLaptopCode className="sctn2-icon" size={50} /></button></Col>
                                    <Card.Title className="sctn2-cardheading">Web development</Card.Title>
                                    <Card.Text className="sctn2-cardtext">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    </Card.Text>
                                    <Col className="sctn2-atag"><a >Learn more</a></Col>
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row></Col>
                </Row>
            </Container>


        </div>
    )
}

export default ServiceCarousel
