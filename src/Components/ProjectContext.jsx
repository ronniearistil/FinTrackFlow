import React, { createContext, useState, useEffect } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchData('projects', setProjects);
    fetchData('expenses', setExpenses);
  }, []);

  const fetchData = async (endpoint, setter) => {
    try {
      const response = await fetch(`http://localhost:5001/${endpoint}`);
      const data = await response.json();
      setter(data);
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
    }
  };

  const addItem = async (endpoint, newItem, setter) => {
    try {
      const response = await fetch(`http://localhost:5001/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem),
      });
      const data = await response.json();
      setter((prev) => [...prev, data]);
    } catch (error) {
      console.error(`Error adding ${endpoint}:`, error);
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        expenses,
        addProject: (project) => addItem('projects', project, setProjects),
        addExpense: (expense) => addItem('expenses', expense, setExpenses),
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
