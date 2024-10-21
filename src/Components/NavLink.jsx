import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Use React Router's Link
import { Link } from '@mui/material';

const NavLink = ({ to, children }) => (
  <Link
    component={RouterLink} // Use RouterLink for navigation
    to={to}
    underline="none"
    sx={{
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      p: 2,
    }}
  >
    {children}
  </Link>
);

export default NavLink;
