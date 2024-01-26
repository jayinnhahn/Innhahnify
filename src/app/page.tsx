'use client';
import { useEffect, useState } from 'react';
import LoginPage from '@/components/LoginPage';
import HomePage from '@/components/HomePage';
interface SpotifyConfig {
	CLIENT_ID?: string;
	REDIRECT_URL?: string;
	AUTH_ENDPOINT?: string;
	RESPONSE_TYPE: string;
}

const Home: React.FC = () => {
	const SpotifiyConfigData: SpotifyConfig = {
		CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID,
		REDIRECT_URL: process.env.NEXT_PUBLIC_REDIRECT_URL,
		AUTH_ENDPOINT: process.env.NEXT_PUBLIC_AUTH_ENDPOINT,
		RESPONSE_TYPE: 'token',
	};

	const [token, setToken] = useState<string | null>('');

	useEffect(() => {
		const hash = window.location.hash;
		let tokenFromStorage = window.localStorage.getItem('token');

		if (!tokenFromStorage && hash) {
			const accessTokenParam = hash
				.substring(1)
				.split('&')
				.find((elem) => elem.startsWith('access_token'));

			if (accessTokenParam) {
				tokenFromStorage = accessTokenParam.split('=')[1];

				window.location.hash = '';
				window.localStorage.setItem('token', tokenFromStorage);
			}
		}

		setToken(tokenFromStorage);
	}, []);

	const logout = () => {
		setToken('');
		window.localStorage.removeItem('token');
	};

	return (
		<main className="bg-beige w-full pt-5">
			{' '}
			{!token ? (
				<div>
					<LoginPage data={SpotifiyConfigData} />
				</div>
			) : (
				<div className="w-full">
					<HomePage logout={logout} token={token} />
					{/* <p> {token}</p>
						<button onClick={logout}>Logout</button>
						<div>
				 			<h2>Top Users and Their Tracks</h2>
							<label htmlFor="timeRange">Select Time Range:</label>
							<select
								id="timeRange"
								value={timeRange}
								onChange={(e) => setTimeRange(e.target.value)}
							>
								<option value="short_term">3 months</option>
								<option value="medium_term">6 months</option>
								<option value="long_term">1 year</option>
							</select>
							<button onClick={fetchTopTracks}>Fetch Top Tracks</button>
						</div> */}
				</div>
			)}
		</main>
	);
};

export default Home;
