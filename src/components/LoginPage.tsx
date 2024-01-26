import React from 'react';
import LandingPageModal from './LandingPageModal';
import Breaker from './Breaker';
import AboutModal from './AboutModal';
import PrivacyPolicySection from './PrivacyPolicySection';
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
				<div className="flex justify-center">
					<h1 className="text-darkgreen font-Monotage text-center text-newgreen lg:text-[11rem] tracking-wide font-bold lg:w-[48rem] leading-none ">
						FIND YOUR TOP TRACKS
					</h1>
				</div>
				<div className="px-20">
					<LandingPageModal onLogin={handleLogin} />
				</div>
			</div>
			<Breaker />
			<div className="px-20">
				<AboutModal />
			</div>
			<Breaker />
			<div className="px-20">
				<PrivacyPolicySection />
			</div>
		</div>
	);
};

export default LoginPage;
