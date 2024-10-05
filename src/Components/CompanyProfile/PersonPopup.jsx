import React from "react";

const PersonPopup = () => {
	return (
		<div className="absolute top-36 left-[600px] h-80 w-80 rounded-lg  bg-white font-poppins">
			<div className="flex justify-center  ">
				<img className="rounded-full h-32 w-32 mt-8" src="person.jpg" alt="" />
			</div>
			<div className="mt-5 ">
				<div className="flex justify-center font-bold">
					<h1>Dr. Ajit kumar Mishra</h1>
				</div>
				<div className="flex justify-center">
					<h1>Department of Physics</h1>
				</div>
				<div className="flex items-center justify-center rounded-lg  bg-white border-black">
					<img src="LinkedinLogo.png" alt="" className="mt-2 p-1 h-9 border border-black rounded-lg" />
					
				</div>
			</div>
		</div>
	);
};

export default PersonPopup;
