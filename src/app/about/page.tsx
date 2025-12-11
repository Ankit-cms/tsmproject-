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
  FormatQuote,
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
<Paper
  elevation={0}
  square
  sx={{
    position: "relative",
    overflow: "hidden",

    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      background: `
        radial-gradient(circle at center,
          rgba(40, 80, 255, 0.95) 0%,
          rgba(90, 110, 255, 0.75) 20%,
          rgba(160, 120, 255, 0.55) 40%,
          rgba(255, 160, 220, 0.60) 60%,
          rgba(255, 200, 230, 0.45) 80%,
          rgba(255, 240, 250, 0.40) 100%
        )
      `,
      backgroundSize: "200% 200%",
      animation: "radiusMove 18s ease-in-out infinite",
      zIndex: 0,
    },

    "@keyframes radiusMove": {
      "0%":   { backgroundPosition: "50% 50%" },
      "50%":  { backgroundPosition: "70% 60%" },
      "100%": { backgroundPosition: "50% 50%" }
    },

    // Make your content appear above the gradient
    // position: "relative",
    // zIndex: 1,
  }}
>
        <Container maxWidth="lg">

<Box
  sx={{
    height: "calc(100vh - 128px)",
    py: { xs: 4, md: 8 },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  }}
>


            <Grid container spacing={4}  >
              <Grid size={{ xs: 12, md: 12 }}  >
               
                <Typography
  variant="h2"
  color="black"
  paragraph
  textAlign="left"
>
  At <br />

  <Typography
    component="span"
    sx={{
      fontSize: {
        xs: "2.5rem",  
        sm: "3.5rem", 
        md: "5rem",   
        lg: "6rem", 
      },
      color: "#111111",
    }}
  >
    Gravity44/
  </Typography>
  <br />
We build SaaS that delivers visibility, collaboration,
  and world-class experiences.
</Typography>

                <Button variant="contained" endIcon={<ArrowForwardIcon />} href="/contact" component="a" sx={{ mt: 2 }}>
                  Contact us
                </Button>
              </Grid>

            </Grid>
          </Box>
        </Container>
      </Paper>
      <Paper elevation={0} square  sx={{bgcolor: "common.whiteSmoke"}}>
        <Container maxWidth="lg">

          <Box sx={{ py: { xs: 4, md: 8 } }}>


            <Grid container spacing={4} my={3} justifyContent="center" alignItems="center" >
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  color="primary.dark"
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  About us
                </Typography>
                <Typography variant="h1" paragraph>
                  We are team of problem solvers who love technology{' '}
                </Typography>
              </Grid>




              <Grid size={{ xs: 12, md: 6 }}>
                <CardMedia
                  component="img"
                  height="400"
                  image="/img/about/group.avif"
                  alt="about-us"
                  sx={{ borderRadius: 4, boxShadow: 4 }}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Paper>
      <Paper elevation={0} square >
        <Container maxWidth="lg">
          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Grid container spacing={4} >
              <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ mb: 2, bgcolor: "common.whiteSmoke",height: "100%" }} variant='elevation' elevation={8}

                >
                  <CardContent sx={{ p: 3 }}>
                    <Box display={"flex"} alignItems="start" gap={1}>
                      <FlagOutlinedIcon />
                      <Typography variant="h5" fontWeight="bold" component="h3" gutterBottom>
                        Purpose 
                      </Typography>
                    </Box>

                <Box position="relative" sx={{ px: 4, py: 2 }}>
  {/* Left Quote Icon */}
  <FormatQuote
    sx={{
      position: "absolute",
      left: 0,
      top: 0,
      fontSize: 40,
      opacity: 0.2,
       transform: "rotate(180deg)",
    }}
  />

  <Typography
    variant="body1"
    fontWeight={400}
    paragraph
    sx={{
      textAlign: "left",
    ml: 2
    }}
  >
    To build the most scalable software platforms that elevates visibility,
    collaboration, growth, and efficiency for businesses.
  </Typography>

  
  <FormatQuote
    sx={{
      position: "absolute",
      right: 0,
      bottom: 0,
      fontSize: 40,
      opacity: 0.2,
     
    }}
  />
</Box>

                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ mb: 2, bgcolor: "common.whiteSmoke",height: "100%" }} variant='elevation' elevation={8}>
                  <CardContent sx={{ p: 3 }}>
                    <Box display={"flex"} alignItems="start" gap={1}>
                      <RadarOutlinedIcon />

                      <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
                       Mission
                      </Typography>
                    </Box>
                              <Box position="relative" sx={{ px: 4, py: 2 }}>
  {/* Left Quote Icon */}
  <FormatQuote
    sx={{
      position: "absolute",
      left: 0,
      top: 0,
      fontSize: 40,
      opacity: 0.2,
       transform: "rotate(180deg)",
    }}
  />

  {/* Quote Text */}
  <Typography
    variant="body1"
    fontWeight={400}
    paragraph
    sx={{
       textAlign: "left",
    ml: 2,
      
    }}
  >
       To build better software Products that deliver amazing experiences.
  </Typography>


  <FormatQuote
    sx={{
      position: "absolute",
      right: 0,
      bottom: 0,
      fontSize: 40,
      opacity: 0.2,
      
    }}
  />
</Box>

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
                color="primary.dark"
                
              >
                Our Values
              </Typography>
              <Typography variant="h2" paragraph>
                At the core of Gravity44{' '}
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {features.map((feature) => (
                <Grid
                
                  key={feature.title}
                 
                  size={{ xs: 12, md: 6, lg: 4 }}
                >
                  <Card    elevation={3}
                    variant="elevation"
                    sx={{
                      height: "100%",
                      width: "100%",
                      bgcolor: "common.white",
                      color: "common.black",
                    }}>
                    <CardContent sx={{ textAlign: "start", p: 3 }}>
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
                  View jobs
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
