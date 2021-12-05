import React from 'react'
import "./sectionseven.css"
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { FaLinkedin,FaInstagram,FaTwitter,FaFacebook } from "react-icons/fa";

function SectionSeven() {
    return (
        <div className="sctn7-footer-main"  >
            <Container >
                <Row xs={1} md={3}>
                    <Col className="sctn7-img">< Image src="https://res.cloudinary.com/lanta/image/upload/v1637569166/lantaspera_Final_kdqclo.png" fluid />
                    <p className="sctn7-logotag">Aenean lacus enim Praesent congue praesent viverra interdum maximus lobortis.</p>
                    <p className="sctn7-adresstag">47 Wood Circle, Pana City FL 32401<br/>Call us (+1) 500.369.2580<br/>info@lantaspera.com</p>
                    <p className="sctn7-followtag">Follow Us:  </p><Button  className="sctn7-folo-btn" size="sm" variant="outline-light"><FaFacebook/></Button>{' '} <Button  className="sctn7-folo-btn" size="sm" variant="outline-light"><FaLinkedin/></Button>{' '}
                    <Button className="sctn7-folo-btn" size="sm" variant="outline-light"><FaInstagram/></Button>{' '}<Button  className="sctn7-folo-btn" size="sm" variant="outline-light"><FaTwitter/></Button>{' '}
                   
                    </Col>
                    <Col  md={6} className="sctn7-content">
                        <Row xs={3} md={3} >
                            <Col><h1 className="sctn7-subheading-1">Services</h1>
                                <p className="sctn7-subtags">Web Design</p>
                                <p className="sctn7-subtags">Lorem Test</p>
                                <p className="sctn7-subtags">Credit</p>
                                <p className="sctn7-subtags">Ui Design</p>

                            </Col>
                            <Col><h1 className="sctn7-subheading-1">Company</h1>
                                <p className="sctn7-subtags">Feature</p>
                                <p className="sctn7-subtags">Faq</p>
                                <p className="sctn7-subtags">Contact Us</p>
                                <p className="sctn7-subtags">Career Opportunities</p>

                            </Col>
                            <Col><h1 className="sctn7-subheading-1">Legal</h1>
                                <p className="sctn7-subtags">Terms & Conditions</p>
                                <p className="sctn7-subtags">Privacy policy</p>
                                <p className="sctn7-subtags">Customers</p>
                                <p className="sctn7-subtags">Pricing</p>

                            </Col>
                        </Row>

                    </Col>

                </Row>
                <Row>
                    <Col><hr/></Col>
                  
                </Row>
                <Row>
                    <Col><p className="sctn7-footertag">2021 © Lantaspera Technology. Develop by Lantaspera</p></Col>
                  
                </Row>
            </Container>
        </div>
    )
}

export default SectionSeven
