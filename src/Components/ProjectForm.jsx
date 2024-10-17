// ProjectForm.jsx
import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ProjectContext } from '../ProjectContext'; // Use context

const ProjectForm = () => {
  const { addProject } = useContext(ProjectContext);

  const formik = useFormik({
    initialValues: {
      name: '',
      profit: '',
      cost: '',
      status: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Project name is required').min(3, 'Must be at least 3 characters'),
      profit: Yup.number().required('Profit is required').positive('Profit must be greater than zero'),
      cost: Yup.number().required('Cost is required').positive('Cost must be greater than zero'),
      status: Yup.string().required('Status is required').oneOf(['In Progress', 'Completed', 'At Risk']),
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
        />
        {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
      </div>

      <div>
        <label>Profit</label>
        <input
          type="number"
          name="profit"
          value={formik.values.profit}
          onChange={formik.handleChange}
        />
        {formik.touched.profit && formik.errors.profit ? <div className="error">{formik.errors.profit}</div> : null}
      </div>

      <div>
        <label>Cost</label>
        <input
          type="number"
          name="cost"
          value={formik.values.cost}
          onChange={formik.handleChange}
        />
        {formik.touched.cost && formik.errors.cost ? <div className="error">{formik.errors.cost}</div> : null}
      </div>

      <div>
        <label>Status</label>
        <select
          name="status"
          value={formik.values.status}
          onChange={formik.handleChange}
        >
          <option value="">Select Status</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="At Risk">At Risk</option>
        </select>
        {formik.touched.status && formik.errors.status ? <div className="error">{formik.errors.status}</div> : null}
      </div>

      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectForm;


