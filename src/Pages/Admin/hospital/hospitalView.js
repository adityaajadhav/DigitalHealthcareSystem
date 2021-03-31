import React, { useEffect, useState } from "react";
import axios from "axios";
import Data from "../../../MockData/HospitalGetAll.json";
import API_KEY from "../../../Api/api";
import { Card, Button, Row, Col } from "react-bootstrap";
export default function HospitalView({ history, match }) {
  const {
    params: { id },
  } = match;
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`${API_KEY.URL.baseurl}/${API_KEY.path.hospitalById}/${id}`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err));
    // setData(Data.filter((hos) => hos.id === parseInt(id)));
    // console.log(Data.filter((hos) => hos.id === parseInt(id)));
  }, [id]);
  const styles = { fontSize: 18, fontWeight: "bolder" };
  return (
    <div>
      <Card>
        <Card.Header as="h5">Hospital Details</Card.Header>
        <Card.Body>
          <Card.Title>{data && data?.hospitalName}</Card.Title>
          <Card.Text>
            <p>
              {" "}
              <span>
                Email: <b style={styles}>{data && data?.emailId}</b>
              </span>
            </p>
            <p>
              {" "}
              <span>
                Contact No:{" "}
                <b style={styles}>{data && data?.hospitalContactNo}</b>
              </span>
            </p>
            <p>
              {" "}
              <span>
                Address:{" "}
                <b style={styles}>{data && data?.hospitaladdress}</b>
              </span>
            </p>
          </Card.Text>
          <Row>
            <Col>
              <Button
                variant="info"
                onClick={() => {
                  history.push(`/hospital-update/${id}`);
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
