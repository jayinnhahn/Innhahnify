import React from 'react';
import { motion } from 'framer-motion';
import {  useAnimation } from 'framer-motion';

export const PrivacyPolicySection = () => {
	const policies = [
		'Jwrapped is an open-source web application that allows users to generate and display their top Spotify tracks. By using Jwrapped, you agree to the following privacy policy:',
		'- Jwrapped utilizes the Spotify Web API to access your Spotify accounts top tracks.',
		'- Your Spotify account username and data are used solely for the purpose of fetching and displaying your top artists and tracks.',
		'- None of the data used by Jwrapped is stored or collected anywhere, and it is NOT shared with any third parties.',
		'- All information obtained from Spotify is used exclusively for the purpose of generating your Wrapped Spotify Data on Jwrapped.',
	];
	const controls = useAnimation();

	const handleInView = (inView: boolean) => {
		if (inView) {
			controls.start({ rotate: 0, scale: 1 });
		} 
	};

	return (
		<motion.div 		
		initial={{ rotate: 0, scale: 0 }}
		animate={controls}
		transition={{
			type: 'spring',
			stiffness: 100,
			damping: 20,
		}}
		onViewportEnter={() => handleInView(true)}
		className="grid content-between bg-beige rounded-[40px] w-full px-8 lg:px-16 py-8 gap-12 lg:gap-16 text-darkgreen border-8 border-darkgreen">
			<div className="w-full flex flex-col md:flex-row justify-between items-center">
				<div
					className="font-Monotage text-center md:text-left md:justify-self-start leading-none text-[4rem] md:text-[10rem] lg:text-[17rem]"
				>
					Privacy Policy
				</div>
				
			</div>
			<div className="text-justify font-Roboto">
				<ul>
					{policies.map((policy, index) => (
						<li
							key={index}
							className="text-[1.25rem] lg:text-[1.75rem] font-medium mb-2"
						>
							<div>{policy}</div>
						</li>
					))}
				</ul>
			</div>

			
		</motion.div>
	);
};

