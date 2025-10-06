'use client';
import React from 'react';
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
} from '@mui/material';
import Header from '../components/Header';
import {
  Api,
  ArrowForward,
  Dashboard,
  Folder,
  NotificationsActive,
  ReceiptLong,
  Smartphone,
} from '@mui/icons-material';
import Footer from '../components/Footer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const AboutUs = () => {
  const features = [
    {
      title: 'Deliver experience',
      icon: Smartphone,
      description:
        'Build products that deliver amazing experiences, work together and have fun',
    },
    {
      title: 'Eliminate noise',
      icon: ReceiptLong,
      description:
        'Only do what is important. Challenge yourself to only do things that are right and will have an impact',
    },
    {
      title: 'Solve problems',
      icon: NotificationsActive,
      description:
        'Customer problems need to be understood in order to provide an effective solution. Invest time to understand the customer’s perspective, and build a better solution',
    },
    {
      title: 'Stay in right direction',
      icon: Dashboard,
      description:
        'Keep an eye on your direction, it’s more important than going quickly',
    },
    {
      title: 'Follow process',
      icon: ArrowForward,
      description: 'Focus on well-organized methods, put effort into inputs',
    },
    {
      title: 'Find the Better way',
      icon: Folder,
      description: 'And there is always a way, The better way ! Period',
    },
  ];

  return (
    <Box>
      <Header />
      <Paper elevation={0} square sx={{ mt: 9 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ p: 3 }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: 'text.primary' }}>About us</Typography>
        </Breadcrumbs>
        <Divider />
        <Container maxWidth="lg">
          <Box my={3}>
            <Typography variant="h3" component="h2" gutterBottom>
              About us
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              We are team of problem solvers who love technology{' '}
            </Typography>
            <Divider sx={{ my: 3 }} />

            <Grid container spacing={4}  >
              <Grid size={{ xs: 12, md: 6 }}>
                <CardMedia
                  component="img"
                  height="400"
                  image="https://gravity44.com/wp-content/uploads/2024/05/mimi-thian-vdXMSiX-n6M-unsplash.jpg"
                  alt="about-us"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ mb: 2 }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      Purpose
                    </Typography>
                    <Typography variant="body1">
                      Instalanes was launched in 2024 as a technology company by
                      a team of supply chain industry leaders and technology
                      enthusiasts. We are a team of technology enthusiasts who
                      love to solve complex problems and build better products
                      that deliver an amazing experience
                    </Typography>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      Mission
                    </Typography>
                    <Typography variant="body1">
                      With the purpose of “building technology platforms that
                      deliver amazing life experiences”, we are on a mission to
                      “build the most global, scalable transport management
                      platform that helps businesses improve their supply chain
                      visibility, collaboration, growth, and process efficiency
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Divider sx={{ my: 3 }} />

            <Box>
              <Typography variant="h4" component="h2" gutterBottom>
                {' '}
                Our Values
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                At the core of Instalanes{' '}
              </Typography>

              <Grid container>
                {features.map((feature) => (
                  <Grid
                    size={{ xs: 12, md: 4 }}
                    key={feature.title}
                    minHeight={160}
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
                    <Card elevation={0} sx={{ height: '100%' }}>
                      <CardContent sx={{ p: 3 }}>
                        <Box mb={1}>
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

            <Divider sx={{ my: 3 }} />
            <Grid container spacing={4} >
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h4" gutterBottom>
                  Join our Team
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  We are always looking for passionate people who want to help
                  us build the future of transport technology. Join us and be
                  part of an exciting journey to create smarter, more connected
                  logistics solutions.
                </Typography>
                <Button
                  sx={{ mt: 2 }}
                  variant="contained"
                  endIcon={<ArrowForward />}
                  href="/careers"
                >
                  View open positions
                </Button>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="/img/team.jpeg"
                  alt="team"
                  sx={{
                    borderRadius: 2,
                    objectFit: 'cover',
                    width: '100%',
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Paper>
      <Divider sx={{ my: 3 }} />
      <Footer />
    </Box>
  );
};

export default AboutUs;
