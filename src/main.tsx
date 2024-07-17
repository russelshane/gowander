import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTrip from "@/routes/create-trip/index.tsx";
import App from "@/routes/App.tsx";
import Header from "@/components/custom/Header.tsx";
import "@/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/trip/start",
    element: <CreateTrip />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
