
import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import logo from "../Images/skg-logo.png";
function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
    const navBarShow = () => setShowLinks(false);
  window.scrollTo(0, 0)  
    return (
        <div className="Navbar">
            <div className="leftside"></div>
            <a href="/">
             <img src={logo} className="hw" alt="imgg" />
            </a>
            <div className="rightside">
                <div className="links" id={showLinks ? "hidden" : ""}>
                <Link to="/#" onClick={navBarShow} >Home</Link>
                    <Link to="/about/#" onClick={navBarShow} >About Us</Link>
                    <Link to="/events/#" onClick={navBarShow} >Events</Link>
                    <Link to="/sponsers/#" onClick={navBarShow} >Sponsers</Link>
                    <Link to="/contactus/#" onClick={navBarShow} >Contact Us</Link>
                    <Link to="/designer/#" onClick={navBarShow} >Designer</Link>
                    <Link to="/registration" onClick={navBarShow} className="btnn">Registration</Link>
                </div>
                <button onClick={() => setShowLinks(!showLinks)} className="margin-right">
                    <FaBars />                   
               </button>
            </div>
          </div>
     );
}
export default Navbar;
