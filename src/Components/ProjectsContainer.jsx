// src/Components/ProjectsContainer.jsx
import React, { useEffect, useState } from 'react';
import { useProjects } from './ProjectContext';
import ProjectCard from './ProjectCard'; // Display each project

const ProjectsContainer = ({ searchTerm, statusFilter }) => {
  const { projects, archiveProject } = useProjects();
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Filter projects based on search term and status filter
  useEffect(() => {
    const filtered = projects.filter((project) => {
      const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === 'All' || statusFilter === '' || project.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    setFilteredProjects(filtered);
  }, [projects, searchTerm, statusFilter]);

  return (
    <div className="dashboard">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} onArchive={archiveProject} />
      ))}
    </div>
  );
};

export default ProjectsContainer;





