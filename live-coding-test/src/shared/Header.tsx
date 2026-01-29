import { Link } from 'react-router'

export default function Header() {

    return (
      <header className="flex items-center px-6 py-4 bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <Link to="/" className="text-blue-600 font-bold hover:text-blue-800 transition-colors">
          Home
        </Link>
        <div className="grow">
          <h1>Live Coding Test</h1>
        </div>
      </header>
    );
}