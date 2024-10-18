import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ExpenseForm = ({ addExpense }) => {
  const formik = useFormik({
    initialValues: {
      description: '',
      amount: '',
      projectId: '',
    },
    validationSchema: Yup.object({
      description: Yup.string()
        .required('Description is required')
        .min(3, 'Must be at least 3 characters'),
      amount: Yup.number()
        .required('Amount is required')
        .positive('Amount must be greater than zero'),
      projectId: Yup.string()
        .required('Project ID is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      addExpense(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
        {formik.errors.description && formik.touched.description ? (
          <div className="error">{formik.errors.description}</div>
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
        <label>Project ID</label>
        <input
          type="text"
          name="projectId"
          value={formik.values.projectId}
          onChange={formik.handleChange}
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
