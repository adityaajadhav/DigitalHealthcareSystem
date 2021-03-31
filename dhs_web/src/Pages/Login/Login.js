import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link, Redirect } from "react-router-dom";
function Login() {

  const [patienttreat, setPatienttreat] = useState(false);
  if (patienttreat) {
    return <Redirect to='/Patientlog' />
  }
  return (
    <div className='login'>
       <h1 className="text-centers">User Login page</h1>
      <img
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        alt="profile-img"
        className="profile-img-card"
      />
      <br />
      <input type="email" placeholder="Enter email Address" />
      <br />
      <br />
      <input type="Password" placeholder="Enter Password"
      />
      <br />
      <Link to='/admin'>Admin</Link> | <Link to='/doctor'>Doctor</Link><br />
      <br />
      <button onClick={() => {
        //  const URL = "http://localhost:8085/";
        //  const response = await axios.post(URL,{
        //      emailId: emailId,
        //      password: password,
        //               });
        //  console.log(emailId,password);
        
        // setPatienttreat(true);


      }}
      >Log-In</button>
    </div>
  )
}
export default Login;