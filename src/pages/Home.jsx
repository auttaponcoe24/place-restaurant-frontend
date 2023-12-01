import React, { useEffect, useState } from "react";
import useRestaurant from "../hooks/use-restaurant";
import Button from "../components/Button";
import RestaurantList from "../features/restaurant/RestaurantList";
import { Input } from "@material-tailwind/react";
import { IoMdSearch } from "react-icons/io";

export default function Home() {
	const { fetchRestaurant, restaurant } = useRestaurant();

	const [search, setSearch] = useState("");
	const [selected, setSelected] = useState("");

	useEffect(() => {
		fetchRestaurant();
	}, []);
	// console.log(restaurant);

	return (
		<div className="px-4 py-2 flex flex-col gap-4">
			<div className="flex items-center justify-between px-8">
				<h1 className="text-2xl">Place List</h1>
				<div className="flex items-center gap-4">
					<div className="relative h-10 w-72 min-w-[200px]">
						<select
							className="border border-gray-400 w-full p-2 rounded-lg outline-none text-[#605C5C] text-sm"
							label="Restaurant"
							value={selected}
							onChange={(e) => setSelected(e.target.value)}
						>
							<option value="">Restaurant</option>
							<option value="bakery">Bakery</option>
							<option value="cafe">Cafe</option>
						</select>
					</div>
					<div> | </div>
					<div className="w-72 relative">
						<Input
							label="Search name..."
							onChange={(e) => setSearch(e.target.value)}
						/>
						<IoMdSearch
							className="z-10 absolute top-2 right-2 text-[#605C5C]"
							size={25}
						/>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12 gap-4">
				{restaurant
					.filter((item) => {
						return search.toLowerCase() === ""
							? item
							: item.name.toLowerCase().includes(search);
					})
					.filter((item) => {
						return selected === "" ? item : item.categories.includes(selected);
					})
					.map((item) => (
						<RestaurantList key={item.id} data={item} />
					))}
			</div>
		</div>
	);
}
