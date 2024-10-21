import React, { useEffect, useState } from 'react';
import { useProjects } from './ProjectContext';
import ProjectCard from './ProjectCard';

const ProjectsContainer = ({ searchTerm, statusFilter }) => {
  const { projects, archiveProject } = useProjects(); // Use archive function from context
  const [filteredProjects, setFilteredProjects] = useState([]);

  const handleEdit = (project) => {
    console.log('Editing project:', project); // Replace with your edit logic
  };

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
        <ProjectCard
          key={project.id}
          project={project}
          onEdit={handleEdit} // Pass the onEdit function
          onArchive={archiveProject} // Pass the onArchive function
        />
      ))}
    </div>
  );
};

export default ProjectsContainer;



