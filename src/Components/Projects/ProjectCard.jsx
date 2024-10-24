// ProjectCard.jsx

import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, TextField, Button, Dialog } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useProjects } from '../../ProjectContext';

const ProjectCard = ({ project }) => {
  const { editProject, archiveProject } = useProjects();
  const [anchorEl, setAnchorEl] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [updatedProject, setUpdatedProject] = useState(project);

  //const {deleteProject} = useContext(ProjectContext)

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleEditOpen = () => {
    setEditModalOpen(true);
    handleMenuClose();
  };

  const handleEditChange = (e) => 
    setUpdatedProject({ ...updatedProject, [e.target.name]: e.target.value });

  const handleEditSave = () => {
    editProject(updatedProject);
    setEditModalOpen(false);
  };

  const handleArchiveToggle = async () => {
    await archiveProject(project.id);
    handleMenuClose();
  };

  return (
    <div
      className="project-card"
      style={{
        opacity: project.status === 'Archived' ? 0.5 : 1,
        backgroundColor: project.status === 'Archived' ? '#f0f0f0' : 'white',
        transition: 'opacity 0.3s ease',
      }}
    >
      <h3>{project.name}</h3>
      <p>Profit: ${project.profit}</p>
      <p>Cost: ${project.cost}</p>
      <p>Status: {project.status}</p>

      <IconButton onClick={handleMenuOpen}>
        <MoreVertIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        <MenuItem onClick={handleEditOpen}>Edit</MenuItem>
        <MenuItem onClick={handleArchiveToggle}>
          {project.status === 'Archived' ? 'Unarchive' : 'Archive'}
        </MenuItem>
      </Menu>

      <Dialog open={editModalOpen} onClose={() => setEditModalOpen(false)}>
        <TextField
          label="Project Name"
          name="name"
          value={updatedProject.name}
          onChange={handleEditChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Profit"
          name="profit"
          type="number"
          value={updatedProject.profit}
          onChange={handleEditChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Cost"
          name="cost"
          type="number"
          value={updatedProject.cost}
          onChange={handleEditChange}
          fullWidth
          margin="normal"
        />
        <Button onClick={handleEditSave} variant="contained">
          Save
        </Button>
      </Dialog>
    </div>
  );
};

export default ProjectCard;






