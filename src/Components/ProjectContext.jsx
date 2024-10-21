import React, { createContext, useState, useContext, useEffect } from 'react';

const PROJECTS_URL = 'http://localhost:5001/projects';
const EXPENSES_URL = 'http://localhost:5001/expenses';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [expenses, setExpenses] = useState([]);

  // Fetch all projects and expenses when the component mounts
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

  // Add a project and persist it
  const addProject = async (newProject) => {
    try {
      const response = await fetch(PROJECTS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject),
      });

      const savedProject = await response.json();
      setProjects((prev) => [...prev, savedProject]);
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  // Add an expense and persist it
  const addExpense = async (newExpense) => {
    try {
      const response = await fetch(EXPENSES_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newExpense),
      });

      const savedExpense = await response.json();
      setExpenses((prev) => [...prev, savedExpense]);
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  // Edit a project and persist it with PATCH
  const editProject = async (updatedProject) => {
    try {
      const response = await fetch(`${PROJECTS_URL}/${updatedProject.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProject),
      });

      const savedProject = await response.json();
      setProjects((prev) =>
        prev.map((project) =>
          project.id === savedProject.id ? savedProject : project
        )
      );
    } catch (error) {
      console.error('Error editing project:', error);
    }
  };

  // Edit an expense and persist it with PATCH
  const editExpense = async (updatedExpense) => {
    try {
      const response = await fetch(`${EXPENSES_URL}/${updatedExpense.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedExpense),
      });

      const savedExpense = await response.json();
      setExpenses((prev) =>
        prev.map((expense) =>
          expense.id === savedExpense.id ? savedExpense : expense
        )
      );
    } catch (error) {
      console.error('Error editing expense:', error);
    }
  };

  // Archive a project and persist it
  const archiveProject = async (projectId) => {
    try {
      const response = await fetch(`${PROJECTS_URL}/${projectId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'Archived' }),
      });

      if (!response.ok) throw new Error('Failed to archive project');

      setProjects((prev) =>
        prev.filter((project) => project.id !== projectId)
      );
    } catch (error) {
      console.error('Error archiving project:', error);
    }
  };

  // Archive an expense and persist it
  const archiveExpense = async (expenseId) => {
    try {
      const response = await fetch(`${EXPENSES_URL}/${expenseId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ archived: true }),
      });

      if (!response.ok) throw new Error('Failed to archive expense');

      setExpenses((prev) => prev.filter((expense) => expense.id !== expenseId));
    } catch (error) {
      console.error('Error archiving expense:', error);
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        expenses,
        addProject,
        addExpense,
        editProject,
        editExpense,
        archiveProject,
        archiveExpense,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectContext);

