import React from 'react';
import LogoImage from '../../public/Image/Jwrppedlogo.png';
import Image from 'next/image';
interface WrappedFormProps {
	category: string;
	timeRange: string;
	setCategory: React.Dispatch<React.SetStateAction<string>>;
	setTimeRange: React.Dispatch<React.SetStateAction<string>>;
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
}) => {
	return (
		<div className="grid bg-green rounded-[40px] w-full px-4 py-4 lg:px-16 lg:py-16 lg:h-fit">
			<div className="flex flex-col items-center justify-center ">
				<div className="relative h-20 w-20 ">
					<Image
						src={LogoImage}
						alt="Jay Picture"
						className="object-cover"
						draggable={false}
						fill
					/>
				</div>
				<h1 className="text-beige font-Monotage text-center text-newgreen text-[1.5rem] lg:text-[2rem] font-normal leading-none lg:my-2">
					CUSTOMIZE YOUR JWRAPPED
				</h1>
			</div>
			<hr className="lg:border-4 border-2 border-beige my-4 lg:my-6" />

			<h2 className="text-beige font-Monotage text-left text-newgreen text-[1.5rem] lg:text-[3rem] font-normal leading-none mb-4">
				WHAT CATEGORY WOULD YOU LIKE?
			</h2>
			<div className="grid grid-flow-col lg:ml-4 lg:justify-none mb-2 md:mb-4">
				<button
					className={`px-4 py-2 text-[1rem] rounded-l-[5px] lg:px-10  lg:text-[2rem] font-Monotage lg:rounded-l-[15px] lg:border-4 border-darkgreen ${
						category === 'tracks'
							? 'bg-darkgreen text-white'
							: 'bg-white text-darkgreen'
					}`}
					onClick={() => setCategory('tracks')}
				>
					Top Tracks
				</button>
				<button
					className={`px-4 py-2 text-[1rem] rounded-r-[5px] lg:px-10 lg:text-[2rem] font-Monotage lg:rounded-r-[15px] lg:border-4 border-darkgreen ${
						category === 'artists'
							? 'bg-darkgreen text-white'
							: 'bg-white text-darkgreen'
					}`}
					onClick={() => setCategory('artists')}
				>
					Top Artists
				</button>
			</div>
			<div className="flex flex-col">
				<h2 className="text-beige font-Monotage text-left text-[1rem] lg:text-[3rem] font-normal leading-none mb-4">
					What time period would your wrapped consist of?
				</h2>
				<div className="grid grid-flow-col gap-2 md:gap-4 mb-4">
					{timeRangeOptions.map(({ label, value }) => (
						<div
							key={value}
							className={`flex py-[0.5rem] px-[1rem] lg:px-[3rem] rounded-[10px] lg:rounded-[15px] font-Monotage border-2 border-round border-darkgreen justify-center
              ${
								timeRange === value
									? 'bg-darkgreen text-white'
									: 'bg-white text-darkgreen cursor-pointer'
							}`}
							onClick={() => setTimeRange(value)}
						>
							<input
								type="radio"
								id={value}
								checked={timeRange === value}
								onChange={() => {}}
								style={{ display: 'none' }}
							/>
							<label
								htmlFor={value}
								className="text-center text-[1rem] lg:text-[1.5rem] font-medium text-wrap"
							>
								{label}
							</label>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WrappedForm;
