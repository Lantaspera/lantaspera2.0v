import React from 'react'
import "./webdesign.css"
import { Col, Image, Row } from 'react-bootstrap'
import SectionSeven from '../Landingpage/SectionSeven'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { useEffect } from 'react'

function GraphicsDesign() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            

            <div className='srvc-sub-sctn-m'>
            <Row className="dsg1-head-sctn">
                <Col><h1 className="dsg1-heading">GRAPHIC DESIGN</h1></Col>
            </Row>
            </div>
            <Row>
                <Col><p className="dsg1-subtagline"> Our expertise uses perfect designs and color <br />theory for creating fresh communication and
                    visually appealing—<br /> design that evokes good impression in viewers</p></Col>
            </Row>
            <Row xs={1} md={2} sm={1}>
                <Col md={4}>< Image className="dsg1-image-sectn" src="https://res.cloudinary.com/lanta/image/upload/v1639669116/creative-design-designer-man-working_ldtgns.jpg" fluid /></Col>
                <Col md={7} className="dsg1-cotnt-mdevp">
                    <p className="dsg1-content-sectn">Graphic design is the art of visual communication that combines images, words, and ideas to
                        convey information to audience. It is a way of conveying ideas through visuals and design.
                        Graphic design concept is composed of different fields and specializations. Types of graphic
                        design includes corporate design, marketing and advertising design, publication design,
                        environmental design, packaging design and motion design.
                        Corporate design has to do with the visual identity of a company. Any visual elements that make
                        up a brand identity, such as a brand’s logo (made with logo design software), can be associated
                        with corporate design.
                        Social media graphics, magazine ads, billboards, brochures, email marketing templates, content
                        marketing are all examples of marketing and advertising design.
                        Publication designers need to work closely with editors and publishers to ensure layouts,
                        typography, and illustrations are tastefully combined producing the best possible end result.
                        Examples of publication graphic designs include books, newspapers, newsletters, magazines,
                        and eBooks.
                        Environmental graphic design is the use of visual elements in environments to connect people
                        to those places. Architecture, road signs, signage, event spaces, and wall murals are all
                        examples of environmental design.
                        When you buy a new product, it most likely has some form of packaging or visual element such
                        as a label, sticker, or wrapping that is used to prepare the product for distribution or sale. These
                        elements are created by packaging designers.
                        Motion graphic design is a subset of graphic design and it’s exactly what it sounds like graphics
                        that are in motion. This can include animation, video games, apps, GIFs, website features, etc.</p>
                    <Col>
                        <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" />Adobe Illustrator </p>
                        <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" />Procreate </p>
                        <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" /> Adobe Photoshop </p>

                    </Col>


                    <Col><h1 className="dsg1-heading-two">UI/UX DESIGN</h1></Col>
                    <p className="dsg1-content-sectn">The user interface is the graphical layout of an application. It consists of the buttons users click
                        on, the text they read, the images, sliders, text entry fields, and all the rest of the items the user
                        interacts with. User experience is determined by how easy or difficult it is to interact with the
                        user interface elements that the UI designers have created. UX designer decides how the user
                        interface works while the UI designer decides how the user interface looks.</p>

                    <Col>
                        <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" />Figma </p>
                        <p className="dsg1-tct-sctn"><CheckOutlinedIcon color="error" fontSize="small" />Adobe xd </p>


                    </Col>
                </Col>
            </Row>

            <SectionSeven />



        </div>
    )
}

export default GraphicsDesign
