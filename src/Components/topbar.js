import React, { useState, useEffect } from "react";
import { Navbar, Button } from "react-bootstrap";

export default function Topbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(localStorage.getItem("user"));


  }, []);
  return (
    <Navbar bg="light" variant="light" style={{marginBottom:15}}>
      <Navbar.Brand href="#">Digital Health Care</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button variant="danger" onClick={()=>{
            localStorage.clear();
            window.location.reload();
        }}>{user !== 'register' ? 'Logout' : 'Back To Home'}  </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
