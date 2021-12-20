import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./sectionfour.css"
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

function SectionFour() {
    return (
        <div className="secionfour-m" data-aos="fade-up">
            <Container>
                <Row>
                    <Col><h1 className="sectn4-heading">Amazing Features</h1></Col>
                </Row>
                <Row className="sectn4-subcol" xs={1} md={3}>
                    <Col >
                        <Row xs="auto">
                            <Col>< PeopleOutlineIcon color="info" sx={{ fontSize: 50 }} /></Col>
                            <Col> <h1 className="sub-heading-sectn4"> User Friendly</h1>
                                <p className="sub-tag-sectn4"> Provide userfriendly<br /> webservices which enables <br />easy access of information<br /> for your customers.  </p>
                            </Col>

                        </Row>

                    </Col>
                    <Col><Row xs="auto">
                        <Col>< LocalAtmIcon color="error" sx={{ fontSize: 50 }} /></Col>
                        <Col> <h1 className="sub-heading-sectn4"> Cost Control</h1>
                            <p className="sub-tag-sectn4">  Provide high quality<br />  services   in  easiest<br /> mode  at an affordable<br />  range of cost.</p>
                        </Col>

                    </Row></Col>
                    <Col><Row xs="auto">
                        <Col><SettingsOutlinedIcon color="secondary" sx={{ fontSize: 50 }} /></Col>
                        <Col> <h1 className="sub-heading-sectn4">  Accesibility</h1>
                            <p className="sub-tag-sectn4">Provide a decent user <br />experience to your valuable<br /> customers and the ability to <br /> access your data easily.</p>
                        </Col>

                    </Row></Col>
                </Row>
            </Container>
        </div>
    )
}

export default SectionFour
