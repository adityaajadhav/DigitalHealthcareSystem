import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import useGlobal from "./store/store"
import { createBrowserHistory } from "history"
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
// import Home from "./Pages/Home/home";
import NotFound from "./Pages/NotFound/NotFound";
import Admin from "./Pages/Login/Admin";
import Doctor from "./Pages/Login/Doctor";
import DoctorL from "./Lists/DoctorL";
import Patientlog from "./Pages/patientlog/Patientlog";
import PatientL from "./Lists/PatientL";
import Redirectadmin from "./Lists/Redirectadmin";
import HospitaL from "./Lists/HospitalL";
import Addremovehospitals from "./Lists/Adddoctors";
import Addhospitals from "./Lists/Addhospitals";
import Healthhistory from "./Lists/Healthhistory";
import PatientRegistration from "./Pages/Login/registerPatient";

const history = createBrowserHistory();

function App() {
  const [data, action] = useGlobal();
  const [user, setUser] = useState(data.adminData)




  const { adminData } = data;
  console.log(adminData, "adminData")
  return (
    <div>
      <Router history={history}>
        <Switch>

          {user ? (
            <div>
              {/* <Route path="/">
                <Home />
              </Route> */}

              <Route path="/doctor">
                <Doctor />
              </Route>

              <Route path="/Redirectadmin">
                <Redirectadmin />
              </Route>
              <Route path="/HospitalL">
                <HospitaL />
              </Route>
              <Route path="/Addremovehospitals">
                <Addremovehospitals />
              </Route>
              <Route path="/Addhospitals">
                <Addhospitals />
              </Route>
              <Route path="/Healthhistory">
                <Healthhistory />
              </Route>
              <Route path="/patient-register">
                <PatientRegistration />
              </Route>
              {/* <Route exact path="/">
                {" "}
                <Redirect to="/home" />
              </Route> */}
              {/* <Route path="*">
                <NotFound />
              </Route> */}
            </div>
          ) : (
              <div>
                <Route path="/">


                </Route>
                <Route path="/admin">
                  <Admin />
                </Route>


              </div>
            )}
        </Switch>
      </Router>
    </div>
  );
}
export default App;
