// src/Components/ProjectsContainer.jsx
import React, { useEffect, useState } from 'react';
import { useProjects } from './ProjectContext';
import ProjectCard from './ProjectCard';

const ProjectsContainer = ({ searchTerm, statusFilter, sortOption }) => {
  const { projects, archiveProject } = useProjects();
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const lowerCasedSearchTerm = searchTerm.toLowerCase();

    // Filter projects based on search term and status
    let filtered = projects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(lowerCasedSearchTerm) ||
        project.id.includes(searchTerm);

      const matchesStatus =
        statusFilter === 'All' || statusFilter === '' || project.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    // Sort projects based on the selected option
    if (sortOption) {
      filtered = [...filtered].sort((a, b) => {
        switch (sortOption) {
          case 'nameAsc':
            return a.name.localeCompare(b.name);
          case 'nameDesc':
            return b.name.localeCompare(a.name);
          case 'profitHigh':
            return b.profit - a.profit;
          case 'profitLow':
            return a.profit - b.profit;
          case 'costHigh':
            return b.cost - a.cost;
          case 'costLow':
            return a.cost - b.cost;
          default:
            return 0;
        }
      });
    }

    setFilteredProjects(filtered);
  }, [projects, searchTerm, statusFilter, sortOption]);

  return (
    <div className="dashboard">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} onArchive={archiveProject} />
      ))}
    </div>
  );
};

export default ProjectsContainer;







