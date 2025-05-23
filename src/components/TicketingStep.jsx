import { Link } from "react-router-dom";

const TicketingStep = () => {
	return (
		<div className="max-w-3xl mx-auto p-6">
			<h1 className="text-2xl font-bold mb-2">Event Title</h1>
			<p className="text-gray-600 mb-6">
				Location
				<br />
				Time
			</p>

			<div className="flex justify-between mb-8">
				{['Edit', 'Banner', 'Ticketing', 'Review'].map((step, index) => (
					<div
						key={index}
						className="flex flex-col items-center w-1/4">
						<div className={`w-4 h-4 rounded-full ${index <= 2 ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
						<p className={`text-sm mt-2 ${index === 2 ? 'font-semibold' : ''}`}>{step}</p>
					</div>
				))}
			</div>

			<h2 className="text-lg font-semibold mb-4">What type of event are you running?</h2>
			<div className="flex gap-4 mb-6">
				<div className="flex-1 border-2 border-indigo-600 p-4 rounded text-center">
					<p className="font-semibold">🎟 Ticketed Event</p>
					<p className="text-gray-600 text-sm">My event requires tickets for entry</p>
				</div>
				<div className="flex-1 border p-4 rounded text-center">
					<p className="font-semibold">🎫 Free Event</p>
					<p className="text-gray-600 text-sm">I'm running a free event</p>
				</div>
			</div>

			<h3 className="text-md font-semibold mb-2">What tickets are you selling?</h3>
			<div className="grid grid-cols-2 gap-4 mb-6">
				<input
					type="text"
					placeholder="Ticket Name e.g. General Admission"
					className="border border-gray-300 p-2 w-full"
				/>
				<div className="relative">
					<span className="absolute left-2 top-2 text-gray-500">₹</span>
					<input
						type="number"
						placeholder="0.00"
						className="pl-6 border border-gray-300 p-2 w-full"
					/>
				</div>
			</div>

			<div className="flex justify-between mt-8">
				<Link to="/banner">
					<button className="text-indigo-600 underline">Go back</button>
				</Link>
				<button className="bg-indigo-800 text-white px-4 py-2 rounded">Save & Continue</button>
			</div>
		</div>
	);
};
export default TicketingStep;
