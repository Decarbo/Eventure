import React from 'react';
import Explorecat from './Explorecat';

const Body = () => {
	return (
		<div>
			<main className=''>
				<div className="relative h-[50vh] overflow-y-hidden w-screen">
					<img
						src="../../src/assets/hero.jpg"
						alt="ddfd"
						className="bg-contain w-[100%] bg-center h-[150%]  "
					/>
				<div className="absolute  top-[0] h-[50vh]  w-screen px-32 bg-[#2B293D80]   flex flex-col justify-center items-start">
					<p className="text-white font-bold text-5xl ">Don’t miss out!</p>
					<p className="text-white font-bold text-5xl">
						Explore the <span className="text-[#FFE047]">vibrant events</span> happening locally and globally.
					</p>
				</div>
				</div>
        <Explorecat/>
			</main>
		</div>
	);
};

export default Body;
