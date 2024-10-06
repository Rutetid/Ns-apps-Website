import React, { useState, useEffect, useRef } from "react";
import Dashboard from "./CollegeDashboard";
import PersonPopup from "./PersonPopup";

const CollegeProfile = () => {
	const [showProfile , setShowProfile] = useState(false);
	const popupRef = useRef(null);

	const toggleProfile = () => {
		setShowProfile(showProfile => !showProfile);
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
		<div className="bg-sky-50">
			<div className="ml-10 flex">
				
				<Dashboard />

				{showProfile && (
                    <div ref={popupRef}>
                        <PersonPopup />
                    </div>
                )}
				<div className="w-6/12">
					<h1 className="pt-16 pl-10 font-bold font-poppins text-xl">
						College Leadership
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
									<h1 className="text-sm font-bold">Clubs</h1>
									<h1 className="text-xs">
										A showcase of out various clubs and their activities
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
							<img className="rounded-md h-52 w-52" src="office.jpeg" alt="" />
						</div>
						<div className="flex items-center pt-3 pb-3 pl-5 font-poppins text-sm">
							<img className="w-5 h-5 mr-2" src="eye.svg" alt="" />
							<h1 className="pt-1">views</h1>
						</div>
					</div>
					<div className="bg-white ml-10 rounded-md">
						<div className="mt-5 pt-5 flex justify-between">
							<div className="flex items-center">
								<img
									src="person.jpg"
									alt=""
									className="rounded-full border-2 shadow-md h-12 w-12  ml-5 "
								/>
								<div className="justify-center font-poppins ml-3 ">
									<h1 className="text-sm font-bold">Events/Actvities</h1>
									<h1 className="text-xs">
										A showcase of out latest events and their activities
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
							<img className="rounded-md h-52 w-52" src="office.jpeg" alt="" />
						</div>
						<div className="flex items-center pt-3 pb-3 pl-5 font-poppins text-sm">
							<img className="w-5 h-5 mr-2" src="eye.svg" alt="" />
							<h1 className="pt-1">views</h1>
						</div>
					</div>
					<div className="bg-white ml-10 rounded-md">
						<div className="mt-5 pt-5 flex justify-between">
							<div className="flex items-center">
								<img
									src="person.jpg"
									alt=""
									className="rounded-full border-2 shadow-md h-12 w-12  ml-5 "
								/>
								<div className="justify-center font-poppins ml-3 ">
									<h1 className="text-sm font-bold">Gallery</h1>
									<h1 className="text-xs">A showcase of our gallery</h1>
								</div>
							</div>
							<div className="pr-8 pt-2">
								<img src="three-dots.png" alt="" className="w-5 h-5" />
							</div>
						</div>
						<div className="flex items-center mt-5 ml-5 gap-3 mr-10 ">
							<img className="rounded-md h-52 w-52" src="cafe.jpg" alt="" />
							<img className="rounded-md h-52 w-52" src="laptop.jpg" alt="" />
							<img className="rounded-md h-52 w-52" src="office.jpeg" alt="" />
						</div>
						<div className="flex items-center pt-3 pb-3 pl-5 font-poppins text-sm">
							<img className="w-5 h-5 mr-2" src="eye.svg" alt="" />
							<h1 className="pt-1">views</h1>
						</div>
					</div>
				</div>
				<div className="w-3/12 ml-8 ">
					<div className="pt-16">
						<div className="rounded- bg-white mt-8 rounded-lg">
							<img className="w-96 h-40 rounded-lg object-cover" src="admission.jpg" alt="" />
							<h1 className="pl-5 pt-4 font-bold font-poppins">Admission process</h1>
							<h1 className="pl-5 pt-1 text-sm pb-2 ">
								Learn more about our admission process here and take the first step toward joining our vibrant academic community.
							</h1>
						</div>
						<div className="rounded- bg-white mt-8 rounded-lg">
							<img className="w-96 h-40 rounded-lg object-cover" src="courses.jpg" alt="" />
							<h1 className="pl-5 pt-4 font-bold font-poppins">Courses</h1>
							<h1 className="pl-5 pt-1 text-sm pb-2 ">
								See all the courses offered here and explore a wide range of
								programs designed to help you succeed in your academic and
								career goals.
							</h1>
						</div>
						<div className="rounded- bg-white mt-8 rounded-lg">
							<img
								className="w-96 h-40 rounded-lg object-cover"
								src="facilities.jpg"
								alt=""
							/>
							<h1 className="pl-5 pt-4 font-bold font-poppins">Facilities</h1>
							<h1 className="pl-5 pt-1 text-sm pb-2 ">
								Discover all the facilities available here, from modern
								classrooms to state-of-the-art labs and sports complexes,
								designed to support your all-around development
							</h1>
						</div>
						<h1 className=" pt-5 font-bold font-poppins text-2xl pl-2">
							Alumni Network
						</h1>
						<div className="flex items-center">
							<div>
								<img
									src="person.jpg"
									alt=""
									className="rounded-full border-2 shadow-md h-16 w-16 mt-5  "
								/>
								<h1 className=" mt-2  font-poppins font-semibold text-sm ml-4">
									{" "}
									Emily
								</h1>
							</div>
							<div className="pl-2">
								<img
									src="person.jpg"
									alt=""
									className="rounded-full border-2 shadow-md h-16 w-16 mt-5  "
								/>
								<h1 className=" mt-2  font-poppins font-semibold text-sm ml-4">
									{" "}
									Emily
								</h1>
							</div>
							<div className="pl-2">
								<img
									src="person.jpg"
									alt=""
									className="rounded-full border-2 shadow-md h-16 w-16 mt-5  "
								/>
								<h1 className=" mt-2  font-poppins font-semibold text-sm ml-4">
									{" "}
									Emily
								</h1>
							</div>
							<div className="pl-2">
								<img
									src="person.jpg"
									alt=""
									className="rounded-full border-2 shadow-md h-16 w-16 mt-5  "
								/>
								<h1 className=" mt-2  font-poppins font-semibold text-sm ml-4">
									{" "}
									Emily
								</h1>
							</div>
							<div className="pl-2">
								<img
									src="person.jpg"
									alt=""
									className="rounded-full border-2 shadow-md h-16 w-16 mt-5  "
								/>
								<h1 className=" mt-2  font-poppins font-semibold text-sm ml-4">
									{" "}
									Emily
								</h1>
							</div>
						</div>
						<div className="flex items-center">
							<div>
								<img
									src="person.jpg"
									alt=""
									className="rounded-full border-2 shadow-md h-16 w-16 mt-5  "
								/>
								<h1 className=" mt-2  font-poppins font-semibold text-sm ml-4">
									{" "}
									Emily
								</h1>
							</div>
							<div className="pl-2">
								<img
									src="person.jpg"
									alt=""
									className="rounded-full border-2 shadow-md h-16 w-16 mt-5  "
								/>
								<h1 className=" mt-2  font-poppins font-semibold text-sm ml-4">
									{" "}
									Emily
								</h1>
							</div>
							<div className="pl-2">
								<img
									src="person.jpg"
									alt=""
									className="rounded-full border-2 shadow-md h-16 w-16 mt-5  "
								/>
								<h1 className=" mt-2  font-poppins font-semibold text-sm ml-4">
									{" "}
									Emily
								</h1>
							</div>
							<div className="pl-2">
								<img
									src="person.jpg"
									alt=""
									className="rounded-full border-2 shadow-md h-16 w-16 mt-5  "
								/>
								<h1 className=" mt-2  font-poppins font-semibold text-sm ml-4">
									{" "}
									Emily
								</h1>
							</div>
							<div className="pl-2">
								<img
									src="person.jpg"
									alt=""
									className="rounded-full border-2 shadow-md h-16 w-16 mt-5  "
								/>
								<h1 className=" mt-2  font-poppins font-semibold text-sm ml-4">
									{" "}
									Emily
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CollegeProfile;
