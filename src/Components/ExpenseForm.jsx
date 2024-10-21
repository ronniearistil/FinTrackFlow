// src/Components/ExpenseForm.jsx
import React, { useState } from 'react';
import { useProjects } from './ProjectContext';
import { TextField, Button, Box } from '@mui/material';

const ExpenseForm = () => {
  const { addExpense, projects } = useProjects();
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    projectId: projects.length ? projects[0].id : '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(formData);
    setFormData({ name: '', amount: '', projectId: projects[0]?.id || '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto' }}>
      <TextField
        label="Expense Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Amount"
        name="amount"
        type="number"
        value={formData.amount}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Project"
        name="projectId"
        value={formData.projectId}
        onChange={handleChange}
        select
        SelectProps={{ native: true }}
        fullWidth
        margin="normal"
      >
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </TextField>
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Add Expense
      </Button>
    </Box>
  );
};

export default ExpenseForm;







