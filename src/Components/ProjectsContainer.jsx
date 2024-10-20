// src/Components/ProjectsContainer.jsx
import React, { useContext, useState, useEffect } from 'react';
import { ProjectContext } from './ProjectContext';
import ProjectCard from './ProjectCard';

const ProjectsContainer = ({ searchTerm }) => {
  const { projects } = useContext(ProjectContext);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const filtered = projects.filter((project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
  }, [projects, searchTerm]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="dashboard" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <h3>No matching projects found</h3>
        )}
      </div>
    </div>
  );
};

export default ProjectsContainer;

