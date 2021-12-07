import { useEffect } from 'react';
// import { useNavigate } from 'react-router';
import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
import Zons from "./Regis/Zons";
import "../Pages/Style.css";
import Fade from "react-reveal/Fade";
import Roll from 'react-reveal/Roll';
import unline from "../Images/underline.png";
// import Submitform from './Regis/Submitform';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Payment from './Regis/Payment';
import { FaThumbsUp } from "react-icons/fa";
import { useParams , Outlet } from "react-router-dom";


function Registration() {
  const [payment, setPayment] = useState(false)

  const params = useParams();

  useEffect(() => {

    window.scrollTo(0, 0);

    (JSON.stringify(params.status)==='"success"') && setPayment(true)

  }, [params]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [heightft, setHeightft] = useState("");
  const [heightinc, setHeightinc] = useState("");
  const [weight, setWeight] = useState("");
  const [DOB, setDob] = useState("");
  const [hips, setHips] = useState("");
  const [closeup, setCloseup] = useState("");
  const [marital, setMarital] = useState("");
  const [gender, setGender] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [ig, setIg] = useState("");
  const [fb, setFb] = useState("");
  const [birthstate, setBirthstate] = useState("");
  const [passport, setPassport] = useState("");
  const [oci, setOci] = useState("");
  const [bust, setBust] = useState("");
  const [waist, setWaist] = useState("");
  const [midshot, setMidshot] = useState("");
  const [fullphoto, setFullphoto] = useState("");
  const [preferredcity, setPreferredcity] = useState("");
  const [rnr, setRnr] = useState("");
  const [tnc, setTnc] = useState("");


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("fname", fname);
      data.append("lname", lname);
      data.append("mobile", mobile);
      data.append("email", email);
      data.append("address", address);
      data.append("city", city);
      data.append("state", state);
      data.append("country", country);
      data.append("heightinc", heightinc);
      data.append("heightft", heightft);
      data.append("weight", weight);
      data.append("hips", hips);
      data.append("marital", marital);
      data.append("gender", gender);
      data.append("ig", ig);
      data.append("fb", fb);
      data.append("birthstate", birthstate);
      data.append("passport", passport);
      data.append("oci", oci);
      data.append("bust", bust);
      data.append("waist", waist);
      data.append("DOB", DOB);
      data.append("whatsapp", whatsapp);
      data.append("midshot", midshot);
      data.append("closeup", closeup);
      data.append("fullphoto", fullphoto);
      data.append("preferredcity", preferredcity);
      data.append("rnc", rnr);
      data.append("tnc", tnc);


      axios
        .post("https://skg-miss-india-backend.herokuapp.com/users", data)
        .then(setShow(true));
      // .then(navigate("/"));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} size="xm"
        aria-labelledby="contained-modal-title-vcenter"
        centered animation={false}>
        <Modal.Header className="modall" closeButton>
        </Modal.Header>
        <Modal.Body className="modal-css text-center modal-btn" >
          <Modal.Title><h1><FaThumbsUp /></h1>
            <h1>Thank You</h1></Modal.Title>
          <h2 className="text-black">Form has been successfully submitted</h2>
          <a href="https://pages.razorpay.com/skg-miss-india-registration?name=Amit&email=email@gmail.com&phone=8785458545" rel="noopener noreferrer" target="_blank" className="reg-btn a"><h4>Proceed to Pay</h4></a>
        </Modal.Body>
      </Modal>
      <Zons />
      {/* <Submitform /> */}
      {/* <Payment /> */}
      <div className="top">
        <Fade top>
          <h1 className="text-center reg">
            {" "}
            SKG Miss India International Registration Form
          </h1>
        </Fade>
        <div className="container from">
          <Form onSubmit={onSubmitForm} encType="multipart/form-data">
            <Row className="mb">
              <Col>
                <Form.Group as={Col} className="mb-3" controlId="formGridName">
                  <Form.Label className="text-white">First Name<span style={{ color: "black" }}>*</span></Form.Label>
                  <Form.Control
                    placeholder="First name"
                    type="name"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    required="required"
                    maxLength="32"
                    pattern="[a-zA-Z'-'\s]*" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Col} className="mb-3" controlId="formGridCity">
                  <Form.Label className="text-white">Last Name<span style={{ color: "black" }}>*</span></Form.Label>
                  <Form.Control
                    placeholder="Last name"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    type="text"
                    required="required"
                    pattern="[a-zA-Z'-'\s]*" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3" controlId="formGridCity">
                <Form.Label className="text-white">DOB<span style={{ color: "black" }}>*</span></Form.Label>
                <Form.Control
                  type="date"
                  value={DOB}
                  onChange={(e) => setDob(e.target.value)}
                  required="required" />
              </Form.Group>
              <Form.Group as={Col}
                className="mb-3"
                controlId="exampleForm.ControlInput3">
                <Form.Label className="text-white">Gender<span style={{ color: "black" }}>*</span></Form.Label>
                <Form.Select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="me-sm-2"
                  id="inlineFormCustomSelect">
                  <option value="0">Choose...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                  <option value="Transgender">Transgender</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="mb-3"
                as={Col} controlId="formGridCity">
                <Form.Label className="text-white">Marital Status<span style={{ color: "black" }}>*</span></Form.Label>
                <Form.Select
                  className="me-sm-2"
                  id="inlineFormCustomSelect"
                  value={marital}
                  onChange={(e) => setMarital(e.target.value)}>
                  <option value="0">Choose...</option>
                  <option value="Married">Married</option>
                  <option value="Unmarried">Unmarried</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Engaged">Engaged</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                as={Col}
                controlId="exampleForm.ControlInput3">
                <Form.Label className="text-white">Email address<span style={{ color: "black" }}>*</span></Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required="required"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-'-'\s]*" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                className="mb-3"
                as={Col}
                controlId="exampleForm.ControlInput3" >
                <Form.Label className="text-white">Mobile<span style={{ color: "black" }}>*</span></Form.Label>
                <Form.Control
                  type="phone"
                  placeholder="Mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required="required"
                  maxLength="12"
                  pattern="[0-9'-'\s]*" />
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="exampleForm.ControlInput3" >
                <Form.Label className="text-white">WhatsApp Number<span style={{ color: "black" }}>*</span></Form.Label>
                <Form.Control
                  type="phone"
                  placeholder="Whatsapp number"
                  required="required"
                  maxLength="12"
                  pattern="[0-9'-'\s]*"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)} />
              </Form.Group>
            </Row>
            <Row className="mb">
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="exampleForm.ControlInput3" >
                <Form.Label className="text-white">
                  Facebook Username
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Facebook Username."
                  value={fb}
                  onChange={(e) => setFb(e.target.value)}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-'-'\s]*" />
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="exampleForm.ControlInput3">
                <Form.Label className="text-white">
                  Instagram Username
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Instagram Username"
                  value={ig}
                  onChange={(e) => setIg(e.target.value)}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-'-'\s]*" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3"
              controlId="exampleForm.ControlInput5" >
              <Form.Label className="text-white">Address<span style={{ color: "black" }}>*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="H.No.01, Apartment, City"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required="required" />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3" controlId="formGridCity">
                <Form.Label className="text-white">City<span style={{ color: "black" }}>*</span></Form.Label>
                <Form.Control
                  type="city"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required="required"
                  pattern="[a-zA-Z'-'\s]*" />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formGridState">
                <Form.Label className="text-white">State<span style={{ color: "black" }}>*</span></Form.Label>
                <Form.Control
                  type="state"
                  placeholder="State"
                  value={state}
                  pattern="[a-zA-Z'-'\s]*"
                  onChange={(e) => setState(e.target.value)}
                  required="required" />
              </Form.Group>
            </Row>
            <Row className="mb">
              <Form.Group as={Col} className="mb-3" controlId="formGridCity">
                <Form.Label className="text-white">Country<span style={{ color: "black" }}>*</span></Form.Label>
                <Form.Control
                  type="country"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required="required"
                  pattern="[a-zA-Z'-'\s]*"
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formGridZip">
                <Form.Label className="text-white">Birth State<span style={{ color: "black" }}>*</span></Form.Label>
                <Form.Control
                  type="state"
                  value={birthstate}
                  pattern="[a-zA-Z'-'\s]*"
                  placeholder="Birth state"
                  onChange={(e) => setBirthstate(e.target.value)}
                  required="required"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="exampleForm.ControlInput5" >
                <Form.Label className="text-white">Do you have an Indian Passport<span style={{ color: "black" }}>*</span></Form.Label>
                <Form.Select
                  className="me-sm-2"
                  id="inlineFormCustomSelect"
                  value={passport}
                  onChange={(e) => setPassport(e.target.value)}  >
                  <option value="0">Choose...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="exampleForm.ControlInput5" >
                <Form.Label className="text-white">
                  Do you hold other Country's Identity<span style={{ color: "black" }}>*</span>{" "}
                </Form.Label>
                <Form.Select
                  className="me-sm-2"
                  id="inlineFormCustomSelect"
                  value={oci}
                  onChange={(e) => setOci(e.target.value)}
                  pattern="[A-Za-z]" >
                  <option value="0">Choose...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
                <Form.Label className="text-white">Height(ft)<span style={{ color: "black" }}>*</span></Form.Label>
                {/* <Form.Control
                  type="height"
                  placeholder="Eg. 5'2"
                  value={heightft}
                  onChange={(e) => setHeightft(e.target.value)}
                  required="required"
                  pattern="[0-9'-'\s]*"
                /> */}
                <Form.Select
                  className="me-sm-2"
                  id="inlineFormCustomSelect"
                  value={heightft}
                  onChange={(e) => setHeightft(e.target.value)}
                  required="required"
                >
                  <option value="0">Choose...</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>

                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
                <Form.Label className="text-white">Height(in)<span style={{ color: "black" }}>*</span></Form.Label>
                {/* <Form.Control
                  type="height"
                  placeholder="Eg.160"
                  value={heightinc}
                  onChange={(e) => setHeightinc(e.target.value)}
                  required="required"
                  pattern="[0-9'-'\s]*"
                /> */}
                <Form.Select
                  className="me-sm-2"
                  id="inlineFormCustomSelect"
                  value={heightinc}
                  onChange={(e) => setHeightinc(e.target.value)}
                  required="required"
                >
                  <option value="0">Choose...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>

                </Form.Select>
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formGridPassword" >
                <Form.Label className="text-white">Weight(kg)<span style={{ color: "black" }}>*</span></Form.Label>
                <Form.Control
                  type="weight"
                  placeholder="Eg.50"
                  value={weight}
                  maxLength="3"
                  onChange={(e) => setWeight(e.target.value)}
                  required="required"
                  pattern="[0-9'-'\s]*" />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
                <Form.Label className="text-white">Breast/Bust(in)<span style={{ color: "black" }}>*</span></Form.Label>
                <Form.Control
                  type="height"
                  placeholder="Breast size in inches"
                  required="required"
                  value={bust}
                  pattern="[0-9'-'\s]*"
                  onChange={(e) => setBust(e.target.value)} />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
                <Form.Label className="text-white">Waist(in)<span style={{ color: "black" }}>*</span></Form.Label>
                <Form.Control
                  type="height"
                  placeholder="Waist size in inches"
                  required="required"
                  value={waist}
                  pattern="[0-9'-'\s]*"
                  onChange={(e) => setWaist(e.target.value)} />
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formGridPassword" >
                <Form.Label className="text-white">Hips(in)<span style={{ color: "black" }}>*</span></Form.Label>
                <Form.Control
                  type="weight"
                  placeholder="Hip size in inches"
                  required="required"
                  pattern="[0-9'-'\s]*"
                  value={hips}
                  onChange={(e) => setHips(e.target.value)} />
              </Form.Group>
            </Row>
            <Row className="mb">
              <Col>
                <Form.Group as={Col} className="mb-3" controlId="formFile">
                  <Form.Label className="text-white">
                    Upload Your Close Up Photo<span style={{ color: "black" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setCloseup(e.target.files[0])}
                    required="required" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Col} className="mb-3" controlId="formFile">
                  <Form.Label className="text-white">
                    Upload Mid Shot <span style={{ color: "black" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setMidshot(e.target.files[0])}
                    required="required" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb">
              <Col>
                <Form.Group as={Col} className="mb-3" controlId="formFile">
                  <Form.Label className="text-white">
                    Upload Full Length Photo<span style={{ color: "black" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setFullphoto(e.target.files[0])}
                    required="required" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Col} className="mb-3" controlId="formGridCity">
                  <Form.Label className="text-white">
                    Preferred Audition City<span style={{ color: "black" }}>*</span>
                  </Form.Label>
                  <Form.Select
                    className="me-sm-2"
                    id="inlineFormCustomSelect"
                    value={preferredcity}
                    onChange={(e) => setPreferredcity(e.target.value)}
                    pattern="[a-zA-Z'-'\s]*"                  >
                    <option value="0">Choose...</option>
                    <option value="Bhopal (M.P.)">Bhopal (M.P.)</option>
                    <option value="Indore (M.P.)">Indore (M.P.)</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Amritsar (Punjab)">Amritsar (Punjab)</option>
                    <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                    <option value="Ahamdabad (Gujrat)">
                      Ahamdabad (Gujrat)
                    </option>
                    <option value="Jaisalmer (Rajasthan)">
                      Jaisalmer (Rajasthan)
                    </option>
                    <option value="Culcutta (West Bangal)">
                      Culcutta (West Bangal)
                    </option>
                    <option value="Lukhnow (U.P.)">Lukhnow (U.P.)</option>
                    <option value="Shimla (Himachal Pradesh)">
                      Shimla (Himachal Pradesh)
                    </option>
                    <option value="Mussoorie">Mussoorie</option>
                    <option value="Nagpur (Maharashtra)">
                      Nagpur (Maharashtra)
                    </option>
                    <option value="Chennai (Tamil Nadu)">
                      Chennai (Tamil Nadu)
                    </option>
                    <option value="Ita Nagar (Arunachal Pradesh)">
                      Ita Nagar (Arunachal Pradesh)
                    </option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">
                Rules & Regulation<span style={{ color: "black" }}>*</span>
              </Form.Label>
              <Form.Check
                required
                label="I agree to abide all the rules regulations."
                feedback="You must agree before submitting."
                feedbackType="invalid"
                value={rnr}
                onChange={(e) => setRnr(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">
                Term & Conditions<span style={{ color: "black" }}>*</span>
              </Form.Label>
              <Form.Check
                required
                label="I agree to abide all the rules regulations stated as above and agree to the term of service."
                feedback="You must agree before submitting."
                feedbackType="invalid"
                value={tnc}
                onChange={(e) => setTnc(e.target.value)}
              />
            </Form.Group>
              <Button onSubmit={handleShow} className="reg-btn justify-content-center" type="submit">
                <h3>  Submit Form</h3></Button>
          </Form>
        </div>
        <div className="container warning"><h4>Don't Leave the Page once you click <span style={{ color: "orange" }}>APPLY</span> button. To complete your Registration, wait for Payment Page to pay the Registration Fee.
          You're now being redirected to <span style={{ color: "orange" }}>Payment Gateway Page</span>.</h4></div>
      </div> <img src={unline} className="divider" alt="divider" />
      <div className="audion">
        <Roll bottom>
          <h2 className="heading" > Auditions Zones </h2></Roll>
        <div className="audion-zons">
          <Fade left>
            <div className="north-zone font-size-26">
              <p>North Zone : Kashmir , Jammu & Kashmir</p>
              <p>North East Zone : Lucknow ,Uttar Pradesh </p>
              <p>North West Zone : Jaisalmer , Rajasthan</p>
            </div>
          </Fade>
          <Fade top>
            <div className="south-zone font-size-26">
              <p>  South Zone : Chennai , Tamilnadu </p>
              <p>South East Zone : Bhuvneshwar, Orissa</p>
              <p>South West Zone : Goa, Goa </p></div>
          </Fade>
          <Fade right>
            <div className="other-zone font-size-26"><p>
              East Zone : Arunachal Pradesh</p>
              <p>West Zone : Ahmedabad , Gujrat</p>
              <p>Central Zone :Bhopal & Indore, Madhya Pradesh</p></div>
          </Fade>
        </div></div>
      <div className="bg-black">
        <div className="common-zons">
          <p > &nbsp;</p>
          <p>Common Zones : Mumbai, Maharashtra, Delhi, Punjab, Calcutta, West Bengal, Bangalore</p>
          <p>&nbsp;</p>
        </div>
      </div>
      {payment && <Outlet />}
    </div>
  );
}
export default Registration;
