import React from 'react';
import "../Style.css";
import headimg from "../../Images/banner.jpg";
import pic from "../../Images/sskg.png";
import divider from "../../Images/divider.png";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
function Zons() {
    return (
    <>
        <div className="header">
            <img className="header-img" src={headimg} alt="banner" />
            <div className="header-text">
                <Fade top>
                    <p className="text-center">Registration</p></Fade>
                <Flip bottom>
                    <img className="header-divider" src={divider} alt="divider" /></Flip>
            </div>
        </div>
        <div className="zons">
            <div className="criteria container">
                <div className="eleg-cri">
                    <Fade bottom>
                        <h3 className="h3">Eligibility Criteria :</h3>
                        <p className="font-size-26"><span className="text-golden">Age :</span> 16-28<br />
                            <span className="text-golden"> Height :</span>  MINIMUM 5 ft 3 inches without heels<br />
                            <span className="text-golden"> Marital Status :</span> Unmarried/Not Engaged/Not Divorced<br />
                            <span className="text-golden">Nationality :</span> Indian & NRI<br />
                            <span className="text-golden">Gender :</span> Female<br />
                            <span className="text-golden">Passport :</span> Mandatory</p>
                    </Fade>
                </div>
                <div className="select-cri">
                    <img src={pic} className="skg-pic" alt="skg-logo" />
                </div>
            </div>
        </div>
    </>
    )
}
export default Zons;

