import React from 'react';
import Image from 'next/image';
import SpotifyLogo from '../../public/Image/spotifylogo.png';

interface ResultsModalProps {
	top5Tracks: string[];
	top5Artists: string[];
	category: string;
	timeRange: string;
	albumImageUrl: string;
	forDownload: boolean; // Declare forDownload prop
}

const ResultsModal: React.FC<ResultsModalProps> = ({
	top5Tracks,
	top5Artists,
	category,
	timeRange,
	albumImageUrl,
	forDownload,
}) => {
	const descriptionSignal =
		category === 'tracks'
			? 'HERE WERE THE TOP TRACKS YOU LISTENED '
			: 'HERE WERE THE TOP ARTISTS YOU LISTENED ';

	const timeRangeDescriptionSignal =
		timeRange === 'short_term'
			? 'FOR THE PAST MONTH'
			: timeRange === 'medium_term'
			? 'FOR THE PAST 6 MONTHS'
			: 'ALL TIME';

	return (
		<div
			id="JwrappedContent"
			className={`relative grid p-8 w-fit h-[43.75rem]`}
		>
			<Image
				src={albumImageUrl}
				alt="ImageUrlOfTheAlbum"
				className={`object-cover brightness-25 z-1 ${
					forDownload ? '' : 'h-[43.75rem] w-[22.5rem]'
				}`}
				draggable={false}
				fill
			/>
			<div className="absolute top-0 left-0 w-full h-full bg-darkgreen opacity-90"></div>
			<div className="grid content-between mt-0 z-10">
				<div
					className={`grid relative justify-self-end text-right text-white w-full flex-wrap ${
						forDownload ? '' : 'leading-none'
					} `}
				>
					<h2 className="font-Monotage text-[5rem]">JWRAPPED</h2>
					<p className="font-Monotage text-[1rem]">
						{descriptionSignal} {timeRangeDescriptionSignal}
					</p>
				</div>
				<div className="relative grid grid-cols-3 mb-5">
					<div className="grid col-span-2 content-between gap-3">
						{category === 'tracks'
							? top5Tracks.map((item, index) => (
									<div className="flex flex-col mt-auto" key={index}>
										<p className="font-Monotage text-[1.5rem] text-white leading-none">
											# {index + 1} {item}
										</p>
										<p className="font-Monotage text-[1.25rem] leading-none text-white">
											{top5Artists[index]}
										</p>
									</div>
							  ))
							: top5Tracks.map((item, index) => (
									<div className="flex flex-col" key={index}>
										<p className="font-Monotage text-[1.5rem] text-white">
											# {index + 1} {item}
										</p>
									</div>
							  ))}
					</div>
					<div className="relative justify-self-end self-end w-[2rem] h-[2rem] lg:[2.5rem] lg:[2.5rem]">
						<Image
							src={SpotifyLogo}
							alt="RecWeekHeaderImage"
							className="object-cover brightness-25 z-1 w-full h-full"
							placeholder="blur"
							draggable={false}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResultsModal;
