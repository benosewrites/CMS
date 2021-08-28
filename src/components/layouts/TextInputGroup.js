import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
	type,
	name,
	id,
	placeholder,
	label,
	onChange,
	value,
	error,
}) => {
	return (
		<div>
			<div className="mb-3 ">
				<label htmlFor={name} className="form-label">
					{label}
				</label>
				<input
					type={type}
					name={name}
					value={value}
					id={id}
					placeholder={placeholder}
					onChange={onChange}
					className={classnames('form-control form-control-lg', {
						'is-invalid': error,
					})}
				/>

				{error && <div className="invalid-feedback"> {error} </div>}
			</div>
		</div>
	);
};

export default TextInputGroup;

TextInputGroup.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};
