import { useState, } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./components/nav";
import OwnerPage from "./components/owner";
import HomePage from "./components/Home";
import { AdminComponent } from "./components/admin";
import { UserComponent } from "./components/user";

export default function App() {

const [user, setUser] = useState([]);
function addUser(newUser){
  setUser([...user, {...newUser, userID: `UID_${user.length} + 1`}]);
}

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
        <UserComponent user={addUser} />
      </div>
    ),
  },
  {
    path: "/admin",
    element: (
      <div>
        <Navigation />
        <AdminComponent addUser={addUser} />

      </div>
    ),
  },
]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
