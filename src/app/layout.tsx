import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { Roboto } from 'next/font/google';
export const metadata: Metadata = {
	title: 'Jwrapped',
	description: 'Get your top tracks/artists',
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
		<html lang="en" className={`${Monotage.variable} ${roboto.className}`}>
			<body>{children}</body>
		</html>
	);
}
