// src/Components/ProjectsContainer.jsx
import React, { useEffect, useState } from 'react';
import { useProjects } from './ProjectContext';
import ProjectCard from './ProjectCard';

const ProjectsContainer = ({ searchTerm, statusFilter }) => {
  const { projects, archiveProject } = useProjects(); // Pull archive logic from context
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const filtered = projects.filter((project) => {
      const matchesSearch = project.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === 'All' || statusFilter === '' || project.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    setFilteredProjects(filtered);
  }, [projects, searchTerm, statusFilter]);

  return (
    <div className="dashboard">
      {filteredProjects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          onArchive={archiveProject} 
        />
      ))}
    </div>
  );
};

export default ProjectsContainer;


