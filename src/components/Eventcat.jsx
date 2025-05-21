import React from 'react';
import { Event } from '../Data';
import { tags } from '../Data';


const Eventcat = () => {
	return (
		<div>
			{
				<div className="w-screen">
					<main className="  mt-8  max-w-[80vw] mx-auto">
						<h2 className="font-bold text-5xl text-[#2D2C3C]">Popular Events in Mumbai</h2>
						<div className='flex flex-wrap  items-center mt-10 '>
							{tags.map((item) => {
								return (
									<div
										key={item.id}
										className="flex gap-4 items-center mt-4">
										<img
											src={item.image}
											alt=""
										/>
										<p className="text-[#6F6F6F] font-semibold text-lg border-2 px-4 rounded-2xl">{item.text}</p>
									</div>
								);
							})}
						</div>
						<div className="flex flex-wrap justify-between items-center  mt-10 max-w-[80vw] mx-auto">
							{Event.map((item) => {
								return (
									<div
										key={item.id}
										className="min-h-[461px] min-w-[512px] rounded-[10px]">
										<div className="">
											<img
												src={item.image}
												alt=""
												className="w-[512px]  object-cover rounded-t-[10px] "
											/>
										</div>

										<div className="flex gap-4">
											<div>
												<div className="flex justify-between items-center gap-2 mt-4">
													<div className="flex flex-col text-center">
														<p className="text-[#4539B4] font-bold text-3xl">{item.month}</p>
														<p className="text-[#2D2C3C] font-bold text-3xl">{item.day}</p>
													</div>
												</div>
											</div>
											<div>
												<h2 className="text-[#2D2C3C] font-semibold  text-2xl mt-4">{item.title}</h2>
												<p className="text-[#7A7B8A] font-semibold text-[18px] mt-2 truncate-1">{item.detail}</p>
												<p className="text-[#7A7B8A] font-normal text-lg">{item.time}</p>
												<div className="flex justify-between items-center mt-4">
													<div className="flex gap-2 justify-center">
														<img
															src="../../src/assets/price.svg"
															alt=""
															className="w-5 "
														/>
														<p className="text-[#7A7B8A] font-normal text-lg">{item.price}</p>

														<img
															src="../../src/assets/Ellipse 8.svg"
															alt=""
														/>
														<img
															src="../../src/assets/Star 1 (1).svg"
															alt=""
														/>
														<p className="text-[#7A7B8A] font-normal text-lg">{item.intrested}</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
						<div className="text-center">
							<button className=" text-black text-center font-semibold text-lg px-8 py-3 border-2 min-w-[30vw] rounded-[8px]">See More</button>
						</div>
                  <div className=' relative my-24'>
                     <img src="../../src/assets/getstarted.png" alt=""  className='w-screen'/>
                     <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
                        <h2 className='text-left text-5xl font-bold text-[#2D2C3C]'>Events specially curated for you!</h2>
                        <p className=' text-left text-[#2D2C3C] font-semibold text-2xl'>Get event suggestions tailored to your interests! Don't let your favorite events slip away.</p>
                        <button className='text-center bg-[#2B293D] text-[#FFE047] font-semibold text-lg px-8 py-3   border-2  rounded-[8px] mt-4'>Get Started</button>
                     </div>
                  </div>
					</main>
				</div>
			}
		</div>
	);
};

export default Eventcat;
