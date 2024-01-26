import React from 'react';
import Image from 'next/image';
import { Roboto } from 'next/font/google';
import LandingPageImage from '../../public/Image/LandingPageImage.png';

interface LandingPageModalProps {
	onLogin: () => void;
}
const LandingPageModal: React.FC<LandingPageModalProps> = ({ onLogin }) => {
	return (
		<div className="relative flex justify-center lg:h-[40rem] rounded-3xl">
			<Image
				src={LandingPageImage}
				alt="RecWeekHeaderImage"
				className="object-cover rounded-[60px]"
				placeholder="blur"
				draggable={false}
				fill
			/>
			<div className="flex flex-col justify-center items-center z-10 text-white">
				<h1 className="font-Monotage text-center lg:w-[50rem] lg:text-[6rem] tracking-normal leading-none font-light mb-2">
					KNOW WHO YOUR FAVORITE ARTISTS ARE
				</h1>
				<div className="font-Roboto font-light lg:text-[1.5rem] text-center ">
					Click on the button below to know more about Jayify
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
