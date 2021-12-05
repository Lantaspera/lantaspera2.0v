import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import "./aboutone.css"





function AboutOne() {

   
        return (

            <div>
                <Container fluid>
                <Row xs={1} md={3}>
            <Col>< Image className="abt1-first-img" src="https://res.cloudinary.com/lanta/image/upload/v1638173324/image_5_jowfs4.png" fluid /></Col>

            <Col className="abt1-sec-mdiv" md={6} > 
            
            <Col ><h1 className="abt1-red-heading">KNOW MORE ABOUT SHOP</h1></Col>
            <Col > <h1 className="abt1-big-heading">Trusted web services provider</h1></Col>

           
            <Row className="srvc1-head1-sctn">
                            <Col xs={1} md={.5} ><h1 className="srvc1-redline-img">|</h1></Col>
                            <Col xs={11} md={11.5}><p className="srvc1-red-tag">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor gjkjmdjm cfgjghhjm fxthsgjn fgjj fjygjgh fgjdyj</p></Col>
                        </Row>

          

               
                <Col >  <p className="abt1-main-content" >sellers who aspire to be good, do good, and spread goodness. We democratic, self-sustaining, two-sided marketplace which thrives on trust and is built on community and quality content.</p>
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


