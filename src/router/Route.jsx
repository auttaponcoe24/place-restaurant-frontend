import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import DetailRestaurant from "../pages/DetailRestaurant";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "", element: <Home /> },
			{ path: ":resId/detail", element: <DetailRestaurant /> },
		],
	},
]);
export default function Route() {
	return <RouterProvider router={router} />;
}
