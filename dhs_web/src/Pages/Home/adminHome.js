import React from "react";
import {Tabs,Tab,Jumbotron} from "react-bootstrap";
import DoctorTable from "../Admin/doctor/doctorTable";
import HospitalTable from "../Admin/hospital/hospitalTable"
export default function AdminHome(props) {
  return (
    <div>
        
      
      
    <Jumbotron>
    <h1>AdminHome</h1>
    <Tabs defaultActiveKey="hospital" id="uncontrolled-tab-example">
  <Tab eventKey="hospital" title="Hospitals">
    <HospitalTable {...props}/>
  </Tab>
  <Tab eventKey="doctor" title="Doctors">
    <DoctorTable {...props} />
  </Tab>
  
</Tabs>
    </Jumbotron>
     


    </div>
  );
}
