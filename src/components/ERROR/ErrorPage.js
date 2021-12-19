import React from 'react'
import { Container, Row,Image,Col } from 'react-bootstrap'
import "./errorpage.css"


function ErrorPage() {
    return (
        <div>
            <Container>
                <Row xs={12}>
                    <Col xs={12} md={2}></Col>
                    <Col  xs={12} md={8}>
                < Image className='err-page' src="https://res.cloudinary.com/lanta/image/upload/v1639858284/404error_1_gonroe.png" fluid />
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ErrorPage
