import { useState } from 'react';

const TicketBooking = () => {
	const [step, setStep] = useState(1);
	const [quantity, setQuantity] = useState(1);
	const [attendee, setAttendee] = useState({
		name: '',
		email: '',
		phone: '',
	});
	const price = 200;
	const tax = +(price * quantity * 0.059).toFixed(2);
	const total = +(price * quantity + tax).toFixed(2);

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
				{step === 1 && (
					<div>
						<h2 className="text-lg font-semibold mb-4">Select Tickets</h2>
						<div className="flex justify-between items-center border p-4 rounded-lg">
							<div>
								<p className="font-medium">Standard Ticket</p>
								<p className="text-green-700 font-semibold">₹{price}.00</p>
							</div>
							<div className="flex items-center gap-2">
								<button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
								<span>{quantity}</span>
								<button onClick={() => setQuantity(quantity + 1)}>+</button>
							</div>
						</div>
						<div className="mt-4 flex justify-between font-semibold">
							<p>Qty: {quantity}</p>
							<p>Total: ₹{price * quantity}</p>
						</div>
						<button onClick={() => setStep(2)} className="w-full bg-[#2B293D] text-white font-semibold py-2 mt-4 rounded">Proceed ➔</button>
					</div>
				)}

				{step === 2 && (
					<div>
						<button onClick={() => setStep(1)} className="text-sm mb-2 text-blue-600">{'< Back'}</button>
						<h2 className="text-lg font-semibold mb-4">Attendee Details</h2>
						<p className="text-sm font-medium mb-2">Sound Of Christmas 2023</p>
						<div className="space-y-3">
							<input type="text" placeholder="Enter Attendee's full name" className="w-full border rounded px-3 py-2" value={attendee.name} onChange={e => setAttendee({ ...attendee, name: e.target.value })} />
							<input type="email" placeholder="Enter your e-mail" className="w-full border rounded px-3 py-2" value={attendee.email} onChange={e => setAttendee({ ...attendee, email: e.target.value })} />
							<input type="tel" placeholder="Enter Attendee's Phone Number" className="w-full border rounded px-3 py-2" value={attendee.phone} onChange={e => setAttendee({ ...attendee, phone: e.target.value })} />
						</div>
						<p className="text-xs mt-2 text-gray-600">I accept the <span className="text-blue-600 underline">Terms of Service</span> and have read the <span className="text-blue-600 underline">Privacy Policy</span></p>
						<div className="mt-4 flex justify-between font-semibold">
							<p>Qty: {quantity}</p>
							<p>Total: ₹{price * quantity}</p>
						</div>
						<button onClick={() => setStep(3)} className="w-full bg-[#2B293D] text-white font-semibold py-2 mt-4 rounded">Continue to Checkout</button>
					</div>
				)}

				{step === 3 && (
					<div>
						<button onClick={() => setStep(2)} className="text-sm mb-2 text-blue-600">{'< Back'}</button>
						<h2 className="text-lg font-semibold mb-4">Order Summary</h2>
						<div className="border rounded p-4 mb-4">
							<p className="font-medium">Standard Ticket</p>
							<p>{attendee.name}</p>
							<p className="text-sm text-gray-500">{attendee.email}</p>
						</div>
						<div className="text-sm text-gray-700 mb-1">Sub Total: ₹{price * quantity}</div>
						<div className="text-sm text-gray-700 mb-1">Tax: ₹{tax}</div>
						<div className="text-lg font-bold text-green-700 mb-4">Order Total: ₹{total}</div>
						<button className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded">💳 Pay Now</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default TicketBooking;
