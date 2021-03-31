import React, { useEffect, useState } from "react";
import axios from "axios";
import Data from "../../../MockData/DoctorGetAll.json";
import API_KEY from "../../../Api/api";
import { Card, Button, Row, Col } from "react-bootstrap";
export default function DoctorView({ history, match }) {
  const {
    params: { id },
  } = match;
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`${API_KEY.URL.baseurl}/${"doctor"}/${id}`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err));
    //setData(Data.filter((hos) => hos.id === parseInt(id)));
   // console.log(Data.filter((hos) => hos.id === parseInt(id)));
  }, [id]);
  const styles = { fontSize: 18, fontWeight: "bolder",color:"#03203C" };
  return (
    <div>
      <Card>
        <Card.Header as="h5">Doctor Details</Card.Header>
        <Card.Body>
          <Card.Title>
            {data && data?.firstName} {data && data?.lastName}
          </Card.Title>
          <Card.Text >
            <p>
              {" "}
              <span>
                Email: <b style={styles}>{data && data?.emailId}</b>
              </span>
            </p>
            <p>
              {" "}
              <span>
                Speciality:
                <b style={styles}>{data && data?.speciality}</b>
              </span>
            </p>
            <p>
              {" "}
              <span>
                Qualification:{" "}
                <b style={styles}>{data && data?.qualification}</b>
              </span>
            </p>
            <h6>Hospital Details</h6>
            <p>
              {" "}
              <span>
                Email:{" "}
                <b style={styles}>{data && data?.hospital?.hospitalName}</b>
              </span>
            </p>
            <p>
              {" "}
              <span>
                Email:{" "}
                <b style={styles}>{data && data?.hospital?.emailId}</b>
              </span>
            </p>
            <p>
              {" "}
              <span>
                Contact No:{" "}
                <b style={styles}>
                  {data && data?.hospital?.hospitalContactNo}
                </b>
              </span>
            </p>
            <p>
              {" "}
              <span>
                Address:{" "}
                <b style={styles}>
                  {data && data?.hospital?.hospitaladdress}
                </b>
              </span>
            </p>
          </Card.Text>
          <Row>
            <Col>
              <Button
                variant="info"
                onClick={() => {
                  history.push(`/doctor-update/${id}`);
                }}
              >
                Update
              </Button>
            </Col>
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
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
