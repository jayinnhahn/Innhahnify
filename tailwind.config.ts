import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				marquee: 'marquee 125s linear infinite',
				marquee2: 'marquee2 105s linear infinite',
				marqueereverse: 'marquee 125s reverse linear infinite',
				marquee2reverse: 'marquee2 105s reverse linear infinite',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' },
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				beige: '#FEFAE0',
				darkgreen: '#0D1208',
				green: '#283618',
				neworange: '#FF7800',
				spotify: '#1DB954',
			},
			fontFamily: {
				Monotage: ['var(--Monotage)'],
				Roboto: ['var(--Roboto)'],
			},

			screens: {
				xsm: '384px',
				sm: '576px',
				md: '768px',
				lg: '992px',
				xl: '1200px',
				'2xl': '1400px',
			},
		},
	},
	plugins: [],
};
export default config;
