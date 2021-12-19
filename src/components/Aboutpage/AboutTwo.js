import React from 'react'
import { Col,  Row, } from 'react-bootstrap'
import "./abouttwo.css"
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';


function AboutTwo() {
    return (

        <Row className="abt2-mainsctn" >



            <Row className="abt2-mainsctn1" >
            <Col><h1 className="abt2-main-heading" data-aos="flip-up">We Are Expert In IT <br/>Solutions Services</h1></Col>
                <Row className="abt2-sctn2" xs={1} md={1}>

                    <Col className="abt2-colone" data-aos="zoom-in-up">
                        <Col><h1 className="abt2-col-s-head"> <TipsAndUpdatesOutlinedIcon sx={{ fontSize: 40 }} /> Highly creative UI, UX developers.</h1></Col>
                        <Col><p className="abt2-col-s-tag">Our experts creative design  carve a unique image for your business that tends to make your brand renowned worldwide.We help your company to reach your goals by attracting more and more customers.</p></Col>


                    </Col>

                    <Col className="abt2-colone" data-aos="zoom-in-up">
                        <Col><h1 className="abt2-col-s-head"> <TipsAndUpdatesOutlinedIcon sx={{ fontSize: 40 }} /> Dedicated Front end and Back end developers.</h1></Col>
                        <Col><p className="abt2-col-s-tag">Our core experts uses advanced web development technology to strengthen your online platform.We are passionate in learning new trends for providing advanced technology for users</p></Col>


                    </Col>
                    <Col className="abt2-colone" data-aos="zoom-in-up">
                        <Col><h1 className="abt2-col-s-head"> <TipsAndUpdatesOutlinedIcon sx={{ fontSize: 40 }} />SEO Friendly.</h1></Col>
                        <Col><p className="abt2-col-s-tag">We provide relevant authoritative content which improves your site quality.A SEO friendly website will get you more traffic from search engines.our experts ensure it.</p></Col>


                    </Col>






                    <Col className="abt2-colone" data-aos="zoom-in-up">
                        <Col><h1 className="abt2-col-s-head"> <TipsAndUpdatesOutlinedIcon sx={{ fontSize: 40 }} /> Responsive.</h1></Col>
                        <Col><p className="abt2-col-s-tag">Our web designing  teams will create layout for all screen sizes that suite for any devices.We give high priority, on ensuring your designs are accessible on any platform with a considerable user base</p></Col>


                    </Col>

                    <Col className="abt2-colone" data-aos="zoom-in-up">
                        <Col><h1 className="abt2-col-s-head"> <TipsAndUpdatesOutlinedIcon sx={{ fontSize: 40 }} /> Comprehensive Project Management.</h1></Col>
                        <Col><p className="abt2-col-s-tag">Our experienced managing  team manages every tasks with efficient methodology and handle all projects with complete responsibility to attain your vission</p></Col>


                    </Col>
                    <Col className="abt2-colone" data-aos="zoom-in-up">
                        <Col><h1 className="abt2-col-s-head"> <TipsAndUpdatesOutlinedIcon sx={{ fontSize: 40 }} />Custom Design.</h1></Col>
                        <Col><p className="abt2-col-s-tag">We willl customize the design and functions which meets your business  requirements.it alows you to select content layout,design of your project</p></Col>


                    </Col>



                </Row>
                <Row >
                    <Col className="hai">
                    </Col>
                </Row>

            </Row>
        </Row>

    )
}

export default AboutTwo
