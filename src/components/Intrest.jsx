import React from 'react';
import { interests } from '../Data';
import Footer from './Footer';

const Intrest = () => {
	return (
      <div>
         <div className="space-y-6 max-w-[80vw] mx-auto mt-10 pb-4">

			<h2 className="font-bold text-3xl">Share your interests with us</h2>
			<p className="text-[#7A7B8A] font-normal text-lg">Choose your interests below to get personalized event suggestions.</p>
			{interests.map((item, index) => (
				<div key={index}>
					<h2 className="text-xl font-semibold mb-2">{item.category}</h2>
					<div className="flex flex-wrap gap-2">
						{item.subcategories.map((sub, subIndex) => (
							<span
								key={subIndex}
								className="px-3 py-1 bg-gray-100 text-sm rounded-full border">
								{sub}
							</span>
						))}
					</div>
				</div>
			))}
			<div className="text-left mt-4 flex justify-end">
				<button className="text-[#FFE047] bg-[#2B293D] font-semibold text-lg px-8 py-3 border-2 rounded-[8px] mt-4">save my interests</button>
			</div>
		</div>
         <Footer/>
      </div>

	);
};

export default Intrest;
