import{ React} from 'react'
import { Col, Container, Row,Image } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import "./aboutfour.css"
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined'



function AboutFour() {
  
    return (
        <div>



            <Container>

                <Row >
                    <Col ><h1 className="abt4-frstrow">Ask Questions</h1></Col>
                </Row>


            <Row className="abt4-mrow" xs={1} md={2}>
    <Col  data-aos="fade-right" className="abt4-que-mcol" >

    <Accordion  defaultActiveKey="0" flush>
  <Accordion.Item  eventKey="0">
    <Accordion.Header><h1 className="abt4-accdtion-head" >How long will it take to build a website? </h1></Accordion.Header>
    <Accordion.Body>
    Actual time to develop a website will vary from project to project. It depends on your website functionality.smaller website which don't require much programing typically take 1-2 weeks. Larger website requiring a good amount of work can take almost 30 days.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><h1 className="abt4-accdtion-head" >How can I maintain my website once it is live?</h1></Accordion.Header>
    <Accordion.Body>
    Updating your website by posting recent company events, promotions or news will make your business more likeable to your consumers.  If you contact us for maintaining your website we will update your website with fresh informations provided by you.
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header><h1 className="abt4-accdtion-head" >Are your website SEO friendly?</h1></Accordion.Header>
    <Accordion.Body>
    its our obligation to you as a customer to make sure website is visible online. So that we help you by building the website better SEO frindly
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header><h1 className="abt4-accdtion-head" >What is your response turnaround time?</h1></Accordion.Header>
    <Accordion.Body>
    we will respond to all the emails quickly. We will endeavour to answer your queries with in 24 hours on business days.
    </Accordion.Body>
  </Accordion.Item>
 
  
</Accordion>

    

    </Col>






    <Col data-aos="fade-left"><  Image className="abt4-first-img" src="https://res.cloudinary.com/lanta/image/upload/v1638355869/faq_1_vqnrjz.png" fluid /></Col>
 
  </Row>
            </Container>
        </div>
    )
}

export default AboutFour
