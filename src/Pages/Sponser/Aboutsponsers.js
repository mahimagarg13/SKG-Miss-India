import React from 'react'
import { ImStarFull } from "react-icons/im";
import divider from "../../Images/divider.png";
import Fade from 'react-reveal/Fade';
import RegisterSponser from './RegisterSponser';
export default function Aboutsponsers() {
    window.scrollTo(0, 0)
    return (
        <div className="sponser">
            <div className="sponser-benefits container">
                <div className="left">
                    <h1 className="text-golden form-sp text-center">Contact Us for Sponsorship</h1>
                    <RegisterSponser />
                </div>
                <div className="right">
                    <img className="divider-2 rotate-180" src={divider} alt="divider" />
                    <Fade top>  <h1 className="text-center text-golden">Benefits For Sponsers</h1></Fade>
                    <img className="divider-2" src={divider} alt="" />
                    <Fade bottom>
                        <p className="line">
                            <ImStarFull className="text-golden mr-10" />Brand Recognition & Promotion all over India.<br />
                            <ImStarFull className="text-golden mr-10" />Brand Ad video in the show.<br />
                            <ImStarFull className="text-golden mr-10" />Hoardings, Standees, Cut-Outs at the venue.<br />
                            <ImStarFull className="text-golden mr-10" />Mentions By the Host.<br />
                            <ImStarFull className="text-golden mr-10" />Brand Ad shoots by the top models.<br />
                            <ImStarFull className="text-golden mr-10" />Photoshoots with Celebrity artists.<br />
                            <ImStarFull className="text-golden mr-10" />3 days Stay & Food in Goa(Conditional).<br />
                            <ImStarFull className="text-golden mr-10" />VIP Passes for Goa Fashion Week.<br />
                            <ImStarFull className="text-golden mr-10" />3 Days Stay & Foods in Dubai (Conditional).<br />
                            <ImStarFull className="text-golden mr-10" />VIP Passes for SKG Miss India International Finale in Dubai.<br />
                            <ImStarFull className="text-golden mr-10" />Award, Certification and Honour on stage by the bollywood Celebrity Artist.<br />
                            <ImStarFull className="text-golden mr-10" />Wild Card Entry of Sponsers Choice for the Semi Finale.<br />
                        </p>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
