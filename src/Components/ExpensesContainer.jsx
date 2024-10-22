// src/Components/ExpensesContainer.jsx
// Displays a list of expenses based on search input.

import React, { useState, useEffect } from 'react';
import { useProjects } from './ProjectContext';
import ExpenseCard from './ExpenseCard';

const ExpensesContainer = ({ searchTerm }) => {
  const { expenses } = useProjects(); 
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    // Filter expenses based on search term.
    const visibleExpenses = expenses.filter(
      (expense) => 
        !expense.archived && expense.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
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





