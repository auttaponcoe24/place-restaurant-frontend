import React, { useEffect } from "react";
import useRestaurant from "../hooks/use-restaurant";
import { useParams } from "react-router-dom";

export default function DetailRestaurant() {
	const { fetchRestaurant, restaurant } = useRestaurant();
	const { resId } = useParams();

	useEffect(() => {
		fetchRestaurant();
	}, []);
	// console.log(restaurant);

	const restaurantById = restaurant.find((item) => item.id === +resId);
	console.log("restaurantById =>", restaurantById);

	return (
		<div className="bg-[#C4D3E9] m-6 p-4 rounded-lg">
			<div className="grid grid-cols-12 px-4 py-2 gap-8">
				{/* left */}
				<div className="col-span-8 ">
					<div className="h-[400px] overflow-hidden">
						<img
							src={restaurantById?.profile_image_url}
							alt=""
							className="h-full w-full object-cover rounded-t-lg"
						/>
					</div>
					<div className="flex flex-col gap-4 bg-white rounded-b-lg p-4">
						<div className="flex items-center justify-between">
							<h1 className="uppercase text-lg font-bold  ">
								{restaurantById?.name}
							</h1>
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 bg-primary rounded-full"></div>
								<div className="text-md">{restaurantById?.rating}</div>
							</div>
						</div>
						<div className="grid grid-cols-12">
							<div className="col-span-3 font-semibold">Address:</div>
							<div className="col-span-9">{restaurantById?.address}</div>
						</div>
						<div className="grid grid-cols-12">
							<div className="col-span-3 font-semibold">Address:</div>
							<div className="col-span-9">
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
				<div className="col-span-4 p-6 flex flex-col bg-white rounded-lg">
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
	);
}
