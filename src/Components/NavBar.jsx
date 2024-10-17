import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/projects/new">Add Project</Link></li>
        <li><Link to="/expenses">Expenses</Link></li>
        <li><Link to="/expenses/new">Add Expense</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
