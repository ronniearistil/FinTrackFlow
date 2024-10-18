import React, { createContext, useState, useEffect } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [expenses, setExpenses] = useState([]); // Initialized as empty array

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

  // CRUD operations for projects
  const addProject = (newProject) => {
    fetch('http://localhost:5001/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProject),
    })
      .then((res) => res.json())
      .then((data) => {
        setProjects((prevProjects) => [...prevProjects, data]);
      })
      .catch((error) => console.error('Error adding project:', error));
  };

  const updateProject = (updatedProject) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) => 
        project.id === updatedProject.id ? updatedProject : project
      )
    );
  };

  const deleteProject = (id) => {
    setProjects((prevProjects) => 
      prevProjects.filter((project) => project.id !== id)
    );
  };

  // CRUD operations for expenses
  const addExpense = (newExpense) => {
    fetch('http://localhost:5001/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newExpense),
    })
      .then((res) => res.json())
      .then((data) => {
        setExpenses((prevExpenses) => [...prevExpenses, data]);
      })
      .catch((error) => console.error('Error adding expense:', error));
  };

  const updateExpense = (updatedExpense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) => 
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => 
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        expenses,
        addProject,
        updateProject,
        deleteProject,
        addExpense,
        updateExpense,
        deleteExpense,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
