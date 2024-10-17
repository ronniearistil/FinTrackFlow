import React, { useContext } from 'react';
import { ProjectContext } from './ProjectContext';
import ProjectCard from './ProjectCard';

const Dashboard = () => {
  const { projects } = useContext(ProjectContext);

  if (!projects || projects.length === 0) {
    return <p>No projects found or loading...</p>;
  }

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

