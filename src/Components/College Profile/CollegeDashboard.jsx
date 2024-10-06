import React from "react";

const Dashboard = () => {
	return (
		<div className="w-[300px] bg-white font-poppins shadow-lg shadow-gray-400">
			<div className="flex justify-center">
				<img
					src="nslogo.jpg"
					alt=""
					className="rounded-full border-2 shadow-md h-36 w-36 mt-10 "
				/>
			</div>
			<div className="flex justify-center">
				<h1 className=" mt-5 font-bold font-poppins text-xl">
					BIT Mesra, Patna Campus
				</h1>
			</div>
			<div className="flex justify-center">
				<h1 className="text-sm text-gray-500 ">Samanpura, BIT Campus, Patna</h1>
			</div>
			<div className="flex items-center justify-around">
				<div className="flex items-center p-2 justify-center mb-2 mt-2">
					<img className="h-8 w-8" src="facebook.svg" alt="" />
					<img className="h-8 w-8" src="instagram.svg" alt="" />
					<img className="h-8 w-8" src="linkedin.svg" alt="" />
					<img className="h-8 w-8" src="location.svg" alt="" />
				</div>
				<div className="font-poppins bg-red-500 px-3 py-2 rounded-2xl ">
					<h1 className="font-bold text-white">Contact</h1>
				</div>
			</div>
			<hr />
			<div className=" flex-row pl-5">
				<div className="flex items-center gap-5 font-semibold pt-5">
					<img src="instagram.svg" alt="" className="w-6 h-6" />
					<h1>https://nsappstudio.com</h1>
				</div>
				<div className="flex items-center gap-5 font-semibold pt-5">
					<img src="message.svg" alt="" className="w-6 h-6" />
					<h1>enquiry@nsapps.com</h1>
				</div>
				<div className="flex items-center gap-5 font-semibold pt-5">
					<img src="call.svg" alt="" className="w-6 h-6" />
					<h1>+91 9128712345</h1>
				</div>
				<div className="flex items-center gap-5 font-semibold pt-5">
					<img src="calendar.svg" alt="" className="w-6 h-6" />
					<h1>26 March, 2015</h1>
				</div>
				<div className="flex items-center gap-5 font-semibold pt-5">
					<img src="people.svg" alt="" className="w-6 h-6" />
					<h1>10+ Members</h1>
				</div>
				<div className="flex items-center gap-5 font-semibold pt-5 pb-5">
					<img src="calendar.svg" alt="" className="w-6 h-6" />
					<h1>Active</h1>
				</div>
			</div>
			<hr />
			<h1 className="font-poppins font-bold mt-5 pl-5">About College</h1>
			<h1 className="mt-5 pr-5 text-sm pl-5">
				NS APPS INNOVATION LLP is an innovative initiative by the Bihar
				government aimed at fostering the growth of startups in the region.
				Located in the heart of Bihar, B-Hub provides budding entrepreneurs with
				state-of-the-art infrastructure, mentorship, and access to a network of
				investors and
			</h1>
		</div>
	);
};

export default Dashboard;
