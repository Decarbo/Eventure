import React from 'react';
import Explorecat from './Explorecat';
import Eventcat from './Eventcat';
import Onlineevent from './Onlineevent';
import Footer from './Footer';

const Body = () => {
	return (
		<div>
			<main className="">
				<div className="relative h-[50vh] overflow-y-hidden w-screen">
					<img
						src="../../src/assets/hero.png"
						alt="ddfd"
						className="bg-contain w-[100%] bg-center h-[100%]  "
					/>
					<div className="absolute  top-[0] h-[50vh]  w-full px-32 bg-[#2B293D80]   flex flex-col justify-center items-start">
						<div className="w-[80vw]  mx-auto">
							<p className="text-white font-bold text-5xl my-4 ">Don’t miss out!</p>
							<p className="text-white font-bold text-5xl">
								Explore the <span className="text-[#FFE047]">vibrant events</span> happening locally and globally.
							</p>
						</div>
						<div className="flex w-full max-w-3xl mx-auto mt-8 bg-white rounded-lg shadow-lg">
							<div className="flex-1 flex items-center px-4">
								<svg
									className="h-5 w-5 text-[#5A5A5A]"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
								</svg>
								<input
									type="text"
									placeholder="Search Events, Categories, Location,..."
									className="w-full px-3 py-4 focus:outline-none text-gray-600"
								/>
							</div>
							<div className="border-l border-gray-200 flex items-center px-2">
								<div className="relative flex">
									<img
										src="../../src/assets/Location icon.svg"
										alt=""
									/>
									<select className="appearance-none bg-transparent pr-8 pl-3 py-2 text-gray-700 focus:outline-none">
										<option value="Mumbai">Mumbai</option>
									</select>
									<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
										<svg
											className="fill-current h-4 w-4"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20">
											<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="h-[50vh] flex justify-center items-center">
					<Explorecat />
				</div>
				<Eventcat />
				<Footer/>
				{/* <Onlineevent /> */}
			</main>
		</div>
	);
};

export default Body;
