import React, { useState, useEffect } from 'react';
import { useProjects } from '../../ProjectContext';
import ExpenseCard from './ExpenseCard';
import { Button } from '@mui/material';

const ExpensesContainer = ({ searchTerm }) => {
  const { expenses } = useProjects();
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [showArchived, setShowArchived] = useState(false);

  const toggleArchived = () => setShowArchived((prev) => !prev);

  useEffect(() => {
    const lowerCasedSearchTerm = searchTerm.toLowerCase();
    const visibleExpenses = expenses.filter((expense) => {
      const matchesName = expense.name.toLowerCase().includes(lowerCasedSearchTerm);
      const matchesProjectId = expense.projectId.toString().includes(searchTerm);
      const matchesArchiveStatus = showArchived ? expense.archived : !expense.archived;

      return matchesArchiveStatus && (matchesName || matchesProjectId);
    });

    setFilteredExpenses(visibleExpenses);
  }, [expenses, searchTerm, showArchived]);

  return (
    <div className="expense-dashboard">
      <Button 
        variant="outlined" 
        onClick={toggleArchived} 
        sx={{ mb: 2 }}
      >
        {showArchived ? 'Hide Archived' : 'Show Archived'}
      </Button>

      {filteredExpenses.map((expense) => (
        <ExpenseCard key={expense.id} expense={expense} />
      ))}

      {filteredExpenses.length === 0 && (
        <p>No {showArchived ? 'archived' : 'active'} expenses found.</p>
      )}
    </div>
  );
};

export default ExpensesContainer;








