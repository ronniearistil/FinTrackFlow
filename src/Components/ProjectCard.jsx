import React from 'react';
import { Box, Typography } from '@mui/material';

const ProjectCard = ({ project }) => (
  <Box className="project-card">
    <Typography variant="h5">{project.name}</Typography>
    <Typography variant="body1">Profit: ${project.profit}</Typography>
    <Typography variant="body1">Cost: ${project.cost}</Typography>
    <Typography variant="body1">Status: {project.status}</Typography>
  </Box>
);

export default ProjectCard;
