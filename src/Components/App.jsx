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
import AboutUs from './AboutUs.jsx'; // Import AboutUs component
import { Route, Routes, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme'; // Custom theme

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProjectProvider>
        <div className="App">
          <Header /> {/* Header with the clickable H1 */}
          <NavBar
            onSearch={(term) => setSearchTerm(term)}
            onStatusFilter={(status) => setStatusFilter(status)}
          />
          <Routes>
            <Route path="/" element={<Navigate to="/projects" />} />
            <Route path="/projects" element={<ProjectsContainer searchTerm={searchTerm} statusFilter={statusFilter} />} />
            <Route path="/projects/new" element={<ProjectForm />} />
            <Route path="/expenses" element={<ExpensesContainer searchTerm={searchTerm} />} />
            <Route path="/expenses/new" element={<ExpenseForm />} />
            <Route path="/about" element={<AboutUs />} /> {/* About Us route */}
            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>
          <Footer />
        </div>
      </ProjectProvider>
    </ThemeProvider>
  );
};

export default App;









