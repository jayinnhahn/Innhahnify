import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Roboto } from 'next/font/google';

export const metadata: Metadata = {
	title: 'Jwrapped',
	description: 'Generate a Spotify Wrapped-style summary.',
};

const Monotage = localFont({
	src: [
		{
			path: '../../public/fonts/Monotage-Sans-Regular.ttf',
			weight: '300',
		},
	],
	variable: '--Monotage',
});

const roboto = Roboto({
	weight: '300',
	subsets: ['latin'],
	variable: '--Roboto',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${Monotage.variable} ${roboto.className}`}>
				{children}
			</body>
		</html>
	);
}
