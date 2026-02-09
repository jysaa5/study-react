// 6. Build a Dropdown Menu
// Create a dropdown menu component that displays a list of items when clicked.

import Layout from '../shared/Layout';
import { useRef, useState, useEffect } from 'react';

const DropdownContent = ({
  items,
  isOpen,
  onClose,
}: {
  items: string[];
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;
  return (
    <ul className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      {items.map((item) => (
        <li
          key={item}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
          onClick={onClose}
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

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Layout>
      <div className="relative inline-block text-left" ref={dropdownRef}>
        <button type="button" className="btn-primary" onClick={handleToggle}>
          Dropdown
        </button>
        <DropdownContent items={items} isOpen={isOpen} onClose={close} />
      </div>
    </Layout>
  );
};

export default Dropdown;
