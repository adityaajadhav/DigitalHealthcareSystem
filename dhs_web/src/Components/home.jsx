import React from 'react';
import {Link} from 'react-router-dom';
import Doctor from './doctor';


const Home = ()=>(
    <div className="container-fluid">
    
        <ul className="jumbotron">
        <Link className="h5 text-primary" to="/login"><li>login</li></Link> 
        <Link className="h5 text-primary" to="/register"><li>Register</li></Link>
        <Link className="h5 text-primary" to="/Doctor"><li>Doctors List</li></Link> 
        <Link className="h5 text-primary" to="/Hospital"><li>Hospitals List</li></Link> 
        <Link className="h5 text-primary" to="/create/hospital"><li>Create Hospital</li></Link> 

        </ul>
    
    </div>
    
)

export default Home;