import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import divider from "../Images/divider.png";

export default function DesignerForm() {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [fb, setFb] = useState("");
    const [ig, setIg] = useState("");
    const [lnkdn, setLnkdn] = useState("");
    const [bname, setBname] = useState("");
    const [badd, setBadd] = useState("");
    const [bfb, setBfb] = useState("");
    const [big, setBig] = useState("");
    const [bmobile, setBmobile] = useState("");
    const [bemail, setBemail] = useState("");
    const [bweb, setBweb] = useState("");
    const [bspe, setBspe] = useState("");
    // const [YN, setYN] = useState("");
    const [where, setWhere] = useState("");
    const [when, setWhen] = useState("");
    const [d1, setD1] = useState("");
    const [d2, setD2] = useState("");

    const [showinfo, setShowInfo] = useState(false)
    const divShow = (e) => {console.log(e.target.value) 
        if(e.target.value === "Yes") setShowInfo(true);
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const data = new FormData();
            data.append("fname", fname);
            data.append("lname", lname);
            data.append("age", age);
            data.append("email", email);
            data.append("mobile", mobile);
            data.append("whatsapp", whatsapp);
            data.append("fb", fb);
            data.append("ig", ig);
            data.append("lnkdn", lnkdn);
            data.append("bname", bname);
            data.append("badd", badd);
            data.append("bfb", bfb);
            data.append("big", big);
            data.append("bmobile", bmobile);
            data.append("bemail", bemail);
            data.append("bweb", bweb);
            data.append("bspe", bspe);
            // data.append("YN", YN);
            data.append("when", when);
            data.append("where",where );
            data.append("d1", d1);
            data.append("d2", d2);
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div className="bg-black ">
            <div className="container">
                <img className="divider-2 rotate-180" src={divider} alt="" />
                <Fade top><h1 className="text-center text-golden">Benefits For the Contestants of SKG Miss India International.</h1></Fade>
                <img className="divider-2" src={divider} alt="divider" />
                <Form onSubmit={onSubmitForm} encType="multipart/form-data" className="pd">
                    <Row className="mb">
                        <h3 className="text-golden section text-center">Personal Details</h3>
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
                            <Form.Label className="text-white">Age<span style={{ color: "black" }}>*</span></Form.Label>
                            <Form.Control
                                type="age"
                                placeholder="Eg.18"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required="required" />
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
                                onChange={(e) => setWhatsapp(e.target.value)}
                            />
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
                            controlId="exampleForm.ControlInput3" >
                            <Form.Label className="text-white">
                                Instagram Username
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="instagram Username."
                                value={ig}
                                onChange={(e) => setIg(e.target.value)}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-'-'\s]*" />
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            className="mb-3"
                            controlId="exampleForm.ControlInput3" >
                            <Form.Label className="text-white">
                                LinkedIn Profile </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="LinkdIn Username."
                                value={lnkdn}
                                onChange={(e) => setLnkdn(e.target.value)}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-'-'\s]*" />
                        </Form.Group>
                    </Row>
                    <h3 className="text-golden text-center section">Bussiness Details</h3>
                    <Row className="mb-3">
                        <Col>
                            <Form.Group as={Col} className="mb-3" controlId="formGridName">
                                <Form.Label className="text-white">First Name<span style={{ color: "black" }}>*</span></Form.Label>
                                <Form.Control
                                    placeholder="First name"
                                    type="name"
                                    value={bname}
                                    onChange={(e) => setBname(e.target.value)}
                                    required="required"
                                    maxLength="32"
                                    pattern="[a-zA-Z'-'\s]*" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridCity">
                            <Form.Label className="text-white">Address<span style={{ color: "black" }}>*</span></Form.Label>
                            <Form.Control
                                type="age"
                                placeholder="Type here yor address"
                                value={badd}
                                onChange={(e) => setBadd(e.target.value)}
                                required="required" />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            as={Col}
                            controlId="exampleForm.ControlInput3">
                            <Form.Label className="text-white">Email address<span style={{ color: "black" }}>*</span></Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                value={bemail}
                                onChange={(e) => setBemail(e.target.value)}
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
                                value={bmobile}
                                onChange={(e) => setBmobile(e.target.value)}
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
                                onChange={(e) => setWhatsapp(e.target.value)}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb">
                        <Form.Group
                            as={Col}
                            className="mb-3"
                            controlId="exampleForm.ControlInput3" >
                            <Form.Label className="text-white">
                                Facebook Page Link
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Facebook Username."
                                value={bfb}
                                onChange={(e) => setBfb(e.target.value)}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-'-'\s]*" />
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            className="mb-3"
                            controlId="exampleForm.ControlInput3" >
                            <Form.Label className="text-white">
                                Instagram Page Link
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="instagram Username."
                                value={big}
                                onChange={(e) => setBig(e.target.value)}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-'-'\s]*" />
                        </Form.Group>
                    </Row>
                    <Row className="mb">
                        <Form.Group
                            as={Col}
                            className="mb-3"
                            controlId="exampleForm.ControlInput3" >
                            <Form.Label className="text-white">
                                Website
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="website url"
                                value={bweb}
                                onChange={(e) => setBweb(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            className="mb-3"
                            controlId="exampleForm.ControlInput3" >
                            <Form.Label className="text-white">
                                Specialised into :
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Specialised into :  "
                                value={bspe}
                                onChange={(e) => setBspe(e.target.value)}
                            />
                        </Form.Group>
                    </Row>
                    <h3 className="text-golden section">Have you Participated in any Fashion Show : Yes/No </h3>



                    <Row> <Col sm={3} className="my-1">
                        <Form.Select
                            className="me-sm-2"  onChange={divShow}  
                        >
                            <option value="0">Choose...</option>
                            <option value="Yes" onClick={(e) => divShow(e)} >Yes</option>
                            <option value="No">No</option>
                        </Form.Select>
                    </Col>
                    </Row>
                    {showinfo && <div>
                        <p className="text-golden ">When   : <input type="text" className="input"  onChange={(e) => setWhen(e.target.value)}
                            value={when} /></p>
                        <p className="text-golden">Where  : <input type="text" className="input" onChange={(e) => setWhere(e.target.value)}
                            value={where}/></p>
                    </div>}

                    <Row className="mb">
                        <h3 className="text-golden text-center section">Upload Your Designs</h3>

                        <Col>
                            <Form.Group as={Col} className="mb-3" controlId="formFile">
                                <Form.Label className="text-white">
                                    Design One<span style={{ color: "black" }}>*</span>
                                </Form.Label>
                                <Form.Control
                                    type="file"
                                    onChange={(e) => setD1(e.target.files[0])}
                                    value={d1}
                                    required="required" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Col} className="mb-3" controlId="formFile">
                                <Form.Label className="text-white">
                                    Design Two <span style={{ color: "black" }}>*</span>
                                </Form.Label>
                                <Form.Control
                                    type="file"
                                    value={d2}
                                    onChange={(e) => setD2(e.target.files[0])}
                                    required="required" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button className="reg-btn justify-content-center" type="submit">
                        <h3>  Submit Form</h3></Button>
                </Form>
            </div>
        </div>

    )
}
