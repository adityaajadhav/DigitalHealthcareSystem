import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Row,
  Col,
  Container,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Data from "../../MockData/HospitalGetAll.json";
import API_KEY from "../../Api/api";
import axios from "axios";
import { FaTrash, FaRegEye } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { useHistory } from "react-router-dom";

export default function DoctorAppointmentsTable({ history }) {
  const [data, setData] = useState([]);
  history = useHistory();


  useEffect(() => {
    let doctor = localStorage.getItem("user_id");

    axios
      .get(`${API_KEY.URL.baseurl}/${API_KEY.path.patientApoointments}/${doctor}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
   // setData(Data);
  }, []);
  const handleCreateNew = () => {
    console.log(history);
    history.push('/book-appointment-patient');
  };
  const  handleDelete=(id)=>{
   
    setData(data => data.filter(hos=>hos?.id !== id))
  }
  const handleView=(id)=>{
    history.push(`/hospital-view/${id}`)

  }
  const handleUpdate=(id)=>{
    history.push(`/hospital-update/${id}`)

  }
  const handleHealth=()=>{
    history.push(`/health`)
  }
  
  const styles = { padding: 5, fontSize: 30, cursor: "pointer" };
  return (
    <Container>
      <Row style={{ padding: 10 }}>
        <Col md={3}>
          <Button onClick={() => handleCreateNew()}>Book Appointment</Button>
        </Col>
        <Col md={6}></Col>
        <Col md={3}>
          <Button onClick={() => handleHealth()}>Check Health Status</Button>
        </Col>
        <Col md={12} >
         You can see list of Appointments here And Book Your Appointment.
        </Col>
      </Row>
      <hr />
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>Patient Name</th>
            <th>Doctor Name</th>
            <th>Hospital Name</th>
            <th>Appointment Date</th>
            <th>Status</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((hos, index) => (
            <tr key={`row${index}`}>
              <td>{hos?.id}</td>
              <td>{hos?.patientDetails.firstName} {hos?.patientDetails.lastName}</td>
              <td>{hos?.doctor.firstName} {hos?.doctor.lastName}</td>
              <td>{hos?.doctor.hospital.hospitalName}</td>
              <td>{hos?.appointmentDate}</td>
              <td>{hos?.appointmentStatus}</td>
              {/* <td> 
                <OverlayTrigger
                  key={`delete${index}`}
                  placement={"top"}
                  overlay={<Tooltip id={`tooltipD-${index}`}>Delete</Tooltip>}
                >
                  <FaTrash style={styles} onClick={()=>handleDelete(hos?.id)} />
                </OverlayTrigger>
                <OverlayTrigger
                  key={`view${index}`}
                  placement={"top"}
                  overlay={<Tooltip id={`tooltipV-${index}`}>View</Tooltip>}
                >
                  <FaRegEye style={styles} onClick={()=>handleView(hos?.id)} />
                </OverlayTrigger>

                <OverlayTrigger
                  key={`edit${index}`}
                  placement={"top"}
                  overlay={<Tooltip id={`tooltipE-${index}`}>Edit</Tooltip>}
                >
                  <IoIosCreate style={styles} onClick={()=>handleUpdate(hos?.id)} />
                </OverlayTrigger>
              </td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
