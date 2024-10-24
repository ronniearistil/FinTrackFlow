// src/App.jsx
import React, { useState } from 'react';
import { ProjectProvider } from './ProjectContext.jsx';
import Header from './Components/Layout/Header.jsx';
import NavBar from './Components/Layout/NavBar.jsx';
import ProjectsContainer from './Components/Projects/ProjectsContainer.jsx';
import ExpensesContainer from './Components/Expenses/ExpensesContainer.jsx';
import ProjectForm from './Components/Forms/ProjectForm.jsx';
import ExpenseForm from './Components/Forms/ExpenseForm.jsx';
import Footer from './Components/Layout/Footer.jsx';
import AboutUs from './Components/AboutUs.jsx';
import { Route, Routes, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // State management for filters and sorting
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sortOption, setSortOption] = useState('');

  // Toast notification for successful submissions or errors
  const showToast = (message, type = 'success') => {
    toast[type](message);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProjectProvider>
        <div className="App">
          <ToastContainer position="top-right" autoClose={3000} />
          <Header />
          <NavBar
            onSearch={setSearchTerm}
            onStatusFilter={setStatusFilter}
            onSort={setSortOption}
          />
          <Routes>
            <Route path="/" element={<Navigate to="/projects" />} />
            <Route
              path="/projects"
              element={
                <ProjectsContainer
                  searchTerm={searchTerm}
                  statusFilter={statusFilter}
                  sortOption={sortOption}
                />
              }
            />
            <Route path="/projects/new" element={<ProjectForm showToast={showToast} />} />
            <Route
              path="/expenses"
              element={<ExpensesContainer searchTerm={searchTerm} />}
            />
            <Route path="/expenses/new" element={<ExpenseForm showToast={showToast} />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>
          <Footer />
        </div>
      </ProjectProvider>
    </ThemeProvider>
  );
};

export default App;








