import React from 'react';
import { ProjectProvider } from './ProjectContext.jsx'; 
import Header from './Header.jsx';
import NavBar from './NavBar.jsx';
import DashBoard from './DashBoard.jsx';
import ExpenseDashboard from './ExpenseDashboard.jsx';
import ProjectForm from './ProjectForm.jsx';
import ExpenseForm from './ExpenseForm.jsx';
import Footer from './Footer.jsx';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material'; 
import theme from '../theme';

const App = () => {
  return (
    <ProjectProvider>
      <div className="App">
        <CssBaseline />
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/projects" />} />
          <Route path="/projects" element={<DashBoard />} />
          <Route path="/projects/new" element={<ProjectForm />} />
          <Route path="/expenses" element={<ExpenseDashboard />} />
          <Route path="/expenses/new" element={<ExpenseForm />} />
        </Routes>
        <Footer />
      </div>
    </ProjectProvider>
  );
};

export default App;






