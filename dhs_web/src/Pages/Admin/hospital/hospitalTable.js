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
import Data from "../../../MockData/HospitalGetAll.json";
import API_KEY from "../../../Api/api";
import axios from "axios";
import { FaTrash, FaRegEye } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
export default function HospitalTable({ history }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_KEY.URL.baseurl}/${API_KEY.path.hospitalGetAll}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
   // setData(Data);
  }, []);
  const handleCreateNew = () => {
    console.log(history);
    history.push("hospital-create");
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
  const styles = { padding: 5, fontSize: 30, cursor: "pointer" };
  return (
    <Container>
      <Row style={{ padding: 10 }}>
        <Col md={1}>
          <Button onClick={() => handleCreateNew()}>Create New</Button>
        </Col>
        <Col>
          You can see list of hospitals here, you can add, delete, view, update 
          data.
        </Col>
      </Row>
      <hr />
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th> Name</th>
            <th>Email</th>
            <th>Contact No</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((hos, index) => (
            <tr key={`row${index}`}>
              <td>{index + 1}</td>
              <td>{hos?.hospitalName}</td>
              <td>{hos?.emailId}</td>
              <td>{hos?.hospitalContactNo}</td>
              <td>{hos?.hospitaladdress}</td>
              <td>
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
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
