// src/Components/ExpensesContainer.jsx
import React, { useState, useEffect } from 'react';
import { useProjects } from './ProjectContext';
import ExpenseCard from './ExpenseCard';

const ExpensesContainer = ({ searchTerm }) => {
  const { expenses } = useProjects();
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    const lowerCasedSearchTerm = searchTerm.toLowerCase();

    const visibleExpenses = expenses.filter((expense) => {
      const matchesName = expense.name.toLowerCase().includes(lowerCasedSearchTerm);
      const matchesProjectId = expense.projectId.toString().includes(searchTerm); // Ensure projectId is treated as a string

      return !expense.archived && (matchesName || matchesProjectId);
    });

    setFilteredExpenses(visibleExpenses);
  }, [expenses, searchTerm]);

  return (
    <div className="expense-dashboard">
      {filteredExpenses.map((expense) => (
        <ExpenseCard key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpensesContainer;






