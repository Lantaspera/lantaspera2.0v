import React from 'react'
import "./webdesign.css"
import { Col, Image, Row } from 'react-bootstrap'
import SectionSeven from '../Landingpage/SectionSeven'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { useEffect } from 'react'

function Webdevelopment() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Row className="dsg1-head-sctn">
                <Col><h1 className="dsg1-heading">WEB DEVELOPMENT</h1></Col>
            </Row>
            <Row>
                <Col><p className="dsg1-subtagline">  Our web development services provide <br /> qualitative services  including unique web content, quick and user friendly —<br /> navigation and web compatibility.</p></Col>
            </Row>
            <Row xs={1} md={2} sm={1}>
                <Col md={4}>< Image className="dsg1-image-sectn" src="https://res.cloudinary.com/lanta/image/upload/v1639645049/programming-software-code-application-technology-concept_mzvllx.jpg" fluid /></Col>
                <Col md={6} className="dsg1-cotnt-mdevp">
                    <p className="dsg1-content-sectn">Web development is the work involved in developing a website. Web development is the coding or programming that enables website functionality as per owners requirements. It mainly deals with the non-design aspect of building websites, which includes coding and writing markup. Web development ranges from creating plain text pages to complex web-based applications, social network applications and electronic business applications.
                        Web developers are usually divided into front end developers, backend developers and full stack developers. A front developer takes care of all the visual aspects of the website. Back end developers take care of less visible tasks that ensure the website runs smoothly, such as managing the hosting services, database and applications. Full stack developers are able to do both front end and back end tasks at the same time.
                    </p>
                    <Col>
                        <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" />React js  </p>
                        <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" /> NPM </p>
                        <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" /> JQuery </p>


                    </Col>

                </Col>

            </Row>
            <SectionSeven />
        </div>
    )
}

export default Webdevelopment
