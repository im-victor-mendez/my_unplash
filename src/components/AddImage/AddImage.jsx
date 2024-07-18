import './AddImage.scss';

import React, { useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import submitImage from '../../firebase/submitImage';
import { Button } from '../Button/Button';
import UseLoading from '../../hooks/useLoading';

/**
 * **Add Image**
 *
 * Component that displays form to add new image with url.
 * @returns JSX.Element
 */
function AddImage() {
	const [image, setImage] = useState({ label: '', url: '' });

	/**
	 * **Reset Image**
	 *
	 * Reset image state data to initial values.
	 * @returns void
	 */
	const resetImage = () => setImage({ label: '', url: '' });

	const { user } = useAuth();
	const { loadingTrue, loadingFalse } = UseLoading();

	/**
	 * **On Change**
	 *
	 * Handles image data.
	 * @param event
	 */
	function onChange(event) {
		const target = event.target;

		setImage({ ...image, [target.name]: target.value });
	}

	/**
	 * **On Cancel**
	 *
	 * Prevents default button action and resets image data.
	 * @param event React.MouseEvent<HTMLButtonElement>
	 */
	function onCancel(event) {
		event.preventDefault();

		resetImage();

		const message = document.getElementById('add_image-message');
		message.classList.toggle('active');
	}

	/**
	 * **On Submit**
	 *
	 * Prevents default button action, submits image and reset image state values.
	 * @param event React.MouseEvent<HTMLButtonElement>
	 */
	async function onSubmit(event) {
		event.preventDefault();

		submitImage(user, image)
			.then(() => loadingTrue())
			.finally(() => loadingFalse());

		resetImage();
	}

	return (
		<form className='add_image' onSubmit={onSubmit}>
			<h1>Add a new photo</h1>

			<label>
				Label
				<input
					type='text'
					name='label'
					id='add_image-label'
					placeholder='Suspendise elit massa'
					onChange={onChange}
					value={image.label}
				/>
			</label>

			<label>
				Photo URL
				<input
					type='url'
					name='url'
					id='add_image-url'
					placeholder='https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r...'
					onChange={onChange}
					value={image.url}
				/>
			</label>

			<div className='buttons'>
				<Button className='confirm' type='submit'>
					Submit
				</Button>
				<Button className='cancel' onClick={onCancel}>
					Cancel
				</Button>
			</div>
		</form>
	);
}

export { AddImage };
