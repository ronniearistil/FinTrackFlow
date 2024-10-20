// src/Components/ExpenseCard.jsx
import React from 'react';

const ExpenseCard = ({ expense, onArchive }) => (
  <div className="expense-card">
    <h3>{expense.name}</h3>
    <p>Amount: ${expense.amount}</p>
    <p>Project ID: {expense.projectId}</p>

    <button onClick={onArchive}>Archive</button>
  </div>
);

export default ExpenseCard;

