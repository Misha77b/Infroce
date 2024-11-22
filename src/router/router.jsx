import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootRouter from "./RootRouter";
import Main from "../components/main/Main";
import CardPage from "../components/cardPage/CardPage";

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <RootRouter />,
		children: [
			{
				element: <Main />,
				index: true,
			},
			{
				element: <CardPage />,
			},
		],
	},
]);
