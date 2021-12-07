import React from 'react';
import Fade from 'react-reveal/Fade';
import { FaAngleRight } from "react-icons/fa";
import owner from "../../Images/06.png"
export default function Company() {
    window.scrollTo(0, 0)
    return (
        <div className="company">
            <Fade top>
                <p className="text-center  text-golden owner">Owner's Profile</p></Fade>
            <div className="flex-d container infor-box">
                <div className="information  info">
                    <div className="owner-pic">
                        <img src={owner} className="owners" alt="owner's profile" />
                        <h3 className="text-golden">Arun Malviya</h3>
                        <h5 className="text-white">Managing Director</h5>
                    </div>
                    <Fade bottom>
                        <h2 className="text-golden">Education</h2>
                    </Fade>
                    <Fade bottom>
                        <p className="pg">
                            <FaAngleRight /> MBA in International Business  from EDHEC University France .<br />
                            <FaAngleRight /> International Marketing, ESSCA, Budapest, Hungry<br />
                            <FaAngleRight /> PGDM- Marketing Management, Mumbai, India.<br />
                            <FaAngleRight /> Management Honours Degree- Excellence College Bhopal.<br />
                            <FaAngleRight /> Advertising Media Management, BSSS College Bhopal.<br />
                            <FaAngleRight /> PHD in Digital Marketing, Barkatullah University.
                        </p>
                    </Fade>
                </div>
                <div className="info information">
                    <Fade bottom>
                        <h2 className="text-golden">Award & Recognition</h2></Fade>
                    <Fade bottom><p className="pg">He has won many awards in the feild of Management, Sports, Dance, Painting, Public Speaking, Student Of The Year, Social Service, Youth Icon, Fashion etc.</p>
                    </Fade>
                    <Fade bottom>
                        <h2 className="text-golden">Professional Overview</h2></Fade>
                    <Fade bottom><p className="pg">He is an Entrepreneur, A Social Activist, Fashion Expert, Writer & A Life Coach.</p>
                    </Fade>
                    <Fade bottom>
                        <h2 className="text-golden">World of knowledge</h2></Fade>
                    <Fade bottom><p className="pg">Moreover to add on his knowledge, he explored more than 30 countries for various International Confrences, Seminars, Gloabal Meets, and Bussiness related
                        works including France, Hungary, China, Hongkong, Macau, Singapore,italy, Rome, Soudi Arab, Austria etc.
                    </p>
                    </Fade>
                    <Fade bottom>
                        <h2 className="text-golden">Bussiness Profile</h2></Fade>
                    <Fade bottom><p className="pg">He is the Founder of SKG & started his company in the  year 2013. Firstly started with Real Estate and now SKG is into Event Management,
                        Line Production, Modelling Agency, Restaurant Bussiness, Import-Export & Social Service.
                    </p>
                    </Fade>
                    <Fade bottom>
                        <h4 className="text-golden">"Honesty, Dedication, Hardwork, Ambitious, Risk Taking Ability & Right Decision, on Right Time is The Key of His Successful Journey"</h4></Fade>
                </div>
            </div>
        </div>
    )
}
