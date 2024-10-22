// src/Components/ProjectContext.jsx
// Provides global state management for projects and expenses using React Context.

import React, { createContext, useState, useContext, useEffect } from 'react';

const PROJECTS_URL = 'http://localhost:5001/projects'; // JSON server endpoint
const EXPENSES_URL = 'http://localhost:5001/expenses';

export const ProjectContext = createContext();

// ProjectProvider: Wraps the entire app with global state for projects and expenses.
export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]); // Store for project data
  const [expenses, setExpenses] = useState([]); // Store for expense data

  // Fetch all projects and expenses when the component mounts.
  useEffect(() => {
    fetchProjects();
    fetchExpenses();
  }, []);

  // Fetch projects from the JSON server.
  const fetchProjects = async () => {
    try {
      const response = await fetch(PROJECTS_URL);
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  // Fetch expenses from the JSON server.
  const fetchExpenses = async () => {
    try {
      const response = await fetch(EXPENSES_URL);
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  // Add a new project and update the state.
  const addProject = async (newProject) => {
    try {
      const response = await fetch(PROJECTS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject),
      });

      const savedProject = await response.json();
      setProjects((prev) => [...prev, savedProject]); // State update with new project
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  // Add a new expense and update the state.
  const addExpense = async (newExpense) => {
    try {
      const response = await fetch(EXPENSES_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newExpense),
      });

      const savedExpense = await response.json();
      setExpenses((prev) => [...prev, savedExpense]); // State update with new expense
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  // Edit an existing project and persist the changes.
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

  // Edit an existing expense and persist the changes.
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

  // Archive a project by marking its status as 'Archived' and update state.
  const archiveProject = async (projectId) => {
    try {
      const response = await fetch(`${PROJECTS_URL}/${projectId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'Archived' }),
      });

      if (!response.ok) throw new Error('Failed to archive project');

      // Filter out the archived project from the current state.
      setProjects((prev) =>
        prev.map((project) =>
          project.id === projectId ? { ...project, status: 'Archived' } : project
        )
      );
    } catch (error) {
      console.error('Error archiving project:', error);
    }
  };

  // Archive an expense by marking it as archived and update state.
  const archiveExpense = async (expenseId) => {
    try {
      const response = await fetch(`${EXPENSES_URL}/${expenseId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ archived: true }),
      });

      if (!response.ok) throw new Error('Failed to archive expense');

      // Filter out the archived expense from the current state.
      setExpenses((prev) =>
        prev.filter((expense) => expense.id !== expenseId)
      );
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

// Custom hook to consume the ProjectContext easily.
export const useProjects = () => useContext(ProjectContext);



