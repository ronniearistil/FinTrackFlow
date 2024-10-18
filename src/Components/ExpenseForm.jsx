import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ProjectContext } from './ProjectContext'; // Ensure the import path is correct

const ExpenseForm = () => {
  const { addExpense } = useContext(ProjectContext); // Get the addExpense function from context

  const formik = useFormik({
    initialValues: {
      name: '',
      amount: '',
      projectId: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Expense name is required')
        .min(3, 'Must be at least 3 characters'),
      amount: Yup.number()
        .required('Amount is required')
        .positive('Amount must be greater than zero'),
      projectId: Yup.string()
        .required('Project ID is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      addExpense(values); // Call the addExpense function from context
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
          onBlur={formik.handleBlur}
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
          onBlur={formik.handleBlur}
        />
        {formik.errors.amount && formik.touched.amount ? (
          <div className="error">{formik.errors.amount}</div>
        ) : null}
      </div>

      <div>
        <label>Project ID</label>
        <input
          type="text"
          name="projectId"
          value={formik.values.projectId}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.projectId && formik.touched.projectId ? (
          <div className="error">{formik.errors.projectId}</div>
        ) : null}
      </div>

      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;

