import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { ProjectContext } from './ProjectContext';

const ExpenseForm = () => {
  const { projects, addExpense } = useContext(ProjectContext); // Access the projects and addExpense from context

  const formik = useFormik({
    initialValues: {
      name: '',
      amount: '',
      projectId: '', // New field for project ID
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Expense name is required'),
      amount: Yup.number().required('Amount is required').positive('Amount must be greater than zero'),
      projectId: Yup.string().required('Project ID is required'), // Validation for project ID
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Submitting expense:", values); // Log the expense values
      addExpense(values); // Call addExpense from context
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Expense Name</label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && formik.touched.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
      </div>

      <div>
        <label>Amount</label>
        <input
          type="number"
          name="amount"
          value={formik.values.amount}
          onChange={formik.handleChange}
        />
        {formik.errors.amount && formik.touched.amount ? (
          <div className="error">{formik.errors.amount}</div>
        ) : null}
      </div>

      <div>
        <label>Project</label>
        <select
          name="projectId"
          value={formik.values.projectId}
          onChange={formik.handleChange}
        >
          <option value="">Select a project</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
        {formik.errors.projectId && formik.touched.projectId ? (
          <div className="error">{formik.errors.projectId}</div>
        ) : null}
      </div>

      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;


