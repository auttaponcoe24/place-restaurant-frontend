import React from "react";
import { IoIosNotifications, IoIosArrowDown } from "react-icons/io";
import logo from "../assets/img/logo.png";
import profileBlank from "../assets/img/profile-blank.png";

export default function Header() {
	return (
		<header className="flex items-center justify-between px-4 py-2 bg-primary text-white">
			<div className="w-8 h-8 rounded-lg overflow-hidden">
				<img src={logo} alt="" className="w-full h-full object-cover" />
			</div>
			<div className="flex items-center gap-4">
				<div className="relative">
					<div className="absolute top-0 right-1 z-10 w-2 h-2 bg-red-600 rounded-full"></div>
					<IoIosNotifications size={25} />
				</div>
				<div className="w-8 h-8 rounded-full overflow-hidden">
					<img
						src={profileBlank}
						alt=""
						className="w-full h-full bg-blue-gray-50"
					/>
				</div>
				<div className="flex items-center gap-2 cursor-pointer">
					<small className="text-sm">name</small>
					<IoIosArrowDown size={10} />
				</div>
			</div>
		</header>
	);
}
