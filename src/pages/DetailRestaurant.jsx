import React, { useEffect, useState } from "react";
import useRestaurant from "../hooks/use-restaurant";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import { IoIosArrowBack } from "react-icons/io";

export default function DetailRestaurant() {
	const { fetchRestaurant, restaurant } = useRestaurant();
	const { resId } = useParams();
	const [isImage, setIsImage] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		fetchRestaurant();
	}, []);
	// console.log(restaurant);

	const restaurantById = restaurant.find((item) => item.id === +resId);
	console.log("restaurantById =>", restaurantById);

	return (
		<div className="max-w-[1440px] flex flex-col gap-2 ">
			<Button onClick={() => navigate(`/`)} style={`self-start mt-4 mx-4`}>
				<IoIosArrowBack /> BACK
			</Button>
			<div className="flex items-center justify-between relative md:hidden">
				<div
					className={`w-[50%] absolute top-0 left-4 ${isImage ? "z-10" : ""}`}
				>
					<Button
						active={isImage}
						style={`w-full`}
						onClick={() => setIsImage(true)}
					>
						INFORMATION
					</Button>
				</div>

				<div
					className={`w-[50%] absolute top-0 right-4 ${isImage ? "" : "z-10"}`}
				>
					<Button
						active={!isImage}
						style={`w-full`}
						onClick={() => setIsImage(false)}
					>
						IMAGE
					</Button>
				</div>
			</div>
			<div className="md:bg-[#C4D3E9] mt-12 md:mt-4 mx-4 p-4 rounded-lg">
				<div className="grid grid-cols-12 px-4 py-2 gap-8">
					{/* left */}
					<div
						className={`${isImage ? "col-span-12" : "hidden"} md:col-span-8`}
					>
						<div className="h-[200px] md:h-[400px] overflow-hidden">
							<img
								src={restaurantById?.profile_image_url}
								alt=""
								className="h-full w-full object-cover rounded-t-lg"
							/>
						</div>
						<div className="flex flex-col gap-4 bg-white border shadow-2xl rounded-b-lg px-4 pt-4 pb-12">
							<div className="flex items-center justify-between">
								<h1 className="uppercase text-lg font-bold  ">
									{restaurantById?.name}
								</h1>
								<div className="flex items-center gap-2">
									<div className="w-3 h-3 bg-primary rounded-full"></div>
									<div className="text-md">{restaurantById?.rating}</div>
								</div>
							</div>
							<div className="grid grid-cols-12 gap-2">
								<div className="col-span-12 md:col-span-3 font-semibold">
									Address:
								</div>
								<div className="col-span-12 md:col-span-9">
									{restaurantById?.address}
								</div>
							</div>
							<div className="grid grid-cols-12 gap-2">
								<div className="col-span-12 md:col-span-3 font-semibold">
									Address:
								</div>
								<div className="col-span-12 md:col-span-9">
									{restaurantById?.operation_time.map((item, index) => (
										<div key={index}>
											{item.day}: {item.time_open} AM - {item.time_close} PM
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* right */}

					<div
						className={`${
							isImage ? "hidden" : "col-span-12"
						} md:block md:col-span-4 p-6 flex flex-col bg-white rounded-lg border shadow-2xl`}
					>
						<h1 className="text-xl mb-4">Images</h1>
						<div className="max-w-[479px] h-[318px] overflow-hidden">
							<img
								src={restaurantById?.images[0]}
								alt="images0"
								className="w-full h-full rounded-t-xl object-cover"
							/>
						</div>
						<div className="max-w-[479px] h-[318px] overflow-hidden">
							<img
								src={restaurantById?.images[1]}
								alt="images1"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="max-w-[479px] h-[318px] overflow-hidden">
							<img
								src={restaurantById?.images[2]}
								alt="images2"
								className="w-full h-full rounded-b-xl object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
