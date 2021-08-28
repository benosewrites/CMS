import React, { Component } from 'react';
import TextInputGroup from '../layouts/TextInputGroup';
import { Consumer } from '../../Context';
import axios from 'axios';

export default class AddContact extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		errors: {},
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onSubmit = async (dispatch, e) => {
		e.preventDefault();

		const { name, email, phone } = this.state;

		if (name === '') {
			this.setState({ errors: { name: `Name is required` } });
			return;
		}
		if (email === '') {
			this.setState({ errors: { email: `Email is required` } });
			return;
		}
		if (phone === '') {
			this.setState({ errors: { phone: `Phone-no is required` } });
			return;
		}

		const newContact = {
			name,
			email,
			phone,
		};

		const reContact = await axios.post(
			`https://jsonplaceholder.typicode.com/users`,
			newContact,
		);

		dispatch({
			type: 'ADD_CONTACT',
			payload: reContact.data,
		});

		this.setState({
			name: '',
			email: '',
			phone: '',
			errors: {},
		});

		this.props.history.push('/');
	};

	render() {
		const { name, email, phone, errors } = this.state;
		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;
					return (
						<div>
							<div className="card mb-3">
								<div className="card-header">Add Contact</div>
								<div className="card-body">
									<form action="" onSubmit={this.onSubmit.bind(this, dispatch)}>
										<TextInputGroup
											label="Name"
											type="text"
											name="name"
											value={name}
											id="name"
											placeholder="Enter Name..."
											onChange={this.onChange}
											error={errors.name}
										/>

										<TextInputGroup
											label="Email"
											type="text"
											name="email"
											value={email}
											id="email"
											placeholder="Enter Email..."
											onChange={this.onChange}
											error={errors.email}
										/>

										<TextInputGroup
											label="Phone Number"
											type="text"
											name="phone"
											value={phone}
											id="phone"
											placeholder="Enter phone number..."
											onChange={this.onChange}
											error={errors.phone}
										/>

										<div className="d-grid">
											<input
												type="submit"
												value="Add Contact"
												className="btn btn-lg btn-success"
											/>
										</div>
									</form>
								</div>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}
