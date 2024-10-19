// forms/ExpenseForm.jsx
import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Box } from '@mui/material';
import { ProjectContext } from './ProjectContext';
import InputField from './InputField';
import SelectField from './SelectField';

const ExpenseForm = () => {
  const { projects, addExpense } = useContext(ProjectContext);

  const formik = useFormik({
    initialValues: { name: '', amount: '', projectId: '' },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Expense name must be at least 3 characters long')
        .required('Expense name is required'),
      amount: Yup.number()
        .positive('Amount must be greater than zero')
        .required('Amount is required'),
      projectId: Yup.string().required('Project ID is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      addExpense(values);
      resetForm();
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 400 }}
    >
      <InputField formik={formik} name="name" label="Expense Name" />
      <InputField formik={formik} name="amount" label="Amount" type="number" />
      <SelectField formik={formik} name="projectId" label="Project" options={projects} />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Add Expense
      </Button>
    </Box>
  );
};

export default ExpenseForm;




