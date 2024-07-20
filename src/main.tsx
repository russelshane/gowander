import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import CreateTrip from "@/routes/planner/create-trip";
import App from "@/routes/App.tsx";
import Header from "@/components/custom/Header.tsx";
import Footer from "@/components/custom/Footer.tsx";
import "@/index.css";
import numberOfDaysReducer from "@/lib/redux/planner/numberOfDaysSlice";
import destinationReducer from "@/lib/redux/planner/destinationSlice";
import numberOfPeopleReducer from "@/lib/redux/planner/numberOfPeopleSlice";
import budgetSliceReducer from "@/lib/redux/planner/budgetSlice";

// Creates a global redux store to access state
const store = configureStore({
  reducer: {
    numberOfDays: numberOfDaysReducer,
    numberOfPeople: numberOfPeopleReducer,
    destination: destinationReducer,
    budget: budgetSliceReducer,
  },
});

// Creates new app router handler with react-router-dom
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
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </Provider>
  </React.StrictMode>
);
