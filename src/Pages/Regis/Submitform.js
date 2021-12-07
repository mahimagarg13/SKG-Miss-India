import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style.css";
import { FaThumbsUp } from "react-icons/fa";
export default function Submitform() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="">
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose} size="xm"
      id="submit-success"
        aria-labelledby="contained-modal-title-vcenter"
        centered animation={false}>
        <Modal.Header className="modall" closeButton>
        </Modal.Header>
        <Modal.Body className="modal-css text-center modal-btn">
          <Modal.Title><h1><FaThumbsUp /></h1>
            <h1>Thank You</h1></Modal.Title>
          <h2 className="text-black">Form has been successfully submitted</h2>
          <a href="https://pages.razorpay.com/skg-miss-india-registration?name=Amit&email=email@gmail.com&phone=8785458545" rel="noopener noreferrer" target="_blank" className="reg-btn a"><h4>Proceed to Pay</h4></a>
        </Modal.Body>
      </Modal>
    </div>
  )
}
