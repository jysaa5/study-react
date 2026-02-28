import { Link } from 'react-router';
import './App.css';
import Layout from './shared/Layout';

function App() {
  return (
    <Layout>
      <div>Home</div>
      <div className="flex flex-col gap-2">
        <Link to="/counter" className="link-item">
          Counter
        </Link>
        <Link to="/toggle-switch" className="link-item">
          Toggle Switch
        </Link>
        <Link to="/to-do-list" className="link-item">
          To Do List
        </Link>
        <Link to="/fetch-data-api" className="link-item">
          Fetch Data API
        </Link>
        <Link to="/search-bar" className="link-item">
          Search Bar
        </Link>
        <Link to="/dropdown-popover" className="link-item">
          Dropdown Popover
        </Link>
        <Link to="/dropdown" className="link-item">
          Dropdown
        </Link>
        <Link to="/tabs" className="link-item">
          Tabs
        </Link>
        <Link to="/modal" className="link-item">
          Modal
        </Link>
      </div>
    </Layout>
  );
}

export default App;
