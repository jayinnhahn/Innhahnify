import React, { useEffect } from 'react';
import Image from 'next/image';
import LogoImage from '../../public/Image/Jwrppedlogo.png';
import { motion, animate } from 'framer-motion';
import { inView } from 'framer-motion';

const PrivacyPolicySection = () => {
	const policies = [
		'Jwrapped is an open-source web application that allows users to generate and display their top Spotify tracks. By using Jwrapped, you agree to the following privacy policy:',
		'- Jwrapped utilizes the Spotify Web API to access your Spotify accounts top tracks.',
		'- Your Spotify account username and data are used solely for the purpose of fetching and displaying your top artists and tracks.',
		'- None of the data used by Jwrapped is stored or collected anywhere, and it is NOT shared with any third parties.',
		'- All information obtained from Spotify is used exclusively for the purpose of generating your Wrapped Spotify Data on Jwrapped.',
	];

	React.useEffect(() => {
		const unsubscribe = inView('div', (info) => {
			// Animate the section when it enters the viewport
			animate(info.target, { scale: 1 });

			return () => {
				animate(info.target, { scale: 0 });
			};
		});

		return unsubscribe;
	}, []);

	return (
		<div>
			<div className="w-full flex flex-col md:flex-row justify-between items-center text-darkgreen">
				<motion.div
					initial={{ scale: 0 }}
					className="font-Monotage text-center md:text-left md:justify-self-start leading-none text-[4rem] md:text-[10rem] lg:text-[17rem]"
				>
					Privacy Policy
				</motion.div>
				<div className="relative justify-self-center lg:justify-self-end w-[10rem] md:w-[20rem] lg:w-[40rem] h-fit mr-10">
					<Image
						src={LogoImage}
						alt="Jwrpped Logo"
						className="object-cover"
						placeholder="blur"
						draggable={false}
						sizes="(max-width: 640px)"
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
							<motion.div initial={{ scale: 0 }}>{policy}</motion.div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PrivacyPolicySection;
