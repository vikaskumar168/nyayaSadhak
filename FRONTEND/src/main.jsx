import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup.jsx";
import Homepage from "./pages/Homepage.jsx";
import Signin from "./pages/Signin.jsx";
import ChatBot from "./pages/ChatBot.jsx";
import SidebarContextProvider from "./context/SidebarContext.jsx";
//import RedirectHandler from "./components/RedirectHandler.jsx"; // Import RedirectHandler component
import "./index.css";
import RedirectHandler from "./Components/RedirectHandler.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/bot",
    element: <ChatBot />,
  },
  // {
  //   path: "/*",
  //   element: <RedirectHandler />, // Add RedirectHandler to handle redirect
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SidebarContextProvider>
      <RouterProvider router={router} />
    </SidebarContextProvider>
  </React.StrictMode>
);
