// ExpenseForm.jsx
import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ProjectContext } from '../ProjectContext'; // Use context

const ExpenseForm = () => {
  const { addExpense } = useContext(ProjectContext);

  const formik = useFormik({
    initialValues: {
      name: '',
      amount: '',
      projectId: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Expense name is required'),
      amount: Yup.number().required('Amount is required').positive('Amount must be greater than zero'),
      projectId: Yup.number().required('Project ID is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      addExpense(values);
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
        {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
      </div>

      <div>
        <label>Amount</label>
        <input
          type="number"
          name="amount"
          value={formik.values.amount}
          onChange={formik.handleChange}
        />
        {formik.touched.amount && formik.errors.amount ? <div className="error">{formik.errors.amount}</div> : null}
      </div>

      <div>
        <label>Project ID</label>
        <input
          type="number"
          name="projectId"
          value={formik.values.projectId}
          onChange={formik.handleChange}
        />
        {formik.touched.projectId && formik.errors.projectId ? <div className="error">{formik.errors.projectId}</div> : null}
      </div>

      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
