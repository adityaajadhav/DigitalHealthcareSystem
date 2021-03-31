import React, { useEffect, useState } from "react";
import axios from "axios";
import API_KEY from "../../Api/api";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-overlays/Dropdown';
import Data from "../../MockData/AppointmentStatus.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";
import {
  Card,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function BookAppointment({ history }) {
  history = useHistory();

  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [apppoinmentStatus, setApppoinmentStatus] = useState(null);
  const [apppoinmentStatusAll, setApppoinmentStatusAll] = useState(Data);
  const [patientDetail, setPatientDetail] = useState(null);
  const [patientDetails, setPatientDetails] = useState([]);

  const handleSave = () => {
    let doctor = localStorage.getItem("user_id");
    console.log(doctor);

    const values = {
      appointmentDate: appointmentDate,
      appointmentStatus: apppoinmentStatus,
      patientDetails: { id: parseInt(patientDetail) },
      doctor: { id: parseInt(doctor) }
    };
    console.log(values, "values")
    axios
      .post(`${API_KEY.URL.baseurl}/${API_KEY.path.bookApoointments}`, values)
      .then((res) => {
        console.log(res);
        alert("Appointment Has been booked");
        history.push(`doctor-home`)
      })
      .catch((err) => {
        console.log(err);
        alert("SomeThing Went Wrong");

      });
  };

  useEffect(() => {
    setApppoinmentStatusAll(Data);
    axios.get(`${API_KEY.URL.baseurl}/${API_KEY.path.patientGetAll}`)
      .then(res => setPatientDetails(res.data))
      .catch(err => console.log(err))
    console.log(patientDetails);

  }, [])
  return (
    <div>
      <Card>
        <Card.Header as="h5">Apppoinment Booking Form</Card.Header>
        <Card.Body>
          <Card.Title className="text-center">Booking Information</Card.Title>
          <InputGroup className="mb-3">
            <InputGroup.Prepend style={{ width: "40%" }}>
              <InputGroup.Text id="basic-addon1">
                Enter Apppoinment Date
                </InputGroup.Text>
            </InputGroup.Prepend>


              <DatePicker selected={appointmentDate} onChange={date => setAppointmentDate(date)} />
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
              {patientDetails != null && patientDetails.map(hos => <option key={hos ?.id} value={hos ?.id}>{hos ?.firstName} {hos ?.lastName}</option>
              )}
            </FormControl>
          </InputGroup>

          <Row>
            <Col>
              <Button
                variant="secondary"
                onClick={() => {
                  history.push(`doctor-home`);
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
