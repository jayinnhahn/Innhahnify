import React from 'react';
import LandingPageModal from '@/components/LandingPageModal';
import Breaker from '@/components/Breaker';
import AboutModal from '@/components/AboutModal';
import PrivacyPolicySection from '@/components/PrivacyPolicySection';
import ContactMe from '@/components/ContactMe';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

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
		<div>
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
				<div className="px-4 md:px-8 lg:px-20">
					<AboutModal />
				</div>
				<nav>
					<Breaker />
				</nav>

				<div className="px-4 md:px-8 lg:px-20">
					<PrivacyPolicySection />
				</div>
			</main>
			<footer>
				<ContactMe />
			</footer>
		</div>
	);
};

export default LoginPage;
