import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./sectionsix.css"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function SectionSix() {
    return (
      <div>
       
          <Container className="sctnsix-maindiv" >
              <Row xs={1} md={1}>
                  <Col><h1 className="sctnsix-heading">Contact Us</h1></Col>
                  <Col><p className="sctnfsix-tagline">Vivamus ac nulla ultrices laoreet neque mollis mi morbi elementum mauris sit amet arcu
fringilla auctor In eleifend maximus nisi sed vulputate</p></Col>
              </Row>
              <Row xs={1} md={2}  className="sectn6-from">
    <Col data-aos="fade-right"><img className="sectn6-img" alt="#" src="https://res.cloudinary.com/lanta/image/upload/v1637564706/image_4_uzqmo4.png" /></Col>
    <Col>
    <Container  data-aos="fade-left">
    <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>First name</Form.Label>
      <Form.Control type="string" placeholder="Enter your First name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Last name</Form.Label>
      <Form.Control type="string" placeholder="Enter your Last name" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Email Id</Form.Label>
    <Form.Control placeholder="john@gmail.com" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button className="sctn6-button" type="submit">
   Send Message
  </Button>
</Form>
</Container>
    </Col>

  </Row>
          </Container>
         
      </div>
    )
}

export default SectionSix
