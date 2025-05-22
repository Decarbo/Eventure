import React from 'react';

const Signup = () => {
	return (
		<div>
			<main className="bg-[#2B293D]  h-screen flex  items-center">
				<div className="w-1/2 flex flex-col  justify-center line  p-4">
					<h2 className="text-5xl font-bold text-white">
						Discover tailored <br />events. <br /> Sign up for personalized <br />recommendations today!
					</h2>
				</div>
				<div className="bg-white w-1/2 h-full rounded-l-4xl flex flex-col items-center  pt-20  text-left gap-4">
					<div className=" text-2xl ">
						<p className="text-[#2D2C3C] font-bold text-3xl">create a new account</p>
						<div className="flex gap-4 items-center justify-center my-6">
							<button className="text-xl border-2 rounded-lg p-2 flex gap-4 items-center">sign up with google</button>
							<button className="text-xl border-2 rounded-lg p-2 flex gap-4 items-center">sign up with facebook</button>
						</div>

						<form
							action=""
							className="flex flex-col gap-4">
							<label
								htmlFor="name"
								className="text-[#2D2C3C] font-bold">
								Name
							</label>
							<input
								type="text"
								placeholder="Enter your name"
								className="border border-[#2B293D] rounded-lg p-2"
							/>
							<label
								htmlFor="email"
								className="text-[#2D2C3C] font-bold">
								Email
							</label>
							<input
								type="email"
								placeholder="Enter your email"
								className="border border-[#2B293D] rounded-lg p-2"
							/>
							<label
								htmlFor="password"
								className="text-[#2D2C3C] font-bold">
								Password
							</label>
							<input
								type="password"
								placeholder="Enter your password"
								className="border border-[#2B293D] rounded-lg p-2"
							/>
							<button className="bg-[#FFE047] rounded-lg p-2">Sign Up</button>
						</form>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Signup;
