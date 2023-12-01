import React from "react";
import dayjs from "dayjs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function RestaurantItem({
	objData,
	id,
	profileImage,
	nameRes,
	resImageArr,
	timeArr,
	rating,
}) {
	const navigate = useNavigate();
	// console.log("timeArr =>", timeArr);
	const currentDay = dayjs().format("dddd");
	// console.log("currentDay =>", currentDay);

	const timeBusiness = timeArr.filter((item) => item.day === currentDay);
	// console.log("timeBusiness", timeBusiness);

	return (
		<button onClick={() => navigate(`/${id}/detail`)}>
			<div className="flex flex-col gap-2 p-4 border shadow-lg rounded-lg max-w-[400px] max-h-[225px]">
				<div className="flex items-center gap-4">
					<div className="w-[80px] h-[60px] overflow-hidden ">
						<img
							src={profileImage}
							alt={nameRes}
							className="w-full h-full object-cover rounded-lg"
						/>
					</div>
					<div className="flex flex-col gap-1 w-full">
						<h1 className="text-lg font-semibold text-start">{nameRes}</h1>
						<div className="flex items-center justify-between gap-2 ">
							<div className="flex gap-2">
								<FaRegCalendarAlt />
								{timeBusiness[0].time_open === "closed" ? (
									<>
										<small>Closed</small>
									</>
								) : (
									<>
										<small>
											{timeBusiness[0].time_open} AM -{" "}
											{timeBusiness[0].time_open} PM
										</small>
									</>
								)}
							</div>
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 bg-primary rounded-full"></div>
								<div className="text-md">{rating}</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-[360px] h-[120px] flex overflow-hidden">
					<div className="w-[120px] h-[120px]">
						<img
							src={resImageArr[0]}
							alt="resImage1"
							className="w-full h-full rounded-l-lg object-cover"
						/>
					</div>
					<div className="w-[120px] h-[120px]">
						<img
							src={resImageArr[1]}
							alt="resImage2"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="w-[120px] h-[120px]">
						<img
							src={resImageArr[2]}
							alt="resImage3"
							className="w-full h-full rounded-r-lg object-cover"
						/>
					</div>
				</div>
			</div>
		</button>
	);
}
