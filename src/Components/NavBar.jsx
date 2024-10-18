import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
        <li><NavLink to="/projects/new" activeClassName="active">Add Project</NavLink></li>
        <li><NavLink to="/expenses" activeClassName="active">Expenses</NavLink></li>
        <li><NavLink to="/expenses/new" activeClassName="active">Add Expense</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;

