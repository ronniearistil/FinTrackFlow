import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ProjectForm = ({ addProject }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      profit: '',
      cost: '',
      status: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Project name is required')
        .min(3, 'Must be at least 3 characters'),
      profit: Yup.number()
        .required('Profit is required')
        .positive('Profit must be greater than zero'),
      cost: Yup.number()
        .required('Cost is required')
        .positive('Cost must be greater than zero'),
      status: Yup.string()
        .required('Status is required')
        .oneOf(['In Progress', 'Completed', 'At Risk']),
    }),
    onSubmit: (values, { resetForm }) => {
      addProject(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Project Name</label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} // Add blur handling
        />
        {formik.errors.name && formik.touched.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
      </div>

      <div>
        <label>Profit</label>
        <input
          type="number"
          name="profit"
          value={formik.values.profit}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.profit && formik.touched.profit ? (
          <div className="error">{formik.errors.profit}</div>
        ) : null}
      </div>

      <div>
        <label>Cost</label>
        <input
          type="number"
          name="cost"
          value={formik.values.cost}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.cost && formik.touched.cost ? (
          <div className="error">{formik.errors.cost}</div>
        ) : null}
      </div>

      <div>
        <label>Status</label>
        <select
          name="status"
          value={formik.values.status}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="">Select Status</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="At Risk">At Risk</option>
        </select>
        {formik.errors.status && formik.touched.status ? (
          <div className="error">{formik.errors.status}</div>
        ) : null}
      </div>

      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectForm;



