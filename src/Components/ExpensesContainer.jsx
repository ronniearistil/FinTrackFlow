import React, { useEffect, useState } from 'react';
import { useProjects } from './ProjectContext';
import ExpenseCard from './ExpenseCard';

const ExpensesContainer = ({ searchTerm }) => {
  const { expenses, archiveExpense } = useProjects();
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  const handleEdit = (expense) => {
    console.log('Editing expense:', expense); // Implement your edit logic here
  };

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
        <ExpenseCard
          key={expense.id}
          expense={expense}
          onEdit={handleEdit} // Pass the onEdit function here
          onArchive={archiveExpense} // Pass the onArchive function here
        />
      ))}
    </div>
  );
};

export default ExpensesContainer;




