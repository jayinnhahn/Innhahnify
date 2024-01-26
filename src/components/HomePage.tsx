import React, { useEffect, useState } from 'react';
import LandingPageModal from './LandingPageModal';
import Breaker from './Breaker';
import { fetchDataFromSpotify } from '@/app/api/spotify/route';
import WrappedForm from './WrappedForm';
import ResultsModal from './ResultsModal';
interface HomePageProps {
	logout: () => void;
	token: string | null;
}

const HomePage: React.FC<HomePageProps> = ({ logout, token }) => {
	const [timeRange, setTimeRange] = useState('medium_term');
	const [category, setCategory] = useState('artists');

	const [top5Tracks, setTopTracks] = useState([]);
	const [top5Artists, setTopArtists] = useState([]);

	const fetchTopTracks = async () => {
		try {
			if (!token) {
				console.error('Access token is missing.');
				return;
			}
			const accessToken = token;

			const topTracksData = await fetchDataFromSpotify(
				accessToken,
				timeRange,
				category
			);
			console.log(topTracksData);
			if (category === 'tracks') {
				const trackNames = topTracksData.items.map((item) => item.name);
				setTopTracks(trackNames);

				const artistNames = topTracksData.items.map(
					(item) => item.artists[0].name
				);
				setTopArtists(artistNames);

				console.log(artistNames);
			} else if (category === 'artists') {
				const trackNames = topTracksData.items.map((item) => item.name);
				setTopTracks(trackNames);
			}
		} catch (error) {
			console.error('Error fetching data from Spotify API:', error);
		}
	};

	return (
		<div className="bg-beige w-full pt-5">
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-darkgreen font-Monotage text-center text-newgreen lg:text-[8rem] tracking-wide font-bold  leading-none ">
					INPUT THE NECESSARY DETAILS
				</h1>

				<div className="px-20">
					<WrappedForm
						category={category}
						timeRange={timeRange}
						setCategory={setCategory}
						setTimeRange={setTimeRange}
						fetchTopTracks={fetchTopTracks}
					/>
				</div>
			</div>
			<div className="flex justify-center">
				<ResultsModal
					top5Tracks={top5Tracks}
					top5Artists={top5Artists}
					category={category}
				/>
				<button onClick={logout}> logoui</button>
			</div>
		</div>
	);
};

export default HomePage;
