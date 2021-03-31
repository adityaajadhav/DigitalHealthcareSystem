import React, { useEffect, useState } from "react";
import axios from "axios";

import API_KEY from "../../Api/api";
import {
  Card,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Data from "../../MockData/AppointmentStatus.json";
import { useHistory } from "react-router-dom";

export default function DoctorAppointmentUpdate({ history, match }) {
  history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [apppoinmentStatus, setApppoinmentStatus] = useState(null);
  const [apppoinmentStatusAll, setApppoinmentStatusAll] = useState(Data);
  const {
    params: { id },
  } = match;
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`${API_KEY.URL.baseurl}/${API_KEY.path.appointmentById}/${id}`)
      .then((res) => {
        setData(res.data)
        setApppoinmentStatus(res.data?.appointmentStatus)
      })
      .catch((err) => console.log(err));

  }, [id]);


  const handleUpdate = () => {
    const values = {

      "conditionDetails": firstName,
      "dateVisited": new Date(),
      "patientDetails":{id:data ?.patientDetails ?.id},
      "treatments":[{treatmentDetails:lastName}],
      "appointmentStatus": apppoinmentStatus,
      "appointmentId": data ?.id

    };
    console.log(values, "values");
    axios
      .post(`${API_KEY.URL.baseurl}/${API_KEY.path.saveHealthCondition}`, values)
      .then((res) => {
        console.log(res);
        history.push(`/doctor-home`);
      })
      .catch((err) => console.log(err));
  };

  const styles = { fontSize: 18, fontWeight: "bolder", color: "#03203C" };
  return (
    <div>
      <Card>
        <Card.Header as="h5">Appointment Details And Update Health Condition , Treatment</Card.Header>
        <Card.Body>
          <Card.Text >
            <p>
              {" "}
              <span>
                Appointment Status: <b style={styles}>{data && data ?.appointmentStatus}</b>
              </span>
            </p>
            <p>
              {" "}
              <span>

                Appointment Date  :
                <b style={styles}>{data && data ?.appointmentDate}</b>
              </span>
            </p>
            <p>
              {" "}
              <span>
                Patient Name:{" "}
                <b style={styles}>{data && data ?.patientDetails ?.firstName} {data && data ?.patientDetails ?.lastName}</b>
              </span>
            </p>
            <h6>Hospital Details</h6>
            <p>
              {" "}
              <span>
                Name:{" "}
                <b style={styles}>{data && data ?.doctor ?.hospital ?.hospitalName}</b>
              </span>
            </p>
            <p>
              {" "}
              <span>
                Email:{" "}
                <b style={styles}>{data && data ?.doctor ?.hospital ?.emailId}</b>
              </span>
            </p>
            <h6>Doctor Details</h6>
            <p>
              {" "}
              <span>
                Name:{" "}
                <b style={styles}>{data && data ?.doctor ?.firstName} {data && data ?.doctor ?.lastName}</b>
              </span>
            </p>
            <p>
              {" "}
              <span>
                Email:{" "}
                <b style={styles}>{data && data ?.doctor ?.emailId}</b>
              </span>
            </p>

          </Card.Text>
          <InputGroup className="mb-3">
            <InputGroup.Prepend style={{ width: "25%" }}>
              <InputGroup.Text id="basic-addon1">Health Condition Details</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Health Condition Details"
              aria-label="firstName"
              aria-describedby="basic-addon1"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend style={{ width: "25%" }}>
              <InputGroup.Text id="basic-addon1">Treatment Details</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Treatment Details"
              aria-label="lastName"
              aria-describedby="basic-addon1"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend style={{ width: "40%" }}>
              <InputGroup.Text id="basic-addon1">
                Select Apppoinment Status
                </InputGroup.Text>
            </InputGroup.Prepend>

            <FormControl
              as="select"
              custom
              placeholder="Select Apppoinment Status"
              aria-label="ApppoinmentStatus"
              aria-describedby="basic-addon1"
              onChange={(e) => setApppoinmentStatus(e.target.value)}
              value={apppoinmentStatus}
            >
              {apppoinmentStatusAll.map(hos => <option key={hos ?.name} value={hos ?.name}>{hos ?.name}</option>
              )}
            </FormControl>
          </InputGroup>


          <Row>
            <Col>
              <Button
                variant="secondary"
                onClick={() => {
                  history.push(`/doctor-home`)
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
