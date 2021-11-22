import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Image from 'react-bootstrap/Image'

const Navbar = () => {

    const [isMobile, setIsMobile]=useState(false);
    return (
        <nav className="navbar">
            <h3 className="logo">< Image src="https://res.cloudinary.com/lanta/image/upload/v1637569166/lantaspera_Final_kdqclo.png" fluid /></h3>
            <ul className={isMobile ? "nav-links-mobile":"nav-links"}
            onClick={()=>setIsMobile(false)}>
                <Link to="/" className="home">
                    <li>Home</li>
                </Link>
                <Link to="/services" className="services">
                    <li>Services</li>
                </Link>
                <Link to="/about" className="about">
                    <li>About</li>
                </Link>
                <Link to="/contact" className="contact">
                    <li>Contact</li>
                </Link>
            </ul>

            <button className="mobile-menu-icon"
            onClick={()=> setIsMobile(!isMobile)}>
                {isMobile ? <i className="fas fa-times"><CloseOutlinedIcon/></i>:<i><MenuOutlinedIcon/></i>}

            </button>

        </nav>
    )
}

export default Navbar
