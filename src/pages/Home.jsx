import React, { useEffect, useState } from "react";
import useRestaurant from "../hooks/use-restaurant";
import RestaurantList from "../features/restaurant/RestaurantList";
import { Input } from "@material-tailwind/react";
import { IoMdSearch } from "react-icons/io";
import Pagination from "../components/Pagination";

export default function Home() {
	const { fetchRestaurant, restaurant } = useRestaurant();

	const [search, setSearch] = useState("");
	const [selected, setSelected] = useState("");

	useEffect(() => {
		fetchRestaurant();
	}, []);
	// console.log(restaurant);

	return (
		<div className="max-w-[1440px] px-4 py-2 flex flex-col gap-4 mx-auto ">
			<div className="flex flex-col md:flex-row items-center justify-between gap-2 mt-1">
				<h1 className="text-2xl self-start md:w-full ml-6">Place List</h1>
				{/* select and search */}
				<div className="flex flex-col w-full md:flex-row items-center gap-4 flex-1 mr-6">
					<div className="relative h-10 w-full md:w-72">
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
					<div className="hidden md:block"> | </div>
					<div className="w-full relative md:w-72">
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
				{/* {restaurant
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
					))} */}
				<Pagination data={restaurant} search={search} selected={selected} />
			</div>
		</div>
	);
}
