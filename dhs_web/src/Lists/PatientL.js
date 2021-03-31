import React from 'react';
import { Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom";
function Patientlog() {
    return (
        <div>
          <Navbar bg="light" expand="lg">  
            Health condition page
             <Link to='/Healthhistory'>Health History</Link>|
             <Link to='/Addhealthcondition'>Edit health information </Link>
         </Navbar>
      </div>
    );
}
export default Patientlog;
// import { useState, useEffect } from "react";
// import axios from "axios";
// function PatientL() {
//     const [patientlist, setPatientList] = useState([]);
//     useEffect(() => {
//         async function getData() {
//             // //https://jsonplaceholder.typicode.com/users 
//             const URL = "http://localhost:8085/patient/get-all";
//             const response = await axios.get(URL).catch(console.error);
//             setPatientList(response.data);
//             console.log(response.data);
//         }
//         getData();
//     },[]);
//     return (
//         <div>
//             {
//                 patientlist.map( hospital => {
//                     return (
//                         <table>
//                             {hospital.emailId}
//                         </table>
//                     )
//                 })
//             }
//         </div>
//     );
// }
// export default PatientL;