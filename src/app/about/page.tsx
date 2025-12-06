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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import RadarOutlinedIcon from '@mui/icons-material/RadarOutlined';

import Header from '../components/Header';
import {
  ArrowForward,
  Dashboard,
  Folder,
  NotificationsActive,
  ReceiptLong,
  Smartphone,
} from '@mui/icons-material';
import Footer from '../components/Footer';
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
      <Paper elevation={0} square >
        <Container maxWidth="lg">

          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Typography
              variant="h6"
              gutterBottom
              textTransform="uppercase"
              color="primary.dark"
              display="flex"
              alignItems="center"
              gap={1}
            >
              About us
            </Typography>
            <Typography variant="h2" paragraph>
              We are team of problem solvers who love technology{' '}
            </Typography>

            <Grid container spacing={4} my={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <CardMedia
                  component="img"
                  height="400"
                  image="https://gravity44.com/wp-content/uploads/2024/05/mimi-thian-vdXMSiX-n6M-unsplash.jpg"
                  alt="about-us"
                  sx={{ borderRadius: 4, boxShadow: 4 }}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ mb: 2 }} elevation={8}
                  variant="outlined"
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box display={"flex"} alignItems="start" gap={1}>
                      <FlagOutlinedIcon />
                      <Typography variant="h5" component="h3" gutterBottom>
                        Purpose
                      </Typography>
                    </Box>
                    <Typography variant="body1" fontWeight={400} paragraph color="text.secondary">
                      Instalanes was launched in 2024 as a technology company by
                      a team of supply chain industry leaders and technology
                      enthusiasts. We are a team of technology enthusiasts who
                      love to solve complex problems and build better products
                      that deliver an amazing experience
                    </Typography>
                  </CardContent>
                </Card>

                <Card elevation={8}
                  variant="outlined">
                  <CardContent sx={{ p: 3 }}>
                    <Box display={"flex"} alignItems="start" gap={1}>
                      <RadarOutlinedIcon />

                      <Typography variant="h5" component="h3" gutterBottom>
                        Mission
                      </Typography>
                    </Box>
                    <Typography variant="body1" fontWeight={400} paragraph color="text.secondary">
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
          </Box>
        </Container>
      </Paper>

      <Paper elevation={0} square sx={{ bgcolor: "common.whiteSmoke" }}>
        <Container maxWidth="lg">
          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Box mb={4}>
              <Typography
                variant="h6"
                gutterBottom
                textTransform="uppercase"
                color="primary.dark"
              >
                Our Values
              </Typography>
              <Typography variant="h2" paragraph>
                At the core of Instalanes{' '}
              </Typography>
            </Box>

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
                      <Typography variant="h5" gutterBottom >
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




      <Paper elevation={0} square>
        <Container maxWidth="lg" >
          <Grid container spacing={5} >
            {/* Left Column */}
            <Grid size={{ xs: 12, md: 5 }}>
              <CardMedia
                component="img"
                image="/img/client/partner-header.webp"
                alt="Become a Partner"
                sx={{ height: "100%", mx: { xs: 2, md: 0 } }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }} sx={{ py: { xs: 4, md: 8 } }}>
              <Typography variant="h3" gutterBottom>
                Join our Team
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                We are always looking for passionate people who want to help us build the future of transport technology. Join us and be part of an exciting journey to create smarter, more connected logistics solutions.
              </Typography>
              <Box
                display={"flex"}
                gap={1}
                mt={2}
                alignItems={"center"}>

                <Button variant="contained" endIcon={<ArrowForwardIcon />} href="/careers" component="a">
                  View Open Positions
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Footer />
    </Box>
  );
};

export default AboutUs;
