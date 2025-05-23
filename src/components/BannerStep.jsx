import { Link } from "react-router-dom";

const BannerStep = () => {
	return (
		<div className="max-w-3xl mx-auto p-6">
			<h1 className="text-2xl font-bold mb-2">Event Title</h1>
			<p className="text-gray-600 mb-6">Location<br />Time</p>

			<div className="flex justify-between mb-8">
				{["Edit", "Banner", "Ticketing", "Review"].map((step, index) => (
					<div key={index} className="flex flex-col items-center w-1/4">
						<div className={`w-4 h-4 rounded-full ${index <= 1 ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
						<p className={`text-sm mt-2 ${index === 1 ? 'font-semibold' : ''}`}>{step}</p>
					</div>
				))}
			</div>

			<h2 className="text-lg font-semibold mb-2">Upload Image</h2>
			<input
				type="file"
				className="border border-gray-300 p-2 w-full mb-2"
			/>
			<p className="text-sm text-gray-500">
				Feature Image must be at least 1170 pixels wide by 504 pixels high.<br />
				Valid file formats: JPG, GIF, PNG.
			</p>

			<div className="flex justify-between mt-8">
            <Link to ="/CreateEventForm">
				<button className="text-indigo-600 underline">Go back to Edit Event</button>
            </Link>
            <Link to= "/TicketingStep">
				<button className="bg-indigo-800 text-white px-4 py-2 rounded">Save & Continue</button>
            </Link>
			</div>
		</div>
	);
};
export default BannerStep;
