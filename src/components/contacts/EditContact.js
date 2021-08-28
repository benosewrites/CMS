import React, { Component } from 'react';
import TextInputGroup from '../layouts/TextInputGroup';
import axios from 'axios';
import { Consumer } from '../../Context';

export default class EditContact extends Component {
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

		const updatedContact = {
			name,
			email,
			phone,
		};

		const id = this.props.match.params.id;

		const reContact = await axios.put(
			`https://jsonplaceholder.typicode.com/users/${id}`,
			updatedContact,
		);

		this.setState({
			name: '',
			email: '',
			phone: '',
			errors: {},
		});

		dispatch({
			type: 'UPDATE_CONTACT',
			payload: reContact.data,
		});
		console.log(reContact);
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
								<div className="card-header">Edit Contact</div>
								<div className="card-body">
									<form action="" onSubmit={this.onSubmit.bind(this, dispatch)}>
										<TextInputGroup
											label="Name"
											type="text"
											name="name"
											value={name}
											id="name"
											placeholder="Enter Current Name..."
											onChange={this.onChange}
											error={errors.name}
										/>

										<TextInputGroup
											label="Email"
											type="text"
											name="email"
											value={email}
											id="email"
											placeholder="Enter Current Email..."
											onChange={this.onChange}
											error={errors.email}
										/>

										<TextInputGroup
											label="Phone Number"
											type="text"
											name="phone"
											value={phone}
											id="phone"
											placeholder="Enter Current phone number..."
											onChange={this.onChange}
											error={errors.phone}
										/>

										<div className="d-grid">
											<input
												type="submit"
												value="Update Contact"
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
