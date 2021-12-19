import React from 'react'
import ContactOne from './Contactpage/ContactOne'
import SectionSeven from './Landingpage/SectionSeven'
import { useEffect } from 'react'

function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
           <ContactOne/> 
           <SectionSeven/>
        </div>
    )
}

export default Contact
