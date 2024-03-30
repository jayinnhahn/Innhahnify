import React from 'react';
import Image from 'next/image';
import LandingPageImage from '../../public/Image/LandingPageImage.png';
import { motion, useAnimation } from 'framer-motion';

interface LandingPageModalProps {
	onLogin: () => void;
}

const LandingPageModal: React.FC<LandingPageModalProps> = ({ onLogin }) => {
	const controls = useAnimation();

	const handleInView = (inView: boolean) => {
		if (inView) {
			controls.start({ rotate: 0, scale: 1 });
		} else {
			controls.start({ rotate: 0, scale: 0 });
		}
	};

	return (
		<motion.div
			initial={{ rotate: 0, scale: 0 }}
			animate={controls}
			transition={{
				type: 'spring',
				stiffness: 260,
				damping: 20,
			}}
			onViewportEnter={() => handleInView(true)}
			onViewportLeave={() => handleInView(false)}
		>
			<div className="relative flex justify-center px-4 py-4 h-[20rem] lg:h-[40rem] rounded-3xl overflow-hidden">
				<div className="max-w-full aspect-w-1080 aspect-h-576">
					<Image
						src={LandingPageImage}
						alt="Landing Page Image of a Singer"
						placeholder="blur"
						draggable={false}
						objectFit="cover"
						fill
					/>
				</div>
				<div className="flex flex-col justify-center items-center z-10 text-white">
					<h1 className="font-Monotage text-center text-3xl lg:text-6xl xl:text-8xl tracking-normal leading-none font-light mb-2">
						GET YOUR JWRAPPED HERE
					</h1>
					<p className="font-Roboto font-light text-lg lg:text-xl text-center">
						Click on the button to get your top tracks or top artists.
					</p>

					<button
						onClick={onLogin}
						className="font-Monotage text-lg lg:text-xl px-8 py-3 bg-white text-darkgreen border-4 tracking-normal border-darkgreen rounded-[40px] mt-4 transition duration-300 hover:bg-spotify hover:text-white"
						aria-label="Login to Spotify Here"
					>
						Login to Spotify Here
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default LandingPageModal;
