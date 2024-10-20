// src/Components/ProjectContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import mockData from '../projects.json'; // Adjusted path based on your structure

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Load data from mockData
    setProjects(mockData.projects || []); // Fallback to empty array if undefined
    setExpenses(mockData.expenses || []); // Fallback to empty array if undefined
  }, []);

  const archiveProject = (id) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id ? { ...project, status: 'Archived' } : project
      )
    );
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  return (
    <ProjectContext.Provider
      value={{ projects, expenses, setProjects, setExpenses, archiveProject, deleteExpense }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectContext);

