// ExpenseDashboard.jsx
import React, { useContext } from 'react';
import { ProjectContext } from './ProjectContext';

const ExpenseDashboard = () => {
  const { expenses } = useContext(ProjectContext);

  if (!expenses) return <p>Loading expenses...</p>; // Handles undefined case

  return (
    <div className="expense-dashboard">
      {expenses.length > 0 ? (
        expenses.map((expense) => (
          <div key={expense.id} className="expense-card">
            <h3>{expense.name}</h3>
            <p>Amount: ${expense.amount}</p>
            <p>Project ID: {expense.projectId}</p>
          </div>
        ))
      ) : (
        <p>No expenses available.</p>
      )}
    </div>
  );
};

export default ExpenseDashboard;


