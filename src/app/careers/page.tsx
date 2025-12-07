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
      },
    ],
  },
];

const Career = () => {
  return (
    <Box>
      <Header />
      <Paper elevation={0} square  sx={{ bgcolor: "common.whiteSmoke" }}>
        
          <Container maxWidth="lg">

     
        <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Typography  variant="h6"
                gutterBottom
                textTransform="uppercase"
                color="primary.dark"
                display="flex"
                alignItems="center"
                gap={1}>
              Enhance your Career, join us
            </Typography>
            <Typography variant="h2" paragraph>
              We are building global scalable platforms for enterprises. Change
              the way business processes work.
            </Typography>

               </Box>
          </Container>
      </Paper>
               <Paper elevation={0} square >
        
          <Container maxWidth="lg">

     
        <Box sx={{ py: { xs: 4, md: 8 } }}>
            {jobCategories.map((section) => (
              <Box key={section.category} sx={{ mt: 3 }}>
                {section.jobs.map((job) => (
                  <Box key={job.title}>
                    <Accordion disableGutters sx={{ p: 2 }}>
                      <AccordionSummary
                        expandIcon={<ArrowForwardIcon fontSize="small" />}
                      >
                        <Stack spacing={1}>
                          <Box display={'flex'} gap={2}>
                            <Chip
                              sx={{ width: 'fit-content' }}
                              label={section.category} 
                              variant="outlined"
                            />
                            <Typography variant="h5">{job.Project}</Typography>
                            <Typography variant="h5">{job.title}</Typography>
                          </Box>

                          <Box display="flex" alignItems="center" gap={0.5}>
                            <LocationOnOutlinedIcon fontSize="small" />
                            <Typography variant="body2" color="text.secondary">
                              {job.location}
                            </Typography>{' '}
                            |
                            <Typography variant="body2" color="text.secondary">
                              {job.workType} |
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {job.contractType}
                            </Typography>
                          </Box>
                        </Stack>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography paragraph>
                          Requirements: 3+ years of experience in SaaS
                          implementation, onboarding, or project management.
                          Strong communication, client management, and
                          problem-solving skills. Experience with enterprise
                          software, data migration, and integrations preferred.
                          Ability to manage multiple projects simultaneously in
                          a fast-paced environment.
                        </Typography>
                        <Box textAlign={'end'}>
                          <Button variant="contained">Apply</Button>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </Box>
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
