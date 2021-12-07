import { Link } from 'react-router-dom';
import '../Style.css';
import aboutimg from "../../Images/SKG_hero_image_about2.png";
import Fade from 'react-reveal/Fade';
function Aboutus() {
    window.scrollTo(0, 0)
    return (
        <div className="img-about">
            <div className="container d-flex flex-d">
                <div className="about">
                    <Fade left>
                        <h4 className="aboutus">Welcome to</h4>
                    </Fade>
                    <br />
                    <Fade bottom>
                        <h2>SKG Miss India </h2>
                        <p className="p-about">SKG Miss India International is an International Pageant Show that yearly chooses best female models of India to represent our Indian culture, custom & Tradition globally.
                            It’s a Home Brand of Skg Event Management, Bhopal (MP) This is particularly for individuals who catch everyone's eye except can't track down the ideal chance to display their capacities. With the assistance of SMII, the Women of India can feature their qualities and abilities to the entire nation and World on an International Platform.</p>
                    </Fade>
                    <div className="">
                        <Fade right>
                            <Link to="/about" className="btn a btnsubmit" >Know More</Link>
                        </Fade>
                    </div>
                </div>
                <div className="img">
                    <img src={aboutimg} className="img" alt="aboutimg" />
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
