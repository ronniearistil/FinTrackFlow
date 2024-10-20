// src/Components/ProjectCard.jsx
import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';

const ProjectCard = ({ project, onArchive }) => {
  const handleArchive = () => onArchive(project.id);

  return (
    <Card sx={{ width: 240, margin: 2, padding: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {project.name}
        </Typography>
        <Typography variant="body2">Profit: ${project.profit}</Typography>
        <Typography variant="body2">Cost: ${project.cost}</Typography>
        <Typography variant="body2">Status: {project.status}</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={handleArchive}
        >
          Archive
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;



