import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Ver } from "./screens/Ver";
import { Quetion } from "./screens/Quetion";
import { QuetionScreen } from "./screens/QuetionScreen";
import { Quetion4 } from "./screens/Quetion4";
import { Quetion2 } from "./screens/Quetion2";
import { Quetion3 } from "./screens/Quetion3";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Ver />,
  },
  {
    path: "/ver",
    element: <Ver />,
  },
  {
    path: "/quetion",
    element: <Quetion />,
  },
  {
    path: "/quetion-screen",
    element: <QuetionScreen />,
  },
  {
    path: "/quetion-4",
    element: <Quetion4 />,
  },
  {
    path: "/quetion-2",
    element: <Quetion2 />,
  },
  {
    path: "/quetion-3",
    element: <Quetion3 />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
