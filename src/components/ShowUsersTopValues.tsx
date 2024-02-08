import React from 'react';
import { useState } from 'react';
import axios from 'axios';

interface User {
	userId: string;
}

interface ShowUsersTopValuesProps {
	users: User[];
}

const ShowUsersTopValues: React.FC<ShowUsersTopValuesProps> = ({ users }) => {
	const [timeRange, setTimeRange] = useState('medium_term');
	const fetchTopTracks = async () => {
		try {
			const accessTokens = users.map((user) => user.userId);

			const response = await axios.get(`/api/spotify/top-users`, {
				params: {
					access_tokens: accessTokens,
					time_range: timeRange,
				},
			});

			const topTracksData = response.data;

			console.log(topTracksData);
		} catch (error) {
			console.error('Error fetching top users and tracks:', error);
		}
	};

	return (
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
			{/* <button onClick={fetchTopArtists}>Fetch Top Artists</button> */}
		</div>
	);
};

export default ShowUsersTopValues;
