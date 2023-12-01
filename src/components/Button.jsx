import React from "react";

export default function Button({ children, onClick, style }) {
	return (
		<button
			onClick={onClick}
			className={`text-white bg-primary hover:bg-secondary py-2 px-4 rounded-xl flex items-center justify-center gap-1 ${style}`}
		>
			{children}
		</button>
	);
}
