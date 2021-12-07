import React from 'react';
import "../Style.css";
import headimg from "../../Images/banner.jpg";
import divider from "../../Images/divider.png";

export default function Galleryshow() {
    window.scrollTo(0, 0)
    return (
        <div>
            <div className="header">
                <img className="header-img" src={headimg} alt="" />
                <div className="header-text">
                    <p className="text-center">Gallery</p>
                    <img className="header-divider" src={divider} alt="divider"/>
                </div>
            </div>
        </div>
    )
}
