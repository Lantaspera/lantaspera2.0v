import React from 'react'
import "./webdesign.css"
import { Col, Container, Image, Row } from 'react-bootstrap'
import SectionSeven from '../Landingpage/SectionSeven'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { useEffect } from 'react'


function SocialMedia() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div className='srvc-sub-sctn-m'>
            <Row className="dsg1-head-sctn">
                <Col><h1 className="dsg1-heading">SOCIAL MEDIA CAMPAIGN</h1></Col>
            </Row>
            </div>
            <Row>
                <Col><p className="dsg1-subtagline">A social media campaign is a coordinated <br /> marketing effort to reinforce or assist with a business
                    goal—<br /> using one or more social media platforms.</p></Col>
            </Row>
            <Row xs={1} md={2} sm={1}>
                <Col md={4}>< Image className="dsg1-image-sectn" src="https://res.cloudinary.com/lanta/image/upload/v1639668977/structure-social-media-with-colored-icons_kgweg7.jpg" fluid /></Col>
                <Col md={6} className="dsg1-cotnt-mdevp">
                    <p className="dsg1-content-sectn"> Common goals for a social media campaigns
                        include getting feedback from users, building email marketing lists, increasing website traffic,
                        improving overall brand engagement, direct driving sales etc.These campaigns are strategically
                        focused, have measurable outcomes, and influence social media followers to feel or act in a
                        certain way. Social media advertising reaches audiences in a low-cost, impactful, and effective
                        way. This is exactly why social media campaigns have become a crucial marketing technique
                        for businesses everywhere. Social media marketing campaigns are a great option for
                        businesses that want to remain relevant and promote their content effectively and efficiently.
                    </p>
                    <Col>
                        <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" />Facebook</p>
                        <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" /> Instagram</p>
                        <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" /> Twitter </p>

                    </Col>

                </Col>

            </Row>
            <SectionSeven />
        </div>
    )
}

export default SocialMedia
