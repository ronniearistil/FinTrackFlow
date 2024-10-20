// src/Components/NavBar.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, InputBase, Box, Grid } from '@mui/material';
import NavLink from './NavLink'; // Import the reusable NavLink component

const NavBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (onSearch) onSearch(value); // Ensure the callback is called safely
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: '#2a9d8f', // NavBar background color
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        mb: 2,
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/projects/new">Add Project</NavLink>
          <NavLink to="/expenses">Expenses</NavLink>
          <NavLink to="/expenses/new">Add Expense</NavLink>
        </Box>

        <Box sx={{ flexGrow: 2, display: 'flex', justifyContent: 'center' }}>
          <InputBase
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            sx={{
              bgcolor: 'white',
              borderRadius: 1,
              px: -2,
              width: 300,
              border: '2px solid #1bc0ad', // Accent border color
              '&:focus': { borderColor: '#188f87' }, // Primary color on focus
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;



