import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import RestaurantContextProvider from "./contexts/RestaurantContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
	<RestaurantContextProvider>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</RestaurantContextProvider>

	// </React.StrictMode>,
);
