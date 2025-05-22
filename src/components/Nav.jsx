import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className="bg-[#2B293D] flex items-center justify-between px-8 py-2">
			<div className="logo flex content-center items-center ">
				<img
					src="../../src/assets/ticket.png"
					alt=""
					className="w-14 -rotate-[8.15deg] "
				/>
				<span className="text-5xl font-normal  text-[#FFE047]">Eventure</span>
			</div>
			<div>
				<ul className="flex justify-center items-center gap-8 font-medium ">
					<Link to="/">
					<li className="text-[#fff] cursor-pointer text-xl hover:underline">Home</li>
					</Link>
					<Link to="/Filter">
					<li className="text-[#fff] cursor-pointer text-xl ">Events</li>
					</Link>

					<li className="text-[#fff] cursor-pointer text-xl ">About</li>
					<li className="text-[#fff] cursor-pointer text-xl ">Contact</li>
				</ul>
			</div>
			<div className="flex list-none gap-4 items-center justify-center">
				<li className=" text-[#fff] font-medium text-2xl">Create Event</li>
				<Link to="/intrest">
				<li className=" text-[#fff] font-medium text-2xl">Login</li>
				</Link>
				<Link to="/Login">

				<li className=" text-[#2B293D] font-medium text-2xl bg-[#FFE047] p-1 rounded-xl">Sign Up</li>
				</Link>
				{/* <ul className="flex text-white justify-center items-center gap-4">
					<li className="flex flex-col justify-center items-center">
						<img
							src="../../src/assets/ion_ticket.svg"
							alt=""
							className="w-[40px]"
						/>
						<span className="text-sm font-[600]">Tickets</span>
					</li>
					<li className="flex flex-col justify-center items-center">
						<img
							src="../../src/assets/Star 1.svg"
							alt=""
							className="w-[40px]"
						/>
						<span className="text-sm font-[600]">intrested</span>
					</li>
					<li className="flex flex-col justify-center items-center">
						<img
							src="../../src/assets/Group 1.svg"
							alt=""
							className="w-[40px]"
						/>
						<span className="text-sm font-[600]">Profile</span>
					</li>
				</ul> */}
			</div>
		</div>
	);
};

export default Nav;
