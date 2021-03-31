import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import axios from "axios"
function Doctor() {
    const[emailId,setEmailId]=useState();
    const[password, setPassword]=useState();
    const [patientList, setPatientList] = useState(false);
    if (patientList) {
        return <Redirect to='/PatientL' />
    }
    return (
        <div>
            <h1 className="text-center">Doctor Login page</h1>
            <img
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="profile-img"
            />
            <br />
            <input type="emailId" placeholder="Enter email Address"
           onChange={(e) => {
            setEmailId(e.target.value);}} />
             <br/>
             <input type="password" placeholder="Enter Password"
             onChange={(e) => {
                setPassword(e.target.value);}} />
             <br/>
            <button 
                onClick={async () => {
                const URL = "http://localhost:8085/doctor/login";
                const response = await axios.post(URL, {
                  emailId: emailId,
                  password: password
                });
                console.log(emailId,password);
                setPatientList(true)
            }}
            >Log-In</button>
        </div>
    )
}
export default Doctor;