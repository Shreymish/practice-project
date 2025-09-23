import React, { useState } from 'react';

function TodoItem({ todo, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    editTask(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span onClick={() => toggleComplete(todo.id)}>
          {todo.text} <em className={`priority-${todo.priority.toLowerCase()}`}>({todo.priority})</em>
        </span>
      )}

      <div>
        {isEditing ? (
          <button onClick={handleEdit}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button onClick={() => deleteTask(todo.id)}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;