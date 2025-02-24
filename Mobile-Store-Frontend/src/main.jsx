import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import App from "./App.jsx";
import "./index.css"; 
const router = createBrowserRouter([{ path: "/*", element: <App /> }]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster
      toastOptions={{
        position: "top-right",
        style: {
          background: "#283046",
          color: "white",
        },
      }}
    />
  </Provider>
);
