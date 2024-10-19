// ExpenseDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ProjectContext } from './ProjectContext';

const ExpenseDetail = () => {
  const { id } = useParams();
  const { expenses } = useContext(ProjectContext);
  const expense = expenses.find((exp) => exp.id === parseInt(id));

  if (!expense) return <h2>Expense not found</h2>;

  return (
    <div>
      <h1>{expense.name}</h1>
      <p>Amount: ${expense.amount}</p>
      <p>Project ID: {expense.projectId}</p>
      {/* Add more expense details as needed */}
    </div>
  );
};

export default ExpenseDetail;
