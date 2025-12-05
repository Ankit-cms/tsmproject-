'use client';
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Fab,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { FormatQuote, WhatsApp } from '@mui/icons-material';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

const Leads = () => {
  const pricingData = [
    {
      type: 'Paid',
      category: 'Project Property',
      offering: 'Project Link (Platform)',
      what: 'Generate a project landing page under your name',
      benefits: 'Personalized link, easy sharing',
      outcome: 'Qualified leads to your panel',
    },
    {
      type: 'Paid',
      category: 'Project Property',
      offering: 'Digital Marketing (Service)',
      what: 'Campaigns on IG/FB/LinkedIn for your link',
      benefits: 'Hassle-free marketing',
      outcome: 'Targeted verified leads',
    },
    {
      type: 'Paid',
      category: 'Projects / Resale',
      offering: 'Suggested Leads Panel',
      what: 'Curated leads based on projects & preferences',
      benefits: 'Verified enquiries with demographics',
      outcome: 'Relevant leads',
    },
    {
      type: 'Paid',
      category: 'Project Property',
      offering: 'Display Dealers',
      what: 'Feature yourself on project pages',
      benefits: 'Boosted visibility',
      outcome: 'Direct enquiries',
    },
    {
      type: 'Free',
      category: 'Broker',
      offering: 'Broker Profile & Rating',
      what: 'Set up your broker profile',
      benefits: 'Build credibility',
      outcome: 'Receive leads',
    },
    {
      type: 'Free',
      category: 'Company',
      offering: 'Company Page & Ratings',
      what: 'Showcase your company & team',
      benefits: 'Brand visibility',
      outcome: 'Receive leads',
    },
    {
      type: 'Paid',
      category: 'General',
      offering: 'Notes Panel',
      what: 'Manage customer funnel online',
      benefits: 'Organized tracking',
      outcome: 'Efficient workflow',
    },
    {
      type: 'Paid',
      category: 'Broker',
      offering: 'Enquiry Form Link',
      what: 'Shareable form for customer requirements',
      benefits: 'Simple lead capture',
      outcome: 'Leads to panel',
    },
  ];

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

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <Box position={'relative'}>
      <Header />
      {/* <Paper elevation={0} square >
        <Container maxWidth="lg">
          <Breadcrumbs aria-label="breadcrumb" sx={{ p: 3, pl: 0 }}>
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography sx={{ color: 'text.primary' }}>Leads</Typography>
          </Breadcrumbs>
          <Divider />
        </Container>
      </Paper> */}
      <Paper elevation={0} square sx={{ py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" my={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h6"
                color="primary.dark"
                gutterBottom
                textTransform="uppercase"
              >
                Become AcreBytes Agent Partner
              </Typography>
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{ mt: { md: 2 } }}
              >
                Better Leads. More Closings. More Success with by AcreBytes.
              </Typography>
              <Typography variant="body1" fontWeight={400} paragraph>
                AcreBytes offers you, everything you need to maximize and speed
                up your Real Estate Sales.
              </Typography>
              <Button variant="contained" startIcon={<WhatsApp />}>
                Yes, I&apos;d like to Partner
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <CardMedia
                component="img"
                height="400"
                image="/img/hero/real.avif"
                alt="Acrebytes"
                sx={{ borderRadius: 4, boxShadow: 4 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Paper>

      <Paper elevation={0} square sx={{ bgcolor: "common.whiteSmoke" }}>
        <Container maxWidth="lg">
          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Typography
              variant="h6"
              color="primary.dark"
              gutterBottom
              textTransform="uppercase">
              Why Real Estate agents love to Partner with AcreBytes
            </Typography>
            <Typography
              variant="h2"
              component="h3"
              gutterBottom
              color="common.black"
              mb={4}
            >
              Access better projects, verified leads, and tools designed to grow your business.
            </Typography>
            <Grid container spacing={3}>
              {[
                {
                  icon: <VerifiedOutlinedIcon fontSize="large"  />,
                  title: "Verified, targeted Leads",
                  description:
                    "Only high-intent enquiries reach you - no cold leads, no wasted time.",
                },
                {
                  icon: <PlaylistAddCheckOutlinedIcon fontSize="large"  />,
                  title: "Exclusive Project listings",
                  description:
                    "Access projects mapped specifically to you, giving you a competitive edge in your market.",
                },
                {
                  icon: <CallOutlinedIcon fontSize="large"  />,
                  title: "Direct Enquiry access",
                  description:
                    " Connect instantly with prospects, track better with no delays.",
                },
                {
                  icon: <TrendingUpOutlinedIcon fontSize="large"  />,
                  title: "Faster Conversions",
                  description:
                    "With the right leads, projects, and tools, close deals faster and grow your business.",
                }
              ].map((stat, index) => (
                <Grid key={index} size={{ xs: 12, md: 6, lg: 3 }}>
                  <Card
                    elevation={3}
                    variant="elevation"
                    sx={{
                      height: "100%",
                      width: "100%",
                      bgcolor: "common.white",
                      color: "common.black",
                    }}
                  >
                    <CardContent sx={{ textAlign: "start", p: 3 }}>
                      <Typography variant="h3" component="h3" gutterBottom>
                        {stat.icon}
                      </Typography>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom  
                      >
                        {stat.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Paper>


      <Paper elevation={0} square >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" >
            <Grid size={{ xs: 12, md: 12 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    Why our leads convert better
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    {' '}
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
                      {[
                        'Leads tied to a project or locality — buyers already have intent.',
                        'Verified contact & preference details — no time wasted on bad data.',
                        'Notification when leads view your link — reach out at the right moment.',
                        'Limited distribution — fewer competing brokers for the same lead.',
                      ].map((listItem) => (
                        <ListItem key={listItem}>
                          <ListItemIcon sx={{ mt: 1 }}>
                            <DoneIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={listItem} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  <Box mt={3}>
                    <Typography variant="body1">Try a demo panel</Typography>
                    <Grid container spacing={2} mt={1}>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Card sx={{ height: '100%', p: 2 }}>
                          <Typography variant="body2">
                            Leads in panel
                          </Typography>
                          <Typography variant="h6">45</Typography>
                        </Card>
                      </Grid>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Card sx={{ height: '100%', p: 2 }}>
                          <Typography variant="body2">
                            Avg. response time{' '}
                          </Typography>
                          <Typography variant="h6">1.4 days</Typography>
                        </Card>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box py={5}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box>
                  <Typography variant="h5">
                    The common problems brokers face
                  </Typography>
                  <Typography variant="subtitle1">
                    Industry pain points that kill conversions — and how we fix
                    them.
                  </Typography>
                </Box>
                <Box>
                  <List
                    sx={{
                      width: '100%',
                      maxWidth: 360,
                      bgcolor: 'background.paper',
                    }}
                  >
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <CloseIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Dead / passive leads"
                        secondary="Most portals deliver enquiries with little or no buying intent."
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <InfoOutlineIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Ineffective tracking"
                        secondary="Scattered customer data and no visibility on who viewed your listing."
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <AutorenewIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Mass-shared leads"
                        secondary="Leads sold to large lists reduce your chance of closing the deal."
                      />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6">
                      How Instalanes fixes it
                    </Typography>
                    <Box mt={2}>
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
                        {[
                          'Leads tied to a project or locality — buyers already have intent.',
                          'Verified contact & preference details — no time wasted on bad data.',
                          'Notification when leads view your link — reach out at the right moment.',
                          'Limited distribution — fewer competing brokers for the same lead.',
                        ].map((listItem) => (
                          <ListItem key={listItem}>
                            <ListItemIcon sx={{ mt: 1 }}>
                              <DoneIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={listItem} />
                          </ListItem>
                        ))}
                      </List>
                      <Button variant="contained" sx={{ mt: 4 }}>
                        Start now — get qualified leads
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Paper>

      <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Box py={5}>
            <Box pb={4}>
              <Typography
                variant="h6"
                color="primary.dark"
                gutterBottom
                textTransform="uppercase"
              >
                Partnership Offerings
              </Typography>
              <Typography variant="h2" paragraph>
                A simple, focused set of services and tools designed to drive
                leads and conversions for brokers & real estate companies.
              </Typography>
            </Box>
            <Grid container spacing={2}>
              {pricingData.map((item, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Card
                    sx={{
                      height: '100%',
                    }}
                  >
                    <CardContent sx={{ p: 2.5 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          mb: 2,
                        }}
                      >
                        <Chip label={item.type} size="small" />
                        <Typography variant="caption" color="text.secondary">
                          {item.category}
                        </Typography>
                      </Box>

                      <Typography variant="subtitle1">
                        {item.offering}
                      </Typography>

                      <Divider sx={{ my: 1.5 }} />

                      <Box sx={{ spaceY: 1.5 }}>
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
                          <ListItem>
                            <ListItemIcon sx={{ mt: 1 }}>
                              <DoneIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={item.what} />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon sx={{ mt: 1 }}>
                              <DoneIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={item.benefits} />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon sx={{ mt: 1 }}>
                              <DoneIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={item.outcome} />
                          </ListItem>
                        </List>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Paper>
      <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Box py={5}>
            <Box mb={4}>
              <Typography
                variant="h6"
                color="primary.dark"
                gutterBottom
                textTransform="uppercase"
              >
                Trusted by brokers & teams
              </Typography>
              <Typography variant="h2" paragraph>
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
      <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Box py={5}>
            <Box mb={4}>
              <Typography variant="h3" gutterBottom>
                FAQs
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Find quick answers to the most common questions about our
                services.
              </Typography>
            </Box>

            <Grid container>
              <Grid size={12}>
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
                    onChange={handleChange(`panel${index + 1}`)}
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
      <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Grid container spacing={3} py={8}>
            <Grid size={12}>
              <Typography variant="h3" gutterBottom>
                Get Verified, project based leads, Grow Your conversions{' '}
              </Typography>
              <Typography variant="h6" paragraph>
                Register up today and be part of the real estate revolution! So
                much is happening in our smallest launch - 2,343 members, 45
                projects, 565 units in inventory, and 3,434 enquiries already!
                Join us and be part of this exciting journey!
              </Typography>
            </Grid>
            <Grid size={12}>
              <Button variant="contained" startIcon={<PersonAddAltIcon />}>
                Become a Partner
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
          </Box>
        </Container>
      </Paper>
      <Footer />
    </Box>
  );
};

export default Leads;
