import React from 'react';

const ExpenseCard = ({ expense }) => {
  return (
    <div className="expense-card">
      <h3>{expense.name}</h3>
      <p>Amount: ${expense.amount}</p>
      <p>Project ID: {expense.projectId}</p>
    </div>
  );
};

export default ExpenseCard;

