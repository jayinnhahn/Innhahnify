import React from 'react';

const Breaker = () => {
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

	const renderPhrases = () => {
		return BreakerText.map((text, index) => (
			<div className="flex items-center" key={index}>
				<span className="font-Monotage text-[4rem] leading-none mx-4">
					{text}
				</span>
				<div className="box-border bg-neworange border-black border-4 w-[10rem] h-[4rem] " />
			</div>
		));
	};

	return (
		<div className="mx-20 my-12">
			<div className="my-6 relative flex overflow-hidden">
				<div className="flex animate-marquee whitespace-nowrap">
					{renderPhrases()}
				</div>
				<div className="flex animate-marquee2 whitespace-nowrap">
					{renderPhrases()}
				</div>
			</div>
			<div className="my-6 relative flex overflow-hidden">
				<div className="flex animate-marqueereverse whitespace-nowrap">
					{renderPhrases()}
				</div>
				<div className="flex animate-marquee2reverse whitespace-nowrap">
					{renderPhrases()}
				</div>
			</div>
		</div>
	);
};

export default Breaker;
