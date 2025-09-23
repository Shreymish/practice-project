import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterControls from './components/FilterControls';
import './App.css';

function App() {
  // State to hold the list of tasks, initialized from localStorage
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // States for search and sort functionality
  const [searchTerm, setSearchTerm] = useState('');
  const [sortPriority, setSortPriority] = useState('All');

  // Effect to save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // --- Task Management Functions ---

  const addTodo = (text, priority) => {
    const newTodo = {
      id: Date.now(),
      text,
      priority,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTask = (id, newText) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  // --- Filtering and Sorting Logic ---

  const filteredAndSortedTodos = todos
    .filter(todo =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      // Don't sort if 'All' is selected
      if (sortPriority === 'All') return 0;
      
      const priorities = { High: 3, Medium: 2, Low: 1 };
      
      // Sort in descending order of priority value
      if (priorities[a.priority] > priorities[b.priority]) return -1;
      if (priorities[a.priority] < priorities[b.priority]) return 1;
      
      return 0;
    });

  // --- Render JSX ---

  return (
    <div className="app-container">
      <h1>React To-Do App</h1>
      <TodoForm addTodo={addTodo} />
      <FilterControls 
        setSearchTerm={setSearchTerm} 
        setSortPriority={setSortPriority} 
      />
      <TodoList
        todos={filteredAndSortedTodos}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;