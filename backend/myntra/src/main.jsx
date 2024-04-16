import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./components/Bag.js";
import Home from "./components/HomeItem.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={myntraStore}> */}
    <RouterProvider router={router} />
    {/* </Provider> */}
  </React.StrictMode>
);
