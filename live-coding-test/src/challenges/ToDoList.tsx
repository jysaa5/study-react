// 3. Build a To-Do List
// Create a to-do list component where users can add, remove, and mark items as complete.

import {  useState } from 'react';
import Layout from '../shared/Layout';


function ToDoItem({text, isCompleted, onToggle, onRemove}: {text: string, isCompleted: boolean, onToggle: () => void, onRemove: () => void}) {
    return (
      <div>
        <span onClick={onToggle} className={isCompleted? 'bg-sky-400': ''}>{text}</span>
        <button type="button" onClick={onRemove}>
          remove
        </button>
      </div>
    );
}


export default function ToDoList() {
    const [items, setItems] = useState([] as { text: string, isCompleted: boolean }[]);
    const [text, setText] = useState('');
    return (
      <Layout>
        <div>
          <h1>To Do List</h1>
          <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={text} onChange={(e) => setText(e.target.value)} />
          <button
            type="button"
            onClick={() => {
              setItems([...items, { text, isCompleted: false }]);
              setText("");
            }}
          >
            add
          </button>
        </div>
        <div>
          {items.map((item, index) => (
            <ToDoItem
              key={index}
              text={item.text}
              isCompleted={item.isCompleted}
              onToggle={() => {
                const newItems = [...items];
                newItems[index].isCompleted = !newItems[index].isCompleted;
                setItems(newItems);
              }}
              onRemove={() => {
                const newItems = [...items];
                newItems.splice(index, 1);
                setItems(newItems);
              }}
            />
          ))}
        </div>
      </Layout>
    );
}