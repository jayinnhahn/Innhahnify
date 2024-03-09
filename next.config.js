/** @type {import('next').NextConfig} */
const nextConfig = {
	productionBrowserSourceMaps: true,
	images: {
		domains: ['i.scdn.co', 't.scdn.co'],
	},
};

module.exports = nextConfig;
