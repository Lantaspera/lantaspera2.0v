import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'



function SectionImage() {
    return (
        <div>
          
            <Row xs={12} md={12} >
                <Col>
                    <Image className="sctn5-image-cs" alt="#" src="https://res.cloudinary.com/lanta/image/upload/v1637217209/sergey-zolkin-_UeY8aTI6d0-unsplash_1_g7eucc.png" />
                </Col>
            </Row>
          
        </div>
    )
}

export default SectionImage
