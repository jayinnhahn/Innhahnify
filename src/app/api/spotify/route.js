import fetchDataFromSpotify from '../spotify/fetchdata/route';

export default async function handler(req, res) {
	const { accessToken, timeRange, category } = req.query;

	try {
		const data = await fetchDataFromSpotify(accessToken, timeRange, category);

		res.status(200).json(data);
	} catch (error) {
		console.error('Error fetching top users and tracks:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}
