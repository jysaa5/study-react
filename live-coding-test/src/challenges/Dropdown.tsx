// 6. Build a Dropdown Menu
// Create a dropdown menu component that displays a list of items when clicked.

import Layout from '../shared/Layout';
import { useState } from 'react';

const DropdownContent = ({
  items,
  isOpen,
}: {
  items: string[];
  isOpen: boolean;
}) => {
  if (!isOpen) return null;
  return (
    <ul className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      {items.map((item) => (
        <li
          key={item}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

const Dropdown = () => {
  const items = ['Profile', 'Settings', 'Logout'];
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Layout>
      <div className="relative inline-block text-left">
        <button type="button" className="btn-primary" onClick={handleToggle}>
          Dropdown
        </button>
        <DropdownContent items={items} isOpen={isOpen} />
      </div>
    </Layout>
  );
};

export default Dropdown;
