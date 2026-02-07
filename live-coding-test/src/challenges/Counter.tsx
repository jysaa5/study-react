// 1. Create a Counter Component
// Create a simple counter component that increases or decreases the count when clicking buttons.

import { useState } from 'react';
import Layout from '../shared/Layout';

export default function Counter() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    setCount(count - 1);
  };

  return (
    <Layout>
      <h1> Counter : {count}</h1>
      <div className="flex gap-4">
        <button type="button" className="btn-primary" onClick={addCount}>
          +
        </button>
        <button type="button" className="btn-primary" onClick={minusCount}>
          -
        </button>
      </div>
    </Layout>
  );
}
