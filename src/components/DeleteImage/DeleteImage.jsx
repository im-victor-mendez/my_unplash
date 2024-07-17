import './DeleteImage.scss';

import React from 'react';
import { useAuth } from '../../contexts/authContext';
import { useImage } from '../../contexts/imageContext';
import deleteImage from '../../firebase/deleteImage';
import Button from '../Button/Button';

/**
 * **Delete Image Component**
 *
 * Component to delete image from account.
 * @returns JSX.Element
 */
function DeleteImageComponent() {
	const { user } = useAuth();
	const { imageUid } = useImage();

	const deleteMessage = document.getElementById('delete_image-message');

	/**
	 * **On Delete**
	 *
	 * Prevents default event on click form button and runs [deleteImage] function.
	 * @param event React.MouseEvent<HTMLButtonElement>
	 */
	function onDelete(event) {
		event.preventDefault();

		deleteImage(user, imageUid).finally(() => {
			deleteMessage.classList.remove('active');
		});
	}

	/**
	 * **Cancel**
	 *
	 * Removes component from DOM.
	 * @param event React.MouseEvent<HTMLButtonElement>
	 */
	function cancel(event) {
		event.preventDefault();

		deleteMessage.classList.remove('active');
	}

	return (
		<form className='delete_image'>
			<h1>Are you sure?</h1>

			<div className='buttons'>
				<Button type='submit' className='delete' onClick={onDelete}>
					Delete
				</Button>
				<Button className='good_cancel' onClick={cancel}>
					Cancel
				</Button>
			</div>
		</form>
	);
}

export default DeleteImageComponent;
