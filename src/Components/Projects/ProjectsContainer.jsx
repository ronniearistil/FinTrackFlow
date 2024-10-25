import React, { useEffect, useState } from 'react';
import { useProjects } from '../../ProjectContext';
import ProjectCard from './ProjectCard';
import { Button } from '@mui/material';

const ProjectsContainer = ({ searchTerm, statusFilter, sortOption }) => {
  const { projects } = useProjects();
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [showArchived, setShowArchived] = useState(false);

  const toggleArchived = () => setShowArchived((prev) => !prev);

  useEffect(() => {
    const lowerCasedSearchTerm = searchTerm.toLowerCase();

    // Filter projects based on search term and status
    let filtered = projects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(lowerCasedSearchTerm) ||
        project.id.includes(searchTerm);

      const matchesStatus =
        statusFilter === 'All' || statusFilter === '' || project.status === statusFilter;

      const matchesArchiveStatus = showArchived
        ? project.status === 'Archived'
        : project.status !== 'Archived';

      return matchesSearch && matchesStatus && matchesArchiveStatus;
    });

    // Apply sorting based on the selected sort option
    if (sortOption) {
      filtered = filtered.sort((a, b) => {
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
  }, [projects, searchTerm, statusFilter, sortOption, showArchived]);

  return (
    <div className="dashboard">
      <Button 
        variant="outlined" 
        onClick={toggleArchived} 
        sx={{ mb: 2 }}
      >
        {showArchived ? 'Show Active' : 'Show Archived'}
      </Button>

      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}

      {filteredProjects.length === 0 && <p>No projects found.</p>}
    </div>
  );
};

export default ProjectsContainer;









