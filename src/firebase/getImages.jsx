import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/authContext';
import { db } from './firebase';

function UseImages() {
	const [images, setImages] = useState(null);
	const { user } = useAuth();

	useEffect(() => {
		getImages();
	}, []);

	return { images };

	function getImages() {
		onValue(ref(db, `${user.uid}`), snapshot => onValueCallback(snapshot));
	}

	function onValueCallback(snapshot) {
		setImages([]);

		const data = snapshot.val();

		if (data)
			Object.keys(data).forEach(image =>
				setImages(oldArray => [
					...oldArray,
					{ uid: image, url: data[image].url, label: data[image].label },
				])
			);
	}
}

export default UseImages;
