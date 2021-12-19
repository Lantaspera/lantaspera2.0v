import React from 'react'

import ServiceOne from './Servicespage/ServiceOne'
import ServiceTwo from './Servicespage/ServiceTwo'
import SectionSeven from './Landingpage/SectionSeven'
import ServicesThree from './Servicespage/ServicesThree'
import { useEffect } from 'react'

function Services() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="services-main-div">
        
      
      <ServiceOne/>
      <ServiceTwo/>
      <ServicesThree/>
      <SectionSeven/>

          
          </div>
 
    )
}

export default Services
