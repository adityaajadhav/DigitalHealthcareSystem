import React, { Component } from 'react'
import axios from 'axios'
class Adddoctor extends Component {
	constructor(props) {
		super(props)

		this.state = {
			firstName: '',
            lastname: '',
			emailId: '',
			password: '',
			qualification: '',
            speciality:'',
			hospitalId:''
		}
	}

	

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:8085/doctor/save', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}
	changeHandler = e => 
		this.setState({ [e.target.name]: e.target.value });
	
	render() {
		//const { firstName,lastName,emailId,password,qualification,speciality} = this.state
		return (
			<div>
                <h1 className="text-center">Add doctor list</h1>
				<form onSubmit={this.submitHandler}>
					<div>
						<input placeholder="First name"
							type="text"
							name="firstName"
							value={this.state.firstName}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input placeholder="Last name"
							type="text"
							name="lastName"
							value={this.state.lastName}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input placeholder="Email Id"
							type="text"
							name="emailId"
							value={this.state.emailId}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input placeholder="Password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input placeholder="qualification"
							type="text"
							name="qualification"
							value={this.state.qualification}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						<input placeholder="Speciality"
							type="text"
							name="speciality"
							value={this.state.speciality}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input placeholder="Hospital id"
							type="text"
							name="hospitalId"
							value={this.state.hospitalId}
							onChange={this.changeHandler}
						/>
					</div>
                	<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default Adddoctor;


// import React, { useState } from 'react';
// import { Redirect } from "react-router-dom";
// import axios from "axios";

// function Adddoctors(){ 
//     const[username, setUsername]=useState();
//     const[lastname, setLastname]=useState();
//     const[password, setPassword]=useState();
//     const[emailid,setEmailid]=useState();
//     const[qualification,setQualification]=useState();
//     const[speciality,setSpeciality]=useState();
//     const[redirect, setredirect]=useState(false);

//     if(redirect){
//         return (<Redirect to='/DoctorL'/>
//     )
// }
// return(  
//             <div>
//                 <h1>Doctor Registeration Page</h1>
//                 <input  placeholder="First name"
//                 onChange={(e) => {
//                 setUsername(e.target.value);
//                 }}/>
//                 <br/>
//                 <input placeholder="Last name"
//                 onChange={(e) => {
//                 setLastname(e.target.value);
//                 }}
//                 />
//                 <br/>
//                 <input placeholder="Emailid"
//                 onChange={(e) => {
//                 setEmailid(e.target.value);
//                 }}/>
//                 <br/>
//                 <input type="password" placeholder="Password"
//                 onChange={(e) => {
//                 setPassword(e.target.value);
//                 }}
//                 />
//                 <br/>
//                 <input placeholder="qualification"
//                 onChange={(e) => {
//                 setQualification(e.target.value);
//                 }}
//                 />
//                 <br/>
//                 <input placeholder="speciality"
//                 onChange={(e) => {
//                 setSpeciality(e.target.value);
//                 }}
//                 />
//                 <br/>
//                 <button type="submit" onClick={ async() => { 
//                    // https://jsonplaceholder.typicode.com/users
//                     const URL = "http://localhost:8085/doctor/save";
//                     const response = await axios.post(URL, {
//                           name: username,
//                           lastname:lastname,
//                           password: password,
//                           email:emailid,
//                           qualification:qualification,
//                           speciality:speciality
//                     });
//                     console.log(username,lastname,emailid,password,qualification,speciality);
//                     setredirect(true);
//                 }}>submit</button>
//             </div>            
//         );
// }
// export default Adddoctors;