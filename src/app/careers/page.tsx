'use client';
import React, { useState } from 'react';
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
  Grid,
  Link,
  TextField,
  InputAdornment,
  IconButton
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import { TouchAppOutlined } from '@mui/icons-material';

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
        description: 'Manage SaaS implementation projects for enterprise clients. Work with cross-functional teams to ensure successful deployments.'
      },
    ],
  },
  {
    category: 'Engineering',
    jobs: [
      {
        Project: 'AcrePlatform',
        title: 'Frontend Developer',
        location: 'Remote',
        workType: 'Remote',
        contractType: 'Full time',
        experience: '2+ years',
        description: 'Build responsive web applications using React and modern frontend technologies.'
      },
    ],
  },
];

const Career = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter jobs based on search term
  const filteredCategories = jobCategories.map(category => ({
    ...category,
    jobs: category.jobs.filter(job => {
      const searchLower = searchTerm.toLowerCase();
      return (
        searchTerm === '' ||
        job.title.toLowerCase().includes(searchLower) ||
        job.description.toLowerCase().includes(searchLower) ||
        job.Project.toLowerCase().includes(searchLower) ||
        job.location.toLowerCase().includes(searchLower) ||
        category.category.toLowerCase().includes(searchLower)
      );
    })
  })).filter(category => category.jobs.length > 0);

  const handleClearSearch = () => {
    setSearchTerm('');
  };

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
      <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Heading primaryText='Current openings' secondaryText='Explore roles where you can make an immediate impact.'/>
            
            {/* Simple Search Bar */}
            <Box sx={{ mb: 4 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search jobs by title, description, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                  endAdornment: searchTerm && (
                    <InputAdornment position="end">
                      <IconButton 
                        size="small" 
                        onClick={handleClearSearch}
                        edge="end"
                      >
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: 'background.paper',
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: 'action.hover'
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'grey.300',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'primary.main',
                    }
                  }
                }}
              />
              {searchTerm && (
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                  Searching for: &apos;{searchTerm}&apos; • Found {filteredCategories.flatMap(cat => cat.jobs).length} job
                </Typography>
              )}
            </Box>

            {/* Job Listings */}
            {filteredCategories.length > 0 ? (
              filteredCategories.map((section, index) => (
                <Box key={index} sx={{ mt: 1 }}>
                  {/* <Typography variant="h5" gutterBottom color="primary.main" >
                    {section.category}
                  </Typography> */}
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
                        <Typography variant="body2" paragraph>
                          {job.description || 'Requirements: 3+ years of experience in SaaS implementation, onboarding, or project management. Strong communication, client management, and problem-solving skills. Experience with enterprise software, data migration, and integrations preferred. Ability to manage multiple projects simultaneously in a fast-paced environment.'}
                        </Typography>

                        <Box textAlign="end">
                          <Button 
                            variant="contained" 
                            startIcon={<TouchAppOutlined/>}
                            component={Link}
                            href={"apply/abc"}
                          >
                            Apply
                          </Button>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              ))
            ) : (
              <Box sx={{ textAlign: 'center', py: 8, border: 1, borderColor: 'grey.200', borderRadius: 2 }}>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  No jobs found matching &apos;{searchTerm}&apos;
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  Try searching with different keywords
                </Typography>
                <Button 
                  variant="outlined" 
                  onClick={handleClearSearch}
                  startIcon={<ClearIcon />}
                >
                  Clear Search
                </Button>
              </Box>
            )}
          </Box>
        </Container>
      </Paper>

      <Footer />
    </Box>
  );
};

export default Career;