import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardMedia, 
  Container,
  Divider,
  Fab,
  Grid,
  Link,
  List,
  ListItem, 
  ListItemIcon,
  ListItemText,
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
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined'; 
const Partners = () => {
  return (
    <Box position={'relative'}>
      <Header />
      <Paper elevation={0} square sx={{ mt: 9 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ p: 3 }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: 'text.primary' }}>Partners</Typography>
        </Breadcrumbs>
        <Divider />
        <Box display="flex" alignItems="center" justifyContent="center">
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center" my={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                  variant="h3"
                  component="h1"
                  gutterBottom
                  sx={{ fontSize: { xs: '1.5rem', md: '3rem' } }}
                  mt={2}
                >
                  Partner with Instalanes
                  <br />
                  Drive growth. Unlock seamless logistics.{' '}
                </Typography>
                <Typography variant="body1" paragraph>
                  Join our partner network to expand your business, collaborate
                  on smarter logistics solutions, and deliver unmatched
                  efficiency and visibility to your customers.
                </Typography>
                <Button variant="contained">
                  <HandshakeOutlinedIcon sx={{ mr: 1 }} />
                  Become a partner
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <CardMedia
                  component="img"
                  height="400"
                  image="/img/client/partner-header.webp"
                  alt="TMS Illustration"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Paper>
      <Divider />
      <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Box py={8}>
            <Box mb={4}>
              <Typography variant="h3" component="h2" gutterBottom>
                Growth Partners
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Select your scope - Let us know what fits for your
                Transportation business process
              </Typography>
            </Box>
            <Divider sx={{ my: 2 }} />

            <Grid container spacing={3} py={1}>
              {[
                {
                  title: 'S1 partner',
                  subtitle: 'Search',
                  image: './img/client/partner1.jpg',
                  activities: [
                    'Search prospects',
                    'Prospect introduction',
                    'Exit – post demonstration',
                  ],
                  commission: ['10%', '12 months billing'],
                },
                {
                  title: 'S2 partner',
                  subtitle: 'Search + Sale',
                  image: './img/client/partner2.jpg',

                  activities: [
                    'All S1 activities +',
                    'Sales and Onboarding',
                    'Exit – Post first Customer payment',
                  ],
                  commission: ['20%', '24 months billing'],
                },
                {
                  title: 'S3 partner',
                  subtitle: 'Search + Sale + Support',
                  image: './img/client/partner3.jpg',
                  activities: [
                    'All S2 activities +',
                    'Customer support and growth',
                    'Exit – Handover / Customer sign off',
                  ],
                  commission: ['30%', '36 months billing'],
                },
              ].map((item, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <Card sx={{ height: '100%' }}>
                    <CardMedia
                      component="img"
                      src={item.image}
                      alt={item.title}
                      height={200}
                    />
                    <CardContent>
                      <Box>
                        <Typography variant="h5">{item.title}</Typography>
                        <Typography variant="subtitle1" gutterBottom>
                          {item.subtitle}
                        </Typography>
                      </Box>
                      <Divider sx={{ my: 1 }} />
                      <Box>
                        <Typography variant="subtitle1">
                          Key activities
                        </Typography>
                        <Stack>
                          <List
                            disablePadding
                            sx={{
                              '& .MuiListItem-root': {
                                p: 0,
                                m: 0,
                                alignItems: 'flex-start',
                              },
                              '& .MuiListItemIcon-root': {
                                minWidth: '30px',
                              },
                            }}
                          >
                            {item.activities.map((activity) => (
                              <ListItem key={activity}>
                                <ListItemIcon>
                                  <ArrowRightIcon />
                                </ListItemIcon>
                                <ListItemText primary={activity} />
                              </ListItem>
                            ))}
                          </List>
                        </Stack>
                      </Box>
                      <Divider sx={{ my: 1 }} />
                      <Box>
                        <Typography variant="subtitle1">
                          % Commission, applicable period
                        </Typography>
                        <Stack>
                          <List
                            disablePadding
                            sx={{
                              '& .MuiListItem-root': {
                                p: 0,
                                m: 0,
                                alignItems: 'flex-start',
                              },
                              '& .MuiListItemIcon-root': {
                                minWidth: '30px',
                              },
                            }}
                          >
                            {item.commission.map((comm) => (
                              <ListItem key={comm}>
                                <ListItemIcon>
                                  <ArrowRightIcon />
                                </ListItemIcon>
                                <ListItemText primary={comm} />
                              </ListItem>
                            ))}
                          </List>
                        </Stack>
                      </Box>
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
            <Card>
              <CardContent>
                <Box>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                  >
                    <FeedOutlinedIcon fontSize="large" /> Lead submission form
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Share qualified prospect details to initiate evaluation and
                    registration.
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                </Box>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Card sx={{ height: '100%' }}>
                      <CardContent sx={{ p: 3 }}>
                        <Typography
                          variant="h4"
                          gutterBottom
                          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                        >
                          <CorporateFareOutlinedIcon fontSize="large" />
                          Submit Prospect information
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                          Enter your prospect’s details so we can follow up and
                          track the opportunity{' '}
                        </Typography>
                        <Grid container spacing={2} mt={3}>
                          {[
                            'Company name',
                            'Company type',
                            'Country',
                            'Solutions interested',
                            'Shipments/ Deliveries/ Users',
                            'Contact person first last name',
                            'Email',
                          ].map((label) => (
                            <Grid size={{ xs: 12 }} key={label}>
                              <TextField
                                fullWidth
                                label={label}
                                variant="outlined"
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Card sx={{ height: '100%' }}>
                      <CardContent sx={{ p: 3 }}>
                        <Typography
                          variant="h4"
                          gutterBottom
                          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                        >
                          <HandshakeOutlinedIcon fontSize="large" />
                          Channel partners details
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                          Fill in your information so we can credit and
                          coordinate your lead submission
                        </Typography>
                        <Grid container spacing={2} mt={3}>
                          {[
                            'Unique ref (Company for example CIN, Tax reference)',
                            'Partner Type',
                            'Remarks-last discussion with client',
                            'Email',
                          ].map((label) => (
                            <Grid size={{ xs: 12 }} key={label}>
                              <TextField
                                fullWidth
                                label={label}
                                variant="outlined"
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
                <Typography variant="body2" mt={3}>
                  By submitting this lead, you confirm that the information
                  provided is accurate and obtained with the prospect’s consent.
                  The company reserves the right to review and validate all
                  submitted leads before approval.
                </Typography>
                <Grid size={{ xs: 12 }} textAlign="end" mt={2}>
                  <Button variant="contained" size="large">
                    Submit
                  </Button>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Paper>

      <Divider sx={{ my: 2 }} />
      <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Box py={8}>
            <Box mb={4}>
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
          <Grid container spacing={3} py={8}>
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

        <Box position={'fixed'} bottom={16} right={16}>
          <Fab variant="extended" color='primary'>
            <HandshakeOutlinedIcon sx={{ mr: 1 }} />
            Become a Partner
          </Fab>
        </Box>
      <Divider sx={{ my: 2 }} />
      <Footer />
    </Box>
  );
};

export default Partners;
