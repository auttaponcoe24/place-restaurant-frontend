import React, { createContext, useState } from "react";

import mockData from "../data/mockData.json";

export const RestaurantContext = createContext();

export default function RestaurantContextProvider({ children }) {
	const [restaurant, setRestaurant] = useState([]);

	const fetchRestaurant = () => {
		setRestaurant(mockData);
	};
	return (
		<RestaurantContext.Provider value={{ fetchRestaurant, restaurant }}>
			{children}
		</RestaurantContext.Provider>
	);
}
