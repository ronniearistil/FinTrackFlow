// src/App.jsx
import React, { useState } from 'react';
import { ProjectProvider } from './ProjectContext.jsx';
import Header from './Header.jsx';
import NavBar from './NavBar.jsx';
import ProjectsContainer from './ProjectsContainer.jsx';
import ExpensesContainer from './ExpensesContainer.jsx';
import Footer from './Footer.jsx';
import { Route, Routes, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => setSearchTerm(term);

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
              path="/projects/*" 
              element={<ProjectsContainer searchTerm={searchTerm} />} 
            />
            <Route 
              path="/expenses/*" 
              element={<ExpensesContainer searchTerm={searchTerm} />} 
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





