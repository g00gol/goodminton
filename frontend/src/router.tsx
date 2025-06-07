import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "./components/layouts/MainLayout";
import { ErrorLayout } from "./components/layouts/ErrorLayout";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorLayout />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
