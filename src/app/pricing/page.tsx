import {
  Box,
  Breadcrumbs,
  Container,
  Divider,
  Link,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';
import Header from '../components/Header';

const Pricing = () => {
  return (
    <Box>
      <Header />
      <Paper elevation={0} square sx={{ mt: 9 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ p: 3 }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: 'text.primary' }}>Pay-here</Typography>
        </Breadcrumbs>
        <Divider />
        <Box py={4}>
          <Container maxWidth="lg">
            <Typography variant="h3" component="h2" gutterBottom>
              Pay us here
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Complete your payment quickly and safely using the QR code or bank
              transfer details below.
            </Typography>
            <Divider sx={{ my: 2 }} />
          </Container>
        </Box>
      </Paper>
    </Box>
  );
};

export default Pricing;
