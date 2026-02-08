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
    <li
      className="py-4 flex items-center gap-2"
      style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
    >
      <label>{index + 1}.</label>
      <span
        className={
          (isCompleted ? 'bg-sky-400' : '') +
          ' border border-gray-300 rounded-lg px-5 py-2.5 ml-2'
        }
      >
        {text}
      </span>
      <button type="button" className="btn-secondary" onClick={onToggle}>
        Toggle
      </button>
      <button type="button" className="btn-secondary" onClick={onRemove}>
        Remove
      </button>
    </li>
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
            className="input-field"
            placeholder="Add a to-do"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="button" className="btn-primary" onClick={addTodo}>
            Add
          </button>
        </div>
      </div>
      <ul>
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
      </ul>
    </Layout>
  );
}
