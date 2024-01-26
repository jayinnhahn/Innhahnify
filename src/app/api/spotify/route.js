import axios from 'axios';

export const fetchDataFromSpotify = async (
	accessToken,
	timeRange,
	category
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
