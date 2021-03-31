import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {
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
			.post('http://localhost:8085/hospital/save', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { hospitalName,emailId,hospitalContactNo,hospitaladdress } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="hospitalName"
							value={hospitalName}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="emailId"
							value={emailId}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="hospitalContactNo"
							value={hospitalContactNo}
							onChange={this.changeHandler}
						/>
					</div>
				
                    <div>
						<input
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

export default PostForm;