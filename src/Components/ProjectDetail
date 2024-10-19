import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectContext } from './ProjectContext';

const ProjectDetail = () => {
  const { id } = useParams(); // Extract project ID from route
  const { projects, expenses } = useContext(ProjectContext);

  const project = projects.find((proj) => proj.id === parseInt(id)); // Ensure IDs match
  const projectExpenses = expenses.filter((expense) => expense.projectId === project?.id);

  if (!project) return <p>Project not found</p>;

  return (
    <div>
      <h2>{project.name}</h2>
      <p>Profit: ${project.profit}</p>
      <p>Cost: ${project.cost}</p>
      <p>Status: {project.status}</p>

      <h3>Expenses</h3>
      {projectExpenses.length > 0 ? (
        projectExpenses.map((expense) => (
          <div key={expense.id}>
            <p>{expense.name}: ${expense.amount}</p>
          </div>
        ))
      ) : (
        <p>No expenses found for this project.</p>
      )}
    </div>
  );
};

export default ProjectDetail;

