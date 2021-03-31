import React, { useEffect, useState } from "react";
import axios from "axios";
import Data from "../../../MockData/HospitalGetAll.json";
import API_KEY from "../../../Api/api";
import {
  Card,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";

export default function HospitalCreate({ history }) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [contact, setContact] = useState(null);
  const [address, setAddress] = useState(null);

  const handleSave = () => {
    const values = {
      hospitalName: name,
      emailId: email,
      hospitalContactNo: contact,
      hospitaladdress: address,
    };
    console.log(values,"values")
    axios
      .post(`${API_KEY.URL.baseurl}/${API_KEY.path.hospitalSave}`, values)
      .then((res) => {
        console.log(res);
        history.push(`hospital-view/${res?.data?.id}`)
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Card>
        <Card.Header as="h5">Hospital Create</Card.Header>
        <Card.Body>
          <InputGroup className="mb-3">
            <InputGroup.Prepend style={{ width: "40%" }}>
              <InputGroup.Text id="basic-addon1">
                Enter Hopital Name
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Name"
              aria-label="Name"
              aria-describedby="basic-addon1"
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend style={{ width: "40%" }}>
              <InputGroup.Text id="basic-addon1">Enter Email</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend style={{ width: "40%" }}>
              <InputGroup.Text id="basic-addon1">
                Enter Contact No
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Contact No"
              aria-label="Contact No"
              aria-describedby="basic-addon1"
              onChange={(e) => setContact(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend style={{ width: "40%" }}>
              <InputGroup.Text id="basic-addon1">
                Enter Hopital Address
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Address"
              aria-label="Address"
              aria-describedby="basic-addon1"
              onChange={(e) => setAddress(e.target.value)}
            />
          </InputGroup>

          <Row>
            <Col>
              <Button
                variant="secondary"
                onClick={() => {
                  history.push(`/admin-home`);
                }}
              >
                Close
              </Button>{" "}
            </Col>
            <Col>
              <Button variant="primary" onClick={() => handleSave()}>
                Save
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
