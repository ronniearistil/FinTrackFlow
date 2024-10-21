import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ProjectCard = ({ project, onEdit, onArchive }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>Profit: ${project.profit}</p>
      <p>Cost: ${project.cost}</p>
      <p>Status: {project.status}</p>

      <IconButton aria-label="more" onClick={handleMenuOpen}>
        <MoreVertIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        <MenuItem onClick={() => { onEdit(project); handleMenuClose(); }}>
          Edit
        </MenuItem>
        <MenuItem onClick={() => { onArchive(project.id); handleMenuClose(); }}>
          Archive
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProjectCard;


