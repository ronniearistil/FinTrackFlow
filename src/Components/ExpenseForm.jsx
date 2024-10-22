// src/Components/ExpenseForm.jsx
import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { ProjectContext } from './ProjectContext'; // Access project data
import InputField from './InputField'; // Reusable input field

const ExpenseForm = () => {
  const { addExpense, projects } = useContext(ProjectContext); // Access context

  const formik = useFormik({
    initialValues: {
      name: '',
      amount: '',
      projectId: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Must be at least 3 characters').required('Required'),
      amount: Yup.number().positive('Must be greater than zero').required('Required'),
      projectId: Yup.string().required('Project is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      addExpense({ ...values, id: Date.now().toString() }); // Add new expense
      resetForm();
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ maxWidth: 400, mx: 'auto' }}>
      <InputField formik={formik} name="name" label="Expense Name" />
      <InputField formik={formik} name="amount" label="Amount" type="number" />

      {/* Project Selector */}
      <FormControl fullWidth margin="normal">
        <InputLabel id="project-select-label">Project</InputLabel>
        <Select
          labelId="project-select-label"
          name="projectId"
          value={formik.values.projectId}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.projectId && Boolean(formik.errors.projectId)}
        >
          <MenuItem value="">
            <em>Select Project</em> {/* Default placeholder */}
          </MenuItem>
          {projects.map((project) => (
            <MenuItem key={project.id} value={project.id}>
              {project.name}
            </MenuItem>
          ))}
        </Select>
        {formik.touched.projectId && formik.errors.projectId && (
          <div style={{ color: 'red' }}>{formik.errors.projectId}</div>
        )}
      </FormControl>

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Add Expense
      </Button>
    </Box>
  );
};

export default ExpenseForm;











