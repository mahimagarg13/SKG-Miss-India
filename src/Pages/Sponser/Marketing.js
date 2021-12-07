import React from 'react'
import Fade from 'react-reveal/Fade';
import divider from "../../Images/divider.png";
import { ImStarFull } from "react-icons/im";
import Slide from 'react-reveal/Slide';
import pic from "../../Images/sskg.png";

export default function Marketing() {
    window.scrollTo(0, 0)
    return (
        <div className="marketing">
            <div className="sponser-benefits container">
                <div className="">
                    <img className="divider-2 rotate-180" src={divider} alt="" />
                    <Fade top><h1 className="text-center text-golden">Marketing and Promotion Strategy</h1></Fade>
                    <img className="divider-2" src={divider} alt="" />
                    <Fade bottom>
                        <p className="line ">
                            <ImStarFull className="text-golden mr-10" />Marketing and Promotion thoughtout and Aboard.<br />
                            <ImStarFull className="text-golden mr-10" />International & National Media Coverage.<br />
                            <ImStarFull className="text-golden mr-10" />Print Ads on National Newspapers.<br />
                            <ImStarFull className="text-golden mr-10" />Paid Promotions on social media.<br />
                            <ImStarFull className="text-golden mr-10" />Page 3 Coverage & Promotion.<br />
                            <ImStarFull className="text-golden mr-10" />Promotion by Social Influencer/Public Figures/Celebrities/Youtubers etc.<br />
                            <ImStarFull className="text-golden mr-10" />Brand Promotion by Hoardings, Posters, Led Van etc.<br />
                            <ImStarFull className="text-golden mr-10" />Promotion on National Radio.<br />
                            <ImStarFull className="text-golden mr-10" />Digital Marketing Promotion.<br />
                            <ImStarFull className="text-golden mr-10" />Promotional Activities & Contests in almost all the top universitie, Colleges, Schools of India.<br />
                            <ImStarFull className="text-golden mr-10" />RJ Mentions on their pages.<br />
                            <ImStarFull className="text-golden mr-10" />On Site Promotions.<br />
                        </p>
                    </Fade>
                </div>
                <div className="right text-center">
                    <Slide bottom>
                        <img src={pic} className="skg-img" alt="skg-logo" /></Slide>
                </div>
            </div>
        </div>
    )
}
