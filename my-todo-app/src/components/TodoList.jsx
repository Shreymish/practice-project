import React from 'react';
import TodoItem from './TodoItem'; // Import the TodoItem component

function TodoList({ todos, toggleComplete, deleteTask, editTask }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id} // React requires a unique 'key' for list items
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;