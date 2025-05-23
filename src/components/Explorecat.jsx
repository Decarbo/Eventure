import React from 'react';
import { Explore } from '../Data';

const Explorecat = () => {
	return (
		<div className="w-screen ">
			<main className="  mt-8  max-w-[80vw] mx-auto">
				<h2 className="font-bold text-5xl text-[#2D2C3C]">Explore Categories</h2>
				<div className="flex flex-wrap justify-between items-center text-center  mt-10 max-w-[80vw] mx-auto">
					{Explore.map((item) => {
						return (
							<div
								key={item.id}
								className="  flex flex-col justify-between items-center">
								<div className="">
									<img
										src={item.image}
										alt=""
										className="w-34   h-34 rounded-full object-cover"
									/>
								</div>
								<span className="text-center font-[600] mt-2 text-2xl ">{item.text}</span>
							</div>
						);
					})}
				</div>
			</main>
		</div>
	);
};

export default Explorecat;
