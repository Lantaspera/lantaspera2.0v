import React from 'react'
import "./webdesign.css"
import { Col, Image, Row } from 'react-bootstrap'
import SectionSeven from '../Landingpage/SectionSeven'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { useEffect } from 'react'


function DigitalMarket() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            <Row className="dsg1-head-sctn">
              <Col><h1 className="dsg1-heading">DIGITAL MARKETING</h1></Col>
          </Row>
      <Row>
          <Col><p className="dsg1-subtagline">    Our team experts establishes your online identity,<br/>  build trust stimulate customer interactivity and
scale up—<br/>your business by facilitating growth and expansion</p></Col>
      </Row>
      <Row xs={1} md={2} sm={1}>
<Col md={4}>< Image className="dsg1-image-sectn" src="https://res.cloudinary.com/lanta/image/upload/v1639669228/brand-branding-advertising-commercial-marketing-concept_jazahg.jpg" fluid /></Col>
<Col  md={6}  className="dsg1-cotnt-mdevp">
<p className="dsg1-content-sectn">Digital marketing encompasses all marketing efforts that use an electronic device or the 
internet. Businesses leverage digital channels such as search engines, social media, email, and
other websites to connect with current and prospective customers. Digital marketing helps you 
reach a larger audience than you could through traditional methods, and target the prospects 
who are most likely to buy your product or service. Additionally, it's often more cost-effective 
than traditional advertising, and enables you to measure success on a daily basis and pivot as 
you see fit. With digital marketing, you can see the exact number of people who have viewed 
your website's homepage in real time by using digital analytics software. Unlike most offline 
marketing efforts, digital marketing allows marketers to see accurate results in real time. It can 
give you a comprehensive, start-to-finish view of all the metrics that might matter to your 
company including impressions, shares, views, clicks, and time on page. This is one of the 
biggest benefits of digital marketing. An effective digital marketing strategy combined with the 
right tools and technologies allows you to trace all of your sales back to a customer's first digital 
touchpoint with your business.
</p>
<Col>
            <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" />Sprout Social  </p>
            <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" /> Audienset </p>
            <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" />  Optimizely </p>
          
</Col>

</Col>

      </Row>
      <SectionSeven/>
        </div>
    )
}

export default DigitalMarket
