import * as React from 'react';
import {
  Box, 
  Container,
  Grid,
  Typography,
} from '@mui/material';  
import Button from '@mui/material/Button';
import ComputerIcon from '@mui/icons-material/Computer';

const HeroFull = () => {

  return (

    <Box
      sx={{
        position: 'relative',
        minHeight: '72vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url("/img/Banner.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          zIndex: 1,
        },
      }}>
      <Container maxWidth="lg">
        <Box position="relative" zIndex={2} width="100%" >
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }} mt={8}>
              {/* <Chip
                            icon={<AutoAwesomeIcon />}
                            label="Switch to Instalanes"
                            variant="outlined"
                            color="primary"
                            sx={{
                                px: 1,
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                borderColor: 'primary.main'
                            }}
                        /> */}
              <Typography
                variant="h3"
                component="h1"
                color="white"
                gutterBottom
                sx={{
                  fontSize: { xs: '1.5rem', md: '3rem' },
                  mt: 1,
                }}
              >
                Collaborative logistics. Faster decisions. Complete visibility{' '}
              </Typography>
              <Typography variant="body1" paragraph color="white">
                Powering smarter, faster logistics with a cloud TMS & visibility
                platform built for 3PLs, Shippers, and Carriers.
              </Typography>
              <Button sx={{ mt: 6 }} variant="contained" size="large">
                <ComputerIcon sx={{ mr: 1 }} /> Schedule a Demo
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
export default HeroFull;