import React from 'react'
import "./servicetwo.css"
import { Col,  Row,} from 'react-bootstrap'
import { AiOutlineLine } from "react-icons/ai";
import Card from 'react-bootstrap/Card'
import { GiPencilRuler } from "react-icons/gi";

function ServiceTwo() {
    return (
        <div>

            <Row className="srvc2-frst-row" >
                <Row xs={1} >
                    <Col><h1 className="srvc2-frst-heading"><AiOutlineLine />OUR SERVICES<AiOutlineLine /></h1></Col>
                    <Col><h1 className="srvc2-scnd-heading">We Offer a Wide Variety of IT Services</h1></Col>
                    <Col><p className="srvc2-tagline">It is a long established fact that a reader will be distracted by the readable content <br /> of a page when looking at its layout. It is a long established fact that a reader.</p></Col>
                </Row>

                <Row className="srvc2-card-mrow" xs={1} md={3} sm={2}>
<Col>
                    <Card className="srvc2-card-mdiv" >

                        <Col className="srvc2-card-icon"> <GiPencilRuler className="sctn2-icon" size={50} /></Col>

                        <Card.Body>
                            <Card.Title className="srvc2-card-heading">Web Design</Card.Title>
                            <Card.Text className="srvc2-card-tagline">
                                It is a long fact that a reader will be distracted by the content of a page
                            </Card.Text>

                        </Card.Body>
                    </Card>
</Col>
                   
<Col>
                    <Card className="srvc2-card-mdiv" >

                        <Col className="srvc2-card-icon"> <GiPencilRuler className="sctn2-icon" size={50} /></Col>

                        <Card.Body>
                            <Card.Title className="srvc2-card-heading">Web Design</Card.Title>
                            <Card.Text className="srvc2-card-tagline">
                                It is a long fact that a reader will be distracted by the content of a page
                            </Card.Text>

                        </Card.Body>
                    </Card>
</Col>

<Col>
                    <Card className="srvc2-card-mdiv" >

                        <Col className="srvc2-card-icon"> <GiPencilRuler className="sctn2-icon" size={50} /></Col>

                        <Card.Body>
                            <Card.Title className="srvc2-card-heading">Web Design</Card.Title>
                            <Card.Text className="srvc2-card-tagline">
                                It is a long fact that a reader will be distracted by the content of a page
                            </Card.Text>

                        </Card.Body>
                    </Card>
</Col>

<Col>
                    <Card className="srvc2-card-mdiv" >

                        <Col className="srvc2-card-icon"> <GiPencilRuler className="sctn2-icon" size={50} /></Col>

                        <Card.Body>
                            <Card.Title className="srvc2-card-heading">Web Design</Card.Title>
                            <Card.Text className="srvc2-card-tagline">
                                It is a long fact that a reader will be distracted by the content of a page
                            </Card.Text>

                        </Card.Body>
                    </Card>
</Col>

<Col>
                    <Card className="srvc2-card-mdiv" >

                        <Col className="srvc2-card-icon"> <GiPencilRuler className="sctn2-icon" size={50} /></Col>

                        <Card.Body>
                            <Card.Title className="srvc2-card-heading">Web Design</Card.Title>
                            <Card.Text className="srvc2-card-tagline">
                                It is a long fact that a reader will be distracted by the content of a page
                            </Card.Text>

                        </Card.Body>
                    </Card>
</Col>

<Col>
                    <Card className="srvc2-card-mdiv" >

                        <Col className="srvc2-card-icon"> <GiPencilRuler className="sctn2-icon" size={50} /></Col>

                        <Card.Body>
                            <Card.Title className="srvc2-card-heading">Web Design</Card.Title>
                            <Card.Text className="srvc2-card-tagline">
                                It is a long fact that a reader will be distracted by the content of a page
                            </Card.Text>

                        </Card.Body>
                    </Card>
</Col>




                </Row>
            </Row>



        </div>
    )
}

export default ServiceTwo
