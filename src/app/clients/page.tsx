import React from 'react';
import Client from '../components/Client';
import Header from '../components/Header';
import { Box, Breadcrumbs, Divider, Link, Paper, Typography } from '@mui/material';
import Footer from '../components/Footer';
const Clients = () => {
  return (
    <Box>
      <Header />
      <Paper elevation={0} square sx={{ mt: 9 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ p: 3 }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: 'text.primary' }}>Clients</Typography>
        </Breadcrumbs>
        <Divider />

        <Client />
      </Paper>
      <Divider sx={{my:2}}/>

      <Footer />
    </Box>
  );
};

export default Clients;
