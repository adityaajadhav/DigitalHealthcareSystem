import React from 'react';

const Register=()=>(
    <div className="text-danger">
        Welcome! This is register page
       
    </div>
)
export default Register;

// import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom';
// import "../App.css"
// import "../css/register.css"
// import NavBar from '../NavBar/NavBar';
// import GuestService from "../services/GuestService"

// export default class Register extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//       phoneNumber: '',
//       errors: {},
//       message: '',
//     };
//     // this.initialState = this.state; 
//     this.handleChange = this.handleChange.bind(this);
//     this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
//   }
//   handleChange(e) {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   }
//   submituserRegistrationForm(e) {
//     e.preventDefault();
//     if (this.validateForm()) {
//       let guest = {
//         firstName: this.state.firstName,
//         lastName: this.state.lastName,
//         emailAddress: this.state.email,
//         password: this.state.password,
//         phoneNumber: this.state.phoneNumber
//       };
//       console.log('guest= >' + JSON.stringify(guest));

//       GuestService.registerGuest(guest).then(response => {
//         alert("Registered Successfully");
//         this.props.history.push('/login');
//       }, error => {
//         const resMessage =
//           (error.response.data)
//         this.setState({
//           message: resMessage
//         });
//       }
//       )
//     }
//   };
//   cancel() {
//     this.props.history.push("/a");
//   }
//   validateForm() {

//     const { firstName, lastName, email, password, phoneNumber } = this.state;
//     let errors = {};
//     let formIsValid = true;

//     if (!firstName) {
//       formIsValid = false;
//       errors[firstName] = "*Please enter your firstname.";
//     }
//     if (!lastName) {
//       formIsValid = false;
//       errors["lastName"] = "*Please enter your lastname.";
//     }

//     if (!email) {
//       formIsValid = false;
//       errors["email"] = "*Please enter your email Address.";
//     }

//     if (typeof email !== "undefined") {
//       //regular expression for email validation
//       var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//       if (!pattern.test(email)) {
//         formIsValid = false;
//         errors["email"] = "*Please enter valid email Address.";
//       }
//     }

//     if (!phoneNumber) {
//       formIsValid = false;
//       errors["phoneNumber"] = "*Please enter your mobile no.";
//     }

//     if (typeof phoneNumber !== "undefined") {
//       var pattern = new RegExp(/^[0-9]{10}$/);
//       if (!pattern.test(phoneNumber)) {
//         formIsValid = false;
//         errors["phoneNumber"] = "*Please enter valid mobile no.";
//       }
//     }

//     if (!password) {
//       formIsValid = false;
//       errors["password"] = "*Please enter your password.";
//     }

//     if (typeof password !== "undefined") {
//       if (!password.match(/^.*(?=.{6,})(?=.*[a-z])(?=.*[@#$%&]).*$/)) {
//         formIsValid = false;
//         errors["password"] = "*Please enter secure and strong password.";
//       }
//     }

//     this.setState({ errors: errors });
//     return formIsValid;
//   }

//   render() {
//     return (
//       <div>
//         <NavBar />
//         <div className="signup-form" >
//           <form method="post" onSubmit={this.submituserRegistrationForm}>
//             {this.state.message && (
//               <div className="form-group">
//                 <div className="alert alert-danger" role="alert">
//                   {this.state.message}
//                 </div>
//               </div>
//             )}
//             <h2 >Register</h2>
//             <div className="form-group">

//               <div className="row">
//                 <div className="col">
//                   <input type="text" className="form-control" name="firstName" placeholder="First Name"
//                     value={this.state.firstName} onChange={this.handleChange} />
//                   <div className="errorMsg">{this.state.errors.firstName}</div>
//                 </div>

//                 <div className="col">
//                   <input type="text" className="form-control" name="lastName" placeholder="Last Name"
//                     value={this.state.lastName}
//                     onChange={this.handleChange} />
//                   <div className="errorMsg">{this.state.errors.lastName}</div>
//                 </div>
//               </div>
//             </div>
//             <div className="form-group">
//               <input type="email" className="form-control" name="email" placeholder="Email"
//                 value={this.state.email}
//                 onChange={this.handleChange} />
//               <div className="errorMsg">{this.state.errors.email}</div>
//             </div>

//             <div className="form-group">
//               <input type="password" className="form-control" name="password" placeholder="Password"
//                 value={this.state.password}
//                 onChange={this.handleChange} />
//               <div className="errorMsg">{this.state.errors.password}</div>
//             </div>

//             <div className="form-group">
//               <input type="text" className="form-control" name="phoneNumber" placeholder="Phone Number"
//                 value={this.state.phoneNumber}
//                 onChange={this.handleChange} />
//               <div className="errorMsg">{this.state.errors.phoneNumber}</div>
//             </div>
//             <div className="btn">
//               <button className="btn btn-success" >Register</button>
//               <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
//             </div>
//           </form>
//           <div className="text-center">Already have an account? <NavLink to="/login">Login</NavLink></div>
//           <div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
