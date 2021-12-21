import React from 'react'
import "./servicetwo.css"
import { Col, Row, } from 'react-bootstrap'
import { AiOutlineLine } from "react-icons/ai";
import Card from 'react-bootstrap/Card'
import { GiPencilRuler } from "react-icons/gi";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { AiOutlineCloudSync } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';

function ServiceTwo() {
    return (
        <div className="srvc2-frst-row">
            <Container>

                <Row data-aos="fade-up" >
                    <Row xs={1} >
                        <Col><h1 className="srvc2-frst-heading"><AiOutlineLine />OUR SERVICES<AiOutlineLine /></h1></Col>
                        <Col><h1 className="srvc2-scnd-heading">We Offer a Wide Variety of IT Services</h1></Col>
                        <Col><p className="srvc2-tagline">Blending our experience with technologies we provide various services <br /> that offers a comprehensive range of digital solutions.</p></Col>
                    </Row>

                    <Row className="srvc2-card-mrow" xs={1} md={3} sm={2}>
                        <Col>


                            <Card className="srvc2-card-mdiv" ><Link className='srvc2-link-tag' to="/webdesign">
                                <div className="layer"></div>
                                <Col className="srvc2-card-icon"> <AiOutlineCodeSandbox className="sctn2-icon" size={50} /></Col>

                                <Card.Body>
                                    <Card.Title className="srvc2-card-heading">Web Design</Card.Title>
                                    <Card.Text className="srvc2-card-tagline">
                                        We delivers a versatile web design services with customized theme based ui/ux design.
                                    </Card.Text>

                                </Card.Body>
                            </Link></Card>
                        </Col>

                        <Col>
                            <Card className="srvc2-card-mdiv"><Link className='srvc2-link-tag' to="/webdevelopment">

                                <Col className="srvc2-card-icon"> <FaLaptopCode className="sctn2-icon" size={50} /></Col>

                                <Card.Body>
                                    <Card.Title className="srvc2-card-heading">Web Development</Card.Title>
                                    <Card.Text className="srvc2-card-tagline">
                                        We offer optimized and responsive web development services rooted in creativity using popular platform.
                                    </Card.Text>

                                </Card.Body>
                            </Link></Card>
                        </Col>

                        <Col>
                            <Card className="srvc2-card-mdiv" ><Link className='srvc2-link-tag' to="/appdevelopment">

                                <Col className="srvc2-card-icon"> <MdOutlineAppSettingsAlt className="sctn2-icon" size={50} /></Col>

                                <Card.Body>
                                    <Card.Title className="srvc2-card-heading">App Development</Card.Title>
                                    <Card.Text className="srvc2-card-tagline">
                                        We provide superior performance web applications that are compatible with all devices.
                                    </Card.Text>

                                </Card.Body></Link>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="srvc2-card-mdiv" ><Link className='srvc2-link-tag' to="/graphicdesign">

                                <Col className="srvc2-card-icon"> <GiPencilRuler className="sctn2-icon" size={50} /></Col>

                                <Card.Body>
                                    <Card.Title className="srvc2-card-heading">Graphic Design</Card.Title>
                                    <Card.Text className="srvc2-card-tagline">
                                        We create attractive and beautiful designs that provides unique image for your business.
                                    </Card.Text>

                                </Card.Body></Link>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="srvc2-card-mdiv" ><Link className='srvc2-link-tag' to="/digitalmarket">

                                <Col className="srvc2-card-icon"> <AiOutlineCloudSync className="sctn2-icon" size={50} /></Col>

                                <Card.Body>
                                    <Card.Title className="srvc2-card-heading">Digital Market</Card.Title>
                                    <Card.Text className="srvc2-card-tagline">
                                        We help your business to grow with our digital marketing experts by finding your potential customers.
                                    </Card.Text>
                                </Card.Body></Link>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="srvc2-card-mdiv" ><Link className='srvc2-link-tag' to="/socialmedia">

                                <Col className="srvc2-card-icon"> <BiMessageRoundedDots className="sctn2-icon" size={50} /></Col>

                                <Card.Body>
                                    <Card.Title className="srvc2-card-heading">Social Media Campaign</Card.Title>
                                    <Card.Text className="srvc2-card-tagline">
                                        We continuously try to achieve your market through social media.
                                    </Card.Text>

                                </Card.Body></Link>
                            </Card>
                        </Col>




                    </Row>
                </Row>
            </Container>


        </div>
    )
}

export default ServiceTwo
