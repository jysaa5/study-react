// 1. Create a Counter Component
// Create a simple counter component that increases or decreases the count when clicking buttons.
import { useState } from 'react';
import Layout from '../shared/Layout';

export default function Counter() {

    const [count, setCount] = useState(0);

    return (
        <Layout>
            <h1> Counter : {count}</h1>
            <button type='button' onClick={() => setCount(count + 1)}>+</button>
            <button type='button' onClick={() => setCount(count - 1)}>-</button>
        </Layout>
    )
    
}