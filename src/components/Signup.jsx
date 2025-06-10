import React, { useState } from 'react';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const Signup = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		// profileimage: '',
	});
console.log(formData)
	const toSignup = async () => {
		try {
			const res = await axios.post('http://localhost:8080/api/v1/users/register', formData, {
				withCredentials: true,
			});
			console.log(res);
		} catch (error) {
			console.error('Signup error:', error.response?.data || error.message);
		}
	};

	const handleSignup = (event) => {
		event.preventDefault();
		toSignup();
	};

	return (
		<div className="min-h-screen bg-[#2B293D] flex items-center justify-center">
			<main className="flex flex-col md:flex-row w-full min-h-screen  mx-auto bg-white md:rounded-xl overflow-hidden shadow-lg">
				{/* Left section */}
				<div className="w-full md:w-1/2 bg-[#2B293D] text-white p-8 flex items-center justify-center">
					<h2 className="text-3xl md:text-4xl font-bold leading-snug">
						Discover tailored events. <br /> Sign up for personalized <br /> recommendations today!
					</h2>
				</div>

				{/* Right section */}
				<div className="w-full  p-6 sm:p-10 flex flex-col gap-6 justify-center">
					<p className="text-2xl md:text-3xl font-bold text-[#2D2C3C]">Create a new account</p>

					<div className="flex flex-col lg:flex-row gap-4 justify-center">
						<button className="w-full sm:w-auto border-2 rounded-lg px-4 py-2 text-lg flex items-center gap-2 justify-center">
							<FcGoogle className="text-2xl" />
							<span>Sign up with Google</span>
						</button>
						<button className="w-full sm:w-auto border-2 rounded-lg px-4 py-2 text-lg flex items-center gap-2 justify-center text-blue-600">
							<FaFacebook className="text-2xl" />
							<span>Sign up with Facebook</span>
						</button>
					</div>

					<form
						onSubmit={handleSignup}
						className="flex flex-col gap-4">
						<div>
							<label
								htmlFor="name"
								className="text-[#2D2C3C] font-bold">
								Name
							</label>
							<input
								type="text"
								id="name"
								placeholder="Enter your name"
								className="w-full border border-[#2B293D] rounded-lg p-2 mt-1"
								value={formData.name}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
							/>
						</div>

						<div>
							<label
								htmlFor="email"
								className="text-[#2D2C3C] font-bold">
								Email
							</label>
							<input
								type="email"
								id="email"
								placeholder="Enter your email"
								className="w-full border border-[#2B293D] rounded-lg p-2 mt-1"
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
							/>
						</div>

						<div>
							<label
								htmlFor="password"
								className="text-[#2D2C3C] font-bold">
								Password
							</label>
							<input
								type="password"
								id="password"
								placeholder="Enter your password"
								className="w-full border border-[#2B293D] rounded-lg p-2 mt-1"
								value={formData.password}
								onChange={(e) => setFormData({ ...formData, password: e.target.value })}
							/>
						</div>

						<div>
							<label
								htmlFor="profileimage"
								className="text-[#2D2C3C] font-bold">
								Profile Image
							</label>
							<input
								type="file"
								id="profileimage"
								className="w-full border border-[#2B293D] rounded-lg p-2 mt-1"

								onChange={(e) => setFormData({ ...formData, profileimage: e.target.files[0] })}
							/>
						</div>

						<button
							type="submit"
							className="bg-[#FFE047] hover:bg-[#e6ce3d] transition-colors rounded-lg p-3 font-semibold">
							Sign Up
						</button>
					</form>
				</div>
			</main>
		</div>
	);
};

export default Signup;
