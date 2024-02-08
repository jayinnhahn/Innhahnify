import React from 'react';
import Image from 'next/image';
import LogoImage from '../../public/Image/Jwrppedlogo.png';

const PrivacyPolicySection = () => {
	const policies = [
		'Jwrapped is an open-source web application that allows users to generate and display their top Spotify tracks. By using Jwrapped, you agree to the following privacy policy:',
		'- Jwrapped utilizes the Spotify Web API to access your Spotify accounts top tracks.',
		'- Your Spotify account username and data are used solely for the purpose of fetching and displaying your top artists and tracks.',
		'- None of the data used by Jwrapped is stored or collected anywhere, and it is NOT shared with any third parties.',
		'- All information obtained from Spotify is used exclusively for the purpose of generating your Wrapped Spotify Data on Jwrapped.',
	];

	return (
		<div>
			<div className="w-full flex flex-col md:flex-row justify-between items-center text-darkgreen">
				<h2 className="font-Monotage text-center md:text-left md:justify-self-start leading-none text-[6rem] md:text-[10rem] lg:text-[17rem] ">
					Privacy Policy
				</h2>
				<div className="relative justify-self-end w-[20rem] lg:w-[40rem] h-fit mr-10">
					<Image
						src={LogoImage}
						alt="Jwrpped Logo"
						className="object-cover rounded-[60px]"
						placeholder="blur"
						draggable={false}
						priority
					/>
				</div>
			</div>
			<hr className="border-8 border-darkgreen my-6" />
			<div className="text-justify font-Roboto">
				<ul>
					{policies.map((policy, index) => (
						<li
							key={index}
							className="text-[1.25rem] lg:text-[1.75rem] font-medium mb-2"
						>
							{policy}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PrivacyPolicySection;
