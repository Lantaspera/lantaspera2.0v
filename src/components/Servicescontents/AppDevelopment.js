import React from 'react'
import "./webdesign.css"
import { Col, Image, Row } from 'react-bootstrap'
import SectionSeven from '../Landingpage/SectionSeven'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { useEffect } from 'react'


function AppDevelopment() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>

            <div className='srvc-sub-sctn-m'>
                <Row className="dsg1-head-sctn">
                    <Col><h1 className="dsg1-heading">APP DEVELOPMENT</h1></Col>
                </Row>
            </div>
            <Row>
                <Col><p className="dsg1-subtagline">   Our App development services provide well<br /> designed, well featured, eye catching app having great UI, fast—<br /> loading time and high performance quality.</p></Col>
            </Row>
            <Row xs={1} md={2} sm={1}>
                <Col md={4}>< Image className="dsg1-image-sectn" src="https://res.cloudinary.com/lanta/image/upload/v1639645144/mobile-application-design-illustrator-creativity-concept_nlm3ti.jpg" fluid /></Col>
                <Col md={6} className="dsg1-cotnt-mdevp">
                    <p className="dsg1-content-sectn">Mobile app development is the process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. It is the creation of software intended to run on mobile devices and optimized to take advantage of those products' unique features. These applications can be pre-installed on phones or delivered as web applications using server side or client side processing to provide an application-like experience within a web browser. As part of the development process, mobile user interface(UI) or front end design is also essential in the creation of mobile apps. The mobile back end facilitates data routing, security, authentication, authorization, work off-line and service orchestration. This functionality is supported by a mix of middleware components including mobile app server, mobile backend as a service(MBaaS) and service oriented architecture (SOA) infrastructure.
                    </p>
                    <Col>
                        <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" />React Native  </p>
                        <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" /> Type script </p>
                        <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" /> Android/ios </p>

                    </Col>

                </Col>

            </Row>
            <SectionSeven />
        </div>
    )
}

export default AppDevelopment
