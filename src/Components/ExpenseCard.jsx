// src/Components/ExpenseCard.jsx
import React from 'react';
import { useProjects } from './ProjectContext';

const ExpenseCard = ({ expense }) => {
  const { archiveProject } = useProjects();
  
  const handleArchive = () => {
    archiveProject(expense.projectId); // Archive the corresponding project
  };

  return (
    <div className="expense-card">
      <h3>{expense.name}</h3>
      <p>Amount: ${expense.amount}</p>
      <p>Project ID: {expense.projectId}</p>
      <button onClick={handleArchive}>Archive</button>
    </div>
  );
};

export default ExpenseCard;


