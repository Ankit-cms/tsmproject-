import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
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
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { ArrowDropDownCircleOutlined, WhatsApp } from '@mui/icons-material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SettingsIcon from '@mui/icons-material/Settings';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import BuildIcon from '@mui/icons-material/Build';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AddLinkIcon from '@mui/icons-material/AddLink';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
const leads = () => {
  return (
    <Box position={'relative'}>
      <Header />
      <Paper elevation={0} square sx={{ mt: 9 }}>
        <Container maxWidth="lg">
          <Breadcrumbs aria-label="breadcrumb" sx={{ p: 3, pl: 0 }}>
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography sx={{ color: 'text.primary' }}>Leads</Typography>
          </Breadcrumbs>
          <Divider />
          <Grid container spacing={4} alignItems="center" my={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{ fontSize: { xs: '1.5rem', md: '3rem' } }}
                mt={2}
              >
                Partner with AcreBytes
              </Typography>
              <Typography variant="body1" paragraph>
                AcreBytes offers you, everything you need to maximize and speed
                up your Real Estate Sales.
              </Typography>
              <Button variant="contained">
                <AutoGraphIcon sx={{ mr: 1 }} />
                Generate Leads
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <CardMedia
                component="img"
                height="400"
                image="/img/client/partner-header.webp"
                alt="Leads"
              />
            </Grid>
          </Grid>
          <Divider />
          <Box py={8}>
            <Box mb={4}>
              <Typography variant="h3" component="h2" gutterBottom>
                What We Offer
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Comprehensive real estate solutions designed to help you
                generate leads, manage customers, and grow your business with
                our specialized services.
              </Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={3}>
              <Grid container sx={{ xs: 12, md: 3 }}>
                {[
                  {
                    icon: <AddLinkIcon fontSize="large" />,
                    title: 'Personalised Link Generation',
                    description:
                      'Get a personalised link generated to market on social media platforms and receive verified, self-enquired leads.',
                    list: [
                      'Use link to market on social media platforms',
                      'Generated leads are received',
                      'All leads are verified and self enquired',
                    ],
                  },
                  {
                    icon: <RemoveRedEyeOutlinedIcon fontSize="large" />,
                    title: 'Personalised Link Generation',
                    description:
                      'Get a personalised link generated to market on social media platforms and receive verified, self-enquired leads.',
                    list: [
                      'Use link to market on social media platforms',
                      'Generated leads are received',
                      'All leads are verified and self enquired',
                    ],
                  },
                  {
                    icon: <DescriptionOutlinedIcon fontSize="large" />,
                    title: 'Personalised Link Generation',
                    description:
                      'Get a personalised link generated to market on social media platforms and receive verified, self-enquired leads.',
                    list: [
                      'Use link to market on social media platforms',
                      'Generated leads are received',
                      'All leads are verified and self enquired',
                    ],
                  },
                  {
                    icon: <VerifiedOutlinedIcon fontSize="large" />,
                    title: 'Personalised Link Generation',
                    description:
                      'Get a personalised link generated to market on social media platforms and receive verified, self-enquired leads.',
                    list: [
                      'Use link to market on social media platforms',
                      'Generated leads are received',
                      'All leads are verified and self enquired',
                    ],
                  },
                ].map((value) => (
                  <Grid size={{ xs: 12, md: 6 }} key={value.title}>
                    <Card sx={{ height: '100%' }}>
                      <CardContent sx={{ p: 3 }}>
                        {value.icon}
                        <Box sx={{ mb: 2 }}>
                          <Typography variant="h6" gutterBottom>
                            {value.title}
                          </Typography>
                          <Typography variant="body1">
                            {value.description}
                          </Typography>
                        </Box>
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
                          {value.list.map((listItem) => (
                            <ListItem key={listItem}>
                              <ListItemIcon>
                                <ArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText primary={listItem} />
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Paper>
      <Divider sx={{ my: 2 }} />
      <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Box py={8}>
            <Box mb={4}>
              <Typography variant="h3" gutterBottom>
                Highlights
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Explore why our product stands out: adaptability, durability,
                user-friendly design, and innovation. Enjoy reliable customer
                support and precision in every detail.
              </Typography>
            </Box>
            <Divider />

            <Grid container spacing={3} mt={2}>
              {[
                {
                  icon: <SettingsIcon />,
                  title: 'Adaptable performance',
                  description:
                    'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
                },
                {
                  icon: <BuildIcon />,
                  title: 'Built to last',
                  description:
                    'Experience unmatched durability that goes above and beyond with lasting investment.',
                },
                {
                  icon: <ThumbUpAltIcon />,
                  title: 'Great user experience',
                  description:
                    'Integrate our product into your routine with an intuitive and easy-to-use interface.',
                },
                {
                  icon: <AutoAwesomeIcon />,
                  title: 'Innovative functionality',
                  description:
                    'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
                },
                {
                  icon: <HeadsetMicIcon />,
                  title: 'Reliable support',
                  description:
                    'Count on our responsive customer support, offering assistance that goes beyond the purchase.',
                },
                {
                  icon: <PrecisionManufacturingIcon />,
                  title: 'Precision in every detail',
                  description:
                    'Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.',
                },
              ].map((value) => (
                <Grid size={{ xs: 12, md: 4 }} key={value.title}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent sx={{ p: 3 }}>
                      {value.icon}
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
          <Box py={8}>
            <Box mb={4}>
              <Typography variant="h3" gutterBottom>
                Trusted by the Top Real Estate Groups
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Our platform powers success for the most respected names in real
                estate.
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
              {[
                {
                  title: 'Rolex',
                  img: './img/client/rolex.png',
                },
                {
                  title: 'Citi',
                  img: './img/client/citi.png',
                },
                {
                  title: 'Dell',
                  img: './img/client/dell.png',
                },
                {
                  title: 'Nissan',
                  img: './img/client/nissan.png',
                },
                {
                  title: 'Hundai',
                  img: './img/client/hundai.png',
                },
                {
                  title: 'Redbull',
                  img: './img/client/redbull.png',
                },
              ].map((brand) => (
                <Grid key={brand.title} size={2}>
                  <Card elevation={0}>
                    <CardContent>
                      <CardMedia
                        component="img"
                        image={brand.img}
                        alt={brand.title}
                      />
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
          <Box py={8}>
            <Box mb={4}>
              <Typography variant="h3" gutterBottom>
                FAQs{' '}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Find quick answers to the most common questions about our
                services.
              </Typography>
            </Box>
            <Divider />

            <Grid container>
              <Grid size={12} mt={2}>
                {[
                  {
                    question:
                      'Are there any registration charges to get registered on AcreBytes?',
                    answer:
                      'No, registration is completely free. You get full access to properties researched and listed on AcreBytes.',
                  },
                  {
                    question:
                      "How AcreBytes can improve Real Estate consultants' sales?",
                    answer: `We understand Real Estate consultants requirements, so we provide:
• A unique property page URL featuring your contact details, ensuring you receive verified leads directly in your personal leads panel.
• Suggested leads tailored to your preferences.
• Listing of Real Estate consultants on the AcreBytes property page of your project, enabling customers to contact you directly.
• Tools to manage customer status and keep regular notes updated.
• Marketing support for your personalized URL to drive traffic and generate leads.`,
                  },
                  {
                    question:
                      'How AcreBytes can improve Real Estate consultant visibility?',
                    answer:
                      "Absolutely! You'll be featured on the Consultants list, and you can also opt for services to showcase your presence on our listed property page.",
                  },
                  {
                    question:
                      'Can AcreBytes be accessed from mobile, as I keep on travelling for client visits?',
                    answer:
                      'Yes, you can continue to receive leads and update progress status easily on mobile while on the go.',
                  },
                  {
                    question:
                      'Can AcreBytes list down property, if not listed?',
                    answer:
                      "Yes, AcreBytes allows you to list your property if it's not already available on the platform, ensuring complete visibility.",
                  },
                ].map((faq, index) => (
                  <Accordion key={index}>
                    <AccordionSummary
                      expandIcon={<ArrowDropDownIcon />}
                      aria-controls={`panel${index}-content`}
                      id={`panel${index}-header`}
                    >
                      <Typography component="span">{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography style={{ whiteSpace: 'pre-line' }}>
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Paper>
      <Divider sx={{ my: 2 }} />
      <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Box py={8}>
            <Box mb={4}>
              <Typography variant="h3" gutterBottom>
                Testimonial
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                See what our customers love about our products. Discover how we
                excel in efficiency, durability, and satisfaction. Join us for
                quality, and reliable support.
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {[
                {
                  name: 'Sneha Patel',
                  role: 'Property Manager, Mumbai',
                  feedback:
                    'Thanks to AcreBytes, managing and tracking my client interactions has become effortless.real estate professional!',
                },
                {
                  name: 'Amit Verma',
                  role: 'Broker, Bangalore',
                  feedback:
                    'The quality of leads I receive through AcreBytes is outstanding. It has helped me grow my business faster than any other platform.',
                },
              ].map((item) => (
                <Grid size={{ xs: 12, md: 6 }} key={item.name}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent
                      sx={{
                        p: 3,
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                      }}
                    >
                      {' '}
                      <Box
                        display="flex"
                        alignItems="center"
                        mb={1}
                        gap={2}
                        height={'100%'}
                      >
                        <FormatQuoteIcon color="disabled" />
                        <Typography variant="body1">{item.feedback}</Typography>
                      </Box>
                      <Box display="flex" alignItems="center" mt={2}>
                        <Avatar>{item.name.charAt(0)}</Avatar>
                        <Box ml={2}>
                          <Typography variant="subtitle1">
                            {item.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.role}
                          </Typography>
                        </Box>
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
          <Grid container spacing={3} py={8}>
            <Grid size={12}>
              <Typography variant="h3" gutterBottom>
                Join Us
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Register up today and be part of the real estate revolution! So
                much is happening in our smallest launch - 2,343 members, 45
                projects, 565 units in inventory, and 3,434 enquiries already!
                Join us and be part of this exciting journey!
              </Typography>
            </Grid>
            <Grid size={12}>
              <Button variant="contained" startIcon={<PersonAddAltIcon />}>
                Register{' '}
              </Button>
              <Button
                variant="contained"
                startIcon={<WhatsApp />}
                sx={{ ml: 3 }}
              >
                Whatsapp
              </Button>
            </Grid>
          </Grid>
          <Box position={'fixed'} bottom={16} right={16}>
            <Fab variant="extended" color="primary">
              <HandshakeOutlinedIcon sx={{ mr: 1 }} />
              Become a Partner
            </Fab>
          </Box>{' '}
        </Container>
      </Paper>
      <Divider sx={{ my: 2 }} />
      <Footer />
    </Box>
  );
};

export default leads;
