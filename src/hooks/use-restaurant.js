import React, { useContext } from "react";
import { RestaurantContext } from "../contexts/RestaurantContext";

export default function useRestaurant() {
	return useContext(RestaurantContext);
}
