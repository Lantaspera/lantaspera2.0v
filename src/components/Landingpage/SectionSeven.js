import React from 'react'
import "./sectionseven.css"
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

function SectionSeven() {
    return (
        <div className="sctn7-footer-main"  >
            <Container >
                <Row xs={1} md={4}>
                    <Col className="sctn7-img">< Image src="https://res.cloudinary.com/lanta/image/upload/v1637569166/lantaspera_Final_kdqclo.png" fluid />
                    <p className="sctn7-logotag">Aenean lacus enim Praesent congue praesent viverra interdum maximus lobortis.</p>
                    </Col>
                    <Col className="sctn7-content">
                        <Row xs={2} md={2} >
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
