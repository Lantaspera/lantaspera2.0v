import React from 'react'
import "./servicetwo.css"
import { Col, Container, Row, Image,Button } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function ServiceTwo() {
    return (
        <div>
            <Container>
                <Row xs={1}>
                    <Col><h1 className="srvc2-frst-heading">// OUR SERVICES</h1></Col>
                    <Col><h1 className="srvc2-scnd-heading">We Offer a Wide <br /> Variety of IT Services</h1></Col>
                </Row>
                <Row xs={1} md={2}>
                    <Col md={4} >
    <ButtonGroup className="srvc2-button2" vertical>
  <Button className="srvc2-button1">Web Designing</Button>
  <Button className="srvc2-button1">Web Development</Button>
  <Button className="srvc2-button1">Web Development</Button>
  <Button className="srvc2-button1">Web Development</Button>
  <Button className="srvc2-button1">Web Development</Button>
  <Button className="srvc2-button1">Web Development</Button>

 

</ButtonGroup>
                    
                    
                    </Col>



                    <Col md={7} >< Image className="srvc2-first-img" src="https://res.cloudinary.com/lanta/image/upload/v1638383552/image_7_kx5hkw.png" fluid /></Col>

                </Row>
            </Container>

        </div>
    )
}

export default ServiceTwo
