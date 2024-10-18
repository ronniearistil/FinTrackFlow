import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#040404d4' }}>
      <Toolbar>
        <Button component={Link} to="/projects" color="inherit">Projects</Button>
        <Button component={Link} to="/projects/new" color="inherit">Add Project</Button>
        <Button component={Link} to="/expenses" color="inherit">Expenses</Button>
        <Button component={Link} to="/expenses/new" color="inherit">Add Expense</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

