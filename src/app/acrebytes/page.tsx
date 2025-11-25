'use client';

import React from 'react';

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';

import LaptopIcon from '@mui/icons-material/Laptop';
import FormatQuote from '@mui/icons-material/FormatQuote';
import WhatsApp from '@mui/icons-material/WhatsApp';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleIcon from '@mui/icons-material/People';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import StraightenIcon from '@mui/icons-material/Straighten';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PublicIcon from '@mui/icons-material/Public';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WorkIcon from '@mui/icons-material/Work';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InfoIcon from '@mui/icons-material/Info';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import GroupIcon from '@mui/icons-material/Group';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MapIcon from '@mui/icons-material/Map';
import SpeedIcon from '@mui/icons-material/Speed';

import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import Header from '../components/Header';
import Footer from '../components/Footer';

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

const AcreBytes = () => {
  const [value, setValue] = React.useState(0);
  const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&::before': {
      display: 'none',
    },
  }));

  const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
      {
        transform: 'rotate(90deg)',
      },
    [`& .${accordionSummaryClasses.content}`]: {
      marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
      backgroundColor: 'rgba(255, 255, 255, .05)',
    }),
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

  const [expanded, setExpanded] = React.useState<string | false>('');

  const handleAccordian =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const owners = [
    {
      title: 'Verified listings',
      text: 'Access only researched and approved properties for a confident property search.',
      icon: <VerifiedUserIcon />,
    },
    {
      title: 'Local expertise',
      text: 'Find properties in well-researched, approved areas for guaranteed quality.',
      icon: <PublicIcon />,
    },
    {
      title: 'Consultant transparency',
      text: 'Know your consultant with ratings and reviews to ensure trust.',
      icon: <VisibilityIcon />,
    },
    {
      title: 'Consultant rating',
      text: 'Rate your consultant to promote quality service and improve overall experience.',
      icon: <StarIcon />,
    },
    {
      title: 'Transparent documentation',
      text: 'Complete visibility into property and transaction details.',
      icon: <DescriptionIcon />,
    },
    {
      title: 'Professional experience',
      text: 'Enjoy professional journey through every step of your property process.',
      icon: <WorkIcon />,
    },
    {
      title: 'AcreBytes team dedicated support',
      text: 'Get value added assistance from the AcreBytes team.',
      icon: <SupportAgentIcon />,
    },
    {
      title: 'Know more',
      text: 'Know more about the AcreBytes.',
      icon: <InfoIcon />,
    },
  ];

  const brokers = [
    {
      title: 'Connect with verified Customers',
      text: 'Engage with quality customers who value researched and structured information.',
      icon: <GroupIcon />,
    },
    {
      title: 'Build trust with Ratings',
      text: 'Gain credibility by collecting ratings and reviews from clients.',
      icon: <ThumbUpIcon />,
    },
    {
      title: 'Personalised profile',
      text: 'Set up a professional profile that showcases your expertise and trustworthiness.',
      icon: <AccountBoxIcon />,
    },
    {
      title: 'Time-Saving digital tools',
      text: 'Access efficient digital tools that streamline your workflow and save valuable time.',
      icon: <AccessTimeIcon />,
    },
    {
      title: 'Mapping to top Real estate Projects',
      text: 'Improve your visibility, get access of project level verified customers.',
      icon: <MapIcon />,
    },
    {
      title: 'Accelerate closures',
      text: 'Faster deal closures with pre-researched and structured documentation.',
      icon: <SpeedIcon />,
    },
    {
      title: 'AcreBytes team support',
      text: 'Receive dedicated support to grow your business and succeed on the platform.',
      icon: <SupportAgentIcon />,
    },
    {
      title: 'Know more',
      text: 'Connect with the team.',
      icon: <InfoIcon />,
    },
  ];
  const properties = [
    {
      id: 1,
      image:
        'https://www.homznspace.com/wp-content/uploads/2022/01/apartments-img-hns1.jpg',
      price: 7395000,
      type: 'Residential',
      title: 'Belmondo',
      location: 'Gahunje, Pune',
      builder: 'FAIRFOX',
      details: '3 BHK, 4 BHK, 5 BHK, 6 BHK',
      area: '3065 to 9785 Sqft',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60',
      price: 39845000,
      type: 'Residential',
      title: 'Gateway',
      location: 'Kokapet, Hyderabad',
      builder: 'FAIRFOX',
      details: '1 BHK',
      area: '240 to 240 Sqft',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60',
      price: 56160,
      type: 'Residential',
      title: 'Taj',
      location: 'Worli, Mumbai',
      builder: 'FAIRFOX',
      details: 'N/A',
      area: '0 to 0 Sq. Ft',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60',
      price: 'Price N/A',
      type: 'Residential',
      title: 'Ssssss123',
      location: 'Sector 62, Noida',
      builder: 'FAIRFOX',
      details: '3 BHK',
      area: '920 to 1020 Sqft',
    },
  ];
  const companies = [
    {
      name: 'Prestige',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/50/Prestige_Group.svg',
    },
    { name: 'Fairfox', logo: 'https://www.propyards.in/storage/6.png' },
    {
      name: 'Prestige',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/50/Prestige_Group.svg',
    },
    {
      name: 'Brigade',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Brigade_Group.svg/1058px-Brigade_Group.svg.png',
    },
    {
      name: 'Mantri',
      logo: 'https://media.licdn.com/dms/image/v2/C510BAQGJVvop95cilQ/company-logo_200_200/company-logo_200_200/0/1630606386534/mantri_developers_pvvt__ltd_logo?e=2147483647&v=beta&t=xTT87KZDg7g4CEY8gBlxGJ6aK0GAqQIm5Sd-03vgt1E',
    },
    {
      name: 'Unitech',
      logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQEzVS2Iai5DMQ/company-logo_200_200/B4DZliRtuPJYAI-/0/1758290438236/unitech_group_kolkata_logo?e=2147483647&v=beta&t=Th5JgtRdNYRlaqMPjQu66xhScDz5b1vqFOQSff36vf0',
    },
  ];

  function formatIndianPrice(amount: number | string | null): string {
    if (amount === null || amount === 'Price N/A' || isNaN(Number(amount)))
      return 'Price N/A';

    const num = Number(amount);

    if (num >= 10000000) {
      return `₹ ${(num / 10000000).toFixed(2)} Crore`;
    } else if (num >= 100000) {
      return `₹ ${(num / 100000).toFixed(2)} Lakh`;
    } else if (num >= 1000) {
      return `₹ ${(num / 1000).toFixed(2)} Thousand`;
    } else {
      return `₹ ${num.toLocaleString('en-IN')}`;
    }
  }

  const steps = [
    {
      icon: <DescriptionIcon fontSize="large" />,
      title: 'ENQUIRE',
      subtitle: 'Sell / Buy / Lease / Rent a property',
    },
    {
      icon: <PeopleIcon fontSize="large" />,
      title: 'GET CONSULTANT',
      subtitle: 'Get connected with professional Brokers',
    },
    {
      icon: <DescriptionIcon fontSize="large" />,
      title: 'WORK ON ENQUIRY',
      subtitle: 'Let Consultant work on your requirements',
    },
    {
      icon: <StarIcon fontSize="large" />,
      title: 'RATE CONSULTANT',
      subtitle:
        'Let us know how was your experience with the assigned Consultant',
    },
  ];

  return (
    <Box position={'relative'}>
      <Header />
      <Paper elevation={0} square sx={{ mt: 9 }}>
        <Container maxWidth="lg">
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
                Empowering smarter Real Estate decisions
              </Typography>
              <Typography variant="body1" paragraph>
                AcreBytes connects buyers, sellers, and verified real estate
                experts to make property deals simple, secure, and transparent.
              </Typography>
              <Box display={'flex'} gap={3} mt={3}>
                <Button variant="contained">Join now</Button>
                <Button variant="outlined">Read more</Button>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <CardMedia
                component="img"
                height="400"
                image="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ix4_slJB4Kpg/v0/-1x-1.webp"
                alt="Acrebytes"
              />
            </Grid>
          </Grid>

          <Divider />

          <Box py={5}>
            <Box mb={4}>
              <Typography variant="h3" gutterBottom>
                How it works{' '}
              </Typography>
              <Typography variant="h5" paragraph>
                Your seamless path to get better experience in Real estate!
              </Typography>
            </Box>

            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <Avatar
                        sx={{
                          boxShadow: 1,
                          width: 56,
                          height: 56,
                          mb: 1.5,
                        }}
                      >
                        {step.icon}
                      </Avatar>

                      <Typography variant="subtitle1" textAlign={'center'}>
                        {step.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{ maxWidth: 180 }}
                        textAlign={'center'}
                      >
                        {step.subtitle}
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Arrow between steps except last one */}
                  {index < steps.length - 1 && (
                    <Grid>
                      <ArrowForwardIcon sx={{ color: '#555' }} />
                    </Grid>
                  )}
                </React.Fragment>
              ))}
            </Grid>
          </Box>
        </Container>
      </Paper>
      <Divider sx={{ my: 2 }} />

      <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Box py={5}>
            <Box mb={4}>
              <Typography variant="h3" gutterBottom>
                Prime Properties
              </Typography>
            </Box>

            <Box sx={{ py: 2 }}>
              <Grid container spacing={3} justifyContent="center">
                {properties.map((property) => (
                  <Grid key={property.id} size={{ xs: 12, sm: 6, md: 3 }}>
                    <Card
                      sx={{
                        overflow: 'hidden',

                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="160"
                        image={property.image}
                        alt={property.title}
                      />

                      {/* Card Content */}
                      <CardContent sx={{ flexGrow: 1, p: 2 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <Chip
                            
                            size="small"
                            label={formatIndianPrice(property.price)}
                          />
                          <Chip
                            
                            size="small"
                            label={property.type}
                          />
                        </Box>
                        <Typography variant="h6">{property.title}</Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                          {property.location}
                        </Typography>
                        <Divider sx={{ mb: 1 }} />

                        <Grid container spacing={1} alignItems="center">
                          <Grid>
                            <HomeIcon fontSize="small" />
                          </Grid>
                          <Grid>
                            <Typography variant="body2">
                              {property.details}
                            </Typography>
                          </Grid>
                        </Grid>

                        <Grid
                          container
                          spacing={1}
                          alignItems="center"
                          mt={0.5}
                        >
                          <Grid>
                            <StraightenIcon fontSize="small" />
                          </Grid>
                          <Grid>
                            <Typography variant="body2">
                              {property.area}
                            </Typography>
                          </Grid>
                        </Grid>

                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                          }}
                        >
                          {/* <Typography
                            variant="body2"
                          >
                            {property.builder}
                          </Typography> */}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Paper>
      <Divider sx={{ my: 2 }} />
      <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Box py={5}>
            <Box mb={4}>
              <Typography variant="h3" gutterBottom>
                Why Acrebytes?
              </Typography>
              {/* <Typography variant="subtitle1" gutterBottom>
                At Instalanes, we believe in the power of collaboration to drive
                mutual success. We are always looking to build strong,
                meaningful partnerships that benefit our customers and enhance
                our service offerings.
              </Typography> */}
            </Box>
            <Divider />
            <Box sx={{ width: '100%', mt: 3 }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="AcreBytes benefits tabs"
              >
                <Tab
                  label="For Property Owners"
                  id="tab-0"
                  aria-controls="tabpanel-0"
                />
                <Tab
                  label="For Property Brokers"
                  id="tab-1"
                  aria-controls="tabpanel-1"
                />
              </Tabs>

              <TabPanel value={value} index={0}>
                <Grid container spacing={2}>
                  {owners.map((item) => (
                    <Grid size={{ xs: 12, md: 3, sm: 6 }} key={item.title}>
                      <Card sx={{ height: '100%' }}>
                        <CardHeader
                          avatar={<Avatar>{item.icon}</Avatar>}
                          title={
                            <Typography variant="subtitle1">
                              {item.title}
                            </Typography>
                          }
                        />
                        <CardContent sx={{ p: 3 }}>
                          <Typography variant="body2">{item.text}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>

              <TabPanel value={value} index={1}>
                <Grid container spacing={2}>
                  {brokers.map((item) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.title}>
                      <Card sx={{ height: '100%' }}>
                        <CardHeader
                          avatar={<Avatar>{item.icon}</Avatar>}
                          title={
                            <Typography variant="subtitle1">
                              {item.title}
                            </Typography>
                          }
                        />
                        <CardContent>
                          <Typography variant="body2">{item.text}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
            </Box>
          </Box>
        </Container>
      </Paper>
      <Divider sx={{ my: 2 }} />
      <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Box py={5}>
            <Box mb={4}>
              <Typography variant="h3" gutterBottom>
                Explore top Real Estate group{' '}
              </Typography>
              {/* <Typography variant="subtitle1" gutterBottom>
                See what our customers love about our products. Discover how we
                excel in efficiency, durability, and satisfaction. Join us for
                quality, and reliable support.
              </Typography> */}
            </Box>
            <Grid container spacing={3} justifyContent="center">
              {companies.map((company) => (
                <Grid size={{ xs: 6, sm: 4, md: 2 }} key={company.name}>
                  <Card elevation={2} sx={{ height: '100%', p: 2 }}>
                    {/* Logo container with fixed height */}
                    <CardMedia
                      component="img"
                      image={company.logo}
                      alt={company.name}
                      sx={{
                        height: 120, // fixed logo area height
                        objectFit: 'contain', // keeps proportions
                        width: '100%',
                        mb: 1,
                      }}
                    />
                    <CardContent sx={{ textAlign: 'center', p: 0 }}>
                      <Typography variant="subtitle2">
                        {company.name}
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
          <Box py={5}>
            <Box mb={4}>
              <Typography variant="h3" gutterBottom>
                Trusted by Customers & Consultants
              </Typography>
              <Typography variant="h5" paragraph>
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
                        position={'relative'}
                      >
                        <FormatQuote
                          sx={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            transform: 'scaleX(-1)',
                          }}
                        />
                        <Typography variant="body1" mx={4}>
                          {item.feedback}
                        </Typography>
                        <FormatQuote
                          sx={{
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                          }}
                        />
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
          <Box py={5}>
            <Box mb={4}>
              <Typography variant="h3" gutterBottom>
                FAQs
              </Typography>
              <Typography variant="h5" paragraph>
                Find quick answers to the most common questions about our
                services.
              </Typography>
            </Box>

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
                  <Accordion
                    key={index}
                    expanded={expanded === `panel${index + 1}`}
                    onChange={handleAccordian(`panel${index + 1}`)}
                    TransitionProps={{ timeout: 300 }}
                  >
                    <AccordionSummary
                      aria-controls="panel3d-content"
                      id="panel3d-header"
                    >
                      <Typography component="span">{faq.question} </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{faq.answer}</Typography>
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
          <Grid container spacing={3} py={8}>
            {/* Left Column */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h3" gutterBottom>
                How to Become a Partner
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Becoming a partner with Instalanes is straightforward. If you
                are interested in discussing a partnership, please fill out the
                contact form below, and our team will get back to you promptly.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                display={'flex'}
                justifyContent={'flex-end'}
                gap={3}
                alignItems={'center'}
              >
                {' '}
                <Button variant="contained" startIcon={<LaptopIcon />}>
                  Register
                </Button>
                <Button variant="contained" startIcon={<WhatsApp />}>
                  Whatsapp
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      <Divider sx={{ my: 2 }} />
      <Footer />
    </Box>
  );
};

export default AcreBytes;
