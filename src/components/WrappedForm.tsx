import React from 'react';

interface WrappedFormProps {
	category: string;
	timeRange: string;
	setCategory: React.Dispatch<React.SetStateAction<string>>;
	setTimeRange: React.Dispatch<React.SetStateAction<string>>;
	fetchTopTracks: () => void;
}
const timeRangeOptions = [
	{ label: 'A Month', value: 'short_term' },
	{ label: '6 Months', value: 'medium_term' },
	{ label: 'All Time', value: 'long_term' },
];
const WrappedForm: React.FC<WrappedFormProps> = ({
	category,
	timeRange,
	setCategory,
	setTimeRange,
	fetchTopTracks,
}) => {
	return (
		<div className="grid content-between bg-neworange rounded-[40px] h-fit w-full px-16 py-8 gap-16">
			<h2 className="text-white font-Monotage text-left text-newgreen lg:text-[4rem]  font-normal lg:w-[48rem] leading-none">
				WHAT CATEGORY WOULD YOU LIKE?
			</h2>
			<div className="flex ml-4">
				<button
					className={`px-20 py-2 text-[2rem] font-Monotage rounded-l-[15px] border-4 border-darkgreen ${
						category === 'artists'
							? 'bg-darkgreen text-white'
							: 'bg-white text-darkgreen'
					}`}
					onClick={() => setCategory('artists')}
				>
					Top Tracks
				</button>
				<button
					className={`px-20 py-2 text-[2rem] font-Monotage rounded-r-[15px] border-4 border-darkgreen ${
						category === 'tracks'
							? 'bg-darkgreen text-white'
							: 'bg-white text-darkgreen'
					}`}
					onClick={() => setCategory('tracks')}
				>
					Top Artists
				</button>
			</div>

			<h2 className="text-white font-Monotage text-left text-newgreen lg:text-[4rem] font-normal lg:w-[48rem] leading-none ">
				what time period would your wrapped consists of?{' '}
			</h2>
			<form className="flex">
				{timeRangeOptions.map(({ label, value }) => (
					<div
						key={value}
						className={`flex py-[0.5rem] px-[4rem] rounded-[15px] font-Monotage lg:text-[1.5rem] bg-white border-2 border-round mx-2 border-darkgreen text-darkgreen
              ${
								timeRange === value
									? 'text-white bg-darkgreen border-darkgreen'
									: 'text-darkgreen'
							}`}
					>
						<input
							type="radio"
							id={value}
							checked={timeRange === value}
							onChange={() => setTimeRange(value)}
							style={{ display: 'none' }}
						/>
						<label
							htmlFor={value}
							className="block ml-2 font-medium cursor-pointer"
						>
							{label}
						</label>
					</div>
				))}
			</form>

			<button
				onClick={fetchTopTracks}
				className="font-Monotage w-fit  text-darkgreen bg-white border-4  border-darkgreen lg:text-[1.5rem] px-20 rounded-[10px] mt-4"
			>
				Submit
			</button>
		</div>
	);
};

export default WrappedForm;
