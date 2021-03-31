import { React, useState, useEffect } from "react";
import AdminData from "../../MockData/AdminLogin.json";
// import { Redirect } from "react-router-dom";
import axios from "axios";
import API_KEY from "../../Api/api";
import "./admin.css";
import { Link } from 'react-router-dom';

import {
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
  Button,
  Jumbotron,
} from "react-bootstrap";
import { registerPlugin } from "axe-core";
function Admin({ history }) {
  const [emailId, setEmailId] = useState(null);
  const [password, setPassword] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPatient, setisPatient] = useState(true);
  const [isDoctor, setIsDoctor] = useState(false);
  //   const [adiminredirect, setAdminredirect] = useState(false);
  const [data, setData] = useState(null);

  const handleLogIn = async (data) => {
    console.log(history, "history");
    if(emailId && password){

    let values = {
      emailId: emailId,
      password: password,
      admin:isAdmin,
      doctor:isDoctor,
      patient:isPatient
    }
    console.log(values);

    await axios
      .post(`${API_KEY.URL.baseurl}/${API_KEY.path.adminLogin}`, values)
      .then((res) => {

        let admin = res.data;
        console.log(admin.id);
        setData(admin);

        localStorage.setItem("user_id",admin.id);
        localStorage.setItem("admin", admin);

        alert("Login successful")
        if (isAdmin) {
          localStorage.setItem("user", "admin");
          history.push("/admin-home");
        } else if (isDoctor) {
          localStorage.setItem("user", "doctor");
          history.push("/doctor-home");
        } else {
          localStorage.setItem("user", "patient");
          history.push("/patient-home");
        }
        window.location.reload();

      })
      .catch((err) => {console.log(err);
        alert("Login failed ,Please Enter valid details");
      });
    }else{
      alert("enter correct email and password");
    }
  };

  const registerPatient = async () => {
    console.log(history, "history");
    localStorage.setItem(
      "admin",
      JSON.stringify({
      })
    );
    localStorage.setItem("user", "register");
    localStorage.setItem("register",true);
    history.push("/patient-register");
    window.location.reload();
  }
  return (
    <div style={{ marginTop: "10%" }}>
      <Container fluid  >
        <Jumbotron >
          <h3>
            Digital Health Care
            {isAdmin && <h4>Admin</h4>}
            {isDoctor && <h4>Doctor</h4>}
            {isPatient && <h4>Patient</h4>}
          </h3>
          <Row>
            <Col>
              <img
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="profile-img"
              />
            </Col>

            <Col>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  onChange={(e) => {
                    setEmailId(e.target.value);
                  }}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                />
              </InputGroup>

              <Button
                style={{ width: "100%" }}
                variant="primary"
                onClick={() => handleLogIn()}
              >
                SIGN IN
              </Button>
              <hr />
              <Row>
                <Col>
                  <span
                    onClick={() => {
                      setIsDoctor(false);
                      setIsAdmin(true);
                      setisPatient(false);
                    }}
                    style={{
                      color: isAdmin ? "red" : "black",
                      cursor: "pointer",
                    }}
                  >
                    Admin
                  </span>
                </Col>
                <Col>
                  <span
                    onClick={() => {
                      setIsDoctor(true);
                      setIsAdmin(false);
                      setisPatient(false);
                    }}
                    style={{
                      color: isDoctor ? "red" : "black",
                      cursor: "pointer",
                    }}
                  >
                    Doctor
                  </span>
                </Col>
                <Col>
                  <span
                    onClick={() => {
                      setIsDoctor(false);
                      setIsAdmin(false);
                      setisPatient(true);
                    }}
                    style={{
                      color: isPatient ? "red" : "black",
                      cursor: "pointer",
                    }}
                  >
                    Patient
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button onClick={() => registerPatient()} className="btn-light btn btn-sm btn-link mt-3"> Register Patient</Button>
                </Col>
              </Row>

            </Col>
            <Col> </Col>
          </Row>
        </Jumbotron>
      </Container>

      <div className="container"></div>
    </div>
  );
}
export default Admin;
