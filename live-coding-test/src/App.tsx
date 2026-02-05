import { Link } from 'react-router'
import './App.css'
import Layout from './shared/Layout'

function App() {

  return (
    <Layout>
      <div>Home</div>
      <div className="flex flex-col gap-2">
        <Link to="/counter" className="block w-full border-2 border-indigo-500 p-2 mb-2 text-center">
          Go to Counter
        </Link>
        <Link to="/toggle-switch" className="block w-full border-2 border-indigo-500 p-2 mb-2 text-center">
          Go to Toggle Switch
        </Link>
        <Link to="/to-do-list" className="block w-full border-2 border-indigo-500 p-2 mb-2 text-center">
          Go to To Do List
        </Link>
      </div>
    </Layout>
  );
}

export default App
