import './Image.scss';

import React, { useState } from 'react';
import { useImage } from '../../contexts/imageContext';

/**
 * **Image**
 *
 * Component to display image in Home page.
 * @param string uid
 * @param string url
 * @param string label
 * @returns JSX.Element
 */
function Image({ uid, url, label }) {
	const { changeImageUid } = useImage();

	/**
	 * **On Delete**
	 *
	 * Idk.
	 */
	function onDelete() {
		const deleteMessage = document.getElementById('delete_image-message');
		deleteMessage.classList.add('active');

		changeImageUid(uid);
	}

	return (
		<div className='image'>
			<img src={url} alt={`Image with label: ${label}`} />

			<div className='image-content'>
				<button onClick={onDelete}>Delete</button>
				<p>{label}</p>
			</div>
		</div>
	);
}

export { Image };
