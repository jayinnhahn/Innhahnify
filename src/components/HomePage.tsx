import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import WrappedForm from '@/components/WrappedForm';
import ResultsModal from '@/components/ResultsModal';
import ContactMe from '@/components/ContactMe';
import html2canvas from 'html2canvas';

interface HomePageProps {
	logout: () => void;
	token: string | null;
}

const HomePage: React.FC<HomePageProps> = ({ logout, token }) => {
	const [timeRange, setTimeRange] = useState('medium_term');
	const [forDownload, setForDownload] = useState(false);

	const [category, setCategory] = useState('tracks');
	const [albumImageUrl, setAlbumUrl] = useState(
		'https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526'
	);
	const [top5Tracks, setTopTracks] = useState([]);
	const [top5Artists, setTopArtists] = useState([]);
	const [tokenExpired, setTokenExpired] = useState(false); // New state to track token expiration
	const [userName, setUserName] = useState('');
	const [userImage, setUserImage] = useState(
		'https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526'
	);

	const fetchDataFromSpotify = async (
		accessToken: string,
		timeRange: string,
		category: string
	) => {
		try {
			const url = `https://api.spotify.com/v1/me/top/${category}`;
			const queryParams = `time_range=${timeRange}&limit=5&offset=0`;
			const response = await axios.get(`${url}?${queryParams}`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
					'Content-Type': 'application/json',
				},
			});

			return response.data;
		} catch (error) {
			console.error('Error fetching top users and tracks:', error);
			throw error;
		}
	};

	const fetchTopTracks = useCallback(async () => {
		try {
			if (!token || token === 'undefined') {
				console.error('Access token is missing.');
				return;
			}
			const tokenExpiration = localStorage.getItem('spotify_token_expires');
			if (tokenExpiration && Date.now() > Number(tokenExpiration)) {
				setTokenExpired(true); // Set tokenExpired to true if token is expired
				logout;
				return;
			}
			const topTracksData = await fetchDataFromSpotify(
				token,
				timeRange,
				category
			);
			if (category === 'tracks') {
				setTopTracks(topTracksData.items.map((item: any) => item.name));
				setTopArtists(
					topTracksData.items.map((item: any) => item.artists[0].name)
				);
				setAlbumUrl(topTracksData.items[0].album.images[0].url);
			} else if (category === 'artists') {
				setTopTracks(topTracksData.items.map((item: any) => item.name));
				setAlbumUrl(topTracksData.items[0].images[0].url);
			}
		} catch (error) {
			console.error('Error fetching data from Spotify API:', error);
		}
	}, [token, timeRange, category, logout]);

	const fetchUserProfile = async (accessToken: string) => {
		try {
			const response = await axios.get('https://api.spotify.com/v1/me', {
				headers: {
					Authorization: `Bearer ${accessToken}`,
					'Content-Type': 'application/json',
				},
			});
			setUserName(response.data.display_name);

			// Get the largest image size from the images array
			const images = response.data.images;
			if (images && images.length > 0) {
				let largestImage = images[0];
				for (let i = 1; i < images.length; i++) {
					if (images[i].width > largestImage.width) {
						largestImage = images[i];
					}
				}
				setUserImage(largestImage.url);
			}
		} catch (error) {
			console.error('Error fetching user profile:', error);
		}
	};

	useEffect(() => {
		fetchTopTracks();
		if (token) {
			fetchUserProfile(token);
		}
	}, [token, timeRange, category, fetchTopTracks]);

	useEffect(() => {
		const handleWindowLoad = () => {
			const contentElement = document.getElementById('JwrappedContent');
			if (contentElement) {
				downloadDivContent(contentElement);
			}
		};

		window.addEventListener('load', handleWindowLoad);

		return () => {
			window.removeEventListener('load', handleWindowLoad);
		};
	});

	const downloadDivContent = async (contentElement: HTMLElement) => {
		const clone = contentElement.cloneNode(true) as HTMLElement;
		clone.style.position = 'absolute';
		clone.style.top = '-9999px';
		document.body.appendChild(clone);

		const allElements = clone.getElementsByTagName('*');
		for (let i = 0; i < allElements.length; i++) {
			const element = allElements[i] as HTMLElement;
			element.style.zIndex = '1';
		}
		try {
			await new Promise((resolve) => setTimeout(resolve, 500));
			const canvas = await html2canvas(clone, {
				scale: 2,
				useCORS: true,
				allowTaint: true,
			});
			document.body.removeChild(clone);
			const imageData = canvas.toDataURL('image/png');
			const downloadLink = document.createElement('a');
			downloadLink.href = imageData;
			downloadLink.download = `JWRAPPED_${category}_${timeRange}.png`;
			document.body.appendChild(downloadLink);
			downloadLink.click();
			document.body.removeChild(downloadLink);
			setForDownload(false);
		} catch (error) {
			console.error('Error capturing content:', error);
		}
	};

	const handleDownload = () => {
		setForDownload(true);
		setTimeout(() => {
			const contentElement = document.getElementById('JwrappedContent');
			if (contentElement) {
				downloadDivContent(contentElement);
			}
		}, 1000);
	};

	const buttonData = [
		{
			label: 'Download YOUR JWRAPPED',
			onClick: handleDownload,
			ariaLabel: 'Download YOUR JWRAPPED',
		},
		{
			label: 'logout',
			onClick: logout,
			ariaLabel: 'logout',
		},
	];

	return (
		<div className="bg-beige w-full lg:pt-5">
			{tokenExpired && ( // Render a message if the token is expired
				<div className="text-red-500 font-bold p-3">
					Your Spotify token has expired. Please log in again.
				</div>
			)}
			<div className="flex flex-col items-center justify-center">
				<div className="grid grid-cols-1 lg:grid-cols-2 lg:px-20 lg:gap-4 px-5 gap-y-5">
					<div className="lg:my-5 flex justify-self-center">
						<ResultsModal
							top5Tracks={top5Tracks}
							top5Artists={top5Artists}
							category={category}
							timeRange={timeRange}
							albumImageUrl={albumImageUrl}
							forDownload={forDownload}
							// userName={userName}
							// userImage={userImage}
						/>
					</div>
					<div className="flex flex-col justify-center">
						<WrappedForm
							category={category}
							timeRange={timeRange}
							setCategory={setCategory}
							setTimeRange={setTimeRange}
						/>
						<div className="font-Monotage flex flex-col lg:flex-row lg:place-self-end lg:gap-4">
							{buttonData.map((button, index) => (
								<button
									key={index}
									onClick={button.onClick}
									className="w-full lg:w-fit text-darkgreen bg-white border-4 border-darkgreen lg:text-[1.5rem] px-20 rounded-[10px] mt-4 hover:bg-darkgreen hover:text-white"
									aria-label={button.ariaLabel}
								>
									{button.label}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
			<div>
				<ContactMe />
			</div>
		</div>
	);
};

export default HomePage;
