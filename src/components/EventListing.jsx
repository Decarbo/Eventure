import React from 'react';
import { Event } from '../Data';
import { Link } from 'react-router-dom';

export default function EventListing() {
	return (
		<div className="flex flex-col min-h-screen bg-gray-100 ">
			<div>
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
			</div>
			<div className='flex bg-white p-4'>
				<aside className="w-64 bg-white rounded-xl shadow-md p-4 space-y-6">
					<h2 className="text-xl font-semibold">Filters</h2>

					<div>
						<h3 className="font-medium mb-2">Price</h3>
						<div className="space-y-1">
							<label className="block">
								<input
									type="checkbox"
									className="mr-2"
								/>
								Free
							</label>
							<label className="block">
								<input
									type="checkbox"
									className="mr-2"
								/>
								Paid
							</label>
						</div>
					</div>

					<div>
						<h3 className="font-medium mb-2">Date</h3>
						<div className="space-y-1">
							<label className="block">
								<input
									type="checkbox"
									className="mr-2"
								/>
								Today
							</label>
							<label className="block">
								<input
									type="checkbox"
									className="mr-2"
								/>
								This Weekend
							</label>
							<label className="block">
								<input
									type="checkbox"
									className="mr-2"
								/>
								Next Week
							</label>
						</div>
					</div>

					<div>
						<h3 className="font-medium mb-2">Category</h3>
						<div className="space-y-1">
							<label className="block">
								<input
									type="checkbox"
									className="mr-2"
								/>
								Business
							</label>
							<label className="block">
								<input
									type="checkbox"
									className="mr-2"
								/>
								Health
							</label>
							<label className="block">
								<input
									type="checkbox"
									className="mr-2"
								/>
								Music
							</label>
							<label className="block">
								<input
									type="checkbox"
									className="mr-2"
								/>
								Food & Drink
							</label>
						</div>
					</div>
				</aside>

				<main className="flex-1 ml-6">
					<div className="flex justify-between items-center mb-4">
						<h1 className="text-2xl font-bold">Events in Delhi</h1>
						<select className="border rounded px-3 py-1">
							<option>Relevance</option>
							<option>Date</option>
						</select>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{Event.map((event) => (
							<div
								key={event.id}
								className="bg-white rounded-2xl shadow-md overflow-hidden">
								<Link
									to={`/events/${event.id}`}
									key={event.id}>
									<img
										src={event.image}
										alt={event.title}
										className="w-full h-48 object-cover"
									/>
									<div className="p-4">
										<h3 className="text-lg font-semibold mb-1">{event.title}</h3>
										<p className="text-sm text-gray-600 mb-2 line-clamp-1">{event.detail}</p>
										<p className="text-sm">
											<strong>Date:</strong> {event.date}
										</p>
										<p className="text-sm">
											<strong>Time:</strong> {event.time}
										</p>
										<p className="text-sm">
											<strong>Location:</strong> {event.location}
										</p>
										<p className="text-sm">
											<strong>Price:</strong> {event.isFree ? 'Free' : `₹${event.price}`}
										</p>
										<p className="text-sm text-blue-700 mt-2">{event.intrested} people interested</p>
									</div>
								</Link>
							</div>
						))}
					</div>
				</main>
			</div>
		</div>
	);
}
