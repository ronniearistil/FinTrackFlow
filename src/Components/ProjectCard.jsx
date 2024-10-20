// src/Components/ProjectCard.jsx
import React from 'react';
import { Button } from '@mui/material';

const ProjectCard = ({ project, onArchive }) => {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>Profit: ${project.profit}</p>
      <p>Cost: ${project.cost}</p>
      <p>Status: {project.status}</p>
      <Button
        variant="contained"
        color="success"
        onClick={() => onArchive(project.id)} // Call archive handler
        disabled={project.status === 'Archived'} // Disable if already archived
      >
        {project.status === 'Archived' ? 'Archived' : 'Archive'}
      </Button>
    </div>
  );
};

export default ProjectCard;
