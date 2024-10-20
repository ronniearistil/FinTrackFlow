// src/Components/NavLink.jsx
import React from 'react';
import { Link } from '@mui/material';

const NavLink = ({ to, children }) => (
  <Link
    href={to}
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
