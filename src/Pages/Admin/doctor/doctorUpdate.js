import React, { useEffect, useState } from "react";
import axios from "axios";
import Data from "../../../MockData/HospitalGetAll.json";
import DoctorData from "../../../MockData/DoctorGetAll.json"
import API_KEY from "../../../Api/api";
import {
  Card,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";

export default function HospitalUpdate({ history,match }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [qualification, setQualification] = useState("");
  const [password, setPassword] = useState("");
  const [hospital, setHospital] = useState("");
const [hospitalsData, sethospitalsData] = useState([]) 
const {
    params: { id },
  } = match;
const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`${API_KEY.URL.baseurl}/${API_KEY.path.doctorById}/${id}`)
      .then((res) => {
        //console.log(res);
        setData(res.data)
        mapData(res.data);
      })
      .catch((err) => console.log(err));
    //setData(DoctorData.filter((doc) => doc.id === parseInt(id)));
   // console.log(DoctorData.filter((doc) => doc.id === parseInt(id)));
   
  }, [id]);

  const mapData = (data) => {
    setFirstName(data && data?.firstName);
    setLastName(data && data?.lastName);
    setEmail(data && data?.emailId);
    setSpeciality(data && data?.speciality);
    setQualification(data && data?.qualification);
    setPassword(data && data?.password?data?.password:"") ;
    setHospital(data && data?.hospital?.id);


  };


  useEffect(() => {
     axios.get(`${API_KEY.URL.baseurl}/${API_KEY.path.hospitalGetAll}`)
     //setHospital data next line
     .then(res=>{sethospitalsData(res.data);})
     .catch(err=>console.log(err))

     
  }, [])

  const handleUpdate = () => {
    const values = {
       "id":parseInt(id),
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
      .post(`${API_KEY.URL.baseurl}/${API_KEY.path.doctorUpdate}`, values)
      .then((res) => {
        console.log(res);
        history.push(`doctor-view/${res?.data?.id}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Card>
        <Card.Header as="h5">Doctor Update</Card.Header>
        <Card.Body>
          <InputGroup className="mb-3">
            <InputGroup.Prepend style={{width:"25%"}}>
              <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="First Name"
              aria-label="firstName"
              aria-describedby="basic-addon1"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend style={{width:"25%"}}>
              <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Last Name"
              aria-label="lastName"
              aria-describedby="basic-addon1"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend style={{width:"25%"}}>
              <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Email"
              aria-label="emailId"
              aria-describedby="basic-addon1"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend style={{width:"25%"}}>
              <InputGroup.Text id="basic-addon1">Speciality</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Speciality"
              aria-label="speciality"
              aria-describedby="basic-addon1"
              onChange={(e) => setSpeciality(e.target.value)}
              value={speciality}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend style={{width:"25%"}}>
              <InputGroup.Text id="basic-addon1">Qualification</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Qualification"
              aria-label="qualification"
              aria-describedby="basic-addon1"
              onChange={(e) => setQualification(e.target.value)}
              value={qualification}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend style={{width:"25%"}}>
              <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="password"
              placeholder="Password"
              aria-label="password"
              aria-describedby="basic-addon1"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend style={{width:"25%"}}>
              <InputGroup.Text id="basic-addon1">Hospital</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              as="select"
              custom
              placeholder="Hospital"
              aria-label="hospital"
              aria-describedby="basic-addon1"
              onChange={(e) => setHospital(e.target.value)}
              value={hospital}
            >
                {hospitalsData.map(hos=> <option key={hos?.id}  value={hos?.id}>{hos?.hospitalName}</option>
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
