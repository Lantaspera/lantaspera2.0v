import React from 'react'
import "./Home.css"
function Home() {
    return (
        <div className="home-page-mdv">
         <div className="conical-circle-div">
             <div className="conical-circle">
                 <h2 className="tag-lanta">Welcome To Lantaspera <br/>World's Most Powerfull <br/> SaaS Solution </h2>
                 <h1 className="subtag-line">Lantaspera is designed with your customers in mind, so you can track and analyze all your data in one central location. There are no limits to how you can look at your data.</h1>
             </div>
         </div>
         <div className="home-page-image">
             <img className="imagefirst" src="https://res.cloudinary.com/lanta/image/upload/v1635942105/image_1_o6nkna.jpg"/>
         </div>
        </div>
    )
}

export default Home
