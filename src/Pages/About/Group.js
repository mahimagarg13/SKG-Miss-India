import React from 'react'
import Fade from 'react-reveal/Fade';
export default function Group() {
    window.scrollTo(0, 0)
    return (
        <div className="aboutpage">
            <div className="about-left">
                <Fade bottom>
                    <p className="text-center text">About SKG Group</p>
                </Fade>
                <Fade bottom>
                    <p className="container pg ">We estabilished on 10th July 2013 in Bhopal and we are proud to mention that we have a long list of happy & satisfied customers who have availed
                        our services and have appriciated our efforts. We are a renowned innovative thinking company backed up with excellent work force. Our USP is our creativity into marketing. Skg is a symbol of a high quality service offering, takes a long term view to real estate and invests is strategic relationships.
                        We are proud to have integrated pplicies driven by customer satisfation havig transparency & honesty with the clients and providing a complete legalized project. </p>
                </Fade>
            </div>
            <div className="vl-about"></div>
            <div className="about-right">
                <Fade bottom>
                    <p className="text-center text">SKG Group Presented by :</p></Fade>
                <Fade bottom>
                    <p className="pg container">SKG Entertainmentrs - Line Production & Management & Modelling Agency<br />
                        SKG Helping Hand Foundation - Non Government Organiztion(NGO)<br />
                        SKG Real Estate - Builder & Coloniser<br />
                        SKG India - Import-Export<br />
                        SKG Foods - Restaurant</p>
                </Fade>
            </div>
        </div>
    )
}
