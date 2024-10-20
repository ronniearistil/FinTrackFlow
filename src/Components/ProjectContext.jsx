// src/Components/ProjectContext.jsx
import React, { createContext, useState, useContext } from 'react';
import projectsData from '../projects.json'; // Adjust the path if needed

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(projectsData.projects);
  const [expenses, setExpenses] = useState(projectsData.expenses);

  // Function to archive a project and its related expenses
  const archiveProject = (projectId) => {
    // Archive the project by updating its status
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId ? { ...project, status: 'Archived' } : project
      )
    );

    // Filter out expenses related to the archived project
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.projectId !== projectId)
    );
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        expenses,
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


