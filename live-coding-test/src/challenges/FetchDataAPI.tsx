// 3. Fetch Data from an API
// Create a component fetching data from an API and displaying it in a list.

import { useEffect, useState } from 'react';
import Layout from '../shared/Layout';

interface Data {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const FetchDataList = () => {
  const [data, setData] = useState([] as Data[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
          { signal },
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error: unknown) {
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            console.log('Fetch aborted');
          } else {
            console.error('Fetch error:', error.message);
          }
        } else {
          console.error('An unknown error occurred:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    getData();

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return (
      <Layout>
        <div> Loading ... </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <ul>
        {data.map((item: { id: number; title: string }) => (
          <li key={item.id} className="py-4 flex items-center gap-2">
            {item.title}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default FetchDataList;
