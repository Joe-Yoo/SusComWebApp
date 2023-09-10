import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Route Pages Imports
import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/Login.jsx"
import SignUpPage from "./pages/SignUp.jsx"

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "Login/",
    element: <LoginPage />,
  },
  {
    path: "SignUp/",
    element: <SignUpPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
