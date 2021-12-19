import React from 'react'
import "./sectionseven.css"
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom'

function SectionSeven() {
    return (
        <div className="sctn7-footer-main"  >
            <Container >
                <Row xs={1} md={3}>
                    <Col className="sctn7-img">< Image src="https://res.cloudinary.com/lanta/image/upload/v1637569166/lantaspera_Final_kdqclo.png" fluid />
                        <p className="sctn7-logotag">Ingeniously Innovative.</p>
                        {/* <p className="sctn7-adresstag">info@lantaspera.com</p> */}
                        <p className="sctn7-followtag">Follow Us:  </p>
                        <Button href='https://www.facebook.com/Lantaspera-Technologies-112304664556201/?ref=pages_you_manage' className="sctn7-folo-btn" size="sm" variant="outline-light"><FaFacebook /></Button>{' '}
                        <Button href='https://www.linkedin.com/company/lantaspera-technologies/?viewAsMember=true' className="sctn7-folo-btn" size="sm" variant="outline-light"><FaLinkedin /></Button>{' '}
                        <Button href='https://www.instagram.com/lantaspera_technologies/' className="sctn7-folo-btn" size="sm" variant="outline-light"><FaInstagram /></Button>{' '}
                        <Button href='https://twitter.com/lantaspera' className="sctn7-folo-btn" size="sm" variant="outline-light"><FaTwitter /></Button>{' '}

                    </Col>
                    <Col md={6} className="sctn7-content">
                        <Row xs={3} md={3} >
                            <Col><h1 className="sctn7-subheading-1">Services</h1>
                            <Link className="sctn2-atag" to="/webdesign"> <p className="sctn7-subtags">Web Design</p></Link>
                            <Link className="sctn2-atag" to="/webdevelopment"><p className="sctn7-subtags">Web Development</p></Link>
                            <Link className="sctn2-atag" to="/appdevelopment"><p className="sctn7-subtags">App Development</p></Link>
                            <Link className="sctn2-atag" to="/digitalmarket"><p className="sctn7-subtags">Digital Market</p></Link>
                                <Link className="sctn2-atag" to="/graphicdesign"><p className="sctn7-subtags">Ui/UX Design</p></Link>
                               

                            </Col>
                            <Col><h1 className="sctn7-subheading-1">Company</h1>
                            <Link className="sctn2-atag" to="/features"> <p className="sctn7-subtags">Feature</p></Link>
                                <Link className="sctn2-atag" to="/faq">  <p className="sctn7-subtags">Faq</p></Link>
                                <Link className="sctn2-atag" to="/contact"><p className="sctn7-subtags">Contact Us</p></Link> 
                                <Link className="sctn2-atag" to="/errorpage"><p className="sctn7-subtags">Career Opportunities</p></Link>

                            </Col>
                            <Col><h1 className="sctn7-subheading-1">Legal</h1>
                            <Link className="sctn2-atag" to="/errorpage"><p className="sctn7-subtags">Terms & Conditions</p></Link>
                            <Link className="sctn2-atag" to="/errorpage"><p className="sctn7-subtags">Privacy policy</p></Link>
                            <Link className="sctn2-atag" to="/sectionfive"> <p className="sctn7-subtags">Customers</p></Link>
                            <Link className="sctn2-atag" to="/errorpage"><p className="sctn7-subtags">Pricing</p></Link> 

                            </Col>
                        </Row>

                    </Col>

                </Row>
                <Row>
                    <Col><hr /></Col>

                </Row>
                <Row>
                    <Col><p className="sctn7-footertag">2021 © Lantaspera Technology. Develop by Lantaspera</p></Col>

                </Row>
            </Container>
        </div>
    )
}

export default SectionSeven
