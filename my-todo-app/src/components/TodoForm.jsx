import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Medium'); // Default priority

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return; // Don't add empty tasks
    addTodo(text, priority);
    setText(''); // Reset input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;