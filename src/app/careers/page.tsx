'use client';
import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Breadcrumbs,
  Button,
  Chip,
  Container,
  Divider,
  Link,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { usePathname } from 'next/navigation';

const jobCategories = [
  {
    category: 'Engineering',
    jobs: [
      {
        title: 'Senior Software Engineer',
        description:
          'You will be responsible for the development of new and existing software products.',
        location: 'Salta, Argentina office or Remote',
      },
      {
        title: 'QA Engineer',
        description:
          'Ensure the quality of our software products through testing and automation.',
        location: 'Chiang Mai, Thailand office or Remote',
      },
    ],
  },
  {
    category: 'Product',
    jobs: [
      {
        title: 'Product Manager',
        description: 'Help us build the next generation of Acme products.',
        location: 'Windhoek, Namibia office or Remote',
      },
    ],
  },
  {
    category: 'Support',
    jobs: [
      {
        title: 'Technical Support Specialist',
        description:
          'Provide technical support to our customers and internal teams.',
        location: 'Cusco, Peru office or Remote',
      },
    ],
  },
];

const Career = () => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);

  return (
    <Box>
      <Header />
      <Paper elevation={0} square>
        <Breadcrumbs aria-label="breadcrumb" sx={{ ml: 2, mt: 2 }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: 'text.primary' }}>{pathnames[0]}</Typography>
        </Breadcrumbs>

        <Box py={4}>
          <Container maxWidth="lg">
            <Typography variant="h4" component="h2" gutterBottom>
              Open positions
            </Typography>

            {jobCategories.map((section) => (
              <Box key={section.category} sx={{ mt: 3 }}>
                <Chip
                  sx={{ mb: 2 }}
                  label={section.category}
                  color="primary"
                  variant="outlined"
                />

                {section.jobs.map((job, index) => (
                  <Box key={job.title}>
                    <Accordion
                      elevation={0}
                      disableGutters
                      sx={{
                        border: 'none',
                        '&:before': { display: 'none' },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ArrowForwardIcon fontSize="small" />}
                      >
                        <Stack spacing={1}>
                          <Typography variant="h6">{job.title}</Typography>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                          >
                            {job.description}
                          </Typography>
                          <Box display="flex" alignItems="center" gap={0.5}>
                            <LocationOnOutlinedIcon fontSize="small" />
                            <Typography variant="body2" color="text.secondary">
                              {job.location}
                            </Typography>
                          </Box>
                        </Stack>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Button variant="contained">Apply</Button>
                      </AccordionDetails>
                    </Accordion>

                    <Divider sx={{ my: 1.5 }} />
                  </Box>
                ))}
              </Box>
            ))}
          </Container>
        </Box>
      </Paper>
      <Divider sx={{ my: 2 }} />
      <Footer />
    </Box>
  );
};

export default Career;
