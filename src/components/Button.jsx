import React from "react";

export default function Button({ children, onClick, style, active = true }) {
	return (
		<button
			onClick={onClick}
			className={`
			${active ? "bg-primary text-white " : "bg-white text-[#134B8A] border"}
			 hover:bg-secondary py-2 px-4 rounded-full flex items-center justify-center gap-1 ${style}`}
		>
			{children}
		</button>
	);
}
