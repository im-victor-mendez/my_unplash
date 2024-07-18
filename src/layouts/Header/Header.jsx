import './Header.scss';
import React from 'react';

import LOGO from '../../assets/my_unsplash_logo.svg';
import { Button, Search } from '../../components/components';

function Header() {
	function addImage() {
		const message = document.getElementById('add_image-message');
		message.classList.toggle('active');
	}

	return (
		<header id='header'>
			<section className='header-left'>
				<img src={LOGO} alt='' />
				<Search id='header-search_name'></Search>
			</section>

			<Button className='confirm' onClick={addImage}>
				Add a photo
			</Button>
		</header>
	);
}

export default Header;
