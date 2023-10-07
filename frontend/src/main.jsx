import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Route Pages Imports
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx"
import Dashboard from "./pages/Dashboard.jsx"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
