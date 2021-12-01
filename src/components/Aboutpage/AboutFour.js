import React from 'react'
import { Col, Container, Row,Image } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import "./aboutfour.css"

function AboutFour() {
    return (
        <div>
            <Container>

                <Row >
                    <Col><h1 className="abt4-frstrow">Ask Questions</h1></Col>
                </Row>


            <Row className="abt4-mrow" xs={1} md={2}>
    <Col>
    <Card className="abt4-card-m" >
  <Card.Body>
    <Card.Title className="abt4-card-cntnt1">How to Designing < Image className="abt4-scnd-img" src="https://res.cloudinary.com/lanta/image/upload/v1638358306/Vector_cxi3g2.png" fluid /></Card.Title>
    <Card.Title className="abt4-card-cntnt">How to Designing < Image className="abt4-scnd-img" src="https://res.cloudinary.com/lanta/image/upload/v1638358306/Vector_cxi3g2.png" fluid /></Card.Title>
    <Card.Title className="abt4-card-cntnt">How to Designing < Image className="abt4-scnd-img" src="https://res.cloudinary.com/lanta/image/upload/v1638358306/Vector_cxi3g2.png" fluid /></Card.Title>
    <Card.Title className="abt4-card-cntnt">How to Designing < Image className="abt4-scnd-img" src="https://res.cloudinary.com/lanta/image/upload/v1638358306/Vector_cxi3g2.png" fluid /></Card.Title>
    <Card.Title className="abt4-card-cntnt">Are my details secured?</Card.Title>
    <Card.Text className="abt4-card-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar. Gravida in fermentum et sollicitudin ac orci phasellus. Facilisis gravida neque convallis a cras semper. Non arcu risus quis varius quam quisque id.
    </Card.Text>
  
  </Card.Body>
</Card></Col>

    <Col>< Image className="abt4-first-img" src="https://res.cloudinary.com/lanta/image/upload/v1638355869/faq_1_vqnrjz.png" fluid /></Col>
 
  </Row>
            </Container>
        </div>
    )
}

export default AboutFour
