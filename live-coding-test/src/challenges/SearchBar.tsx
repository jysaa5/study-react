// 5. Create a Search Bar
// Create a search bar component that filters a list of items as the user types.

import { useState } from 'react';
import Layout from '../shared/Layout';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const list = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango', 'Pineapple'];

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <Layout>
      <input
        type="text"
        className="input-field"
        placeholder="Search"
        value={query}
        onChange={search}
      />
      <ul>
        {list
          .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </Layout>
  );
}
