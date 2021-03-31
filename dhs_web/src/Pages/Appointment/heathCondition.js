import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Row,
  Col,
  Container,
  OverlayTrigger,
  Tooltip,
  InputGroup,
  FormControl,
  Card,
} from "react-bootstrap";

import Data from "../../MockData/HospitalGetAll.json";
import API_KEY from "../../Api/api";
import axios from "axios";
import { FaTrash, FaRegEye } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { useHistory } from "react-router-dom";

export default function HeathCondition({ history }) {
  const [data, setData] = useState([]);
  const [patientDetail, setPatientDetail] = useState(null);
  const [patientDetails, setPatientDetails] = useState([]);
  history = useHistory();


  useEffect(() => {
    let doctor = localStorage.getItem("user_id");

    axios
      .get(`${API_KEY.URL.baseurl}/${API_KEY.path.ConditionByPatient}/${patientDetail}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [patientDetail]);

  useEffect(() => {

    axios
      .get(`${API_KEY.URL.baseurl}/${API_KEY.path.patientGetAll}`)
      .then((res) => setPatientDetails(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleCreateNew = () => {
    console.log(history);
    let type = localStorage.getItem("user");
    if(type === 'patient'){
      history.push("/patient-home");
    }else if(type === 'doctor'){
      history.push(`/doctor-home`);
    }

  };

  const styles = { padding: 5, fontSize: 30, cursor: "pointer" };
  return (
    <Container>
      <Row>
      <Col md={12}>
        <Card>
          <Card.Body>
          <Card.Title className="text-center">Select Patient</Card.Title>
            <InputGroup className="mb-3">
              <InputGroup.Prepend style={{ width: "40%" }}>
                <InputGroup.Text id="basic-addon1">
                  Select Patient
                </InputGroup.Text>
              </InputGroup.Prepend>

              <FormControl
                as="select"
                custom
                placeholder="Select Patient"
                aria-label="Patient"
                aria-describedby="Patient"
                onChange={(e) => setPatientDetail(e.target.value)}
                value={patientDetail}
              >
                {patientDetail == null && <option selected="true" value="null">Select Patient</option>}
                {patientDetails != null && patientDetails.map(hos => <option key={hos ?.id} value={hos ?.id}>{hos ?.firstName} {hos ?.lastName}</option>
                )}
              </FormControl>
            </InputGroup>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      <Row style={{ padding: 10 }}>
        <Col md={3}>
          <Button onClick={() => handleCreateNew()}>Back To Home</Button>
        </Col>
        <Col>
          You can see list of Heath Conditions.
        </Col>
      </Row>
      <hr />
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
          <th>Sr.No</th>
            <th>Condition Details</th>
            <th>Treatment Details</th>
            <th>Visited On</th>
          </tr>
        </thead>
        <tbody>
          {data.map((hos, index) => (
            <tr key={`row${index}`}>
               <td>{index + 1}</td>
              <td>{hos ?.healthConditions?.conditionDetails} </td>
              <td>{hos ?.treatmentDetails}</td>
              <td>{hos ?.healthConditions?.dateVisited}</td>

            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
