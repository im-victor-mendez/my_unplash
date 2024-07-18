import './Loading.scss';
import React from 'react';

function Loading() {
	return (
		<section id='loading'>
			<h1>Loading</h1>

			<div className='loading-bar'>
				<div className='loading-line'></div>
			</div>
		</section>
	);
}

export default Loading;
