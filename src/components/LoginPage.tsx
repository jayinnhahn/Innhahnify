import React from 'react';
import LandingPageModal from '@/components/LandingPageModal';
import Breaker from '@/components/Breaker';
import AboutModal from '@/components/AboutModal';
import PrivacyPolicySection from '@/components/PrivacyPolicySection';
import ContactMe from '@/components/ContactMe';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

interface LoginPageProps {
	data: {
		CLIENT_ID?: string;
		REDIRECT_URL?: string;
		AUTH_ENDPOINT?: string;
		RESPONSE_TYPE: string;
	};
}
const LoginPage: React.FC<LoginPageProps> = ({ data }) => {
	const handleLogin = () => {
		const authUrl = `${data.AUTH_ENDPOINT}?client_id=${data.CLIENT_ID}&redirect_uri=${data.REDIRECT_URL}&response_type=${data.RESPONSE_TYPE}&scope=user-top-read`;
		window.location.href = authUrl;
	};
	const [Words] = useTypewriter({
		words: ['TRACKS', 'ARTISTS'],
		loop: 0,
		typeSpeed: 120,
		deleteSpeed: 80,
	});
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<header className="bg-beige w-full pt-5 scroll-smooth">
				<div className="flex flex-col align-center items-center justify-center">
					<h1 className="text-darkgreen font-Monotage text-center text-newgreen text-[4rem] md:text-[6rem] lg:text-[11rem] tracking-wide font-bold lg:w-[48rem] leading-none mb-5 ">
						FIND YOUR
						<span className="block">
							Top {Words} <Cursor />
						</span>
					</h1>
				</div>
				<div className="px-4 md:px-8 lg:px-20">
					<LandingPageModal onLogin={handleLogin} />
				</div>
			</header>
			<nav>
				<Breaker />
			</nav>
			<main>
				<motion.section
					initial={{ x: -100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<div className="px-4 md:px-8 lg:px-20">
						<AboutModal />
					</div>
				</motion.section>
				<nav>
					<Breaker />
				</nav>
				<motion.section
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<div className="px-4 md:px-8 lg:px-20">
						<PrivacyPolicySection />
					</div>
				</motion.section>
			</main>
			<footer>
				<ContactMe />
			</footer>
		</motion.div>
	);
};

export default LoginPage;
