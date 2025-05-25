import React from 'react';
import { Link } from 'react-router-dom';
import { Event } from '../Data';

const Card = () => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-6 '>
			{Event.map((item) => (
				<div
					key={item.id}
					className="bg-white rounded-2xl shadow-md overflow-hidden">
					<Link
						to={`/events/${item.id}`}
						key={item.id}>
						{/* {console.log(item.id)} */}
						<div className="min-h-[461px] max-w-[512px] rounded-[10px] p-1 shadow hover:shadow-lg transition duration-200 bg-white">
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
					</Link>
				</div>
			))}
		</div>
	);
};

export default Card;
