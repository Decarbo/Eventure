import React, { useState } from 'react'
import { Event } from '../Data';
import EventDetail from './EventDetail';

const Events = () => {
	const [filter, setFilter] = useState('All');

	const filteredEvents = Event.filter(event =>
		filter === 'All' ? true : event.festival === filter
	);

	const uniqueFestivals = ['All', ...new Set(Event.map(e => e.festival))];

	return (
		<div className="p-6 max-w-[80vw] mx-auto">
			<h2 className="text-2xl font-bold mb-4">Indian Cultural Events</h2>

			{/* Filter Buttons */}
			<div className="flex flex-wrap gap-2 mb-6">
				{uniqueFestivals.map(festival => (
					<button
						key={festival}
						className={`px-4 py-2 rounded-full border ${
							filter === festival
								? 'bg-blue-600 text-white'
								: 'bg-white text-gray-700 hover:bg-gray-100'
						}`}
						onClick={() => setFilter(festival)}
					>
						{festival}
					</button>
				))}
			</div>

			{/* Events Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{filteredEvents.map(event => (
					<div
						key={event.id}
						className="bg-white rounded-2xl shadow-md overflow-hidden"
					>
						<img
							src={event.image}
							alt={event.title}
							className="w-full h-48 object-cover"
						/>
						<div className="p-4">
							<h3 className="text-lg font-semibold mb-1">{event.title}</h3>
							<p className="text-sm text-gray-600 mb-2">{event.detail}</p>
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
								<strong>Price:</strong>{' '}
								{event.isFree ? 'Free' : `₹${event.price}`}
							</p>
							<p className="text-sm text-blue-700 mt-2">
								{event.intrested} people interested
							</p>
						</div>
					</div>
				))}
			</div>
			<EventDetail/>
		</div>
	);
};


export default Events
