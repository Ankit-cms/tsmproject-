import * as React from 'react';
import {
    Api,
    ArrowForward,
    Dashboard,
    Folder, 
    NotificationsActive, 
    ReceiptLong, 
    Smartphone,
    Summarize, 
} from '@mui/icons-material';
import {
    Box,
    Card,
    CardContent,
    Container,
    Grid,
    Paper,
    Typography,
} from '@mui/material';

const Features = () => {
    const features = [
        {
            title: 'Mobile driven',
            icon: Smartphone,
            description: 'Run logistics anytime, anywhere effortlessly',
        },
        {
            title: 'Instant PoD & Invoicing',
            icon: ReceiptLong,
            description: 'Fast proof of delivery and billing',
        },
        {
            title: 'Smart notifications',
            icon: NotificationsActive,
            description: 'Stay ahead with timely updates and alerts',
        },
        {
            title: 'Control tower view',
            icon: Dashboard,
            description: 'Full operational visibility in one place',
        },
        {
            title: 'Next action ready',
            icon: ArrowForward,
            description: 'Your next action is visible and a click away',
        },
        {
            title: 'Centralized documentation',
            icon: Folder,
            description: 'Access all documents from one location',
        },
        {
            title: 'Auto status reporting',
            icon: Summarize,
            description: 'Customized reports delivered automatically',
        },
        {
            title: 'API-Enabled',
            icon: Api,
            description: 'Easily integrate with your existing systems',
        },
        // {
        //   title: 'Data intelligence',
        //   icon: Analytics,
        //   description: 'Boost revenue, reduce costs, improve KPIs',
        // },
        // {
        //   title: 'Intuitive interface',
        //   icon: TouchApp,
        //   description: 'Easy-to-use design for all users',
        // },
        // {
        //   title: 'Neutral SaaS platform',
        //   icon: Handshake,
        //   description: 'Open collaboration across all stakeholders',
        // },
        // {
        //   title: 'Networked & Collaborative',
        //   icon: Groups,
        //   description: 'Seamless teamwork within and across entities',
        // },
        // {
        //   title: 'Quick implementation',
        //   icon: RocketLaunch,
        //   description: 'Rapid setup in days, not months',
        // },
        // {
        //   title: 'Built for everyone',
        //   icon: AllInclusive,
        //   description: 'Designed for all, including C-level executives',
        // },
        // {
        //   title: 'Global & Scalable',
        //   icon: Public,
        //   description: 'Designed for global operations and growth',
        // },
    ];

    return (
      <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Box py={5}>
            <Box mb={6}>
              <Typography variant="h3" gutterBottom fontWeight="bold">
                TMS features
              </Typography>
              <Typography variant="h5" paragraph>
                Powerful features that help you outperform competitors and wow
                your customers
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
              {features.map((feature) => (
                <Grid
                  key={feature.title}
                  minHeight={160}
                  size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                >
                  <Card elevation={0} square >
                    <CardContent sx={{ p: 3 }}>
                      <Box>
                        <feature.icon fontSize="large" /> 
                      </Box>
                      <Typography variant="h6" gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
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

export default Features;