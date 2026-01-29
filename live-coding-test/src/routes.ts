import { createBrowserRouter } from "react-router";
import App from "./App.tsx";
import Couter from "./challenges/Couter.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/counter",
    Component: Couter,
  },
]);
