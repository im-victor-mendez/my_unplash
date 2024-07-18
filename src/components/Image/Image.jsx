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
	const [image, setImage] = useState({ width: undefined, height: undefined });

	const { changeImageUid } = useImage();

	/**
	 * **On Load**
	 *
	 * Gets natural image size and sets into image state.
	 * @param event
	 */
	function onLoad(event) {
		const target = event.target;

		const width = target.naturalWidth;
		const height = target.naturalHeight;

		setImage({ width, height });
	}

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
		<div
			className='image'
			style={{
				backgroundImage: `url(${url})`,
				backgroundSize: `100% ${image.height}px`,
				width: `${image.width}px`,
				height: `${image.height}px`,
			}}
		>
			<img onLoad={onLoad} src={url} alt={`Image ${uid}`} />

			<div className='image-content'>
				<button onClick={onDelete}>Delete</button>
				<p>{label}</p>
			</div>
		</div>
	);
}

export { Image };
