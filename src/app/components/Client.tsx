import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';

const Client = () => {
  return (
    <Paper elevation={0} square>
      <Container maxWidth="lg">
        <Box py={8}>
          <Box mb={6}>
            <Typography variant="h3" gutterBottom>
              Trusted by over 500+ clients
            </Typography>
            <Typography variant="h5" paragraph>
              Our clients are our top priority, and we committed to providing
              with the highest level of service.
            </Typography>
          </Box>
          <Divider sx={{my:2}}/>
          <Grid
            container
            mt={4}
            sx={{
              '--Grid-borderWidth': '1px',
              borderTop: 'var(--Grid-borderWidth) solid',
              borderLeft: 'var(--Grid-borderWidth) solid',
              borderColor: 'divider',
              '& > div': {
                borderRight: 'var(--Grid-borderWidth) solid',
                borderBottom: 'var(--Grid-borderWidth) solid',
                borderColor: 'divider',
              },
            }}
          >
            {[
              {
                title: 'Rolex',
                img: './img/client/rolex.png',
              },
              {
                title: 'Citi',
                img: './img/client/citi.png',
              },
              {
                title: 'Dell',
                img: './img/client/dell.png',
              },
              {
                title: 'Nissan',
                img: './img/client/nissan.png',
              },
              {
                title: 'Hundai',
                img: './img/client/hundai.png',
              },
              {
                title: 'Redbull',
                img: './img/client/redbull.png',
              },
              {
                title: 'Philips',
                img: './img/client/philips.png',
              },
              {
                title: 'John-deere',
                img: './img/client/john-deere.png',
              },
            ].map((brand) => (
              <Grid
                key={brand.title}
                size={2}
              >
                <Card elevation={0}>
                  <CardContent >
                    <CardMedia
                      component="img"
                      image={brand.img}
                      alt={brand.title}
                      
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Paper>
  );
};

export default Client;
