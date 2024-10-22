import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Box } from '@mui/material';
import { ProjectContext } from '../Components/ProjectContext';
import InputField from './InputField';
const validationSchema =  Yup.object({
  name: Yup.string().min(3, 'Must be at least 3 characters').required('Required'),
  profit: Yup.number().positive('Must be greater than zero').required('Required'),
  cost: Yup.number().positive('Must be greater than zero').required('Required'),
  status: Yup.string().required('Required'),
})
const initialValues= {
  name: '',
  profit: '',
  cost: '',
  status: 'New', //fault 'New'
}
const ProjectForm = () => {
  const { addProject } = useContext(ProjectContext);

  const formik = useFormik({
    initialValues,
    //  {
    //   name: '',
    //   profit: '',
    //   cost: '',
    //   status: 'New', //fault 'New'
    // },
    validationSchema, 
    // Yup.object({
    //   name: Yup.string().min(3, 'Must be at least 3 characters').required('Required'),
    //   profit: Yup.number().positive('Must be greater than zero').required('Required'),
    //   cost: Yup.number().positive('Must be greater than zero').required('Required'),
    //   status: Yup.string().required('Required'),
    // }),
    onSubmit: (values, { resetForm }) => {
      addProject(values);
      resetForm();
      // addProject({ ...values, id: Date.now().toString() });
      // resetForm();
    },
  });

  // addProject({ ...values, id: Date.now().toString() });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <InputField formik={formik} name="name" label="Project Name" />
      <InputField formik={formik} name="profit" label="Profit" type="number" />
      <InputField formik={formik} name="cost" label="Cost" type="number" />
      <InputField formik={formik} name="status" label="Status" />
      <Button type="submit" variant="contained">Add Project</Button>
    </Box>
  );
};

export default ProjectForm;









