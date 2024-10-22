// src/Components/AboutUs.jsx
import React from 'react';
import { Typography, Container } from '@mui/material';

const AboutUs = () => (
  <Container maxWidth="md" sx={{ padding: '2rem 0', textAlign: 'center' }}>
    <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
      About Us
    </Typography>
    <Typography variant="body1" paragraph>
      At FinTrackPro, we specialize in building seamless project forecasting, budgeting, 
      and expense management solutions. Our mission is to help professionals and businesses 
      streamline financial management with easy-to-use tools that promote data-driven decisions.
    </Typography>
    <Typography variant="h4" sx={{ marginTop: '2rem', fontWeight: 'bold' }}>
      Meet Our Developer
    </Typography>
    <Typography variant="body1" paragraph>
      As a Full Stack Software Engineer, I leverage my background in finance and project management 
      to build streamlined web applications. I focus on creating efficient, scalable systems with 
      JavaScript (React, Node.js) on both the front-end and back-end, and use Python for automation 
      to simplify workflows.
    </Typography>
    <Typography variant="body1" paragraph>
      In previous roles, I led projects that transformed financial systems and improved 
      business operations. My experience blends financial systems optimization with technical 
      problem-solving and project management (PMP), giving me a unique perspective on complex challenges.
    </Typography>
  </Container>
);

export default AboutUs;

