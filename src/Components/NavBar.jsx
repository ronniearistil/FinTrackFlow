// src/Components/NavBar.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, InputBase, Box, MenuItem, Select, FormControl } from '@mui/material';
import NavLink from './NavLink'; // Reusable NavLink component

const NavBar = ({ onSearch, onStatusFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleStatusChange = (event) => {
    const value = event.target.value;
    setStatus(value);
    onStatusFilter(value);
  };

  return (
    <AppBar
      position="static"
      sx={{ 
        bgcolor: '#2a9d8f', 
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
        mb: 2 
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: 4 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/projects/new">Add Project</NavLink>
          <NavLink to="/expenses">Expenses</NavLink>
          <NavLink to="/expenses/new">Add Expense</NavLink>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1, justifyContent: 'center' }}>
          <InputBase
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{
              bgcolor: 'white',
              borderRadius: 1,
              px: 1,
              width: 300,
              border: '2px solid #1bc0ad',
              '&:focus': { borderColor: '#188f87' },
            }}
          />

          <FormControl sx={{ minWidth: 200 }}>
            <Select
              displayEmpty
              value={status}
              onChange={handleStatusChange}
              sx={{ bgcolor: 'white', borderRadius: 1 }}
              inputProps={{ 'aria-label': 'Filter projects by status' }} // Accessibility improvement
            >
              <MenuItem value="">
                <em>Filter projects by status</em> {/* Default placeholder text */}
              </MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="At Risk">At Risk</MenuItem>
              <MenuItem value="All">All</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;










