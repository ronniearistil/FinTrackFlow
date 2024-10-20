// ExpensesContainer.jsx
import React from 'react';
import ExpenseDashboard from '../views/ExpenseDashboard';
import ExpenseForm from '../forms/ExpenseForm';

const ExpensesContainer = () => (
  <div>
    <ExpenseForm />
    <ExpenseDashboard />
  </div>
);

export default ExpensesContainer;

