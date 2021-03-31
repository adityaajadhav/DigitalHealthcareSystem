import React from 'react';
import { Link } from "react-router-dom";
let adminId=window.sessionStorage.getItem("adminId")
function Redirectadmin() {
    
    return(
    <div>
        <Link to='/DoctorL'>Doctor details</Link> | <Link to='/hospitalL'>Hospital details</Link><br />
    <h4>adminID={adminId}</h4>
    </div>
    )
}
export default Redirectadmin;