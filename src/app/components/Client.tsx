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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((feature) => (
              <Grid
                key={feature}
                minHeight={160}
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              >
                <Card elevation={0}>
                  <CardContent sx={{ p: 3 }}>
                    <CardMedia
                      component="img"
                      image="/img/work/instalanes_TMS_challenges.png"
                      alt="TMS Illustration"
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
