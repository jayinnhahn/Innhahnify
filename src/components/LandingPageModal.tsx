import React from 'react';
import Image from 'next/image';
import { Roboto } from 'next/font/google';
import LandingPageImage from '../../public/Image/LandingPageImage.png';

interface LandingPageModalProps {
	onLogin: () => void;
}
const LandingPageModal: React.FC<LandingPageModalProps> = ({ onLogin }) => {
	return (
		<div className="relative flex justify-center px-4 py-4 h-[25rem] lg:h-[40rem] rounded:2xl lg:rounded-3xl">
			<Image
				src={LandingPageImage}
				alt="RecWeekHeaderImage"
				className="object-cover rounded-[60px]"
				placeholder="blur"
				draggable={false}
				fill
			/>
			<div className="flex flex-col justify-center items-center z-10 text-white">
				<h1 className="font-Monotage text-center text-[3rem] lg:w-[50rem] lg:text-[6rem] tracking-normal leading-none font-light mb-2">
					GET YOU JWRAPPED HERE
				</h1>
				<div className="font-Roboto font-light lg:text-[1.5rem] text-center ">
					Click on the button to get your top tracks or top artists.
				</div>

				<button
					onClick={onLogin}
					className="font-Monotage w-fit  text-darkgreen bg-white border-4 hover:bg-spotify border-darkgreen lg:text-[1.5rem] px-8 rounded-[40px] mt-4"
				>
					Login to Spotify Here
				</button>
			</div>
		</div>
	);
};

export default LandingPageModal;
