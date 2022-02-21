import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./contactone.css"
import Form from 'react-bootstrap/Form'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
// import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import emailjs from "emailjs-com"



function ContactOne() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_rxsxsas', 'template_7gafil8', e.target, 'user_Abe5d681GXF6Droviz3mT')
            .then(res => {
                console.log(res);
            }).catch(err => console.log(err));
    }



    return (


        <Container className="cntact-one-mdiv">
            <Row xs={1} md={2}>

                <Col className='cntat-first-col'>

                    <Row xs={1}>
                        <Col><h5 className="cntct1-red-hd">WELCOME TO OUR COMPANY</h5></Col>
                        <Col><h1 className="cntct1-main-hd">
                            <span className="cntct1-mhd-1">Contact</span>
                            <span className="cntct1-mhd-2"> Us</span>
                        </h1></Col>
                        <Col><p className="cntct1-tagline">Let us know how we can help you</p></Col>
                        <Col><p className="cntct1-tagline-f">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p></Col>

                    </Row>
                    <Row className="cntct1-icon-div" xs="auto">

                        <Col>< MailOutlineOutlinedIcon color="error" sx={{ fontSize: 30 }} /></Col>
                        <Col> <h1 className="cntct1-addrs"> Email Address</h1>
                            <p className="cntct1-addrs-sub">info@lantaspera.com  <br />
                                lantaspera@gmail.com</p>

                        </Col>


                    </Row>

                    <Row className="cntct1-icon-div" xs="auto">

                        <Col>< PhoneInTalkOutlinedIcon color="error" sx={{ fontSize: 30 }} /></Col>
                        <Col> <h1 className="cntct1-addrs"> Phone Number</h1>
                            <p className="cntct1-addrs-sub">+91-9497749384  <br />+91-7907201094
                            </p>

                        </Col>





                    </Row>

                    {/* <Row className="cntct1-icon-div" xs="auto">
                            
                            <Col>< AddLocationOutlinedIcon color="error" sx={{ fontSize: 30 }} /></Col>
                            <Col> <h1 className="cntct1-addrs">Office Address</h1>
                                <p className="cntct1-addrs-sub">18/A, New Born Town Hall <br/>
                                Ernakullam,India</p>
                                
                            </Col>
                        

                    </Row> */}

                </Col>
                <Col>

                    <Form className="cntact1-form-mdiv" onSubmit={sendEmail}>

                        <Row xs={1}>
                            <Col> <p className="cntact1-from-shd">Contact form</p></Col>
                            <Col>  <h5 className="cntact1-from-mhd">Drop Us a Line</h5></Col>

                        </Row>


                        <Row xs={1} className="cntact1-form-row">

                            <Col>


                                <Form.Control className="cntact1-form-details" type="string" placeholder="First name" controlId="firstname" name="firstname" />

                            </Col>
                            <Col>


                                <Form.Control className="cntact1-form-details" type="string" placeholder=" Last name" controlId="lastname" />

                            </Col>




                            <Col>
                                <Form.Control type="email" className="cntact1-form-details" placeholder="Email Id" name="emailid" />
                            </Col>


                            <Col>
                                <Form.Select className="cntact1-form-details" defaultValue="Select service type" name="service">
                                    <option>Select service type</option>
                                    <option>Web design</option>
                                    <option>Web development</option>
                                    <option>App development</option>
                                    <option>ui/ux design</option>
                                    <option>Graphics design</option>
                                    <option>Digital marketing</option>
                                    <option>Social media campaign</option>

                                </Form.Select>
                            </Col>

                            <Col>
                                <Form.Control className="cntact1-form-txt" as="textarea" rows={3} placeholder="Message" controlId="message" name="message" />
                            </Col>

                        </Row>





                        <button className="cntact1-form-btn" onClick={() => { alert('message send sucssesfully'); }}


                        > Send</button>

                    </Form></Col>

            </Row>
        </Container>

    )
}

export default ContactOne
