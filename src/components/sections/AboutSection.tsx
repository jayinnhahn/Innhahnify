import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection = () => {
	return (
		<motion.div
			initial={{ rotate: 0, scale: 0 }}
			animate={{ rotate: 0, scale: 1 }}
			transition={{
				type: 'spring',
				stiffness: 100,
				damping: 20,
			}}> 
			<div className="grid content-between bg-neworange rounded-[40px] w-full px-8 lg:px-16 py-8 gap-12 lg:gap-16 text-darkgreen"
		>
			<h2 className="font-Monotage justify-center text-center md:text-left lg:justify-self-start leading-none text-[6rem] md:text-[11rem] lg:text-[17rem]">
				About
			</h2>
			<div className="justify-center md:justify-self-end md:w-[30rem] lg:w-full xl:w-[40rem]">
				<p className="text-center md:text-right font-bold text-[1rem] lg:text-[1.5rem]">
					Inspired by Receiptify, Jwrapped is a tool to showcase the top artist
					and top songs the user has in the last week, last 6 months and all
					time favorites, But its structure is more on a Spotify Wrapped type of
					vibe.
				</p>
			</div>
			</div>
		</motion.div>
	);
};

