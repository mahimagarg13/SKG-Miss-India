import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

// import "./Style.css";
import { FaCheckCircle } from "react-icons/fa";
import { useParams, Outlet } from "react-router-dom";
export default function Payment() {
  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  const store = () => {

    setShow(true);

    document.cookie = "payment=paid; path=/";

  }

  const params = useParams();



  useEffect(() => {

    window.scrollTo(0, 0);

    (JSON.stringify(params.status)==='"success"') && store();

  }, [params.status]);

  return (
    <div className=""> <Button variant="primary" onClick={handleShow}>
      Launch demo modal
    </Button>
      <Modal show={show} onHide={handleClose} size="xm"
        aria-labelledby="contained-modal-title-vcenter"
        centered animation={false}>
        <Modal.Header className="modall" closeButton>
        </Modal.Header>
        <Modal.Body className="modal-css text-center modal-btn" >
          <Modal.Title><h1><FaCheckCircle /></h1>
          </Modal.Title>
          <h2 className="text-black">Thank You For Payment</h2>
          <a href="/" className="reg-btn a"><h4>Done</h4></a>
        </Modal.Body>
      </Modal>
      <Outlet />
    </div>
  )
}
