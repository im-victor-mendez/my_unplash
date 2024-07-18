import './Button.scss';
import React from 'react';

function Button({ id, className, type, onClick, children }) {
	return (
		<button
			className={`button ${className}`}
			id={id}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export { Button };
