import React from 'react';
import { motion } from 'framer-motion';

export const Breaker = () => {
	const BreakerText = [
		'EXPLORE YOUR MUSICAL TASTE',
		'EXPERIENCE CREATIVITY IN SIMPLICITY',
		'EXPLORE YOUR MUSICAL TASTE',
		'EXPERIENCE CREATIVITY IN SIMPLICITY',
		'EXPLORE YOUR MUSICAL TASTE',
		'EXPERIENCE CREATIVITY IN SIMPLICITY',
		'EXPLORE YOUR MUSICAL TASTE',
		'EXPERIENCE CREATIVITY IN SIMPLICITY',
		'EXPLORE YOUR MUSICAL TASTE',
		'EXPERIENCE CREATIVITY IN SIMPLICITY',
		'EXPLORE YOUR MUSICAL TASTE',
		'EXPERIENCE CREATIVITY IN SIMPLICITY',
	];

	const renderPhrases = () =>
		BreakerText.map((text, index) => (
			<div className="flex items-center" key={index}>
				<span className="font-Monotage text-[4rem] leading-none mx-4">
					{text}
				</span>
				<div className="box-border bg-neworange border-black border-4 w-[10rem] h-[4rem]" />
			</div>
		));

	return (
		<div className="mx-5 lg:mx-20 my-12">
			<div className="my-6 relative flex overflow-hidden">
				<motion.div
					className="flex animate-marquee whitespace-nowrap"
					animate={{
						x: [-100, 0, 100, 200],
						y: [0, 100, 0, -100],
						transition: { duration: 5, repeat: Infinity, repeatType: 'loop' },
					}}
				>
					{renderPhrases()}
					{renderPhrases()}
				</motion.div>
			</div>
			<div className="my-6 relative flex overflow-hidden">
				<motion.div
					className="flex flex-end animate-marqueereverse whitespace-nowrap"
					animate={{
						x: [200, 100, 0, -100],
						y: [-100, 0, 100, 0],
						transition: { duration: 5, repeat: Infinity, repeatType: 'loop' },
					}}
				>
					{renderPhrases()}
					{renderPhrases()}
				</motion.div>
			</div>
		</div>
	);
};

