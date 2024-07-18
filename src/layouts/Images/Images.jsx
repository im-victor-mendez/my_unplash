import './Images.scss';

import React from 'react';
import { Image } from '../../components/Image/Image';
import UseImages from '../../firebase/getImages';
import Loading from '../Loading/Loading';
import Masonry from 'react-masonry-css';
import { useSearch } from '../../contexts/searchContext';

function Images() {
	const { search } = useSearch();
	const { images } = UseImages();

	// Number of image columns depending on windows width
	const breakpointCols = { default: 3, 800: 2, 700: 1 };

	return (
		<Masonry
			id='images'
			breakpointCols={breakpointCols}
			className='my-masonry-grid'
			columnClassName='my-masonry-grid_column'
		>
			{displayImages(images, search)}
		</Masonry>
	);
}

function displayImages(images, search) {
	// Initial State
	if (images == null) return <Loading />;

	// No results on query
	if (images.length === 0) return <>No images found</>;

	// Image list applying search filter
	return images.filter(filterImages()).map(mappingImages());

	function filterImages() {
		return image => {
			if (!search) return image;
			if (!image.label) return;

			const label = image.label.toLowerCase();
			if (label.includes(search.toLowerCase())) return image;
		};
	}

	function mappingImages() {
		return image => (
			<Image
				key={image.uid}
				uid={image.uid}
				url={image.url}
				label={image.label}
			/>
		);
	}
}

export default Images;
