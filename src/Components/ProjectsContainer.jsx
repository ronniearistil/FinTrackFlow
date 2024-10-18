// ProjectsContainer.jsx
import React, { useContext } from 'react';
import { ProjectContext } from './ProjectContext';
import ProjectsDashboard from './ProjectsDashboard';
import ProjectForm from './ProjectForm';

const ProjectsContainer = () => {
  const { projects, addProject } = useContext(ProjectContext);

  return (
    <div>
      <ProjectForm addProject={addProject} />
      <ProjectsDashboard projects={projects} />
    </div>
  );
};

export default ProjectsContainer;
