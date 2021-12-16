import React from 'react'
import "./servicesthree.css"
import { Col,  Row, Image,Button } from 'react-bootstrap'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

function ServicesThree() {
    return (
        <div>
           <Row  className="srvc3-mrow" xs={1} md={2}>
               <Col >
               <Col><h1 className="srvc3-fst-redhed">HOW WE WORK</h1></Col>
               <Col><h1 className="srvc3-M-hed" data-aos="flip-up">
                                <span className="srvc3-fst-black">We Can Take Your Business To The</span>
                                <span className="srvc3-fst-red"> Next Level</span>
                                <span className="srvc3-fst-black">.</span>
                            </h1></Col>
                            
                        <Col><p className="srvc3-tagline"> We serves various objectives like establishing brand identity and increase product knowledge.</p></Col>
                        <Col className="srvc3-chcksctn">
            <p className="srvc3-tck-sctn"><CheckOutlinedIcon color="error" fontSize="small" />We always ensure to give our best to the  customer.
  </p>
            <p className="srvc3-tck-sctn"><CheckOutlinedIcon color="error" fontSize="small" />We .
 </p>
            <p className="srvc3-tck-sctn"><CheckOutlinedIcon color="error" fontSize="small" />. </p>

            <Col> <Button className="srvc3-btn" variant="danger">Get Started Now</Button> </Col>
           
</Col>


               </Col>
               <Col data-aos="fade-left">< Image className="srvc3-first-img" src="https://res.cloudinary.com/lanta/image/upload/v1638741383/image_7_1_ienlxk.png" fluid /></Col>
           </Row>
        </div>
    )
}

export default ServicesThree
