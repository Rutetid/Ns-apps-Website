import React from "react";
import Dashboard from "./Dashboard";

const LandingPage = () => {
	return (
		<div className="bg-pink-100">
			<div className="ml-10 flex">
				<Dashboard />
				<div className="w-6/12">
					<h1 className="pt-16 pl-10 font-bold font-poppins text-xl">
						Company Team
					</h1>
					<div className="flex items-center">
						<div>
							<img
								src="images.png"
								alt=""
								className="rounded-full border-2 shadow-md h-20 w-20 mt-5 ml-10 "
							/>
							<h1 className=" mt-3  font-poppins font-semibold text-md ml-[58px]">
								{" "}
								Emily
							</h1>
						</div>
						<div>
							<img
								src="images.png"
								alt=""
								className="rounded-full border-2 shadow-md h-20 w-20 mt-5 ml-5 "
							/>
							<h1 className=" mt-3  font-poppins font-semibold text-md ml-9">
								{" "}
								Emily
							</h1>
						</div>
						<div>
							<img
								src="images.png"
								alt=""
								className="rounded-full border-2 shadow-md h-20 w-20 mt-5 ml-5 "
							/>
							<h1 className=" mt-3  font-poppins font-semibold text-md ml-9">
								{" "}
								Emily
							</h1>
						</div>
						<div>
							<img
								src="images.png"
								alt=""
								className="rounded-full border-2 shadow-md h-20 w-20 mt-5 ml-5 "
							/>
							<h1 className=" mt-3  font-poppins font-semibold text-md ml-9">
								{" "}
								Emily
							</h1>
						</div>
						<div>
							<img
								src="images.png"
								alt=""
								className="rounded-full border-2 shadow-md h-20 w-20 mt-5 ml-5 "
							/>
							<h1 className=" mt-3  font-poppins font-semibold text-md ml-9">
								{" "}
								Emily
							</h1>
						</div>
					</div>

					<h1 className="pt-12 pl-10 font-bold font-poppins text-xl">
						Showcase
					</h1>
					<div className="bg-white ml-10 rounded-md">
						<div className="mt-5 pt-5 flex items-center">
							<img
								src="images.png"
								alt=""
								className="rounded-full border-2 shadow-md h-12 w-12  ml-5 "
							/>
							<div className="justify-center font-poppins ml-3 ">
								<h1 className="text-sm font-bold">Summer Collection</h1>
								<h1 className="text-xs">
									A showcase of out latest summer apparel
								</h1>
							</div>
						</div>
						<div className="flex items-center mt-5 ml-5 gap-3 mr-10 pb-12">
							<img className="rounded-md w-52" src="images.png" alt="" />
							<img className="rounded-md w-52" src="images.png" alt="" />
							<img className="rounded-md w-52" src="images.png" alt="" />
						</div>
                        
					</div>
				</div>
				<div className="w-3/12 ml-8 ">
					<h1 className="pt-16  font-bold font-poppins text-xl">Services</h1>
					<div>
						<div className="rounded- bg-gray-100 mt-8 rounded-lg">
							<img className="w-96 h-32 rounded-lg" src="images.png" alt="" />
							<h1 className="pl-5 pt-5 font-bold font-poppins">
								App Development
							</h1>
							<h1 className="pl-5 pt-3 text-sm pb-2 ">
								Our website development company specializes in creating custom,
								user-friendly websites tailored to your business needs, ensuring
								a seamless online presence.
							</h1>
						</div>
						<div className="rounded- bg-gray-100 mt-8 rounded-lg">
							<img className="w-96 h-32 rounded-lg" src="images.png" alt="" />
							<h1 className="pl-5 pt-5 font-bold font-poppins">
								App Development
							</h1>
							<h1 className="pl-5 pt-3 text-sm pb-2 ">
								Our website development company specializes in creating custom,
								user-friendly websites tailored to your business needs, ensuring
								a seamless online presence.
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
