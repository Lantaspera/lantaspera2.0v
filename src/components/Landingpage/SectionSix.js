import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./sectionsix.css"
import Form from 'react-bootstrap/Form'
import emailjs from "emailjs-com"
import {motion} from 'framer-motion/dist/es/index'


function SectionSix() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_vowbsrc', 'template_foz5c7w', e.target, 'user_Abe5d681GXF6Droviz3mT')
      .then(res => {
        console.log(res);
      }).catch(err => console.log(err));
  }


  return (
    <div>

      <Container className="sctnsix-maindiv" >
        <Row xs={1} md={1}>
          <Col><h1 className="sctnsix-heading">Contact Us</h1></Col>
          <Col><p className="sctnfsix-tagline">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p></Col>
        </Row>
        <Row xs={1} md={2} className="sectn6-from">
          <Col data-aos="fade-right"><img className="sectn6-img" alt="#" src="https://res.cloudinary.com/lanta/image/upload/v1637564706/image_4_uzqmo4.png" /></Col>
          <Col>
            <Container className='sctn6-form-con' data-aos="fade-left">
              <Form onSubmit={sendEmail}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="string" placeholder="Enter your First name" name="fname" />
                  </Form.Group>

                  <Form.Group as={Col} >
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="string" placeholder="Enter your Last name" name="lname" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1" >
                  <Form.Label>Email Id</Form.Label>
                  <Form.Control placeholder="john@gmail.com" name="emailaddress" type="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} name="fmessage" />
                </Form.Group>






                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <motion.button className="sctn6-button" onClick={() => { alert('message send sucssesfully'); }}
                whileHover={{scale:1.1}}
                whileTap={{ scale: 0.9 }}
                >  Send Message</motion.button>
              </Form>
            </Container>
          </Col>

        </Row>
      </Container>

    </div>
  )
}

export default SectionSix
