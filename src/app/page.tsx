'use client';
import { useEffect, useState } from 'react';
import LoginPage from '@/pages/LoginPage';
import HomePage from '@/pages/HomePage';
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
			{!token ? (
				<LoginPage data={SpotifiyConfigData} />
			) : (
				<HomePage logout={logout} token={token} />
			)}
		</main>
	);
};

export default Home;
