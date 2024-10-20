// src/Components/ExpensesContainer.jsx
import React, { useContext, useState, useEffect } from 'react';
import { ProjectContext } from './ProjectContext';
import ExpenseCard from './ExpenseCard';

const ExpensesContainer = ({ searchTerm }) => {
  const { expenses } = useContext(ProjectContext);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  useEffect(() => {
    const filtered = expenses.filter((expense) =>
      expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.projectId.toString().includes(searchTerm)
    );
    setFilteredExpenses(filtered);
  }, [expenses, searchTerm]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="expense-dashboard" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {filteredExpenses.length > 0 ? (
          filteredExpenses.map((expense) => (
            <ExpenseCard key={expense.id} expense={expense} />
          ))
        ) : (
          <h3>No matching expenses found</h3>
        )}
      </div>
    </div>
  );
};

export default ExpensesContainer;


