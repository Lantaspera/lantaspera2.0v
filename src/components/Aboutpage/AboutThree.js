import React from 'react'
import { Col, Container, Row, } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import "./aboutthree.css"



function AboutThree() {
    return (
        <div>
            <Container>

                <Row className="abt3-head1-sctn">
                    <Col data-aos="flip-down"><h1 className="abt3-head1-sctn">
                        <span className="abt3-head-1">Team</span>
                        <span className="abt3-head-2">Members</span>
                    </h1></Col>
                </Row>
                <Row className="abt3-secndrow" xs={1} md={4}>
                    <Col className="abt3-secndcol" md={5}>
                        <h1 className="abt3-sub-heading">Meet Our <br />Expert Team</h1>
                        <p className="abt3-sub-tag"> Our team of web design and development experts crafts beautiful scalable and world class innovative solutions to obstacles they encounter. Our team is highly skilled and they tailor their  creative works according to your goals and brand guidelines.  </p>
                    </Col>
                    <Col>
                        <Card data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom" className="abt3-card-mdiv" >
                            <Card.Img className="abt3-cardimage" variant="top" src="https://res.cloudinary.com/lanta/image/upload/v1639912196/20211025_121437-01-01_ns31wr.jpg" />
                            <Card.Body>
                                <Card.Title><h1 className="abt3-desntn-tag">//Fonder //</h1></Card.Title>

                                <h1 className="abt3-membrname">Adrid Sadanand P</h1>
                                <Card.Title className="abt3-desntn-tag2">COO</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom" className="abt3-card-mdiv" >
                            <Card.Img className="abt3-cardimage" variant="top" src="https://res.cloudinary.com/lanta/image/upload/v1639412413/IMG_20190624_182214_z0opug.jpg" />
                            <Card.Body>
                                <Card.Title className="abt3-desntn-tag">// Co-Fonder //</Card.Title>

                                <h1 className="abt3-membrname">Akshay Nambiar P V</h1>
                                <Card.Title className="abt3-desntn-tag2">CEO</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="abt3-thrdrow" xs={1} md={3}>
                    <Col><Card data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" className="abt3-card-mdiv" >
                        <Card.Img className="abt3-cardimage" variant="top" src="https://res.cloudinary.com/lanta/image/upload/v1639507076/azhar_eo1tvs.jpg" />
                        <Card.Body>
                            <Card.Title className="abt3-desntn-tag">// Co-Fonder //</Card.Title>

                            <h1 className="abt3-membrname">Azhar Ali Kalarickal</h1>
                            <Card.Title className="abt3-desntn-tag2">CTO</Card.Title>
                        </Card.Body>
                    </Card></Col>
                    <Col><Card data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" className="abt3-card-mdiv" >
                        <Card.Img className="abt3-cardimage" variant="top" src="https://res.cloudinary.com/lanta/image/upload/v1639497487/8A2F7A98-F0C9-4F59-BCEC-2500C1CB69C4_w4v74j.jpg" />
                        <Card.Body>
                            <Card.Title className="abt3-desntn-tag">// Co-Fonder //</Card.Title>

                            <h1 className="abt3-membrname">Abdul Basith C</h1>
                            <Card.Title className="abt3-desntn-tag2">CAO</Card.Title>
                        </Card.Body>
                    </Card></Col>
                    <Col><Card data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" className="abt3-card-mdiv" >
                        <Card.Img className="abt3-cardimage" variant="top" src="https://res.cloudinary.com/lanta/image/upload/v1633623597/gagananpic_ubhixq.jpg" />
                        <Card.Body>
                            <Card.Title className="abt3-desntn-tag">// Co-Fonder //</Card.Title>

                            <h1 className="abt3-membrname">Gagana Karpoorachalil</h1>
                            <Card.Title className="abt3-desntn-tag2">CDO</Card.Title>
                        </Card.Body>
                    </Card></Col>


                </Row>
                <Row className="abt3-thrdrow" xs={1} md={3}>
                    <Col><Card data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" className="abt3-card-mdiv" >
                        <Card.Img className="abt3-cardimage" variant="top" src="https://res.cloudinary.com/lanta/image/upload/v1639417818/20140223_041605_xvei9p.jpg" />
                        <Card.Body>
                            <Card.Title className="abt3-desntn-tag">// Co-Fonder //</Card.Title>

                            <h1 className="abt3-membrname">Donna Susan Samuel</h1>
                            <Card.Title className="abt3-desntn-tag2">CIO</Card.Title>
                        </Card.Body>
                    </Card></Col>
                    <Col><Card data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" className="abt3-card-mdiv" >
                        <Card.Img className="abt3-cardimage" variant="top" src="https://res.cloudinary.com/lanta/image/upload/v1639500367/IMG_20211010_221625_981_n73l8g.jpg" />
                        <Card.Body>
                            <Card.Title className="abt3-desntn-tag">// Co-Fonder //</Card.Title>

                            <h1 className="abt3-membrname">Anusha Surendran</h1>
                            <Card.Title className="abt3-desntn-tag2">CFO</Card.Title>
                        </Card.Body>
                    </Card></Col>
                    <Col><Card data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" className="abt3-card-mdiv" >
                        <Card.Img className="abt3-cardimage" variant="top" src="https://res.cloudinary.com/lanta/image/upload/v1639497508/IMG-20211214-WA0029_jtcpz8.jpg" />
                        <Card.Body>
                            <Card.Title className="abt3-desntn-tag">// Co-Fonder //</Card.Title>

                            <h1 className="abt3-membrname">Bista Paulose</h1>
                            <Card.Title className="abt3-desntn-tag2">CMO</Card.Title>
                        </Card.Body>
                    </Card></Col>


                </Row>


            </Container>
        </div>
    )
}

export default AboutThree
