// src/Components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project, onArchive }) => (
  <div className="project-card">
    <h3>{project.name}</h3>
    <p>Profit: ${project.profit}</p>
    <p>Cost: ${project.cost}</p>
    <p>Status: {project.status}</p>

    <button onClick={onArchive}>Archive</button>

  </div>
);

export default ProjectCard;
