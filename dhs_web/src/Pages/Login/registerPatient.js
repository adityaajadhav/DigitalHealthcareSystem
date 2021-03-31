import React, { useEffect, useState } from "react";
import axios from "axios";
import API_KEY from "../../Api/api";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-overlays/Dropdown';
import Data from "../../MockData/BloodGroups.json";
import { useHistory } from "react-router-dom";

import {
  Card,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
export default function PatientRegistration({ history }) {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmailId] = useState(null);
    const [contactNo, setContactNo] = useState(null);
    const [address, setAddress] = useState(null);
    const [bloodgroup, setBloodGroup] = useState(null);
    const [bloodgroups, setBloodGroups] = useState(Data);
    const [aadharNo, setAadharNo] = useState(null);    
    const [password, setPassword] = useState(null);    
    history = useHistory();

    const handleSave = () => {
      const values = {
        firstName: firstName,
        lastName: lastName,
        emailId: email,
        contactNo: contactNo,
        address: address,
        bloodGroup: bloodgroup,
        addharNo: aadharNo,
        password: password
      };
      console.log(values,"values")
      axios
        .post(`${API_KEY.URL.baseurl}/${API_KEY.path.patientSave}`, values)
        .then((res) => {
          console.log(res);
          alert("Registration Has been done, Please Login");
          localStorage.clear();
          history.push(`admin`)
          window.location.reload();
        })
        .catch((err) =>{
            console.log(err);
            alert("SomeThing Went Wrong");

        } );
    };

     useEffect(() => {
     setBloodGroups(Data);
     console.log(bloodgroups);
  }, [])
    return (
      <div>
        <Card>
          <Card.Header as="h5">Patient Registration Form</Card.Header>
          <Card.Body>
            <Card.Title className="text-center">Patient Information</Card.Title>
            <InputGroup className="mb-3">
              <InputGroup.Prepend style={{ width: "40%" }}>
                <InputGroup.Text id="basic-addon1">
                  Enter First Name
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="First Name"
                aria-label="firstName"
                aria-describedby="basic-addon1"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend style={{ width: "40%" }}>
                <InputGroup.Text id="basic-addon1">
                  Enter Last Name
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Last Name"
                aria-label="lastName"
                aria-describedby="basic-addon1"
                onChange={(e) => setLastName(e.target.value)}
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
                aria-label="contactNo"
                aria-describedby="basic-addon1"
                onChange={(e) => setContactNo(e.target.value)}
              />
            </InputGroup>
  
            <InputGroup className="mb-3">
              <InputGroup.Prepend style={{ width: "40%" }}>
                <InputGroup.Text id="basic-addon1">Enter Email</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Email"
                aria-label="email"
                aria-describedby="basic-addon1"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend style={{ width: "40%" }}>
                <InputGroup.Text id="basic-addon1">
                  Enter Address
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Address"
                aria-label="address"
                aria-describedby="basic-addon1"
                onChange={(e) => setAddress(e.target.value)}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend style={{ width: "40%" }}>
                <InputGroup.Text id="basic-addon1">
                  Select Blood Group
                </InputGroup.Text>
              </InputGroup.Prepend>

              <FormControl
              as="select"
              custom
              placeholder="Select Blood Group"
              aria-label="bloodgroup"
              aria-describedby="bloodgroup"
              onChange={(e) => setBloodGroup(e.target.value)}
              value={bloodgroup}
            >
                {bloodgroups.map(hos=> <option key={hos?.name}  value={hos?.name}>{hos?.name}</option>
                )}
             
             
            </FormControl>
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend style={{ width: "40%" }}>
                <InputGroup.Text id="basic-addon1">
                  Enter Aadhar No
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Aadhar No"
                aria-label="aadharNo"
                aria-describedby="basic-addon1"
                onChange={(e) => setAadharNo(e.target.value)}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend style={{ width: "40%" }}>
                <InputGroup.Text id="basic-addon1">
                  Enter Password
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Password"
                aria-label="password"
                type="password"
                aria-describedby="basic-addon1"
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
  
            <Row>
              <Col>
                <Button
                  variant="secondary"
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
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
  