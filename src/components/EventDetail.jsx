import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Event } from '../Data';

const EventDetail = () => {
	const { id } = useParams();
	const event = Event.find((e) => e.id.toString() === id);

	if (!event) {
		return (
			<div className="text-center mt-10">
				<h2 className="text-2xl text-red-500">Event not found</h2>
			</div>
		);
	}

	return (
		<div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
			<img
				src={event.image}
				alt={event.title}
				className="rounded-lg mb-6 max-h-[50vh] object-cover w-full shadow-lg"
			/>
			<h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>

			<div className="flex justify-between items-center mb-6">
				<div>
					<h2 className="text-xl font-semibold mb-2">Date and Time</h2>
					<div className="text-gray-700 flex items-center mb-1">📅 {event.date}</div>
					<div className="text-gray-700 flex items-center mb-1">🕡 {event.time}</div>
					<a
						href="#"
						className="text-blue-500 text-sm underline">
						+ Add to Calendar
					</a>
				</div>
				<Link to="/proceed">
					<button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded">🎟 Buy Tickets</button>
				</Link>
			</div>

			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">Location</h2>
				<p className="text-gray-700 mb-2">{event.location}</p>
				<iframe
					src={event.map}
					width="100%"
					height="300"
					allowFullScreen=""
					loading="lazy"
					title="event-location"
					className="rounded-lg"></iframe>
			</div>

			<div>
				<h2 className="text-xl font-semibold mb-2">Ticket Information</h2>
				<p className="text-gray-700">🎫 {event.isFree ? 'Free Entry' : `Standard Ticket: ₹${event.price}`}</p>
			</div>
		</div>
	);
};

export default EventDetail;
