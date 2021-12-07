import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from 'react-reveal/Fade';
import "../Style.css";
import main from "../../Images/main.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
  const cookies = document.cookie.split(";");

 

  useEffect(() => {

    window.scrollTo(0, 0);

    setShow(false);

  }, []);



  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

 

  !(cookies.includes(" payment=paid")) &&

    setTimeout(() => {

      handleShow();

    }, 3000);
  return (
    <>
      <Modal show={show} onHide={handleClose} size="xm"
        aria-labelledby="contained-modal-title-vcenter"
        centered animation={false}>
        <Modal.Header className="modall" closeButton>
        </Modal.Header>
        <Modal.Body className="modal-css text-center modal-btn">
          <Modal.Title><h1>Be the Pride of India</h1></Modal.Title>
          <h2 className="text-black">Do you want to be next SKG Miss India ?</h2>
          <Link to="/registration" className="reg-btn a"><h4>Register Today</h4></Link>
        </Modal.Body>
      </Modal>
      <div className="hero">
        <div className="">
          <img className="hero-img" src={main} alt="hero-img"/>
        </div>
        <div className="hero-text">
          <Fade right>
            <h1 className="hero-h">
              SKG Miss India International Pageant 2022</h1>
          </Fade>
          <Fade bottom>
            <p className="hero-p ">As a Concept of the Show , We Conduct audition all over India, including Centre, North, South, East & West with a motive to identify the Beautiful Cultural representatives from every corner of India and will Showcase them in the Finale held in Dubai.</p>
            <Link to="/registration" type="submit" className="btnsubmit a">Register Now</Link>
          </Fade>
        </div>
      </div>
    </>
  );
}
export default Hero;
