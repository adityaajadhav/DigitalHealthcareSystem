import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Topbar from "./Components/topbar"
import PatientHome from "./Pages/Home/patientHome";
import DoctorHome from "./Pages/Home/doctorHome";
import AdminHome from "./Pages/Home/adminHome";
import DoctorCreate from "./Pages/Admin/doctor/doctorCreate";
import DoctorUpdate from "./Pages/Admin/doctor/doctorUpdate";
import DoctorView from "./Pages/Admin/doctor/doctorView";
import DoctorTable from "./Pages/Admin/doctor/doctorTable";
import HospitalCreate from "./Pages/Admin/hospital/hospitalCreate";
import HospitalUpdate from "./Pages/Admin/hospital/hospitalUpdate";
import HospitalView from "./Pages/Admin/hospital/hospitalView";
import HospitalTable from "./Pages/Admin/hospital/hospitalTable";
import PatientRegistration from "./Pages/Login/registerPatient";
import BookAppointment from "./Pages/Appointment/bookAppointment";
import BookAppointmentPatient from "./Pages/Appointment/bookAppointmentPatient";
import DoctorAppointmentUpdate from "./Pages/Appointment/doctorAppointmentUpdate";
import HeathCondition from "./Pages/Appointment/heathCondition";

export default function Layout(props) {
  const [user, setUser] = useState(null);
  const [register, setRegister] = useState(null);

  useEffect(() => {
    setUser(localStorage.getItem("user"));
    setRegister(localStorage.getItem("register"));
  }, []);
  return (
    <>
      <Topbar />
      <Switch>
        {/* this routes are only for open pages */}

        {<Route path="/patient-register">
          <PatientRegistration />
        </Route>}


        {/* this routes are only for admin pages */}
        {user === "admin" && (
          <>
            <Route exact path="/admin-home" component={AdminHome} />

            <Route exact path="/doctor-table" component={DoctorTable} />

            <Route exact path="/doctor-create" component={DoctorCreate} />

            <Route exact path="/doctor-view/:id" component={DoctorView} />

            <Route exact path="/doctor-update/:id" component={DoctorUpdate} />


            <Route exact path="/hospital-table" component={HospitalTable} />

            <Route exact path="/hospital-create" component={HospitalCreate} />

            <Route exact path="/hospital-view/:id" component={HospitalView} />

            <Route exact path="/hospital-update/:id" component={HospitalUpdate} />

          </>
        )}

        {/* this routes are only for doctor pages */}

        {user === "doctor" && (
          <>
          <Route path="/doctor-home">
            <DoctorHome />
          </Route>
          <Route exact path="/book-appointment" component={BookAppointment} />
          <Route exact path="/appointment-update/:id" component={DoctorAppointmentUpdate} />
          <Route exact path="/health" component={HeathCondition} />
         </>
        )}

        {/* this routes are only for patient pages */}

        {user === "patient" && (
          <>
          <Route path="/patient-home">
            <PatientHome />
          </Route>
          
          <Route exact path="/book-appointment-patient" component={BookAppointmentPatient} />
          <Route exact path="/health" component={HeathCondition} />

         </>
        )}

      </Switch>
    </>
  );
}
