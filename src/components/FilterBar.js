import React from 'react';

const FilterBar = ({ filter, setFilter, hasCompleted, onClearCompleted }) => {
  const filters = ['all', 'active', 'completed'];

  return (
    <div className="filter-bar">
      <div className="filter-tabs">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            className={`filter-btn ${filter === item ? 'active' : ''}`}
            onClick={() => setFilter(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      {hasCompleted && (
        <button
          type="button"
          className="clear-btn"
          onClick={onClearCompleted}
        >
          Clear completed
        </button>
      )}
    </div>
  );
};

export default FilterBar;
