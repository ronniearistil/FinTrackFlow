// src/Components/NavBar.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, InputBase, Box, MenuItem, Select, FormControl } from '@mui/material';
import NavLink from './NavLink';

const NavBar = ({ onSearch, onStatusFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value); // Update local state
    onSearch(value); // Pass value to parent
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setStatus(value);
    onStatusFilter(value);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#2a9d8f', mb: 2 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: 4 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/projects/new">Add Project</NavLink>
          <NavLink to="/expenses">Expenses</NavLink>
          <NavLink to="/expenses/new">Add Expense</NavLink>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1, justifyContent: 'center' }}>
          <InputBase
            placeholder="Search by name or ID..."
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{
              bgcolor: 'white',
              borderRadius: 1,
              px: 1,
              width: '450px',
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
            >
              <MenuItem value="">
                <em>Filter projects by status</em>
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
















