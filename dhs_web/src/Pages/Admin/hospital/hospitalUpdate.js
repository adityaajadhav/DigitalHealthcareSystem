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

export default function HospitalUpdate({ history, match }) {
  const {
    params: { id },
  } = match;
  const [data, setData] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [contact, setContact] = useState(null);
  const [address, setAddress] = useState(null);
  useEffect(() => {
    axios
      .get(`${API_KEY.URL.baseurl}/${API_KEY.path.hospitalById}/${id}`)
      .then((res) => {
     setData(res.data)  
     mapData(res.data);
    })
     .catch((err) => console.log(err));
    // setData(Data.filter((hos) => hos.id === parseInt(id)));

     
  }, [id]);

  const mapData = (data) => {
    setName(data && data?.hospitalName);
    setContact(data && data?.hospitalContactNo);
    setAddress(data && data?.hospitaladdress);
    setEmail(data && data?.emailId);
  };

  const handleUpdate = () => {
    const values = {
      id: id,
      hospitalName: name,
      emailId: email,
      hospitalContactNo: contact,
      hospitaladdress: address,

    };
    console.log(values, "values");
    axios
      .put(`${API_KEY.URL.baseurl}/${API_KEY.path.hospitalUpdate}`, values)
      .then((res) => {
        console.log(res);
        history.push(`/hospital-view/${res?.data?.id}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Card>
        <Card.Header as="h5">Hospital Update</Card.Header>
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
              value={name}
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
              value={email}
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
              value={contact}
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
              value={address}
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
              <Button variant="primary" onClick={() => handleUpdate()}>
                Update
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
