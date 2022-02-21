import React from 'react'
import ContactOne from './Contactpage/ContactOne'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'

function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
      <Container>

          <ContactOne/>
      </Container>
    )
}

export default Contact
