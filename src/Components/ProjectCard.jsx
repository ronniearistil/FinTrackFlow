// ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => (
  <div className="expense-card"> {/* Use the same "expense-card" class for matching style */}
    <h3>{project.name}</h3>
    <p>Profit: ${project.profit}</p>
    <p>Cost: ${project.cost}</p>
    <p>Status: {project.status}</p>
  </div>
);

export default ProjectCard;
