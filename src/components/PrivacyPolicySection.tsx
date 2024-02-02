import React from 'react';
import Image from 'next/image';
import LogoImage from '../../public/Image/Jwrppedlogo.png';

const PrivacyPolicySection = () => {
	return (
		<div>
			<div className="w-full flex flex-col md:flex-row justify-between items-center text-darkgreen">
				<h2 className="font-Monotage text-center md:text-left md:justify-self-start leading-none text-[8rem] md:text-[10rem] lg:text-[17rem] ">
					Privacy Policy
				</h2>
				<div className="relative justify-self-end w-[20rem] lg:w-[40rem] h-fit mr-10">
					<Image
						src={LogoImage}
						alt="RecWeekHeaderImage"
						className="object-cover rounded-[60px]"
						placeholder="blur"
						draggable={false}
					/>
				</div>
			</div>
			<hr className="border-8 border-darkgreen my-6" />
			<p className="text-justify font-Roboto text-[1.5rem] lg:text-[2rem] font-black mb-2 text-green">
				Jwrapped is an open-source web application that allows users to generate
				and display their top Spotify tracks. By using Jwrapped, you agree to
				the following privacy policy:
			</p>
			<p className="text-justify font-Roboto text-[1.25rem] lg:text-[1.75rem] font-medium mb-2">
				- Jwrapped utilizes the Spotify Web API to access your Spotify accounts
				top tracks.
			</p>
			<p className="text-justify font-Roboto  text-[1.25rem] lg:text-[1.75rem] font-medium mb-2">
				- Your Spotify account username and data are used solely for the purpose
				of fetching and displaying your top artists and tracks.
			</p>
			<p className="text-justify font-Roboto text-[1.25rem] lg:text-[1.75rem] font-medium mb-2">
				- None of the data used by Jwrapped is stored or collected anywhere, and
				it is NOT shared with any third parties.
			</p>
			<p className="text-justify font-Roboto text-[1.25rem] lg:text-[1.75rem] font-medium mb-2">
				- All information obtained from Spotify is used exclusively for the
				purpose of generating your Wrapped Spotify Data on Jwrapped.
			</p>
		</div>
	);
};

export default PrivacyPolicySection;
