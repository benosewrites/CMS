import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header(props) {
	const { branding } = props;
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-success">
			<div className="container">
				<a className="navbar-brand" href="/">
					{branding}
				</a>
				<div className="ml-auto">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/" className="nav-link" aria-current="page">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/add/contact" className="nav-link">
								Add
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link" aria-current="page">
								About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Header;

Header.propTypes = {
	branding: PropTypes.string.isRequired,
};
