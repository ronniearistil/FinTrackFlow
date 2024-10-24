// src/Components/ProjectContext.jsx

import React, { createContext, useState, useContext, useEffect } from 'react';

// API endpoints for projects and expenses
const PROJECTS_URL = 'http://localhost:5001/projects';
const EXPENSES_URL = 'http://localhost:5001/expenses';

// Create context for sharing project and expense data across components
export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  // State to store projects and expenses
  const [projects, setProjects] = useState([]);
  const [expenses, setExpenses] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    fetchProjects();
    fetchExpenses();
  }, []);

  // Fetch projects from the API
  const fetchProjects = async () => {
    try {
      const response = await fetch(PROJECTS_URL);
      const data = await response.json();
      setProjects(data); // Update state with fetched projects
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  // Fetch expenses from the API
  const fetchExpenses = async () => {
    try {
      const response = await fetch(EXPENSES_URL);
      const data = await response.json();
      setExpenses(data); // Update state with fetched expenses
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  // Add a new project to the API and update state
  const addProject = async (newProject) => {
    try {
      const response = await fetch(PROJECTS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject),
      });
      const savedProject = await response.json();
      setProjects((prev) => [...prev, savedProject]); // Append new project to state
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  // Add a new expense to the API and update state
  const addExpense = async (newExpense) => {
    try {
      const response = await fetch(EXPENSES_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newExpense),
      });
      const savedExpense = await response.json();
      setExpenses((prev) => [...prev, savedExpense]); // Append new expense to state
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  // Edit an existing project and update the state
  const editProject = async (updatedProject) => {
    try {
      const response = await fetch(`${PROJECTS_URL}/${updatedProject.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProject),
      });
      const savedProject = await response.json();
      // Replace the updated project in the state
      setProjects((prev) =>
        prev.map((project) =>
          project.id === savedProject.id ? savedProject : project
        )
      );
    } catch (error) {
      console.error('Error editing project:', error);
    }
  };

  // Edit an existing expense and update the state
  const editExpense = async (updatedExpense) => {
    try {
      const response = await fetch(`${EXPENSES_URL}/${updatedExpense.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedExpense),
      });
      const savedExpense = await response.json();
      // Replace the updated expense in the state
      setExpenses((prev) =>
        prev.map((expense) =>
          expense.id === savedExpense.id ? savedExpense : expense
        )
      );
    } catch (error) {
      console.error('Error editing expense:', error);
    }
  };

  // Toggle a project's archive status between 'Active' and 'Archived'
  const archiveProject = async (projectId) => {
    try {
      const project = projects.find((p) => p.id === projectId); // Find the project
      const updatedStatus = project.status === 'Archived' ? 'Active' : 'Archived';

      await fetch(`${PROJECTS_URL}/${projectId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: updatedStatus }), // Update status in the API
      });

      // Update the project's status in the state
      setProjects((prev) =>
        prev.map((p) =>
          p.id === projectId ? { ...p, status: updatedStatus } : p
        )
      );
    } catch (error) {
      console.error('Error toggling project archive:', error);
    }
  };

  // Toggle the archive status of an expense
  const archiveExpense = async (expenseId) => {
    try {
      const expense = expenses.find((e) => e.id === expenseId); // Find the expense
      const updatedArchived = !expense.archived; // Toggle archive status

      await fetch(`${EXPENSES_URL}/${expenseId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ archived: updatedArchived }), // Update archive status in API
      });

      // Update the expense's archive status in the state
      setExpenses((prev) =>
        prev.map((e) =>
          e.id === expenseId ? { ...e, archived: updatedArchived } : e
        )
      );
    } catch (error) {
      console.error('Error toggling expense archive:', error);
    }
  };

  // Get expenses based on whether they are archived or not
  const getVisibleExpenses = (showArchived) => {
    return expenses.filter((expense) => expense.archived === showArchived);
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
        getVisibleExpenses, // Provide visible expenses filter to other components
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

// Custom hook to consume the ProjectContext easily
export const useProjects = () => useContext(ProjectContext);






