import React from 'react'
import { Col, Container, Row, } from 'react-bootstrap'
import "./abouttwo.css"


function AboutTwo() {
    return (
        <div className="abt2-mainsctn">
            <Container >
                <Row>
                    <Col><h1 className="abt2-main-heading">Why Choose Us.</h1></Col>
                </Row>
                <Row className="abt2-sctn2" xs={1} md={3}>

                    <Col className="abt2-colone"><p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p></Col>
                    <Col className="abt2-colone"><p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p></Col>
                    <Col className="abt2-colone"><p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p></Col>


                </Row>
            </Container>
        </div>
    )
}

export default AboutTwo
