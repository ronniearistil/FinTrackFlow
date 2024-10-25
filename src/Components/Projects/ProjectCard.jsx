import React, { useState } from 'react';
import { 
  IconButton, Menu, MenuItem, TextField, Button, Dialog, 
  Typography, Box, Divider 
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useProjects } from '../../ProjectContext';

const ProjectCard = ({ project }) => {
  const { editProject, archiveProject } = useProjects();
  const [anchorEl, setAnchorEl] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [showProjectID, setShowProjectID] = useState(false); // Toggle state for project ID visibility
  const [updatedProject, setUpdatedProject] = useState(project);

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleEditOpen = () => {
    if (project.status !== 'Archived') {
      setEditModalOpen(true);
      handleMenuClose();
    }
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

  const toggleProjectID = () => setShowProjectID((prev) => !prev); // Toggle Project ID display

  return (
    <Box
      className="project-card"
      sx={{
        opacity: project.status === 'Archived' ? 0.5 : 1,
        backgroundColor: project.status === 'Archived' ? '#f0f0f0' : 'white',
        transition: 'opacity 0.3s ease',
        padding: 2,
        marginBottom: 2,
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          marginBottom: 1,
          textAlign: 'center',
          color: '#00796b',
        }}
      >
        {project.name}
      </Typography>

      <Divider sx={{ marginBottom: 2, borderColor: '#00796b', borderWidth: 1 }} />

      <Typography>Profit: ${project.profit}</Typography>
      <Typography>Cost: ${project.cost}</Typography>
      <Typography>Status: {project.status}</Typography>

      <Button
        variant="outlined"
        size="small"
        onClick={toggleProjectID}
        sx={{ marginTop: 1 }}
      >
        {showProjectID ? 'Hide Project ID' : 'Show Project ID'}
      </Button>

      {showProjectID && (
        <Typography mt={1}>Project ID: {project.id}</Typography>
      )}

      <IconButton onClick={handleMenuOpen}>
        <MoreVertIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        <MenuItem onClick={handleEditOpen} disabled={project.status === 'Archived'}>
          Edit
        </MenuItem>
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
    </Box>
  );
};

export default ProjectCard;








