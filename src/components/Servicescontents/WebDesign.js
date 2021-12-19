import React from 'react'
import "./webdesign.css"
import { Col, Image, Row } from 'react-bootstrap'
import SectionSeven from '../Landingpage/SectionSeven'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { useEffect } from 'react'

function WebDesign() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
   
          <Row className="dsg1-head-sctn">
              <Col><h1 className="dsg1-heading">WEB DESIGNING</h1></Col>
          </Row>
      <Row>
          <Col><p className="dsg1-subtagline">
Our web designing services ensure <br/> a well formatted content and a well planned information architecture- <br/> providing visual appealing and articulate format. </p></Col>
      </Row>
      <Row xs={1} md={2} sm={1}>
<Col md={4}>< Image className="dsg1-image-sectn" src="https://res.cloudinary.com/lanta/image/upload/v1639643539/web-design-online-technology-content-concept_zakty6.jpg" fluid /></Col>
<Col  md={6}  className="dsg1-cotnt-mdevp">
<p className="dsg1-content-sectn">Web designing is the art  of making websites that are displayed on the internet. It is the user experience aspects of web site development rather than the software development.Web design used to be focused on designing web sites for desktop browsers, however, design for mobile and tablet browsers has become increased. Two of the most common methods for designing websites that work well both on desktop and mobile are responsive and adaptive design. In responsive design, content moves dynamically depending on screen size. In adaptive design the website content is fixed in layout sizes that match common screen sizes. Web design is normally used to describe the design process relating to the front end design of a website including writing markup.</p>
<Col>
            <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" />React js  </p>
            <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" /> Html </p>
            <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" /> Bootstrap5.1  </p>
            <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" /> CSS </p>
         
</Col>

</Col>

      </Row>
      <SectionSeven/>
     
        </div>
    )
}

export default WebDesign
