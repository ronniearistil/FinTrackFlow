import logo from './logo.svg';
import './App.css';

// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  // State for managing project data
  const [projects, setProjects] = useState([
    { id: 1, name: 'Project Alpha', profit: 10000, cost: 5000, status: 'In Progress' },
    { id: 2, name: 'Project Beta', profit: 15000, cost: 8000, status: 'At Risk' },
    { id: 3, name: 'Project Gamma', profit: 25000, cost: 10000, status: 'Completed' }
  ]);

  // Function to add a new project (for future use)
  const addNewProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  return (
    <div className="App">
      <Header />
      <Dashboard projects={projects} />
    </div>
  );
}

export default App;
