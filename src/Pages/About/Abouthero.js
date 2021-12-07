import React from 'react';
import "../Style.css";
import headimg from "../../Images/banner.jpg";
import divider from "../../Images/divider.png";
import Fade from 'react-reveal/Fade';
// import Rotate from 'react-reveal/Rotate';
import group from "../../Images/marquee.png";
import Pulse from 'react-reveal/Pulse';
import Jump from 'react-reveal/Jump';
export default function Abouthero() {
    window.scrollTo(0, 0)
    return (
        <div>
            <div className="header">
                <img className="header-img" src={headimg} alt="" />
                <div className="header-text">
                    <Fade top >
                        <p className="text-center">About Us</p></Fade>
                    <Fade bottom>
                        <img className="header-divider" src={divider} alt="divider" />
                    </Fade>
                </div>
            </div>
            <div className="group">
                <Jump><h2 className="text-golden text">SKG Group of Companies</h2></Jump>
                <Pulse><img className="group-img" src={group} alt="groups" /></Pulse>
            </div>
        </div>
    );
}
