import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';

const Client = () => {
  return (
    <Paper elevation={0} square>
      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 4, md: 8 }}}>
          <Box mb={4}>
            <Typography variant="h6" gutterBottom textTransform="uppercase" color='primary.dark'>
              Trusted by Logistics Supply Chains enterprises 
            </Typography>
            <Typography variant="h2" paragraph>
              Modern teams choose us to simplify planning, execution, billing, and visibility
            </Typography>
          </Box>
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
              // {
              //   title: 'Philips',
              //   img: './img/client/philips.png',
              // },
              // {
              //   title: 'John-deere',
              //   img: './img/client/john-deere.png',
              // },
            ].map((brand) => (
              <Grid
                key={brand.title}
                size={{ xs: 6, md: 2 }}
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
