
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
