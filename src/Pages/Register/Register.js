
// import React, { useState } from 'react';
// import { Redirect } from "react-router-dom";
// import axios from "axios";
  
// // Using function component 
// function Register(){ 
//     const[firstName, setFirstname]=useState();
//     const[lastName, setLastname]=useState();
//     const[contactNo, setContactNO]=useState();
//     const[bloodGroup,setBloodGroup]=useState();
//     const[addharNo,setAddharNo]=useState();
//     const[emailId,setEmailId]=useState();
//     const[password, setPassword]=useState();
//     const[address, setAddress]=useState();
//     const[redirect, setredirect]=useState(false);
//     if(redirect) {
//        return <Redirect to='/login'/>
//     }
// return(  
//             <div>
//                 <h1>Registeration Page</h1>
//                 <input  placeholder="First name"
//                 onChange={(e) => {
//                 setFirstname(e.target.value);
//                 }}/>
//                 <br/>
//                 <input placeholder="Last name"
//                 onChange={(e) => {
//                 setLastname(e.target.value);
//                 }}
//                 />
//                 <br/>
//                 <input placeholder="Mobile No"
//                 onChange={(e) => {
//                 setContactNO(e.target.value);
//                 }}
//                 />
//                 <br/>
//                 <input placeholder="Blood group"
//                 onChange={(e) => {
//                 setBloodGroup(e.target.value);
//                 }}
//                 />
//                 <br/>
//                 <input placeholder="Email id"
//                 onChange={(e) => {
//                 setEmailId(e.target.value);
//                 }}/>
//                 <br/>
//                 <input placeholder="Addhar no"
//                 onChange={(e) => {
//                 setAddharNo(e.target.value);
//                 }}
//                 />
//                  <br/>
//                 <input type="password" placeholder="Password"
//                 onChange={(e) => {
//                 setPassword(e.target.value);
//                 }}
//                 />
//                 <br/>
//                 <input placeholder="Address"
//                 onChange={(e) => {
//                 setAddress(e.target.value);
//                 }}
//                 />
//                 <br/>
//                 <button onClick={ async() => { 
//                     const URL = "http://localhost:8085/patient/add";
//                     const response = await axios.post(URL,{
//                         firstName: firstName,
//                         lastName: lastName,
//                         emailId:emailId,
//                         contactNo:contactNo,
//                         bloodGroup:bloodGroup,
//                         addharNo:addharNo,
//                         password:password,
//                         address:address
//                     });
//                     console.log(firstName,lastName,emailId,contactNo,bloodGroup,addharNo,password,address);
//                     setredirect(true);
//                 }}>submit</button>
//             </div>            
//         );
// }
// export default Register;

 //using class component 

import React, { Component } from 'react'
import axios from 'axios'
class Register extends Component {
	constructor(props) {
		super(props)

		this.state = {
            firstName:'',
            lastName:'',
			contactNO:'',
            bloodGroup:'',
            addharNo:'',
            emailId:'',
            password:'',
            address:''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:8085/patient/add', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { firstName,lastName,contactNO,bloodGroup,addharNo,emailId,password,address} = this.state
		return (
			<div>
                <h1>Patient registertion</h1>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
                            placeholder="First name"
							type="text"
							name="firstName"
							value={firstName}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						<input
                            placeholder="Last name"
							type="text"
							name="lastName"
							value={lastName}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
                            placeholder="Mobile No"
							type="text"
							name="contactNO"
							value={contactNO}
							onChange={this.changeHandler}
						/>
					</div>
				
                    <div>
						<input  placeholder="Blood group"
							type="text"
							name="bloodGroup"
							value={bloodGroup}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						<input placeholder="Addhar no"
							type="text"
							name="addharNo"
							value={addharNo}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						<input placeholder="Email id"
							type="text"
							name="emailId"
							value={emailId}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						<input placeholder="Password"
							type="password"
							name="password"
							value={password}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						<input placeholder="Address"
							type="text"
							name="address"
							value={address}
							onChange={this.changeHandler}
						/>
					</div>
                	<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default Register;
