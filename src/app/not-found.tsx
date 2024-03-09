'use client';

import { useRef } from 'react';
import Link from 'next/link';

export default function NotFound() {
	const sectionsRef = useRef(null);

	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex-grow flex-col flex justify-center items-center mx-10">
				<h1 className="text-xl xsm:text-2xl sm:text-4xl font-bold font-rightGroteskCompactBlack uppercase mb-1 text-left">
					Oops! It seems there&rsquo;s nothing here.
				</h1>
				<p className="text-l">
					<Link href="/">
						<span className="ml-1">GET BACK</span>
					</Link>
				</p>
			</div>
		</div>
	);
}
