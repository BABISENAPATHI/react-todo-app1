import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ totalCount, completedCount }) => {
  const progress = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  return (
    <header>
      <div className="app-header">
        <div className="header-title">
          <h1>TaskFlow</h1>
          <p>Stay focused, organized, and productive</p>
        </div>
        <motion.div
          key={`${completedCount}-${totalCount}`}
          initial={{ scale: 0.85, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          className="stats-badge"
        >
          {completedCount} / {totalCount} Done
        </motion.div>
      </div>

      <div className="progress-container">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        />
      </div>
    </header>
  );
};

export default Header;
