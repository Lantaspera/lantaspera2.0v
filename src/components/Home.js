import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "./Home.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};


function Home() {
  return (
    <div className="home-page-main">

      <Row  className="first-part-landingpage">
        
        
      
          <Col  className="text-col-first" xs={12} lg={3}>
          <h2 className="tag-lanta">Welcome To Lantaspera <br /> Most Powerfull <br /> SaaS Solution </h2>
          <p className="caption-lanta">Lantaspera is designed with your customers in mind, <br /> so you can track and analyze all your data in<br /> one central location. There are no limits to <br /> how you can look at your data.</p>
          </Col>
        
      <Col xs={12} lg={9}><img className="first-image-lanta" alt="#" src="https://res.cloudinary.com/lanta/image/upload/v1635942105/image_1_o6nkna.jpg" />  </Col>
      </Row>
     
      

      <Row>
        <Col xs={12}> <h2 className="heading-stag">Integrated solutions designed for small business.</h2> </Col>
        <Col className="service-section">
          <Carousel draggable={false} responsive={responsive} infinite={true} autoPlay={true} arrows={false} axis={'vertical'}>


            <div className="profiles">
              <div className="pro-pic">
                <img src="https://res.cloudinary.com/lanta/image/upload/v1635942105/image_1_o6nkna.jpg" className="profile-img" />


                <div className="profile-details">
                  <h3 className="profile-details1" >web developement </h3>
                  <p className="profile-details2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>

                </div>
              </div>
            </div>

            <div className="profiles">
              <div className="pro-pic">
                <img src="https://res.cloudinary.com/lanta/image/upload/v1635942105/image_1_o6nkna.jpg" className="profile-img" />

                <div className="profile-details">
                  <h3 className="profile-details1" >Marketing </h3>
                  <p className="profile-details2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>


                </div>
              </div>

            </div>

            <div className="profiles">
              <div className="pro-pic">
                <img src="https://res.cloudinary.com/lanta/image/upload/v1635942105/image_1_o6nkna.jpg" className="profile-img" />


                <div className="profile-details">
                  <h3 className="profile-details1" >Designers</h3>
                  <p className="profile-details2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>

                </div>
              </div>
            </div>
          </Carousel>;
        </Col>
      </Row>
      <Row className="about-discription-sectn">
        <Col className="about-txt-section" xs={12} lg={6}>
          <Col lg={12} className="about-m-heading"><h2>Discover how we can help you to grow your <br /> business fast.</h2></Col>
          <Col lg={12}> <p className="about-caption-sectn">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p></Col>
          <Col className="about-discription-section" lg={12}>
            <p className="about-cntnt-para"><CheckOutlinedIcon color="info" fontSize="small" />    Build an SEO-Friendly Website.</p>
            <p className="about-cntnt-para"><CheckOutlinedIcon color="info" fontSize="small" />    Tell Your Brand Story.</p>
            <p className="about-cntnt-para"><CheckOutlinedIcon color="info" fontSize="small" />    Leverage Social Media Marketing.</p>
          </Col>
        </Col>
        <Col className="imagefirst-about" xs={12} lg={6}> <img alt="#" src="https://res.cloudinary.com/lanta/image/upload/v1636373969/image_2_z1q29b.png" /></Col>
      </Row>

      <Row className="amazing-main-sctn">

        <Col xs={12} lg={12} className="heading-stag"> <p>Amazing Features</p></Col>
          <Col className="amazing-sub-setion">
            <Col xs={12} lg={3} className="amazing-sub-heading">
              <Col><h1 className="sub-heading-user">< PeopleOutlineIcon color="info" fontSize="large" /> User Friendly</h1></Col>
              <Col><p className="sub-tag-user"> Utise wisi enim nets venias,<br /> quis tation ullamcorper nets <br /> lobotis nisle consequat.</p></Col>
            </Col>
            <Col xs={12} lg={3} className="amazing-sub-heading">
              <Col><h1 className="sub-heading-user"><LocalAtmIcon color="error" fontSize="large" /> Cost Control</h1></Col>
              <Col><p className="sub-tag-user"> Utise wisi enim nets venias,<br /> quis tation ullamcorper nets<br /> lobotis nisle consequat.</p></Col>
            </Col>
            <Col xs={12} lg={3} className="amazing-sub-heading">

              <Col><h1 className="sub-heading-user"><SettingsOutlinedIcon color="secondary" fontSize="large" /> Accesibility</h1></Col>
              <Col><p className="sub-tag-user"> Utise wisi enim nets venias,<br /> quis tation ullamcorper nets <br />lobotis nisle consequat.</p></Col>
            </Col>
          </Col>
        
      </Row>
 
<Row  className="portfolio-m-section">
  <Col className="portfolio-m-image">
  <img className="image-details-port" src="https://res.cloudinary.com/lanta/image/upload/v1637217209/sergey-zolkin-_UeY8aTI6d0-unsplash_1_g7eucc.png"  />
</Col>
<Col className="portfolio-heading-sec"> <h1>Our Clients</h1></Col>
</Row>

    </div>
  )
}

export default Home
