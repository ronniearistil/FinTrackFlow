// src/Components/Header.jsx
import React from 'react';
import { Typography, Box } from '@mui/material';

const Header = () => (
  <Box
    sx={{
      textAlign: 'center',
      mt: 3, // Add margin at the top
      mb: 3, // Add margin at the bottom for spacing
    }}
  >
    <Typography
      variant="h1"
      sx={{
        fontSize: '3.5rem', // 40% larger size
        fontWeight: 'bold', // Bold text
        color: '#2a9d8f', // Optional color matching the theme
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Add subtle shadow
      }}
    >
      FinTrackPro
    </Typography>
  </Box>
);

export default Header;


