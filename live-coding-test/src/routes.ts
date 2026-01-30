import { createBrowserRouter } from "react-router";
import App from "./App.tsx";
import Counter from "./challenges/Counter.tsx";
import ToggleSwitch from './challenges/ToggleSwitch.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/counter",
    Component: Counter,
  },
  {
    path: "/toggle-switch",
    Component: ToggleSwitch,
  },
]);
