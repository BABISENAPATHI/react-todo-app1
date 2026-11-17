import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const TodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAddTodo(trimmed);
    setText('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="New task description"
      />
      <motion.button
        type="submit"
        className="add-btn"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
      >
        <Plus size={18} />
        <span>Add</span>
      </motion.button>
    </form>
  );
};

export default TodoForm;
