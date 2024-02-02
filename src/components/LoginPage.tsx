import React from 'react';
import LandingPageModal from './LandingPageModal';
import Breaker from './Breaker';
import AboutModal from './AboutModal';
import PrivacyPolicySection from './PrivacyPolicySection';
import ContactMe from './ContactMe';
import Typewriter from 'typewriter-effect';

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
	return (
		<div>
			<div className="bg-beige w-full pt-5 scroll-smooth">
				<div className="flex flex-col align-center items-center justify-center">
					<h1 className="text-darkgreen font-Monotage text-center text-newgreen text-[4rem] md:text-[6rem] lg:text-[11rem] tracking-wide font-bold lg:w-[48rem] leading-none mb-5 ">
						FIND YOUR
						<Typewriter
							options={{
								strings: ['TOP TRACKS', 'TOP ARTISTS'],
								autoStart: true,
								loop: true,
							}}
						/>
					</h1>
				</div>
				<div className="px-4 md:px-8 lg:px-20">
					<LandingPageModal onLogin={handleLogin} />
				</div>
			</div>
			<Breaker />
			<div className="px-4 md:px-8 lg:px-20">
				<AboutModal />
			</div>
			<Breaker />
			<div className="px-4 md:px-8 lg:px-20">
				<PrivacyPolicySection />
			</div>
			<ContactMe />
		</div>
	);
};

export default LoginPage;
