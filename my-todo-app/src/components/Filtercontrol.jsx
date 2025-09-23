import React from 'react';

function FilterControls({ setSearchTerm, setSortPriority }) {
  return (
    <div className="filter-controls">
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select onChange={(e) => setSortPriority(e.target.value)}>
        <option value="All">Sort by Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
}

export default FilterControls;