import React, { createContext, useState, useContext, useEffect } from 'react';

// Define the URLs for your JSON server
const PROJECTS_URL = 'http://localhost:5001/projects';
const EXPENSES_URL = 'http://localhost:5001/expenses';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [expenses, setExpenses] = useState([]);

  // Fetch projects and expenses from the server on component mount
  useEffect(() => {
    fetchProjects();
    fetchExpenses();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(PROJECTS_URL);
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const fetchExpenses = async () => {
    try {
      const response = await fetch(EXPENSES_URL);
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  // Add a project and send it to the JSON server
  const addProject = async (newProject) => {
    try {
      const response = await fetch(PROJECTS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject),
      });

      if (!response.ok) throw new Error('Failed to add project');

      const savedProject = await response.json();
      setProjects((prev) => [...prev, savedProject]);
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  // Add an expense and send it to the JSON server
  const addExpense = async (newExpense) => {
    try {
      const response = await fetch(EXPENSES_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newExpense),
      });

      if (!response.ok) throw new Error('Failed to add expense');

      const savedExpense = await response.json();
      setExpenses((prev) => [...prev, savedExpense]);
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  const archiveProject = (projectId) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === projectId ? { ...project, status: 'Archived' } : project
      )
    );

    setExpenses((prev) =>
      prev.map((expense) =>
        expense.projectId === projectId ? { ...expense, archived: true } : expense
      )
    );
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        expenses,
        addProject,
        addExpense,
        archiveProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectContext);
