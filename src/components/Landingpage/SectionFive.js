import React from 'react'
import "./sectionfive.css"
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function SectionFive() {
  return (
    <div className="sctn5-maindiv">

      
      <Container xs={1} md={1} className="sctn5-container">
      
        
        <Row xs={1} md={1}>
          <Col><h1 className="sctn5-mainheading">Our Clients</h1></Col>
        </Row>
        <Row xs={1} md={1}>
        <Carousel responsive={responsive}>
          <Col>
          

            <Container className="sctn5-subsection">
              <Row>
                <Col>
                <Col> < Image className="sctn5-sublogo" src="https://res.cloudinary.com/lanta/image/upload/v1637569166/lantaspera_Final_kdqclo.png" fluid /></Col>
                <Col><p className="sctn5-cmpny-tag">To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.</p></Col>
                <Col><h1 className="sctn5-name-founder">Akshay p v</h1></Col>
                <Col> <p className="sctn5-designation">CEO,CO-Founder</p></Col>
                </Col>
              </Row>

            </Container>



          </Col>
          <Col> <Container className="sctn5-subsection">
              <Row>
                <Col>
                <Col> < Image className="sctn5-sublogo" src="https://res.cloudinary.com/lanta/image/upload/v1637569166/lantaspera_Final_kdqclo.png" fluid /></Col>
                <Col><p className="sctn5-cmpny-tag">To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.</p></Col>
                <Col><h1 className="sctn5-name-founder">Akshay p v</h1></Col>
                <Col> <p className="sctn5-designation">CEO,CO-Founder</p></Col>
                </Col>
              </Row>

            </Container></Col>
          <Col> <Container className="sctn5-subsection">
              <Row>
                <Col>
                <Col> < Image className="sctn5-sublogo" src="https://res.cloudinary.com/lanta/image/upload/v1637569166/lantaspera_Final_kdqclo.png" fluid /></Col>
                <Col><p className="sctn5-cmpny-tag">To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.</p></Col>
                <Col><h1 className="sctn5-name-founder">Akshay p v</h1></Col>
                <Col> <p className="sctn5-designation">CEO,CO-Founder</p></Col>
                </Col>
              </Row>

            </Container></Col>
          
</Carousel>;
        </Row>
      </Container>
      <Row xs={1} >
      <Col><img className="sctn5-image-cs" alt="#" src="https://res.cloudinary.com/lanta/image/upload/v1637217209/sergey-zolkin-_UeY8aTI6d0-unsplash_1_g7eucc.png" />
      </Col>
      </Row>
    </div>

  )
}

export default SectionFive

