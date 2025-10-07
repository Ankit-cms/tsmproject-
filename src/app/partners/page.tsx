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
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LaptopIcon from '@mui/icons-material/Laptop';
import { WhatsApp } from '@mui/icons-material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Partners = () => {
  return (
    <Box>
      <Header />
      <Paper elevation={0} square sx={{ mt: 9 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ p: 3 }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: 'text.primary' }}>Partners</Typography>
        </Breadcrumbs>
        <Divider />

        <Box py={4}>
          <Container maxWidth="lg">
            <Typography variant="h3" component="h2" gutterBottom>
              Growth Partners
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Select your scope - Let us know what fits for your Transportation
              business process
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Grid container spacing={3} py={1}>
              {[
                {
                  title: 'S1 partner',
                  subtitle: 'Search',
                  image:
                    'https://instalanes.com/new_instalanes/wp-content/uploads/2024/12/ai-generated-8723288_1280.jpg',
                  activities: [
                    'Search prospects',
                    'Prospect introduction',
                    'Exit – post demonstration',
                  ],
                  commission: ['10%, of 12 months billing'],
                },
                {
                  title: 'S2 partner',
                  subtitle: 'Search + Sale',
                  image:
                    'https://instalanes.com/new_instalanes/wp-content/uploads/2024/12/ai-generated-8723288_1280.jpg',
                  activities: [
                    'All S1 activities +',
                    'Sales and Onboarding',
                    'Exit – Post first Customer payment',
                  ],
                  commission: ['20%, of 12 months billing'],
                },
                {
                  title: 'S3 partner',
                  subtitle: 'Search + Sale + Support',
                  image:
                    'https://instalanes.com/new_instalanes/wp-content/uploads/2024/12/ai-generated-8723288_1280.jpg',
                  activities: [
                    'All S2 activities +',
                    'Customer support and growth',
                    'Exit – Handover / Customer sign off',
                  ],
                  commission: ['30%, of 36 months billing'],
                },
              ].map((item, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <CardMedia
                        component="img"
                        src={item.image}
                        alt={item.title}
                      />
                      <Box mt={1}>
                        <Typography variant="h5">{item.title}</Typography>
                        <Typography variant="subtitle1" gutterBottom>
                          {item.subtitle}
                        </Typography>
                      </Box>
                      <Divider sx={{ my: 2 }} />
                      <Box>
                        <Typography fontWeight="bold">
                          Key activities
                        </Typography>
                        <Stack>
                          {item.activities.map((activity, i) => (
                            <Typography key={i}>
                              <ArrowRightIcon fontSize="small" /> {activity}
                            </Typography>
                          ))}
                        </Stack>
                      </Box>
                      <Divider sx={{ my: 2 }} />
                      <Box>
                        <Typography fontWeight="bold">
                          % Commission, applicable period
                        </Typography>
                        <Stack>
                          {item.commission.map((comm, i) => (
                            <Typography key={i}>
                              <ArrowRightIcon fontSize="small" /> {comm}
                            </Typography>
                          ))}
                        </Stack>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Box py={4}>
            <Box mb={6}>
              <Typography variant="h3" gutterBottom>
                Platform Features
              </Typography>
              <Typography variant="h5" paragraph>
                Powerful features that help you outperform competitors and wow
                your customers
              </Typography>
            </Box>

            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Grid container spacing={2}>
                  {[
                    'Company name',
                    'Company type',
                    'Country',
                    'Solutions interested',
                    'Shipments/ Deliveries/ Users',
                    'Contact person first last name',
                  ].map((label) => (
                    <Grid size={{ xs: 12 }} key={label}>
                      <TextField fullWidth label={label} variant="outlined" />
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Grid container spacing={2}>
                  {[
                    'Email',
                    'Unique ref (Company for example CIN, Tax reference)',
                    'Partner Type',
                    'Remarks-last discussion with client',
                    'Email',
                  ].map((label) => (
                    <Grid size={{ xs: 12 }} key={label}>
                      <TextField fullWidth label={label} variant="outlined" />
                    </Grid>
                  ))}

                  <Grid size={{ xs: 12 }} textAlign="end">
                    <Button variant="contained" size="large">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Paper>

      <Divider sx={{ my: 2 }} />
      <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Box py={4}>
            <Box mb={6}>
              <Typography variant="h3" gutterBottom>
                Why Partner with Us?
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                At Instalanes, we believe in the power of collaboration to drive
                mutual success. We are always looking to build strong,
                meaningful partnerships that benefit our customers and enhance
                our service offerings.
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {[
                {
                  title: 'Innovation',
                  description:
                    'We are constantly pushing the boundaries of what’s possible in your industry. By partnering with us, you align with a brand that prioritizes cutting-edge solutions.',
                },
                {
                  title: 'Quality Assurance',
                  description:
                    'Our commitment to delivering top-tier products and services ensures that our partners can trust in the consistency and reliability of our offerings.',
                },
                {
                  title: 'Comprehensive Support',
                  description:
                    'From technical assistance to marketing collaboration, we provide robust support to our partners to help them succeed.',
                },
                {
                  title: 'Mutual Growth',
                  description:
                    'We aim to create partnerships that are mutually beneficial, driving growth for both parties through shared goals and resources.',
                },
              ].map((value) => (
                <Grid size={{ xs: 12, md: 3 }} key={value.title}>
                  <Card sx={{ height: '100%', borderRadius: 3 }}>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        {value.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Box py={4}>
            <Grid container spacing={3} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h3" gutterBottom>
                  Who We Partner With
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  We are looking to partner with organizations that share our
                  values and commitment to excellence. Whether you’re a
                  supplier, a service provider, or a tech innovator, let’s
                  explore how we can work together.
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <CardMedia
                  component="img"
                  src="https://instalanes.com/new_instalanes/wp-content/uploads/2024/08/entrepreneur-593371_1280.jpg"
                  alt="partners"
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Grid container spacing={3} py={4}>
            <Grid size={{ xs: 12 }}>
              <Typography variant="h3" gutterBottom>
                How to Become a Partner
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Becoming a partner with Instalanes is straightforward. If you
                are interested in discussing a partnership, please fill out the
                contact form below, and our team will get back to you promptly.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button variant="contained" startIcon={<LaptopIcon />}>
                Get Demo
              </Button>
              <Button
                variant="contained"
                startIcon={<WhatsApp />}
                sx={{ ml: 3 }}
              >
                Contact
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      <Divider sx={{ my: 2 }} />
      <Footer />
    </Box>
  );
};

export default Partners;
