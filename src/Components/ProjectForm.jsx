// forms/ProjectForm.jsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Box } from '@mui/material';
import { useProjects } from '../Components/ProjectContext';
import InputField from './InputField';

const ProjectForm = () => {
  const { addProject } = useProjects();

  const formik = useFormik({
    initialValues: { name: '', profit: '', cost: '', status: 'In Progress' },
    validationSchema: Yup.object({
      name: Yup.string().required('Project name is required'),
      profit: Yup.number().required('Profit is required'),
      cost: Yup.number().required('Cost is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      addProject({ ...values, id: Date.now().toString() });
      resetForm();
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 400 }}
    >
      <InputField name="name" label="Project Name" formik={formik} />
      <InputField name="profit" label="Profit" formik={formik} type="number" />
      <InputField name="cost" label="Cost" formik={formik} type="number" />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>Add Project</Button>
    </Box>
  );
};

export default ProjectForm;







