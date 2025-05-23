import React, { useState } from 'react';

const AccountSettings = () => {
	const [activeTab, setActiveTab] = useState('accountInfo');

	return (
		<div className="flex min-h-screen  bg-gray-100">
			<aside className="min-w-[20vw] bg-white py-4 ">
				<nav className="space-y-2">
					<button
						onClick={() => setActiveTab('accountInfo')}
						className={`block w-full text-left p-2 rounded ${activeTab === 'accountInfo' ? 'bg-gray-200 font-semibold' : 'bg-white hover:bg-gray-100'}`}>
						Account Info
					</button>
					<button
						onClick={() => setActiveTab('changeEmail')}
						className={`block w-full text-left p-2 rounded ${activeTab === 'changeEmail' ? 'bg-gray-200 font-semibold' : 'bg-white hover:bg-gray-100'}`}>
						Change Email
					</button>
					<button
						onClick={() => setActiveTab('password')}
						className={`block w-full text-left p-2 rounded ${activeTab === 'password' ? 'bg-gray-200 font-semibold' : 'bg-white hover:bg-gray-100'}`}>
						Password
					</button>
				</nav>
			</aside>
			<main className=" min-w-[80vw] flex p-8 justify-center ">
				{activeTab === 'accountInfo' && (
					<div className=" max-w-2xl mx-auto">
						<h1 className="text-2xl font-bold mb-6">Account Information</h1>
						<div className="flex justify-center mb-6">
							<div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
								<span className="text-4xl">👤</span>
							</div>
						</div>
						<h2 className="text-lg font-semibold mb-2">Profile Information</h2>
						<div className="space-y-4 mb-6">
							<input
								className="w-full border p-2 rounded"
								placeholder="First name"
							/>
							<input
								className="w-full border p-2 rounded"
								placeholder="Last name"
							/>
							<input
								className="w-full border p-2 rounded"
								placeholder="Website"
							/>
							<input
								className="w-full border p-2 rounded"
								placeholder="Company"
							/>
						</div>
						<h2 className="text-lg font-semibold mb-2">Contact Details</h2>
						<p className="text-sm text-gray-500 mb-4">These details are private and only used to contact you for ticketing or prizes.</p>
						<div className="space-y-4">
							<input
								className="w-full border p-2 rounded"
								placeholder="Phone number"
							/>
							<input
								className="w-full border p-2 rounded"
								placeholder="Address"
							/>
							<input
								className="w-full border p-2 rounded"
								placeholder="City/Town"
							/>
							<input
								className="w-full border p-2 rounded"
								placeholder="Country"
							/>
							<input
								className="w-full border p-2 rounded"
								placeholder="Postcode"
							/>
							<button className="bg-indigo-700 text-white px-4 py-2 rounded">Save My Profile</button>
						</div>
					</div>
				)}

				{activeTab === 'changeEmail' && (
					<div className="max-w-md">
						<h1 className="text-2xl font-bold mb-6">Change Email</h1>
						<div className="space-y-4">
							<input
								className="w-full border p-2 rounded bg-gray-100"
								disabled
								value="andreagomez@example.com"
							/>
							<input
								className="w-full border p-2 rounded"
								placeholder="New Email"
							/>
							<input
								className="w-full border p-2 rounded"
								placeholder="Confirm Email"
							/>
							<button className="bg-indigo-700 text-white px-4 py-2 rounded">Save New Email</button>
						</div>
					</div>
				)}

				{activeTab === 'password' && (
					<div className="max-w-md">
						<h1 className="text-2xl font-bold mb-6">Set Password</h1>
						<p className="mb-4">A password has not been set for your account.</p>
						<button className="bg-indigo-700 text-white px-4 py-2 rounded">Set Password</button>
					</div>
				)}
			</main>
		</div>
	);
};
export default AccountSettings;
