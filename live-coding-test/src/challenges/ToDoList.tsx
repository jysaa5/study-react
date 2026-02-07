// 3. Build a To-Do List
// Create a to-do list component where users can add, remove, and mark items as complete.

import { useState } from 'react';
import Layout from '../shared/Layout';

function ToDoItem({
  index,
  text,
  isCompleted,
  onToggle,
  onRemove,
}: {
  index: number;
  text: string;
  isCompleted: boolean;
  onToggle: () => void;
  onRemove: () => void;
}) {
  return (
    <div className="py-4 flex items-center gap-2">
      <label>{index + 1}.</label>
      <span
        className={
          (isCompleted ? 'bg-sky-400' : '') +
          ' border border-gray-300 rounded-lg px-5 py-2.5 ml-2'
        }
        onClick={onToggle}
      >
        {text}
      </span>
      <button type="button" className="btn-secondary" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
}

export default function ToDoList() {
  const [todos, setTodos] = useState(
    [] as { text: string; isCompleted: boolean }[],
  );
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim() === '') return;
    setTodos([...todos, { text, isCompleted: false }]);
    setText('');
  };

  const toggleTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Layout>
      <div>
        <h1>To Do List</h1>
        <div className="flex gap-2">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="button" className="btn-primary" onClick={addTodo}>
            Add
          </button>
        </div>
      </div>
      <div>
        {todos.map((item, index) => (
          <ToDoItem
            key={index}
            index={index}
            text={item.text}
            isCompleted={item.isCompleted}
            onToggle={() => toggleTodo(index)}
            onRemove={() => removeTodo(index)}
          />
        ))}
      </div>
    </Layout>
  );
}
