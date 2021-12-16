import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import "./aboutone.css"





function AboutOne() {

   
        return (

            <div className="abt-one-mdiv">
                <Container >
                <Row xs={1} md={2}>
            <Col md={4}  data-aos="fade-right">< Image className="abt1-first-img" src="https://res.cloudinary.com/lanta/image/upload/v1638173324/image_5_jowfs4.png" fluid /></Col>

            <Col md={6} className="abt1-sec-mdiv" data-aos="fade-left"  > 
            
            <Col ><h1 className="abt1-red-heading">KNOW MORE ABOUT SHOP</h1></Col>
            <Col > <h1 className="abt1-big-heading">Trusted web services provider</h1></Col>

           
            <Row className="srvc1-head1-sctn">
                            <Col xs={1}  ><h1 className="srvc1-redline-img">|</h1></Col>
                            <Col  ><p className="srvc1-red-tag">Lantaspera solely focus on clients project, build trust and creats more visibility for your business with our unconditional effort.</p></Col>
                        </Row>

          

               
                <Col >  <p className="abt1-main-content" >We start our journey from vaccum, with a fire of inspiration inside. We always try to give the best to our beloved clients that's the only moto we carry with us. We try to find solutions to your problems by effective communication and with our restless hard work .Your smile is our light to vision</p>
                <h5 className="abt1-foundername">Adrid Sadanand </h5>
                <p className="abt1-ftag">Founder/COO</p>
                </Col>
            </Col>
           
        </Row>



    </Container>
     </div>
        )
    }




export default AboutOne


