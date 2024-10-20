// src/Components/ExpensesContainer.jsx
import React, { useContext, useEffect, useState } from 'react';
import { useProjects } from './ProjectContext';
import ExpenseCard from './ExpenseCard';

const ExpensesContainer = ({ searchTerm }) => {
  const { expenses, projects } = useProjects();
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    // Ensure projects exist before filtering expenses
    const visibleExpenses = expenses.filter((expense) => {
      const project = projects.find((proj) => `${proj.id}` === `${expense.projectId}`);
      // Ensure project exists and is not archived
      return project && project.status !== 'Archived';
    });

    // Filter by search term
    const searchedExpenses = visibleExpenses.filter((expense) =>
      expense.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredExpenses(searchedExpenses);
  }, [searchTerm, expenses, projects]);

  return (
    <div className="expense-dashboard">
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((expense) => (
          <ExpenseCard key={expense.id} expense={expense} />
        ))
      ) : (
        <p>No expenses found.</p>
      )}
    </div>
  );
};

export default ExpensesContainer;




