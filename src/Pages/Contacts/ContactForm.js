import React from "react";
import '../Style.css';
import { Card, Button } from "react-bootstrap";
import { FcPhone, FcGoogle } from "react-icons/fc";
import { RiMapPinFill } from "react-icons/ri";
import { ImFacebook } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import Jump from 'react-reveal/Jump';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
function ContactForm() {
  window.scrollTo(0, 0)
  return (
    <div className="mr-t ">
      <Fade top>
        <h1 className="container head text-center"> Contact us</h1></Fade>
      <div className="d-flex page">
        <div className="details llnk">
          <Jump>
            <a href="tel:+91-9755115755" rel="noopener noreferrer" target="_blank"><FcPhone className="ic" /> 9755115755, 0755-4040220</a><br />
            <a href="mailto:skgmissindia@gmail.com" rel="noopener noreferrer" target="_blank"> <FcGoogle className="ic" /> skgmissindia@gmail.com</a><br />
            <a href="https://www.facebook.com/Skgeventmanagement/" rel="noopener noreferrer" target="_blank"> <ImFacebook className="ic blue" /> SkgEvents</a><br />
            <a href="https://instagram.com/skgeventmanagement?utm_medium=copy_link"> <ImInstagram className="ic maroon" /> SkgEventManagement</a><br />
            <a href="https://www.google.com/maps/place/Skg+Miss+India+International/@23.250574,77.463864,16z/data=!4m5!3m4!1s0x0:0xfa038928b526a665!8m2!3d23.2505735!4d77.4638636?hl=en" rel="noopener noreferrer" target="_blank"><RiMapPinFill className="ic maroon" /> 204, c-7, Indrapuri, Raisen Road, BHEL, Bhopal(M.P.)</a>
          </Jump>
        </div>
        <div className="contactform">
          <Pulse>
            <Card>
              <h2 className="text-center msg">Send Message</h2>
              <form className="align">
                <label>
                  <input
                    type="name" className="input" placeholder="Name"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    required="required"
                  />
                </label><br />
                <label>
                  <input
                    type="phone"
                    placeholder="Phone"
                    required="required"
                  />
                </label><br />
                <label>
                  <input
                    type="text"
                    placeholder="Type your message"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    required="required"
                  />
                </label><br />
                <Button className="btnsubmit" type="submit" size="lg" >
                  Send Message </Button>{' '}
              </form>
            </Card>
          </Pulse>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
export default ContactForm;