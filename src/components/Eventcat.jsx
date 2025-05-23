import React from 'react';
import { Event } from '../Data';
import { tags } from '../Data';
import { Link } from 'lucide-react';

const Eventcat = () => {
	return (
		<div>
			{
				<div className="w-screen">
					<main className="  mt-8  max-w-[80vw] mx-auto">
						<h2 className="font-bold text-5xl text-[#2D2C3C]">Popular Events in Mumbai</h2>
						<div className="flex flex-wrap  items-center mt-10 ">
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
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
	{Event.map((item) => (
		<Link to={`/events/${item.id}`} key={item.id}>
			<div className="max-h-[461px] max-w-[512px] rounded-[10px] p-1 shadow hover:shadow-lg transition duration-200 bg-white">
				<img
					src={item.image}
					alt={item.title}
					className="w-full h-[200px] object-cover rounded-t-[10px]"
				/>

				<div className="flex gap-4 p-4">
					<div className="w-[30%] text-center">
						<p className="text-[#4539B4] font-bold text-3xl">{item.month}</p>
						<p className="text-[#2D2C3C] font-bold text-3xl">{item.day}</p>
					</div>

					<div className="w-[70%]">
						<h2 className="text-[#2D2C3C] font-semibold text-2xl">{item.title}</h2>
						<p className="text-[#7A7B8A] font-semibold text-[18px] mt-2 line-clamp-1">{item.detail}</p>
						<p className="text-[#7A7B8A] font-normal text-lg">{item.time}</p>

						<div className="flex items-center gap-2 mt-4 flex-wrap">
							<img src="../../src/assets/price.svg" alt="Price" className="w-5" />
							<p className="text-[#7A7B8A] font-normal text-lg">{item.price}</p>
							<img src="../../src/assets/Ellipse 8.svg" alt="Dot" />
							<img src="../../src/assets/Star 1 (1).svg" alt="Star" />
							<p className="text-[#7A7B8A] font-normal text-lg">{item.intrested}</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	))}
</div>


						<div className="text-center my-8">
							<button className=" text-black text-center font-semibold text-lg px-8 py-3 border-2 min-w-[30vw] rounded-[8px]">See More</button>
						</div>
						<div className=" relative my-24">
							<img
								src="../../src/assets/getstarted.png"
								alt=""
								className="w-screen"
							/>
							<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
								<h2 className="text-left text-4xl font-bold text-[#2D2C3C]">Events specially curated for you!</h2>
								<p className=" text-left text-[#2D2C3C] font-semibold text-xl">Get event suggestions tailored to your interests! Don't let your favorite events slip away.</p>
								<button className="text-center bg-[#2B293D] text-[#FFE047] font-semibold text-lg px-8 py-3   border-2  rounded-[8px] mt-4">Get Started</button>
							</div>
						</div>
					</main>
				</div>
			}
			{
				<div className="w-screen">
					<main className="  mt-8  max-w-[80vw] mx-auto">
						<h2 className="font-bold text-5xl text-[#2D2C3C]">Discover Best of Online Events</h2>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-[80vw] mx-auto">
							{Event.map((item) => {
								return (
									<div className="max-h-[461px] max-w-[512px] rounded-[10px] p-1 shadow hover:shadow-lg transition duration-200 bg-white">
										<img
											src={item.image}
											alt={item.title}
											className="w-full h-[200px] object-cover rounded-t-[10px]"
										/>

										<div className="flex gap-4 p-4">
											<div className="w-[30%] text-center">
												<p className="text-[#4539B4] font-bold text-3xl">{item.month}</p>
												<p className="text-[#2D2C3C] font-bold text-3xl">{item.day}</p>
											</div>

											<div className="w-[70%]">
												<h2 className="text-[#2D2C3C] font-semibold text-2xl">{item.title}</h2>
												<p className="text-[#7A7B8A] font-semibold text-[18px] mt-2 line-clamp-1">{item.detail}</p>
												<p className="text-[#7A7B8A] font-normal text-lg">{item.time}</p>

												<div className="flex items-center gap-2 mt-4 flex-wrap">
													<img
														src="../../src/assets/price.svg"
														alt="Price"
														className="w-5"
													/>
													<p className="text-[#7A7B8A] font-normal text-lg">{item.price}</p>
													<img
														src="../../src/assets/Ellipse 8.svg"
														alt="Dot"
													/>
													<img
														src="../../src/assets/Star 1 (1).svg"
														alt="Star"
													/>
													<p className="text-[#7A7B8A] font-normal text-lg">{item.intrested}</p>
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
									<h2 className="text-left text-4xl font-medium text-[#FFE047]">Create an event with Eventure</h2>
									<p className=" text-left text-[#FFE047] font-normal text-xl">Got a show, event, activity or a great experience? Partner with us & get listed on Eventure</p>
								</div>
								<button className="flex justify-between items-center gap-4 text-center bg-[#FFE047] text-[#2B293D] font-semibold text-lg px-4  border-2  rounded-[8px] mt-4">
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

export default Eventcat;
