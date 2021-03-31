import React from 'react';
import { Link } from 'react-router-dom';
const Done=()=>{
    
    <div className="dropdown">
  <button className="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown"  >Account
  <span className="caret"></span></button>
  <ul className="dropdown-menu">
<li><Link className="nav-link" to="/myaccount">My Account</Link></li>
    <li><Link  className="nav-link" to="/mybookings">My Bookings</Link></li>
    <li><Link  className="nav-link" to="/logout">Logout</Link></li>
  </ul>
  </div>
    
}
export default Done;

/*const is used when we just want to represnt something on UI*/