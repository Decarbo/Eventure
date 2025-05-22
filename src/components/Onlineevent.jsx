import React from 'react';
import { Event } from '../Data';

const Onlineevent = () => {
	return (
		<div>
			{
				<div className="w-screen">
					<main className="  mt-8  max-w-[80vw] mx-auto">
						<h2 className="font-bold text-5xl text-[#2D2C3C]">Discover Best of Online Events</h2>

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
						<div className="text-center my-8">
							<button className=" text-black text-center font-semibold text-lg px-8 py-3 border-2 min-w-[30vw] rounded-[8px]">See More</button>
						</div>

					</main>
					<div className="w-full relative mt-12">
							<img
								src="../../src/assets/onlineevent.png"
								alt=""
								className="w-screen"
							/>
							<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center w-[100%]">
								<div className="flex justify-center   ">
									<div className="w-[60%]">
										<h2 className="text-left text-5xl font-medium text-[#FFE047]">Create an event with Eventure</h2>
										<p className=" text-left text-[#FFE047] font-normal text-2xl">Got a show, event, activity or a great experience? Partner with us & get listed on Eventure</p>
									</div>
									<button className="flex justify-between items-center gap-4 text-center bg-[#FFE047] text-[#2B293D] font-semibold text-lg px-4 py-3 border-2  rounded-[8px] mt-4">
										<img
											src="../../src/assets/Vector (1).svg"
											alt=""
										/>
										Create Event
									</button>
								</div>
							</div>
						</div>
				</div>
			}
		</div>
	);
};

export default Onlineevent;
