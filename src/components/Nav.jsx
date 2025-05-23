import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className="bg-[#2B293D] flex items-center justify-between px-8 py-2">
			<div className="logo flex content-center items-center ">
				<img
					src="../../src/assets/ticket.png"
					alt=""
					className="w-8 -rotate-[8.15deg] "
				/>
				<span className="text-3xl font-normal mx-2  text-[#FFE047]">Eventure</span>
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
				<Link to="/CreateEventForm">
				<li className=" text-[#fff] font-medium text-xl">Create Event</li>
				</Link>
				<Link to="/intrest">
				<li className=" text-[#fff] font-medium text-xl">Login</li>
				</Link>
				<Link to="/Login">

				<li className=" text-[#2B293D] font-medium text-xl bg-[#FFE047] p-1 rounded-md">Sign Up</li>
				</Link>
				<ul className="flex text-white justify-center items-center gap-4">
					<li className="flex flex-col justify-center items-center">
						<img
							src="../../src/assets/ion_ticket.svg"
							alt=""
							className="w-6"
						/>
						<span className="text-sm font-[600]">Tickets</span>
					</li>
					<li className="flex flex-col justify-center items-center">
						<img
							src="../../src/assets/Star 1.svg"
							alt=""
							className="w-6"
						/>
						<span className="text-sm font-[600]">intrested</span>
					</li>
					<Link to="/Profile">
					<li className="flex flex-col justify-center items-center">
						<img
							src="../../src/assets/Group 1.svg"
							alt=""
							className="w-6"
						/>
						<span className="text-sm font-[600]">Profile</span>
					</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
