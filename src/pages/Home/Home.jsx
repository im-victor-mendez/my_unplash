import './Home.scss';

import React from 'react';
import Header from '../../layouts/Header/Header';
import Images from '../../layouts/Images/Images';
import { SearchProvider } from '../../contexts/searchContext';
import Message from '../../layouts/Message/Message';
import { AddImage, DeleteImage } from '../../components/components';
import ImageProvider from '../../contexts/imageContext';

function Home() {
	return (
		<section id='home'>
			<ImageProvider>
				<SearchProvider>
					<Header />
					<Images />
				</SearchProvider>

				<Message id='delete_image-message'>
					<DeleteImage />
				</Message>
			</ImageProvider>

			<Message id='add_image-message'>
				<AddImage />
			</Message>
		</section>
	);
}

export default Home;
