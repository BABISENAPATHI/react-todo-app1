import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="empty-state"
      >
        No tasks to display. Add one above to get started!
      </motion.div>
    );
  }

  return (
    <ul className="todo-list">
      <AnimatePresence mode="popLayout">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default TodoList;
