import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/projects">Projects</Link>
        <Link to="/projects/new">Add Project</Link>
        <Link to="/expenses">Expenses</Link>
        <Link to="/expenses/new">Add Expense</Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search projects or expenses..." />
      </div>
    </nav>
  );
};

export default NavBar;


