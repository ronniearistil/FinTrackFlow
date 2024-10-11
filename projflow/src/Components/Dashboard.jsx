// src/components/Dashboard.js
import React from 'react';
import ProjectCard from './ProjectCard';
import './Dashboard.css';

function Dashboard({ projects }) {
  return (
    <div className="dashboard">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Dashboard;
