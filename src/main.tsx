import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Results } from "./pages/Results/Results.tsx";
import { User } from "./pages/UserProfile/user.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Results />,
  },
  {
    path: "/user/:id",
    element: <User />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
