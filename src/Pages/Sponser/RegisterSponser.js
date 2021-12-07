import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "../Style.css";

export default function RegisterSponser() {

  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  // const onSubmitForm = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const data = new FormData();
  //     data.append("fname", fname);
  //     data.append("lname", lname);
  //     data.append("email", email);
  //     data.append("mobile", mobile);
  //     data.append("subject", subject);
  //     data.append("message", message);

      // axios
      // .post("https://skg-miss-india-backend.herokuapp.com/sponers", data)
      // .then(setShow(true));
    
//   } catch (err) {
//     console.error(err.message);
//   }
// };
  return (
    <div className="form-sponsers">
      <Form >
        <Row className="mb-3">
          <Form.Group as={Col} className="m2" controlId="formGridFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control className="input-bg" type="name" placeholder="Full Name"  
            // value={fname}
                    // onChange={(e) => setFname(e.target.value)}
                    required="required"
                    maxLength="32"
                    pattern="[a-zA-Z'-'\s]*" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control className="input-bg" type="name" placeholder="Last Name"  
            //  value={lname}
            //         onChange={(e) => setLname(e.target.value)}
                    required="required"
                    pattern="[a-zA-Z'-'\s]*" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control className="input-bg" type="email" placeholder="Email"  
            // value={email}
            //       onChange={(e) => setEmail(e.target.value)}
                  required="required"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-'-'\s]*"/>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formGridMobile">
            <Form.Label>Mobile</Form.Label>
            <Form.Control className="input-bg" type="phone" placeholder="Mobile"  
            // value={mobile}
            //       onChange={(e) => setMobile(e.target.value)}
                  required="required"
                  maxLength="12"
                  pattern="[0-9'-'\s]*"/>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control className="input-bg" type="text" placeholder="Subject"  
          // value={subject}
          //         onChange={(e) => setSubject(e.target.value)}
                  required="required"
                  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control className="input-bg" as="textarea" rows={3}  
          //  value={message}
          //         onChange={(e) => setMessage(e.target.value)}
                  required="required"
                 />
        </Form.Group>
        <Button className="reg-btn " type="submit">Submit form</Button>
      </Form>
    </div>
  )
}
