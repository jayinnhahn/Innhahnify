/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { dev, isServer }) => {
		if (!dev && !isServer) {
			config.optimization.minimize = true;
			config.optimization.minimizer = [];
			const TerserPlugin = require('terser-webpack-plugin');
			config.optimization.minimizer.push(
				new TerserPlugin({
					terserOptions: {
						mangle: true,
						compress: {
							unused: true,
							dead_code: true,
							warnings: false,
						},
					},
				})
			);
		}
		return config;
	},
	productionBrowserSourceMaps: true,
	images: {
		domains: ['i.scdn.co', 't.scdn.co'],
	},
};

module.exports = nextConfig;
