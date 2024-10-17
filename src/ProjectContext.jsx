// ProjectContext.js
import React, { createContext, useState, useEffect } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));

    fetch('http://localhost:5001/expenses')
      .then((res) => res.json())
      .then((data) => setExpenses(data))
      .catch((error) => console.error('Error fetching expenses:', error));
  }, []);

  const addProject = (newProject) => setProjects([...projects, newProject]);
  const addExpense = (newExpense) => setExpenses([...expenses, newExpense]);

  return (
    <ProjectContext.Provider value={{ projects, expenses, addProject, addExpense }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
