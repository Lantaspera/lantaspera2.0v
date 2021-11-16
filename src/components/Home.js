import React from 'react'
import "./Home.css"
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


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
        <div className="home-page-mdv">
            <div className="conical-circle-div">
                <div className="circle-taghead">
                <span className="circle-dot"></span>
                    <h2 className="tag-lanta">Welcome To Lantaspera <br />World's Most Powerfull <br /> SaaS Solution </h2>
                    <h1 className="subtag-line">Lantaspera is designed with your customers in mind, <br /> so you can track and analyze all your data in<br /> one central location. There are no limits to <br /> how you can look at your data.</h1>
                </div>
            </div>
            <div className="home-page-image">
                <img className="imagefirst" alt="#" src="https://res.cloudinary.com/lanta/image/upload/v1635942105/image_1_o6nkna.jpg" />
                <span className="circle-dot2"></span>
            </div>


   
                
           
            <div className="services-content">
            <h2 className="heading-stag">Integrated solutions designed for small business.</h2> 
            <Carousel draggable={false} responsive={responsive} infinite={true} autoPlay={true} arrows={true} showDots={true} >


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
            </div>
          
            <div className="about-main-div">
                <div className="about-left-div">
                    <h2 className="about-m-heading">Discover how we can help you to grow your <br /> business fast.</h2>
                    <h1 className="about-m-tagline">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h1>
                    <div className="about-content-div">
                        <p className="about-cntnt-para"><CheckOutlinedIcon color="info" fontSize="small" />    Build an SEO-Friendly Website.</p>
                        <p className="about-cntnt-para"><CheckOutlinedIcon color="info" fontSize="small" />    Tell Your Brand Story.</p>
                        <p className="about-cntnt-para"><CheckOutlinedIcon color="info" fontSize="small" />    Leverage Social Media Marketing.</p>

                    </div>
                </div>

                {/* amazing section */}
                <div className="about-right-div">
                    <img className="imagefirst-about" alt="#" src="https://res.cloudinary.com/lanta/image/upload/v1636373969/image_2_z1q29b.png" />
                </div>
                <div className="about-sec-main">
                    <h1 className="about-sec-heading">Amazing Features</h1>

                    <div className="sub-sections-content">

                        <h1 className="sub-heading-user">< PeopleOutlineIcon color="info" fontSize="large"/> User Friendly</h1>
                        <p className="sub-tag-user"> Utise wisi enim nets venias,<br/> quis tation ullamcorper nets <br/> lobotis nisle consequat.</p>
                    </div>
                    <div className="sub-sections-content">

<h1 className="sub-heading-user"><LocalAtmIcon color="error" fontSize="large"/> Cost Control</h1>
<p className="sub-tag-user"> Utise wisi enim nets venias,<br/> quis tation ullamcorper nets<br/> lobotis nisle consequat.</p>
</div>
<div className="sub-sections-content">

<h1 className="sub-heading-user"><SettingsOutlinedIcon color="secondary"  fontSize="large"/> Accesibility</h1>
<p className="sub-tag-user"> Utise wisi enim nets venias,<br/> quis tation ullamcorper nets <br/>lobotis nisle consequat.</p>
</div>

                </div>
            </div>
        </div>
    )
}

export default Home
