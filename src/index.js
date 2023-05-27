import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Error from "./Pages/understand/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./Components/Wrapper/Wrapper";
import Focused from "./Pages/About/Focused/Focused";
import Team from "./Pages/Contact/Team/Team";
import Sizes from "./Pages/Pricing page/Sizes/Sizes";
import Latest from "./Pages/Blog/Latest/Latest";
import Login from "./Pages/Register Section/Login/Login";
import Last from "./Pages/Login page/Last/Last";

import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Wrapper />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <Focused />,
        errorElement: <Error />,
      },
      {
        path: "/home",
        element: <Wrapper />,
        errorElement: <Error />,
      },
      {
        path: "/Contact",
        element: <Team />,
        errorElement: <Error />,
      },
      {
        path: "/Pricing",
        element: <Sizes />,
        errorElement: <Error />,
      },
      {
        path: "/Blog",
        element: <Latest />,
        errorElement: <Error />,
      },
      {
        path: "/Login",
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: "/Buy Nesa",
        element: <Last />,
        errorElement: <Error />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
