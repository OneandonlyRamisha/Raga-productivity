import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import SignUp from "./SignUp/SignUp.tsx";
import SignIn from "./SignIn/SignIn.tsx";
import Dashboard from "./ClientSideApp/Dashboard/Dashboard.tsx";
import ProjectTracker from "./ClientSideApp/ProjectsTracker/ProjectTracker.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sign up",
    element: <SignUp />,
  },
  {
    path: "/sign in",
    element: <SignIn />,
  },
  {
    path: "/home",
    element: <Dashboard />,
  },
  {
    path: "/projectTraker",
    element: <ProjectTracker />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
