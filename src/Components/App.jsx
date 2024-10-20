// src/App.jsx
import React, { useState } from 'react';
import { ProjectProvider } from './ProjectContext.jsx';
import Header from './Header.jsx';
import NavBar from './NavBar.jsx';
import ProjectsContainer from './ProjectsContainer.jsx';
import ExpensesContainer from './ExpensesContainer.jsx';
import ProjectForm from './ProjectForm.jsx';
import ExpenseForm from './ExpenseForm.jsx';
import Footer from './Footer.jsx';
import { Route, Routes, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme'; // Custom theme

const App = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  const handleSearch = (term) => setSearchTerm(term); // Update search term

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProjectProvider>
        <div className="App">
          <Header />
          <NavBar onSearch={handleSearch} />
          <Routes>
            <Route path="/" element={<Navigate to="/projects" />} />
            <Route 
              path="/projects" 
              element={<ProjectsContainer searchTerm={searchTerm} />} 
            />
            <Route 
              path="/projects/new" 
              element={<ProjectForm />} // Render Project Form on this route
            />
            <Route 
              path="/expenses" 
              element={<ExpensesContainer searchTerm={searchTerm} />} 
            />
            <Route 
              path="/expenses/new" 
              element={<ExpenseForm />} // Render Expense Form on this route
            />
            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>
          <Footer />
        </div>
      </ProjectProvider>
    </ThemeProvider>
  );
};

export default App;






