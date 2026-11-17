import React from 'react';
import { motion } from 'framer-motion';
import { Check, Trash2 } from 'lucide-react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: -16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 40, scale: 0.92 }}
      transition={{
        type: 'spring',
        stiffness: 350,
        damping: 26,
      }}
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
    >
      <div className="todo-left" onClick={() => onToggle(todo.id)}>
        <motion.button
          type="button"
          whileTap={{ scale: 0.85 }}
          className={`checkbox-btn ${todo.completed ? 'checked' : ''}`}
          aria-label={todo.completed ? 'Mark as uncompleted' : 'Mark as completed'}
        >
          {todo.completed && (
            <motion.span
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              style={{ display: 'flex' }}
            >
              <Check size={15} strokeWidth={3} />
            </motion.span>
          )}
        </motion.button>
        <span className="todo-text">{todo.text}</span>
      </div>

      <motion.button
        type="button"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        className="delete-btn"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
      >
        <Trash2 size={16} />
      </motion.button>
    </motion.li>
  );
};

export default TodoItem;
