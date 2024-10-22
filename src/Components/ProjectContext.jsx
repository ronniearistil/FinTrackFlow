// src/Components/ProjectContext.jsx

import React, { createContext, useState, useContext, useEffect } from 'react';

const PROJECTS_URL = 'http://localhost:5001/projects';
const EXPENSES_URL = 'http://localhost:5001/expenses';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [expenses, setExpenses] = useState([]);

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

  const archiveProject = async (projectId) => {
    try {
      const project = projects.find((p) => p.id === projectId);
      const updatedStatus = project.status === 'Archived' ? 'Active' : 'Archived';

      await fetch(`${PROJECTS_URL}/${projectId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: updatedStatus }),
      });

      setProjects((prev) =>
        prev.map((p) =>
          p.id === projectId ? { ...p, status: updatedStatus } : p
        )
      );
    } catch (error) {
      console.error('Error toggling project archive:', error);
    }
  };

  const archiveExpense = async (expenseId) => {
    try {
      const expense = expenses.find((e) => e.id === expenseId);
      const updatedArchived = !expense.archived;

      await fetch(`${EXPENSES_URL}/${expenseId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ archived: updatedArchived }),
      });

      setExpenses((prev) =>
        prev.map((e) =>
          e.id === expenseId ? { ...e, archived: updatedArchived } : e
        )
      );
    } catch (error) {
      console.error('Error toggling expense archive:', error);
    }
  };

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
        getVisibleExpenses, // Expose visible expenses filter
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectContext);





