// 5. Create a Search Bar
// Create a search bar component that filters a list of items as the user types.

import { useState } from 'react';
import Layout from '../shared/Layout';

function SearchBar({ items }: { items: string[] }) {
  const [query, setQuery] = useState('');

  const changeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const search = items.filter(
    (item) =>
      query.trim().length !== 0 &&
      item.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <Layout>
      <input
        type="text"
        className="input-field"
        placeholder="Search..."
        value={query}
        onChange={changeQuery}
      />
      <ul>
        {search.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Layout>
  );
}

export default function SearchBarApp() {
  const list = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango', 'Pineapple'];

  return <SearchBar items={list} />;
}
