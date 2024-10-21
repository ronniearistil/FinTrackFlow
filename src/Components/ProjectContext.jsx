// src/Components/ProjectContext.jsx
import React, { createContext, useState, useContext} from 'react';
import projectsData from '../projects.json'; // Ensure the correct path

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(projectsData.projects);
  const [expenses, setExpenses] = useState(projectsData.expenses);

  const addProject = (newProject) => {
    setProjects((prev) => [...prev, newProject]);
  };

  const addExpense = (newExpense) => {
    setExpenses((prev) => [...prev, newExpense]);
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
        setProjects,
        setExpenses,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectContext);
