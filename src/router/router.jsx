import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootRouter from "./RootRouter";
import Main from "../components/main/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRouter />,
    children: [
      {
        element: <Main />,
        index: true,
      },
    ],
  },
]);
