import React, { useState } from 'react';

const EventCreationWizard = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState({
		// Event Details
		title: '',
		category: '',
		type: 'single',
		date: '',
		startTime: '',
		endTime: '',
		location: '',
		description: '',
		// Banner
		bannerImage: null,
		// Ticketing
		ticketType: 'ticketed',
		ticketName: '',
		ticketPrice: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

      const updateddat = {...formData, [name]:value}
      console.log(updateddat)
		setFormData({ ...formData, [name]: value });
	};

	const handleFileChange = (e) => {
		setFormData({ ...formData, bannerImage: e.target.files[0] });
	};

	const handleNext = () => {
		setCurrentStep(currentStep + 1);
	};

	const handleBack = () => {
		setCurrentStep(currentStep - 1);
	};

	const renderProgressSteps = () => {
		const steps = ['Edit', 'Banner', 'Ticketing', 'Review'];
		return (
			<div className="flex justify-between items-center mb-10">
				{steps.map((step, i) => (
					<div
						key={i}
						className="flex-1 text-center ">
						<div className={`w-4 h-4 rounded-full mx-auto ${i < currentStep ? 'bg-[#FFE047]' : 'bg-gray-300'}`} />
						<p className={`mt-2 text-sm ${i === currentStep - 1 ? 'text-[#FFE047] font-semibold' : 'text-gray-500'}`}>{step}</p>
					</div>
				))}
			</div>
		);
	};

	const renderEventDetailsStep = () => (
		<div className="max-w-4xl mx-auto">
			<h2 className="text-2xl font-bold mb-6">Event Details</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<label className="block text-sm font-medium mb-1">Event Title *</label>
					<input
						type="text"
						name="title"
						value={formData.title}
						onChange={handleChange}
						placeholder="Enter the name of your event"
						className="w-full border border-gray-300 rounded px-3 py-2"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-1">Event Category *</label>
					<select
						name="category"
						value={formData.category}
						onChange={handleChange}
						className="w-full border border-gray-300 rounded px-3 py-2">
						<option>Please select one</option>
						<option value="music">Music</option>
						<option value="tech">Technology</option>
						<option value="business">Business</option>
					</select>
				</div>
			</div>

			<h3 className="text-xl font-semibold mt-10 mb-4">Date & Time</h3>

			<div className="mb-4 flex items-center gap-6">
				<label className="flex items-center gap-2">
					<input
						type="radio"
						name="type"
						value="single"
						checked={formData.type === 'single'}
						onChange={handleChange}
					/>
					Single Event
				</label>
				<label className="flex items-center gap-2">
					<input
						type="radio"
						name="type"
						value="recurring"
						checked={formData.type === 'recurring'}
						onChange={handleChange}
					/>
					Recurring Event
				</label>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
				<div>
					<label className="block text-sm font-medium mb-1">Start Date *</label>
					<input
						type="date"
						name="date"
						value={formData.date}
						onChange={handleChange}
						className="w-full border border-gray-300 rounded px-3 py-2"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium mb-1">Start Time *</label>
					<input
						type="time"
						name="startTime"
						value={formData.startTime}
						onChange={handleChange}
						className="w-full border border-gray-300 rounded px-3 py-2"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium mb-1">End Time</label>
					<input
						type="time"
						name="endTime"
						value={formData.endTime}
						onChange={handleChange}
						className="w-full border border-gray-300 rounded px-3 py-2"
					/>
				</div>
			</div>

			<div className="mb-6">
				<label className="block text-sm font-medium mb-1">Where will your event take place? *</label>
				<select
					name="location"
					value={formData.location}
					onChange={handleChange}
					className="w-full border border-gray-300 rounded px-3 py-2">
					<option>Please select one</option>
					<option value="mumbai">Mumbai</option>
					<option value="delhi">Delhi</option>
					<option value="bangalore">Bangalore</option>
				</select>
			</div>

			<div className="mb-6">
				<label className="block text-sm font-medium mb-1">Event Description *</label>
				<textarea
					name="description"
					value={formData.description}
					onChange={handleChange}
					placeholder="Describe what's special about your event & other important details."
					rows={5}
					className="w-full border border-gray-300 rounded px-3 py-2"
				/>
			</div>

			<div className="text-right">
				<button
					onClick={handleNext}
					className="bg-[#FFE047] text-white px-6 py-2 rounded hover:bg-[#f0d240]">
					Save & Continue
				</button>
			</div>
		</div>
	);

	const renderBannerStep = () => (
		<div className="max-w-3xl mx-auto">
			<h2 className="text-lg font-semibold mb-2">Upload Image</h2>
			<input
				type="file"
				onChange={handleFileChange}
				className="border border-gray-300 p-2 w-full mb-2"
			/>
			<p className="text-sm text-gray-500">
				Feature Image must be at least 1170 pixels wide by 504 pixels high.
				<br />
				Valid file formats: JPG, GIF, PNG.
			</p>

			<div className="flex justify-between mt-8">
				<button
					onClick={handleBack}
					className="text-indigo-600 underline">
					Go back to Edit Event
				</button>
				<button
					onClick={handleNext}
					className="bg-indigo-800 text-white px-4 py-2 rounded">
					Save & Continue
				</button>
			</div>
		</div>
	);

	const renderTicketingStep = () => (
		<div className="max-w-3xl mx-auto">
			<h2 className="text-lg font-semibold mb-4">What type of event are you running?</h2>
			<div className="flex gap-4 mb-6">
				<div
					className={`flex-1 border-2 p-4 rounded text-center cursor-pointer ${formData.ticketType === 'ticketed' ? 'border-indigo-600' : 'border-gray-300'}`}
					onClick={() => handleChange({ target: { name: 'ticketType', value: 'ticketed' } })}>
					<p className="font-semibold">🎟 Ticketed Event</p>
					<p className="text-gray-600 text-sm">My event requires tickets for entry</p>
				</div>
				<div
					className={`flex-1 border-2 p-4 rounded text-center cursor-pointer ${formData.ticketType === 'free' ? 'border-indigo-600' : 'border-gray-300'}`}
					onClick={() => handleChange({ target: { name: 'ticketType', value: 'free' } })}>
					<p className="font-semibold">🎫 Free Event</p>
					<p className="text-gray-600 text-sm">I'm running a free event</p>
				</div>
			</div>

			{formData.ticketType === 'ticketed' && (
				<>
					<h3 className="text-md font-semibold mb-2">What tickets are you selling?</h3>
					<div className="grid grid-cols-2 gap-4 mb-6">
						<input
							type="text"
							name="ticketName"
							value={formData.ticketName}
							onChange={handleChange}
							placeholder="Ticket Name e.g. General Admission"
							className="border border-gray-300 p-2 w-full"
						/>
						<div className="relative">
							<span className="absolute left-2 top-2 text-gray-500">₹</span>
							<input
								type="number"
								name="ticketPrice"
								value={formData.ticketPrice}
								onChange={handleChange}
								placeholder="0.00"
								className="pl-6 border border-gray-300 p-2 w-full"
							/>
						</div>
					</div>
				</>
			)}

			<div className="flex justify-between mt-8">
				<button
					onClick={handleBack}
					className="text-[#FFE047] underline">
					Go back
				</button>
				<button
					onClick={handleNext}
					className="bg-[#FFE047] text-white px-4 py-2 rounded">
					Save & Continue
				</button>
			</div>
		</div>
	);

	return (
		<div className="p-8">
			{renderProgressSteps()}

			{currentStep === 1 && renderEventDetailsStep()}
			{currentStep === 2 && renderBannerStep()}
			{currentStep === 3 && renderTicketingStep()}
		</div>
	);
};

export default EventCreationWizard;
