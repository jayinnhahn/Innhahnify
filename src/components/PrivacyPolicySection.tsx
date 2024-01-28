import React from 'react';

const PrivacyPolicySection = () => {
	return (
		<div>
			<div className="w-full flex justify-between items-center">
				<h2 className="font-Monotage justify-self-start leading-none text-[17rem] ">
					Privacy Policy
				</h2>
				<div className="box-border justify-self-end bg-neworange border-black border-8 w-[25rem] h-[10rem] mr-10" />
			</div>
			<hr className="border-8 border-black my-4" />
			<p className="font-Roboto text-[1.75rem] font-medium mb-2">
				Spotify was developed as an open source app powered by the
				Spotify/Last.fm/Apple Music Web API. By choosing to use this app, you
				agree to the use of your Spotify account username and data for your top
				artists and tracks.
			</p>
			<p className="font-Roboto text-[1.75rem] font-medium mb-2">
				None of the data used by Jwrapped is stored or collected anywhere, and
				it is NOT shared with any third parties. All information is used solely
				for displaying your Wrapped Spotify Data.
			</p>
		</div>
	);
};

export default PrivacyPolicySection;
