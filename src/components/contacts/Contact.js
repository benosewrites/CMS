import React, { Component } from 'react';
import { FaEdit, FaSortDown, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Consumer } from '../../Context';

export default class Contact extends Component {
	state = {
		showDetails: false,
	};
	onClick = () => {
		this.setState({ showDetails: !this.state.showDetails });
	};

	onDeleteClick = (id, dispatch) => {
		dispatch({
			type: 'DELETE_CONTACT',
			payload: id,
		});
	};
	render() {
		const { id, name, email, phone } = this.props.contact;
		const { showDetails } = this.state;

		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;
					return (
						<div className="card mb-3">
							<div className="card-body">
								<h3>
									<span style={style.contactSyle}>
										<span>
											{name}

											<FaSortDown
												style={style.iconStyle}
												onClick={this.onClick}
											/>
										</span>
										<span>
											<Link to={`/edit/contact/${id}`}>
												<FaEdit
													style={style.iconStyle}
													onClick={this.onEditClick}
												/>
											</Link>

											<FaTimes
												style={style.iconStyleRed}
												onClick={this.onDeleteClick.bind(this, id, dispatch)}
											/>
										</span>
									</span>
								</h3>
								{showDetails ? (
									<ul className="list-group ">
										<li className="list-group-item">Email: {email}</li>
										<li className="list-group-item">Phone: {phone}</li>
									</ul>
								) : null}
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

const style = {
	contactSyle: { display: 'flex', justifyContent: 'space-between' },
	iconStyle: { color: 'green', fontSize: '20px', cursor: 'pointer' },
	iconStyleRed: {
		color: 'red',
		fontSize: '25px',
		paddingLeft: '10px',
		cursor: 'pointer',
	},
};
