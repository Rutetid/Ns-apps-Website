import React from "react";
import Dashboard from "./CompanyDashboard";
import PersonPopup from "./PersonPopup";
import { useState, useEffect, useRef } from "react";
import WebDevelopment from "./Services/WebDevelopment";
import AppDevelopment from "./Services/AppDevelopment";

const CompanyProfile = () => {
	const [showProfile, setShowProfile] = useState(false);
	const [showApp, setShowApp] = useState(false);
	const [showWeb, setShowWeb] = useState(false);
	const popupRef = useRef(null);

	const toggleProfile = () => {
		setShowProfile((showProfile) => !showProfile);
	};

	const handleClickOutside = (event) => {
		if (popupRef.current && !popupRef.current.contains(event.target)) {
			setShowProfile(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="bg-gradient-to-b from-gray-200 to-pink-100 min-h-screen">
			<div className="ml-10 flex">
				<Dashboard />
				{showWeb ? (
					<WebDevelopment />
				) : showApp ? (
					<AppDevelopment />
				) : (
					<div className="w-6/12">
						<h1 className="pt-16 pl-10 font-bold font-poppins text-xl">
							Company Team
						</h1>
						<div className="flex items-center">
							<div onClick={toggleProfile}>
								<img
									src="person.jpg"
									alt=""
									className="rounded-full border-2 shadow-md h-20 w-20 mt-5 ml-10 "
								/>
								<h1 className=" mt-3  font-poppins font-semibold text-md ml-[58px]">
									{" "}
									Emily
								</h1>
							</div>
							<div onClick={toggleProfile}>
								<img
									src="person.jpg"
									alt=""
									className="rounded-full border-2 shadow-md h-20 w-20 mt-5 ml-5 "
								/>
								<h1 className=" mt-3  font-poppins font-semibold text-md ml-9">
									{" "}
									Emily
								</h1>
							</div>
							<div onClick={toggleProfile}>
								<img
									src="person.jpg"
									alt=""
									className="rounded-full border-2 shadow-md h-20 w-20 mt-5 ml-5 "
								/>
								<h1 className=" mt-3  font-poppins font-semibold text-md ml-9">
									{" "}
									Emily
								</h1>
							</div>
							<div onClick={toggleProfile}>
								<img
									src="person.jpg"
									alt=""
									className="rounded-full border-2 shadow-md h-20 w-20 mt-5 ml-5 "
								/>
								<h1 className=" mt-3  font-poppins font-semibold text-md ml-9">
									{" "}
									Emily
								</h1>
							</div>
							<div onClick={toggleProfile}>
								<img
									src="person.jpg"
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
							<div className="mt-5 pt-5 flex justify-between">
								<div className="flex items-center">
									<img
										src="person.jpg"
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
								<div className="pr-8 pt-2">
									<img src="three-dots.png" alt="" className="w-5 h-5" />
								</div>
							</div>
							<div className="flex items-center mt-5 ml-5 gap-3 mr-10 ">
								<img className="rounded-md h-52 w-52" src="cafe.jpg" alt="" />
								<img className="rounded-md h-52 w-52" src="laptop.jpg" alt="" />
								<img
									className="rounded-md h-52 w-52"
									src="office.jpeg"
									alt=""
								/>
							</div>
							<div className="flex items-center pt-3 pb-3 pl-5 font-poppins text-sm">
								<img className="w-5 h-5 mr-2" src="eye.svg" alt="" />
								<h1 className="pt-1">views</h1>
							</div>
						</div>
					</div>
				)}

				{showProfile && (
					<div ref={popupRef}>
						<PersonPopup />
					</div>
				)}

				<div className="w-3/12 ml-8 ">
					<h1 className="pt-16  font-bold font-poppins text-xl">Services</h1>
					<div>
						<div
							className="rounded- bg-white mt-8 rounded-lg"
							onClick={() => {
								setShowApp(!showApp);
								setShowWeb(false);
							}}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									setShowApp(!showApp);
									setShowWeb(false);
								}
							}}
							tabIndex="0"
						>
							<img
								className="w-96 h-32 rounded-lg object-cover"
								src="phone.jpg"
								alt=""
							/>
							<h1 className="pl-5 pt-5 font-bold font-poppins">
								App Development
							</h1>
							<h1 className="pl-5 pt-3 text-sm pb-2 ">
								Our website development company specializes in creating custom,
								user-friendly websites tailored to your business needs, ensuring
								a seamless online presence.
							</h1>
						</div>
						<div
							className="rounded- bg-white mt-8 rounded-lg"
							onClick={() => {
								setShowWeb(!showWeb);
								setShowApp(false);
							}}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									setShowWeb(!showWeb);
									setShowApp(false);
								}
							}}
							tabIndex="0"
						>
							<img
								className="w-96 h-32 rounded-lg object-cover"
								src="computer.jpg"
								alt=""
							/>
							<h1 className="pl-5 pt-5 font-bold font-poppins">
								Web Development
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

export default CompanyProfile;
