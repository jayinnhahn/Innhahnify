import React from 'react';

interface ResultsModalProps {
	top5Tracks: string[];
	top5Artists: string[];
	category: string;
	timeRange: string;
}

const ResultsModal: React.FC<ResultsModalProps> = ({
	top5Tracks,
	top5Artists,
	category,
	timeRange,
}) => {
	const descriptionSignal =
		category === 'tracks'
			? 'HERE WERE THE TOP TRACKS YOU LISTENED '
			: 'HERE WERE THE TOP ARTISTS YOU LISTENED';

	const timeRangeDescriptionSignal =
		timeRange === 'short_term'
			? 'FOR THE PAST MONTH'
			: timeRange === 'medium_term'
			? ' FOR THE PAST 6 MONTHS'
			: 'ALL TIME';

	return (
		<div className="grid  content-between bg-darkgreen rounded-[40px] h-fit w-full px-8 py-8 gap-4">
			<div className="justify-self-end text-right text-white">
				<h2 className="font-Monotage text-[11rem] leading-none">jwRAPPED</h2>
				<p className="font-Monotage text-[2.6rem] leading-none">
					{descriptionSignal} {timeRangeDescriptionSignal}
				</p>
			</div>

			{category === 'tracks'
				? top5Tracks.map((item, index) => (
						<div className="flex flex-col" key={index}>
							<p className="font-Monotage text-[4rem] text-white leading-none">
								# {index + 1} {item}
							</p>
							<p className="font-Monotage text-[2rem] text-white">
								{top5Artists[index]}
							</p>
						</div>
				  ))
				: top5Tracks.map((item, index) => (
						<div className="flex flex-col" key={index}>
							<p className="font-Monotage text-[4rem] text-white">
								# {index + 1} {item}
							</p>
						</div>
				  ))}
		</div>
	);
};

export default ResultsModal;
