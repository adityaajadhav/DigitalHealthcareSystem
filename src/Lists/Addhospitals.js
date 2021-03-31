import React, { Component } from 'react'
import axios from 'axios'
class Addhospitals extends Component {
	constructor(props) {
		super(props)

		this.state = {
			hospitalName: '',
			emailId: '',
			hospitalContactNo: '',
			hospitaladdress: ''
		}
	}
	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:8085/hospital/save',this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { hospitalName, emailId, hospitalContactNo, hospitaladdress } = this.state
		return (
			<div>
				<h1>Hospital Registeration</h1>
				<form onSubmit={this.submitHandler}>
					<div>
						<input placeholder="Hospital Name"
							type="text"
							name="hospitalName"
							value={hospitalName}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input placeholder="Email Id"
							type="text"
							name="emailId"
							value={emailId}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input placeholder="Hospital contact number"
							type="text"
							name="hospitalContactNo"
							value={hospitalContactNo}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input placeholder="Hospital Address"
							type="text"
							name="hospitaladdress"
							value={hospitaladdress}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default Addhospitals;


// import React, { useEffect, useState } from 'react';
// import { Redirect } from "react-router-dom";
// import axios from "axios";

// function Addhospitals() {
//     const [emailId, setEmailId] = useState();
//     const [hospitalContactNo, setHospitalcontactno] = useState();
//     const [hospitalName, setHospitalname] = useState();
//     const [hospitaladdress, setHospitaladdress] = useState();
//     const [redirect, setredirect] = useState(false);

// 	useEffect(() => {
//         async function getData() {
//            // get data from local storage 
//         }
//         getData();
//     }, []);


//      // redirect to hospital list when click on submit button 
//     if (redirect) {
//         return (<Redirect to='/HospitalL' />
//         )
//     }
//     return (
//         <div>
//             <h1>Registeration Page</h1>
// 			{/* input placeholder to add hospital*/}
//             <input placeholder="Emailid"
//                 onChange={(e) => {
//                     setEmailId(e.target.value);
//                 }} />
//             <br />
//             <input placeholder="Hospital contact number"
//                 onChange={(e) => {
//                     setHospitalcontactno(e.target.value);
//                 }}
//             />
//             <br />
//             <input placeholder="Hospital name"
//                 onChange={(e) => {
//                     setHospitalname(e.target.value);
//                 }} />
//             <br />
//             <input placeholder="Hospital address"
//                 onChange={(e) => {
//                     setHospitaladdress(e.target.value);
//                 }}
//             />
//             <br />
//             {/* // save the data to  in the database */}
//             <button onClick={async () => {
//                 // https://jsonplaceholder.typicode.com/users
//                 const URL = "http://localhost:8085/hospital/save";
//                 const response = await axios.post(URL, {
//                     hospitalname: hospitalName,
//                     emailid: emailId,
//                     hospitalcontactno: hospitalContactNo,
//                     hospitaladdress: hospitaladdress
//                 });
//                 console.log(emailId, hospitalContactNo, hospitalName, hospitaladdress);
//                 setredirect(true);
//             }}>Submit</button>
//         </div>
//     );
// }
// export default Addhospitals;