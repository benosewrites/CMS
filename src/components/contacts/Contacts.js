import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../Context';

export class Contacts extends Component {
	render() {
		return (
			<Consumer>
				{(value) => {
					const { contacts } = value;
					return (
						<div>
							<h1 className="display-4 mb-3" style={{ fontWeight: '400' }}>
								<span style={{ color: 'green' }}>Contact</span> List
							</h1>
							{contacts.length > 0 ? (
								contacts.map((contact) => {
									return <Contact key={contact.id} contact={contact} />;
								})
							) : (
								<div className="display-4" style={{ justifyContent: 'center' }}>
									No contact currently added
								</div>
							)}
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Contacts;
