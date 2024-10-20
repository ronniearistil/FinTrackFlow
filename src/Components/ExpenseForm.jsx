// forms/ExpenseForm.jsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Box } from '@mui/material';
import { useProjects } from '../Components/ProjectContext';
import InputField from './InputField';
import SelectField from './SelectField';

const ExpenseForm = () => {
  const { projects, addExpense } = useProjects();

  const formik = useFormik({
    initialValues: { name: '', amount: '', projectId: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Expense name is required'),
      amount: Yup.number().required('Amount is required'),
      projectId: Yup.string().required('Select a project'),
    }),
    onSubmit: (values, { resetForm }) => {
      addExpense({ ...values, id: Date.now().toString() });
      resetForm();
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 400 }}
    >
      <InputField name="name" label="Expense Name" formik={formik} />
      <InputField name="amount" label="Amount" formik={formik} type="number" />
      <SelectField name="projectId" label="Project" options={projects} formik={formik} />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>Add Expense</Button>
    </Box>
  );
};

export default ExpenseForm;




