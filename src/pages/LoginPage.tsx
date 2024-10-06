import React from 'react';
import { ContactMeSection, AboutSection, PrivacyPolicySection, Breaker, LandingPageModal, Divider } from '@/components';
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
		console.log(authUrl)
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
					<Divider/>
				</div>
			</header>
			<main>
				<div className="px-4 md:px-8 lg:px-20">
					<AboutSection />
				</div>
				<Breaker/>

				<div className="px-4 md:px-8 lg:px-20">
					<PrivacyPolicySection />
				</div>
			</main>
			<footer>
				<ContactMeSection />
			</footer>
		</div>
	);
};

export default LoginPage;
