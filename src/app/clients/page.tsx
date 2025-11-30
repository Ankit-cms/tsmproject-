import React from 'react';
import Client from '../components/Client';
import Header from '../components/Header';
import { Box, Breadcrumbs, Container, Divider, Link, Paper, Typography } from '@mui/material';
import Footer from '../components/Footer';
const Clients = () => {
  return (
    <Box>
      <Header />
      <Paper elevation={0} square >
        <Container maxWidth="lg">
          <Breadcrumbs aria-label="breadcrumb" sx={{ p: 3,pl:0 }}>
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography sx={{ color: 'text.primary' }}>Clients</Typography>
          </Breadcrumbs>
          <Divider />

          <Client />
        </Container>
      </Paper>
      <Divider sx={{ my: 2 }} />

      <Footer />
    </Box>
  );
};

export default Clients;
