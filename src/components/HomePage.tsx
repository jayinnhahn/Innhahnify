import React, { useEffect, useState, useCallback } from 'react';
import LandingPageModal from './LandingPageModal';
import Breaker from './Breaker';
import { fetchDataFromSpotify } from '@/app/api/spotify/fetchdata/route';

import WrappedForm from './WrappedForm';
import ResultsModal from './ResultsModal';
import html2canvas from 'html2canvas';
import ContactMe from './ContactMe';
import Typewriter from 'typewriter-effect';

interface HomePageProps {
	logout: () => void;
	token: string | null;
}

interface SpotifyItem {
	name: string;
	artists: { name: string }[];
	album: {
		images: { url: string }[];
	};
}
interface SpotifyResponse {
	items: SpotifyItem[];
}

const HomePage: React.FC<HomePageProps> = ({ logout, token }) => {
	const [timeRange, setTimeRange] = useState('medium_term');
	const [category, setCategory] = useState('tracks');
	const [wrappedFormId, setWrappedFormId] = useState('');

	const [albumImageUrl, setAlbumUrl] = useState(
		'https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526'
	);

	const [top5Tracks, setTopTracks] = useState([]);
	const [top5Artists, setTopArtists] = useState([]);

	const fetchTopTracks = useCallback(async () => {
		try {
			if (!token) {
				console.error('Access token is missing.');
				return;
			}

			const tokenExpiration = localStorage.getItem('spotify_token_expires');
			if (tokenExpiration && Date.now() > Number(tokenExpiration)) {
				logout();
				alert('Your Spotify token has expired. Please log in again.');
				return;
			}

			const accessToken = token;

			const topTracksData = await fetchDataFromSpotify(
				accessToken,
				timeRange,
				category
			);

			if (category === 'tracks') {
				const trackNames = topTracksData.items.map((item) => item.name);
				setTopTracks(trackNames);

				const artistNames = topTracksData.items.map(
					(item) => item.artists[0].name
				);
				setTopArtists(artistNames);

				const albumImageUrl = topTracksData.items[0].album.images[0].url;
				console.log(albumImageUrl);
				setAlbumUrl(albumImageUrl);

				console.log(artistNames);
			} else if (category === 'artists') {
				const trackNames = topTracksData.items.map((item) => item.name);
				setTopTracks(trackNames);

				const albumImageUrl = topTracksData.items[0].images[0].url;
				console.log(albumImageUrl);

				setAlbumUrl(albumImageUrl);
			}
		} catch (error) {
			console.error('Error fetching data from Spotify API:', error);
		}
	}, [token, timeRange, category, logout]);

	useEffect(() => {
		fetchTopTracks();
	}, [token, timeRange, category, fetchTopTracks]);

	useEffect(() => {
		const fetchTopTracks = async () => {
			// ... existing fetchTopTracks logic ...
		};

		fetchTopTracks();
	}, [token, timeRange, category]);

	const downloadDivContent = async (contentElement) => {
		// Clone the content and append it to the document body
		const clone = contentElement.cloneNode(true) as HTMLElement;
		clone.style.position = 'absolute';
		clone.style.top = '-9999px';
		document.body.appendChild(clone);

		// Manually adjust the z-index of the cloned content
		const allElements = clone.getElementsByTagName('*');
		for (let i = 0; i < allElements.length; i++) {
			const element = allElements[i] as HTMLElement;
			element.style.zIndex = '1';
		}

		try {
			// Wait for the styles to be applied before capturing
			await new Promise((resolve) => setTimeout(resolve, 500));

			// Capture the cloned content
			const canvas = await html2canvas(clone, {
				scale: 2,
				useCORS: true,
				allowTaint: true,
			});

			// Remove the clone from the document body
			document.body.removeChild(clone);

			// Process the captured image as needed
			const imageData = canvas.toDataURL('image/png');
			const downloadLink = document.createElement('a');

			downloadLink.href = imageData;
			downloadLink.download = `JWRAPPED_${category}_${timeRange}.png`;
			document.body.appendChild(downloadLink);
			downloadLink.click();
			document.body.removeChild(downloadLink);
		} catch (error) {
			console.error('Error capturing content:', error);
		}
	};

	const handleDownload = () => {
		setTimeout(() => {
			const contentElement = document.getElementById('JwrappedContent');
			if (contentElement) {
				downloadDivContent(contentElement);
			}
		}, 1000); // Adjust the delay as needed
	};

	return (
		<div className="bg-beige w-full lg:pt-5">
			<div className="flex flex-col items-center justify-center">
				<div className="grid grid-cols-1 lg:grid-cols-2 lg:px-20 lg:gap-4 px-5 gap-y-5">
					<div className="lg:my-5">
						<ResultsModal
							top5Tracks={top5Tracks}
							top5Artists={top5Artists}
							category={category}
							timeRange={timeRange}
							albumImageUrl={albumImageUrl}
						/>
					</div>
					<div className="flex flex-col justify-center">
						<WrappedForm
							category={category}
							timeRange={timeRange}
							setCategory={setCategory}
							setTimeRange={setTimeRange}
						/>
						<div className="flex flex-col lg:flex-row lg:place-self-end lg:gap-4">
							<button
								onClick={handleDownload}
								className="font-Monotage w-full lg:w-fit text-darkgreen bg-white border-4 border-darkgreen lg:text-[1.5rem] px-20 rounded-[10px] mt-4 hover:bg-darkgreen hover:text-white"
							>
								Download YOUR JWRAPPED
							</button>
							<button
								className="font-Monotage w-full lg:w-fit text-darkgreen bg-white border-4 border-darkgreen lg:text-[1.5rem] px-20 rounded-[10px] mt-4 hover:bg-darkgreen hover:text-white"
								onClick={logout}
							>
								logout
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
