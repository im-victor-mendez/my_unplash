import './Landing.scss';

import React from 'react';
import LOGO from '../../assets/my_unsplash_logo.svg';
import SolutionOverview from '../../assets/SolutionOverview.png';
import { useAuth } from '../../contexts/authContext';

function Landing() {
	const { loginWithGoogle, loginAnonymously } = useAuth();

	return (
		<section id='landing'>
			<header>
				<img src={LOGO} alt='My unsplash logo' />
			</header>

			<main>
				<h1>Login with:</h1>

				<div className='login-methods'>
					<button onClick={loginWithGoogle}>Google</button>
					<button onClick={loginAnonymously}>Anonymously</button>
				</div>
			</main>

			<center>
				<p>To use this app you need to authenticate by one of these methods.</p>
				<img
					id='solution-overview'
					src={SolutionOverview}
					alt='Solution Overview'
				/>

				<h2>Auth Differences</h2>
				<div id='auth-differences'>
					<div>
						<h3>✅ Google</h3>
						<ul>
							<li>
								Your photos will be saved in Firebase database linked to your
								account.
							</li>
						</ul>
					</div>
					<div>
						<h3>⭕ Anonymously</h3>
						<ul>
							<li>Your photos will not be saved.</li>
						</ul>
					</div>
				</div>
			</center>
		</section>
	);
}

export default Landing;
