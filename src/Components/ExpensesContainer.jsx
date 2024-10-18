// ExpensesContainer.jsx
import React, { useContext } from 'react';
import { ProjectContext } from '../ProjectContext';
import ExpenseDashboard from './ExpenseDashboard';
import ExpenseForm from './ExpenseForm';

const ExpensesContainer = () => {
  const { expenses, addExpense } = useContext(ProjectContext);

  return (
    <div>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseDashboard expenses={expenses} />
    </div>
  );
};

export default ExpensesContainer;
