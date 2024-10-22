// src/App.jsx
// Entry point for the application. Handles routing between different pages.
// Uses Context Provider to share state across components.

import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Header from './Header';
import NavBar from './NavBar';
import ProjectsContainer from './ProjectsContainer';
import ExpensesContainer from './ExpensesContainer';
import ProjectForm from './ProjectForm';
import ExpenseForm from './ExpenseForm';
import Footer from './Footer';
import { ProjectProvider } from './ProjectContext';
import theme from '../theme'; // Custom theme using MUI

const App = () => {
  // State lifting: Search term and status filter are lifted to be shared across components.
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* ProjectProvider provides state context across the app */}
      <ProjectProvider>
        <div className="App">
          <Header />
          {/* NavBar sends search input and status filters back to App */}
          <NavBar
            onSearch={setSearchTerm}
            onStatusFilter={setStatusFilter}
          />
          <Routes>
            {/* Navigate redirects from "/" to "/projects" */}
            <Route path="/" element={<Navigate to="/projects" />} />
            <Route
              path="/projects"
              element={
                <ProjectsContainer
                  searchTerm={searchTerm}
                  statusFilter={statusFilter}
                />
              }
            />
            <Route path="/projects/new" element={<ProjectForm />} />
            <Route
              path="/expenses"
              element={<ExpensesContainer searchTerm={searchTerm} />}
            />
            <Route path="/expenses/new" element={<ExpenseForm />} />
            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>
          <Footer />
        </div>
      </ProjectProvider>
    </ThemeProvider>
  );
};

export default App;









