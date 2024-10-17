import React, { useContext } from 'react';
import { ProjectContext } from '../ProjectContext';

const ExpenseDashboard = () => {
  const { expenses } = useContext(ProjectContext);

  return (
    <div className="expense-dashboard">
      {expenses?.map((expense) => (
        <div key={expense.id} className="expense-card">
          <h3>{expense.name}</h3>
          <p>Amount: ${expense.amount}</p>
          <p>Project ID: {expense.projectId}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpenseDashboard;

