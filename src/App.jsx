import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./components/nav";
import OwnerPage from "./components/owner";
import HomePage from "./components/Home";
import { AdminComponent } from "./components/admin";
import { UserComponent } from "./components/user";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navigation />
        <HomePage />
      </div>
    ),
  },
  {
    path: "/owner",
    element: (
      <div>
        <Navigation />
        <OwnerPage />
      </div>
    ),
  },
  {
    path: "/users",
    element: (
      <div>
        <Navigation />
        <UserComponent />
      </div>
    ),
  },
  {
    path: "/admin",
    element: (
      <div>
        <Navigation />
        <AdminComponent />
      </div>
    ),
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
