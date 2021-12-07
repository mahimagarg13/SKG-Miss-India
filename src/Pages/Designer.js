import React from 'react';
import divider from "../Images/divider.png";
import headimg from "../Images/banner.jpg";
import Jump from 'react-reveal/Jump';
import { FaAngleRight } from "react-icons/fa";
import DesignerForm from './DesignerForm';

export default function Designer() {
    return (
        <div>
            <div className="header">
                <img className="header-img" src={headimg} alt="" />
                <div className="header-text">
                    <p className="text-center">Designer</p>
                    <img className="header-divider" src={divider} alt="divider" />
                </div>
            </div>
            <div className="group">
                <Jump><h2 className="text-golden text">SKG - India’s Best Fashion Designer 2022 (In Search of Excellence) </h2></Jump>
                <div className="container text-white text-align "><p className="pd">Fashion Designing is one of the fastest growing industries in India. There is always on demand for good fashion designer in India. But getting required exposure for the same is difficult, especially for the young designers. SKG India’s Best Fashion Designer 2022 is going to be India’s best hunt for a fashion designer. It has been created to ease the journey of every aspirant fashion designer who dreams to make it big. The aim of this event is give Young & Professional Designers access to a new platform, as well as the opportunity to keep marketing their creation. </p>
                    <p className="pd">Being a Part of SKG Miss India International Event, You will get the best of best models for your designs , who will be selected across the Country.
                    </p>
                    <p className="pd"><b>So If you are Innovative, Creative mind , Talented , want an International platform to showcase your talent & get recognised Internationally ,then this Competition is for you!</b> </p>

                    <h3 className="h3"> Benefits/ Awards/Rewards for Fashion Designers :</h3>

                    <div className="d-flex content">
                        <div>
                            <p className="term-p"><FaAngleRight className="text-golden" /></p></div><div><p className="term-p">Winner will be Awarded as “  India’s Best Fashion Designer 2022 “  </p></div>
                    </div>
                    <div className="d-flex content">
                        <div>
                            <p className="term-p"><FaAngleRight className="text-golden" /></p></div><div><p className="term-p">Ad Shoots with SKG Miss India International Winner & the top 10 Finalist of SKG Miss India International </p></div>
                    </div>
                    <div className="d-flex content">
                        <div>
                            <p className="term-p"><FaAngleRight className="text-golden" /></p></div><div><p className="term-p">CatLog Shoot with the Winners. </p></div>
                    </div>
                    <div className="d-flex content">
                        <div>
                            <p className="term-p"><FaAngleRight className="text-golden" /></p></div><div><p className="term-p"> India’s Top Models will be assigned to the designers for their dresses.  </p></div>
                    </div>
                    <div className="d-flex content">
                        <div>
                            <p className="term-p"><FaAngleRight className="text-golden" /></p></div><div><p className="term-p"> Career & Expansion Opportunities Nationally as well as globally.</p></div>
                    </div>
                    <div className="d-flex content">
                        <div>
                            <p className="term-p"><FaAngleRight className="text-golden" /></p></div><div><p className="term-p"> Opportunity to get your Brand & Designs recognised Nationally & Internationally.  </p></div>
                    </div>
                    <div className="d-flex content">
                        <div>
                            <p className="term-p"><FaAngleRight className="text-golden" /></p></div><div><p className="term-p"> This is the platform of Opportunities. </p></div>
                    </div>
                    <div className="d-flex content">
                        <div>
                            <p className="term-p"><FaAngleRight className="text-golden" /></p></div><div><p className="term-p"> Every Participant will get a Trophy & A Certificate. </p></div>
                    </div>
                    <div className="d-flex content">
                        <div>
                            <p className="term-p"><FaAngleRight className="text-golden" /></p></div><div><p className="term-p"> Participant Designers will also get a space to display & Sale their collections at the venue.  </p></div>
                    </div>
                    <div className="d-flex content">
                        <div>
                            <p className="term-p"><FaAngleRight className="text-golden" /></p></div><div><p className="term-p"> 3 days Stay & Food ( Max 2 person ) will be provided to the Participant designers in Goa.  </p></div>
                    </div>
                    <div className="d-flex content">
                        <div>
                            <p className="term-p"><FaAngleRight className="text-golden" /></p></div><div><p className="term-p"> 3 days Stay & Food ( Max 2 Person ) will be provided to the Selected finalist Designers in Dubai. </p></div>
                    </div>
                </div>
            </div>
            <DesignerForm />
        </div>
    )
}
