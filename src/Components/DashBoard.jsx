import React from 'react';
import ProjectCard from './ProjectCard';

const Dashboard = ({ projects }) => {
  return (
    <div>
      <h2>Project List</h2>
      <div className="dashboard">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

