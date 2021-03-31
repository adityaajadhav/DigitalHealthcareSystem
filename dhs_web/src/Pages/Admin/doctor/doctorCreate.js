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
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [speciality, setSpeciality] = useState(null);
  const [qualification, setQualification] = useState(null);
  const [password, setPassword] = useState(null);
  const [hospital, setHospital] = useState(null);
const [hospitalsData, sethospitalsData] = useState([]) 


  useEffect(() => {
     axios.get(`${API_KEY.URL.baseurl}/${API_KEY.path.hospitalGetAll}`)
     //setHospital data next line
     .then(res=>sethospitalsData(res.data))
     .catch(err=>console.log(err))

//     sethospitalsData(Data);
  }, [])

  const handleSave = () => {
    const values = {
       
        "firstName": firstName,
        "lastName": lastName,
        "emailId": email,
        "speciality": speciality,
        "qualification": qualification,
        "password": password,
        "hospital": {id:parseInt(hospital)}
    };
    console.log(values, "values");
    axios
      .post(`${API_KEY.URL.baseurl}/${API_KEY.path.doctorSave}`, values)
      .then((res) => {
        console.log(res);
        history.push(`doctor-view/${res?.data?.id}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Card>
        <Card.Header as="h5">Doctor Create</Card.Header>
        <Card.Body>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="First Name"
              aria-label="firstName"
              aria-describedby="basic-addon1"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Last Name"
              aria-label="lastName"
              aria-describedby="basic-addon1"
              onChange={(e) => setLastName(e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Email"
              aria-label="emailId"
              aria-describedby="basic-addon1"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Speciality</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Speciality"
              aria-label="speciality"
              aria-describedby="basic-addon1"
              onChange={(e) => setSpeciality(e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Qualification</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Qualification"
              aria-label="qualification"
              aria-describedby="basic-addon1"
              onChange={(e) => setQualification(e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="password"
              placeholder="Password"
              aria-label="password"
              aria-describedby="basic-addon1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Hospital</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              as="select"
              custom
              placeholder="Hospital"
              aria-label="hospital"
              aria-describedby="basic-addon1"
              onChange={(e) => setHospital(e.target.value)}
            >
                {hospitalsData.map(hos=> <option value={hos?.id}>{hos?.hospitalName}</option>
                )}
             
             
            </FormControl>
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
