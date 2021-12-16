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
        <Row>
          <Col>< Image className="sctn5-qoution" src="https://res.cloudinary.com/lanta/image/upload/v1637694838/rvh0toujmiyimzd4cqbs.png" fluid /></Col>
        </Row>
        <Row>
          <Col>
            <h1 className="sctn5-heading">Real Stories from Real Customers</h1>
            <p className="sctn5-headingtag">Get inspired by these stories.</p>
          </Col>
        </Row>

        <Row xs={1} md={1}>

        </Row>
        <Row xs={1} md={1}>
          <Carousel responsive={responsive}>
            <Col>


            <Container className="sctn5-subsection" data-aos="zoom-in">
              <Row>
                <Col>
                  <Col> < Image className="sctn5-sublogo" src="https://res.cloudinary.com/lanta/image/upload/v1633623605/rdionz_otpa0j.jpg" fluid /></Col>
                  <Col>< Image className="sctn5-smallquote" src="https://res.cloudinary.com/lanta/image/upload/v1637694838/rvh0toujmiyimzd4cqbs.png" fluid /></Col>
                  <Col><p className="sctn5-cmpny-tag">For the purpose of developing webpage for my startup quickly , I was searching for a  developer community . Lantaspera is one of the best  developers I have come across. They are well organised,creative and flexible .</p></Col>
                  <Col><h1 className="sctn5-name-founder">Dr.Nabeel M Naasar</h1></Col>
                  <Col> <p className="sctn5-designation">Co-Founder -Rdionz Biomobility</p></Col>
                </Col>
              </Row>

              </Container>



            </Col>
            <Col>  <Container className="sctn5-subsection" data-aos="zoom-in">
              <Row>
                <Col>
                  <Col> < Image className="sctn5-sublogo" src="https://res.cloudinary.com/lanta/image/upload/v1639409455/Logopit_1633791897439_zaxd3w.png" fluid /></Col>
                  <Col>< Image className="sctn5-smallquote" src="https://res.cloudinary.com/lanta/image/upload/v1637694838/rvh0toujmiyimzd4cqbs.png" fluid /></Col>
                  <Col><p className="sctn5-cmpny-tag">Doing business with Lantaspera is very convenient. The UI they created is visually appealing. Because of their proven excellence we would recommend Lantaspera to any one for creating a customized website.</p></Col>
                  <Col><h1 className="sctn5-name-founder">Dr.Agney Sadanand</h1></Col>
                  <Col> <p className="sctn5-designation">Founder - Tortis</p></Col>
                </Col>
              </Row>

            </Container></Col>
            <Col>  <Container className="sctn5-subsection" data-aos="zoom-in">
              <Row>
                <Col>
                  <Col> < Image className="sctn5-sublogo" src="https://res.cloudinary.com/lanta/image/upload/v1633623606/voyiget_bb5afl.png" fluid /></Col>
                  <Col>< Image className="sctn5-smallquote" src="https://res.cloudinary.com/lanta/image/upload/v1637694838/rvh0toujmiyimzd4cqbs.png" fluid /></Col>
                  <Col><p className="sctn5-cmpny-tag">Voyiget is a home automation startup in calicut.Some of my students own this venture.At its budding stage it was very difficult to make a good mobile app at low budget.But they did it with the help of Lantaspera.</p></Col>
                  <Col><h1 className="sctn5-name-founder">Asst.Pro Paul Mathew</h1></Col>
                  <Col> <p className="sctn5-designation">Mentor-Voyiget</p></Col>
                </Col>
              </Row>

            </Container></Col>

          </Carousel>
        </Row>
      </Container>


    </div>

  )
}

export default SectionFive

