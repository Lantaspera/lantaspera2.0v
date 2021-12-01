import React from 'react'
import { Col, Container, Row } from 'react-bootstrap' 
import ServiceOne from './Servicespage/ServiceOne'
import ServiceTwo from './Servicespage/ServiceTwo'
import SectionSeven from './Landingpage/SectionSeven'
function Services() {
    return (
        <div className="services-main-div">
        <Container fluid>
      
      <ServiceOne/>
      <ServiceTwo/>
      <SectionSeven/>

          </Container>
          </div>
 
    )
}

export default Services
