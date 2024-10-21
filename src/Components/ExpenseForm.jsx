import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Box } from '@mui/material';
import { ProjectContext } from '../Components/ProjectContext';
import InputField from './InputField';
import SelectField from './SelectField';

const ExpenseForm = () => {
  const { projects, addExpense } = useContext(ProjectContext);

  const formik = useFormik({
    initialValues: {
      name: '',
      amount: '',
      projectId: projects.length > 0 ? projects[0].id : '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Must be at least 3 characters').required('Required'),
      amount: Yup.number().positive('Must be greater than zero').required('Required'),
      projectId: Yup.string().required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      addExpense({ ...values, id: Date.now().toString() });
      resetForm();
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <InputField formik={formik} name="name" label="Expense Name" />
      <InputField formik={formik} name="amount" label="Amount" type="number" />
      <SelectField formik={formik} name="projectId" label="Project" options={projects} />
      <Button type="submit" variant="contained">Add Expense</Button>
    </Box>
  );
};

export default ExpenseForm;






