// src/Components/ExpensesContainer.jsx
import React, { useEffect, useState } from 'react';
import { useProjects } from './ProjectContext';
import ExpenseCard from './ExpenseCard';

const ExpensesContainer = ({ searchTerm }) => {
  const { expenses } = useProjects();
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    const visibleExpenses = expenses.filter(
      (expense) =>
        !expense.archived && expense.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredExpenses(visibleExpenses);
  }, [searchTerm, expenses]);

  return (
    <div className="expense-dashboard">
      {filteredExpenses.map((expense) => (
        <ExpenseCard key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpensesContainer;




