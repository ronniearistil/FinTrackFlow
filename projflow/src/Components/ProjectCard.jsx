// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  // Destructure the project details
  const { name, profit, cost, status } = project;

  return (
    <div className="project-card">
      <h2>{name}</h2>
      <p>Profit: ${profit}</p>
      <p>Cost: ${cost}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default ProjectCard;
