import React from 'react';

interface ResultsModalProps {
	top5Tracks: string[];
	top5Artists: string[];
	category: string;
}

const ResultsModal: React.FC<ResultsModalProps> = ({
	top5Tracks,
	top5Artists,
	category,
}) => {
	return (
		<div className="grid  content-between bg-darkgreen rounded-[40px] h-fit w-full px-16 py-8 gap-16 mx-20">
			<div className="justify-self-end text-right text-white">
				<h2 className="font-Monotage text-[11rem] leading-none">jwRAPPED</h2>
				<p className="font-Monotage text-[2.6rem] leading-none">
					{category === 'tracks'
						? 'HERE WERE YOUR TOP TRACKS AND ARTISTS YOU LISTENED FOR THE PAST 6 MONTHS'
						: 'HERE WERE YOUR TOP ARTISTS YOU LISTENED FOR THE PAST 6 MONTHS'}
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
