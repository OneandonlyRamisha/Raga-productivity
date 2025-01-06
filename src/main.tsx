import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import SignUp from "./SignUp/SignUp.tsx";
import SignIn from "./SignIn/SignIn.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "sign up",
    element: <SignUp />,
  },
  {
    path: "sign in",
    element: <SignIn />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
