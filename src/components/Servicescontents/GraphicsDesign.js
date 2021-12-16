import React from 'react'
import "./webdesign.css"
import { Col, Image, Row } from 'react-bootstrap'
import SectionSeven from '../Landingpage/SectionSeven'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

function GraphicsDesign() {
    return (
        <div>
    <Row className="dsg1-head-sctn">
              <Col><h1 className="dsg1-heading">GRAPHIC DESIGN</h1></Col>
          </Row>
      <Row>
          <Col><p className="dsg1-subtagline">Our Web desginig Services ensure<br/>
that your technologies are implemented efficiently and effectively—<br/>
the first time.</p></Col>
      </Row>
      <Row xs={1} md={2} sm={1}>
<Col md={4}>< Image className="dsg1-image-sectn" src="https://res.cloudinary.com/lanta/image/upload/v1639669116/creative-design-designer-man-working_ldtgns.jpg" fluid /></Col>
<Col  md={6} className="dsg1-cotnt-mdevp">
<p className="dsg1-content-sectn">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<Col>
            <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" />React js  </p>
            <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" /> Html </p>
            <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" /> Bootstrap5.1  </p>
            <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" /> CSS </p>
            <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" /> Tailwind Css </p>
</Col>

</Col>

      </Row>
      <SectionSeven/>
        </div>
    )
}

export default GraphicsDesign
