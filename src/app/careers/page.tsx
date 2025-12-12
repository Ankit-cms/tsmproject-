'use client';
import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CardMedia,
  Container,
  Paper,
  Stack,
  Typography,
  Grid
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
const jobCategories = [
  {
    category: 'Product',
    jobs: [
      {
        Project: 'AcreBytes',
        title: 'Implementation Manager',
        location: 'Noida',
        workType: 'Remote',
        contractType: 'Part time',
        experience: '3+ years',
      },
    ],
  },
  {
    category: 'Product',
    jobs: [
      {
        Project: 'AcreBytes',
        title: 'Implementation Manager',
        location: 'Noida',
        workType: 'Remote',
        contractType: 'Part time',
        experience: '3+ years',
      },
    ],
  },
];

const Career = () => {
  return (
    <Box>
      <Header />
      <Paper elevation={0} square sx={{ bgcolor: "common.whiteSmoke" }}>

        <Container maxWidth="lg">


          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Grid container spacing={4} my={3} justifyContent="center" alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h6"
                  gutterBottom
                  color="primary.dark"
                  display="flex"
                  alignItems="center"
                  gap={1}>
                  Careers
                </Typography>
                <Typography variant='h1' paragraph>
                 Join us to create Impact at scale                
                 </Typography>
                <Typography variant="h2" paragraph>
                 Build technology that transforms business processes across the world.
                </Typography>

              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <CardMedia
                  component="img"
                  height="400"
                  image="/img/career/career-img.avif"
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
            <Heading primaryText='Current openings' secondaryText='Explore roles where you can make an immediate impact.'/>
            {jobCategories.map((section, index) => (
              <Box key={index} sx={{ mt: 2 }}>
                {section.jobs.map((job) => (
                <Accordion
  key={job.title}
  disableGutters
  variant="elevation"
  elevation={0}
  square={false}
  sx={{
    border: "1px solid",
    borderColor: "grey.300",
    mb: 2,
    backgroundColor: "background.default",
    p: 1,
  }}
>
  <AccordionSummary
    expandIcon={null}
    sx={{
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 1,
      position: "relative",
    }}
  >
    
    <ArrowForwardIcon
      fontSize="small"
      sx={{
        position: "absolute",
        right: 16,
        top: 8,
        transform: "rotate(0deg)",
        transition: "transform 0.3s",
        ".Mui-expanded &": {
          transform: "rotate(90deg)",
        },
      }}
    />
    <Stack spacing={1}>
      <Typography variant="h6" fontWeight="bold">{job.title}</Typography>

      <Stack direction="row" spacing={1}>
        <Typography variant="body2">{job.Project}</Typography>
        <Typography>|</Typography>
        <Typography variant="body2">{section.category}</Typography>
        <Typography>|</Typography>
        <Typography variant="body2">{job.experience}</Typography>
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center">
        <LocationOnOutlinedIcon fontSize="small" />
        <Typography variant="body2">{job.location}</Typography>
        <Typography>|</Typography>
        <Typography variant="body2">{job.workType}</Typography>
        <Typography>|</Typography>
        <Typography variant="body2">{job.contractType}</Typography>
      </Stack>
    </Stack>
  </AccordionSummary>

  <AccordionDetails>
    <Typography variant="body1" paragraph>
Requirements: 3+ years of experience in SaaS
                        implementation, onboarding, or project management.
                        Strong communication, client management, and
                        problem-solving skills. Experience with enterprise
                        software, data migration, and integrations preferred.
                        Ability to manage multiple projects simultaneously in
                        a fast-paced environment.</Typography>

    <Box textAlign="end">
      <Button variant="contained">Apply</Button>
    </Box>
  </AccordionDetails>
</Accordion>

                ))}
              </Box>
            ))}
          </Box>

        </Container>
      </Paper>

      <Footer />
    </Box>
  );
};

export default Career;
