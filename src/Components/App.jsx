// App.jsx
import React from 'react';
import { ProjectProvider } from '../ProjectContext'; // Corrected the import path
import Header from './Header.jsx';
import NavBar from './NavBar.jsx';
import DashBoard from './DashBoard.jsx'; // Ensured the case matches
import ExpenseDashboard from './ExpenseDashboard.jsx';
import ProjectForm from './ProjectForm.jsx';
import ExpenseForm from './ExpenseForm.jsx';
import Footer from './Footer.jsx';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <ProjectProvider>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
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




