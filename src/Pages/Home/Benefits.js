import React from 'react'
import divider from "../../Images/divider.png";
import Fade from 'react-reveal/Fade';

export default function Benefits() {
    window.scrollTo(0, 0)
    return (
        <div className="benefits">
            <img className="divider-2 rotate-180" src={divider} alt="" />
            <Fade top><h1 className="text-center text-golden">Benefits For the Contestants of SKG Miss India International.</h1></Fade>
            <img className="divider-2" src={divider} alt="divider" />
            <div className="main-card">
                <Fade bottom>
                    <div className="card-1">Winner will get the Cash Prize of 5,00,000/- & SKG Miss India International Crown.</div>
                    <div className="card-1">A Movie for SKG Miss India International 2022.</div>
                    <div className="card-1">2 year Contract with SKG Entertainment.</div>
                </Fade>
            </div>
            <div className="second-card">
                <Fade bottom>
                    <div className="card-2">3 days International Grooming & Personality development in Dubai including Travel, Visa, Stay, Sightseeing & Food for Finalists.</div>
                    <div className="card-2">3 days Grooming & Personality development By Industry Professionals in Goa including Stay, Food, Sightseeing & Success Party for Semi-Finalists. </div>
                    <div className="card-2">Career Opportunities in Bollywood Movies, Web series, Serials & Video Albums.</div>
                    <div className="card-2">National & International News & Media Coverage & Interviews. </div>
                </Fade>
            </div>
            <div className="second-card">
                <Fade bottom>
                    <div className="card-2">National & International Brand tie-ups.</div>
                    <div className="card-2">Professional Portfolio Shoots.</div>
                    <div className="card-2">Advertising Agency Tie-ups.</div>
                    <div className="card-2">Ad Shoots & Print Shoots.</div>
                </Fade>
            </div>
            <div className="second-card">
                <Fade bottom>
                    <div className="card-2">VIP Passes for Goa Fashion Week. </div>
                    <div className="card-2">Cash Prizes & Gift Hampers.</div>
                    <div className="card-2">Certificate to all the participants.</div>
                    <div className="card-2">Certificate, Trophy & Sash to all the Finalists.</div>
                </Fade>
            </div>
        </div>
    )
}
