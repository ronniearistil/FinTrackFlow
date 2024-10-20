// src/Components/ExpensesContainer.jsx
import React from 'react';
import { useProjects } from './ProjectContext';
import ExpenseCard from './ExpenseCard';

const ExpensesContainer = () => {
  const { expenses } = useProjects();

  // Check if expenses is undefined or empty
  if (!expenses || expenses.length === 0) {
    return <p>No expenses available.</p>;
  }

  return (
    <div className="expense-dashboard">
      {expenses.map((expense) => (
        <ExpenseCard key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpensesContainer;



