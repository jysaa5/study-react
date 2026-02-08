import { createBrowserRouter } from 'react-router';
import App from './App.tsx';
import Counter from './challenges/Counter.tsx';
import ToggleSwitch from './challenges/ToggleSwitch.tsx';
import ToDoList from './challenges/ToDoList.tsx';
import FetchDataAPI from './challenges/FetchDataAPI.tsx';
import SearchBar from './challenges/SearchBar.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: '/counter',
    Component: Counter,
  },
  {
    path: '/toggle-switch',
    Component: ToggleSwitch,
  },
  {
    path: '/to-do-list',
    Component: ToDoList,
  },
  {
    path: '/fetch-data-api',
    Component: FetchDataAPI,
  },
  {
    path: '/search-bar',
    Component: SearchBar,
  },
]);
