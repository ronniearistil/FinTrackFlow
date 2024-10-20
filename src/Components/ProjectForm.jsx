// forms/ProjectForm.jsx
import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Box } from '@mui/material';
import { ProjectContext } from '../Components/ProjectContext';
import InputField from './InputField';

const ProjectForm = () => {
  const { addProject } = useContext(ProjectContext);

  const formik = useFormik({
    initialValues: { 
      name: '', 
      profit: '', 
      cost: '', 
      status: 'In Progress' // Set default status
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Project name must be at least 3 characters')
        .required('Project name is required'),
      profit: Yup.number()
        .positive('Profit must be greater than zero')
        .required('Profit is required'),
      cost: Yup.number()
        .positive('Cost must be greater than zero')
        .required('Cost is required'),
      status: Yup.string().required('Status is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      addProject({ ...values, id: Date.now().toString() }); // Assign unique ID
      resetForm(); // Clear form after submission
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, mx: 'auto' }}
    >
      <InputField formik={formik} name="name" label="Project Name" />
      <InputField formik={formik} name="profit" label="Profit" type="number" />
      <InputField formik={formik} name="cost" label="Cost" type="number" />
      <InputField formik={formik} name="status" label="Status" />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Add Project
      </Button>
    </Box>
  );
};

export default ProjectForm;








