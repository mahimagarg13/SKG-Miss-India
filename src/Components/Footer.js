import React, { useEffect } from "react";
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import divid from "../Images/underline.png";
import flogo from "../Images/MicrosoftTeams-image.png";
import tawkTo from "tawkto-react";


const tawkToPropertyId = 'get_property_id_from_tawkto_dashboard'

// Direct Chat Link
// https://tawk.to/chat/tawkToPropertyId/tawkToKey

const tawkToKey = '61a80d989099530957f795da'

function Footer() {
    useEffect(() => {
        tawkTo(tawkToPropertyId, tawkToKey)
    }, [])

    return (
        <div className="background-black">
            <Fade bottom>
                <img className="divider-footer" src={divid} alt="underline" />
                <div className="d-flex footer">
                    <div className="one ">
                        <img src={flogo} className="h-w" alt="footer-logo" />
                        <p className="mar lnk">SKG Miss India International is an International Pageant Show that yearly chooses best female models of India to represent our Indian culture , custom & Tradition globally. </p>
                    </div>
                    <div className="two">
                        <h4>Navigation</h4>
                        <div className="lnk">
                            <FaAngleRight className="text-golden" />  <a href="/#">Home</a><br />
                            <FaAngleRight className="text-golden" /> <Link to="/about">About Us</Link><br />
                            <FaAngleRight className="text-golden" />  <Link to="/events">Events</Link><br />
                            <FaAngleRight className="text-golden" />  <Link to="/sponsers">Sponsers</Link><br />

                        </div>
                    </div>
                    <div className="lnk mt">
                        <FaAngleRight className="text-golden" />  <Link to="/gallery">Gallery</Link><br />
                        <FaAngleRight className="text-golden" />  <Link to="/auditions">Auditions</Link><br />
                        <FaAngleRight className="text-golden" /><Link to="/contactus"> Contact Us</Link><br />
                        <FaAngleRight className="text-golden" /><Link to="/registration">Registration</Link><br />

                    </div>
                    <div className="three">
                        <h4>Important Links</h4>
                        <div className="lnk">
                            <FaAngleRight className="text-golden" /><Link to="/rulesregulation">Rules & Regulation</Link><br />
                            <FaAngleRight className="text-golden" /><Link to="/termsconditions">Terms & Conditions</Link><br />
                            <FaAngleRight className="text-golden" /><Link to="/faq">FAQ</Link><br />
                            <FaAngleRight className="text-golden" /><Link to="/designer">Designer</Link><br />
                        </div></div>
                </div>
            </Fade>
        </div>
    );
}
export default Footer;