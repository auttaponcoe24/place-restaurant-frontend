import React from "react";
import RestaurantItem from "../restaurant/RestaurantItem";

export default function RestaurantList({ data }) {
	// console.log("restaurant =>", data);

	return (
		<div className="col-span-12 md:col-span-6 lg:col-span-4 flex items-center justify-center">
			<RestaurantItem
				objData={data}
				id={data.id}
				profileImage={data.profile_image_url}
				nameRes={data.name}
				resImageArr={data.images}
				timeArr={data.operation_time}
				rating={data.rating}
			/>
		</div>
	);
}
