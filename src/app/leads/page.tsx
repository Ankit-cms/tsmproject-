'use client';
import {
  Alert,
  AlertTitle,
  Avatar,
  Box, 
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
import { FormatQuote, WhatsApp } from '@mui/icons-material'; 
import DoneIcon from '@mui/icons-material/Done'; 
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
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";


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

  const featureCards = [
    {
      id: 'project-property-display-card',
      layout: 'card',
      chipLabel: 'Feature',
      image: '/img/lead/dashboard.png',
      imageAlt: 'Acrebytes',
      title: 'Project Property Display',
      list: [
        'Display your project/property with your name and branding',
        'Pinned Property Option for maximum visibility',
        'Pinned Property Option for maximum visibility',
        'Shareable Project Link Buy to promote anywhere',
      ],
    },
    {
      id: 'enquiry-forms',
      layout: 'card',
      chipLabel: 'Feature',
      image: '/img/lead/enquiry.avif',
      imageAlt: 'Acrebytes',
      title: 'Enquiry Forms (Individual & Company)',
      list: [
        'Personalized enquiry forms with your contact',
        'Auto-routing leads directly to your dashboard',
        'Track lead source & follow-ups',
      ],
    },
    {
      id: 'notes-tracking',
      layout: 'card',
      chipLabel: 'Feature',
      image: '/img/lead/notes.jpg',
      imageAlt: 'Acrebytes',
      title: 'Notes & Tracking Panel',
      list: [
        'Add client notes',
        'Track conversations & follow-up status',
        'Never miss a lead again',
      ],
    },
    {
      id: 'suggest-leads',
      layout: 'card',
      chipLabel: 'Feature',
      image: '/img/lead/leads.jpg',
      imageAlt: 'Acrebytes',
      title: 'Suggest Leads',
      list: [
        'Recommend leads to other agents & earn rewards',
        'Build a trusted referral network',
      ],
    },
    {
      id: 'digital-marketing',
      layout: 'card',
      chipLabel: 'Feature',
      image: '/img/lead/digital.jpg',
      imageAlt: 'Acrebytes',
      title: 'Digital Marketing Services',
      list: [
        'Social media campaigns',
        'Listing promotion',
        'Project-focused video ads (Boost your reach, get more enquiries)',
      ],
    },
    {
      id: 'points-buy',
      layout: 'card',
      chipLabel: 'Feature',
      image: '/img/lead/buy-point.jpg',
      imageAlt: 'Acrebytes',
      title: 'Points Buy (Pay-as-you-grow)',
      list: [
        'Buy points to activate leads or promote listings',
        'No monthly fee, complete flexibility',
      ],
    },
    {
      id: 'free-clients-directory',
      layout: 'card',
      chipLabel: 'Feature',
      image: '/img/lead/client.jpg',
      imageAlt: 'Acrebytes',
      title: 'Free Clients Directory',
      list: [
        'Browse property seekers & company requirements',
        'Connect with interested customers instantly',
      ],
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
      <Paper elevation={0} square sx={{ py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" my={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h6"
                color="primary.dark"
                gutterBottom
              >
                Become AcreBytes Agent Partner
              </Typography>
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{ mt: { md: 2 } }}
              >
                Get Better Leads. More Closings. More Success with AcreBytes.
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
              >
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
                  icon: <VerifiedOutlinedIcon fontSize="large" />,
                  title: "Verified, targeted Leads",
                  description:
                    "Only high-intent enquiries reach you - no cold leads, no wasted time.",
                },
                {
                  icon: <PlaylistAddCheckOutlinedIcon fontSize="large" />,
                  title: "Exclusive Project listings",
                  description:
                    "Access projects mapped specifically to you, giving you a competitive edge in your market.",
                },
                {
                  icon: <CallOutlinedIcon fontSize="large" />,
                  title: "Direct Enquiry access",
                  description:
                    " Connect instantly with prospects, track better with no delays.",
                },
                {
                  icon: <TrendingUpOutlinedIcon fontSize="large" />,
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

      <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Typography
              variant="h6"
              color="primary.dark"
              gutterBottom
              >
              Challenges Agents face, and How AcreBytes solves them
            </Typography>
            <Typography
              variant="h2"
              component="h3"
              gutterBottom
              color="common.black"
              mb={4}>
              Clear visibility, quality leads, and tools built to help you close faster.
            </Typography>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12 }}>
                <Card
                  elevation={3}
                  variant="elevation"
                  sx={{
                    height: "100%",
                    width: "100%",
                    bgcolor: "common.white",
                    color: "common.black",
                  }}>
                  <CardContent sx={{ textAlign: "start", p: 2 }}>
                    <Typography variant="h5" gutterBottom>
                      Leads quality
                    </Typography>
                    <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} gap={2}>
                      <Alert
                        severity="error" sx={{ flex: 1 }}>
                        <AlertTitle>Dead / Passive Leads</AlertTitle>
                        Most portals send random or low-intent enquiries that never convert.
                      </Alert>
                      <Alert
                        severity="success" sx={{ flex: 1 }}>
                        <AlertTitle>High-Intent Buyers</AlertTitle>
                        AcreBytes focuses on verified,high-intent property seekers who are actively looking.
                      </Alert>
                    </Box>
                  </CardContent>
                  <CardContent sx={{ textAlign: "start", p: 2 }}>
                    <Typography variant="h5" gutterBottom>
                      Client status
                    </Typography>
                    <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} gap={2}>
                      <Alert
                        severity="error" sx={{ flex: 1 }}>
                        <AlertTitle>Ineffective tracking</AlertTitle>
                        Scattered customer data and no centralised visibility on leads status and next actions.
                      </Alert>
                      <Alert
                        severity="success" sx={{ flex: 1 }} >
                        <AlertTitle>Leads management panel</AlertTitle>
                        AcreBytes give you centralised tracking panel to manage Leads status, Notes & follow-ups
                      </Alert>
                    </Box>
                  </CardContent>
                  <CardContent sx={{ textAlign: "start", p: 2 }}>
                    <Typography variant="h5" gutterBottom>
                      Leads access
                    </Typography>
                    <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} gap={2}>
                      <Alert
                        severity="error" sx={{ flex: 1 }} >
                        <AlertTitle>Leads Shared to masses</AlertTitle>
                        Competing with hundreds of agents on the same lead reduces your chance of closing.
                      </Alert>
                      <Alert
                        severity="success" sx={{ flex: 1 }} >
                        <AlertTitle>Controlled Leads access</AlertTitle>
                        AcreBytes shares leads in a controlled and fair manner, giving you a better closing opportunity.
                      </Alert>
                    </Box>
                  </CardContent>
                  <CardContent sx={{ textAlign: "start", p: 2 }}>
                    <Typography variant="h5" gutterBottom>
                      Agent credibility
                    </Typography>
                    <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} gap={2}>
                      <Alert
                        severity="error" sx={{ flex: 1 }} >
                        <AlertTitle>Credibility Concerns</AlertTitle>
                        Customers hesitate to answer agent calls due to lack of trust.
                      </Alert>
                      <Alert
                        severity="success" sx={{ flex: 1 }} >
                        <AlertTitle>Build Trust with Agent profiles</AlertTitle>
                        AcreBytes builds credibility with verified profiles, enquiry forms, and direct access.
                      </Alert>
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
            <Typography
              variant="h6"
              color="primary.dark"
              gutterBottom
              >
              What AcreBytes Offers to Our Real Estate Agent Partners
            </Typography>
            <Typography
              variant="h2"
              component="h3"
              gutterBottom
              color="common.black"
              mb={4}>
              Tools, visibility, digital presence and high-intent leads designed to help you grow your business faster.
            </Typography>


            <Grid container spacing={4}>
              {featureCards.map(card => (
                <Grid size={{ xs: 12, md: 6 }} key={card.id}>
                  <Card elevation={2} variant="elevation" sx={{ height: '100%', width: '100%' }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={card.image}
                      alt={card.imageAlt}
                    />
                    <CardContent>
                      <Box display="flex" alignItems="center" justifyContent="space-between" my={1}>
                        <Typography variant="h4" gutterBottom fontWeight="bold">
                          {card.title}
                        </Typography>
                        {card.chipLabel && (
                          <Chip label={card.chipLabel} variant="outlined" />
                        )}
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
                        }}>
                        {card.list.map((item, index) => (
                          <ListItem key={index}>
                            <ListItemIcon sx={{ mt: 1 }}>
                              <DoneIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                      </List>
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
          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Box mb={4}>
              <Typography
                variant="h6"
                color="primary.dark"
                gutterBottom
              >
                Trusted by Agents & Real Estate Agencies
              </Typography>
              <Typography variant="h2" paragraph>
                Building confidence through verified leads, transparent processes, and results that matter.
              </Typography>
            </Box>
            <Grid container spacing={4}>
              {[
                {
                  name: 'Rohit Sharma',
                  role: 'Independent Broker',
                  feedback:
                    'AcreBytes sends only serious enquiries. My conversion rate improved within the first month.',
                },
                {
                  name: 'Anita Properties',
                  role: 'Real Estate Agency',
                  feedback:
                    'The project-wise mapping and lead tracking dashboard are game changers. We finally know where every lead is.',
                },
                {
                  name: 'Manoj S',
                  role: 'Channel Partner',
                  feedback:
                    'Unlike other portals, we get exclusive access to property listings without competing with hundreds of agents.',
                },
                {
                  name: 'UrbanNest Realty',
                  role: 'Real Estate Agency',
                  feedback: 'AcreBytes makes our agents look more professional — verified listings, clean profiles, and transparent interactions.',
                },
              ].map((stat, index) => (
                <Grid key={index} size={{ xs: 12, md: 6 }}>
                  <Card
                    elevation={3}
                    variant="outlined"
                    sx={{ height: "100%" }}
                  >
                    <CardContent>
                      <Chip
                        icon={<DoneOutlinedIcon fontSize="small" />}
                        label={stat.name}
                        variant="outlined"
                      />
                      <Box
                        display="flex"
                        alignItems="center"
                        my={1}
                        gap={2}
                        height={"100%"}
                        position={"relative"}
                      >
                        <FormatQuote
                          sx={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            transform: "scaleX(-1)",
                          }}
                        />
                        <Typography variant="body1" mx={4}>
                          {stat.feedback}
                        </Typography>
                        <FormatQuote
                          sx={{
                            position: "absolute",
                            right: 0,
                            bottom: 0,
                          }}
                        />
                      </Box>
                      <Box display={"flex"} alignItems="center" gap={2} mt={2}>
                        <Avatar
                          alt={stat.name}
                          src="/static/images/avatar/1.jpg"
                          sx={{ width: 50, height: 50 }}
                        />
                        <Box>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {stat.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {stat.role}
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
      <Paper elevation={0} square sx={{ bgcolor: "common.whiteSmoke" }}>
        <Container maxWidth="lg">
          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Box mb={4}>
              <Typography
                variant="h6"
                color="primary.dark"
                gutterBottom
                >
                FAQs
              </Typography>
              <Typography variant="h2" paragraph>
                Everything you should know before becoming an AcreBytes Partner.
              </Typography>
            </Box>

            <Grid container>
              <Grid size={12}>
                {[
                  {
                    question:
                      'Is it free to join AcreBytes?',
                    answer:
                      'Yes. Basic registration is free. Complete your profile and get verified to start.',
                  },
                  {
                    question:
                      "What kind of leads will I receive?",
                    answer: 'Only verified, high-intent enquiries—never mass or bulk-shared leads.',
                  },
                  {
                    question:
                      'When do I start getting enquiries?',
                    answer:
                      "As soon as your profile and selected projects are verified, leads begin immediately.",
                  },
                  {
                    question:
                      'Can real estate agencies add multiple team members?',
                    answer:
                      'Yes. Agencies can add agents and manage all enquiries from one dashboard.',
                  },
                  {
                    question:
                      'How does AcreBytes build agent credibility?',
                    answer:
                      "Through verified profiles, transparent ratings, and consistent performance tracking.",
                  },
                  {
                    question:
                      'What support will I get as a partner?',
                    answer:
                      "Full onboarding assistance, lead management guidance, and dedicated support.",
                  },
                  {
                    question:
                      'How do Credit Points work?',
                    answer:
                      "Buy points only when you want to activate or promote leads—flexible and pay-as-you-grow.",
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
      <Paper elevation={0} square >
        <Container maxWidth="lg" >
          <Grid container spacing={5} >
            {/* Left Column */}
            <Grid size={{ xs: 12, md: 5 }}>
              <CardMedia
                component="img"
                image="/img/client/partner-header.webp"
                alt="Become a Partner"
                sx={{ height: "100%", mx:0 }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }} sx={{ py: { xs: 4, md: 8 } }}>
              <Typography variant="h3" gutterBottom>
                Ready to grow your Real Estate business?
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Join AcreBytes and unlock the tools, visibility, and high-intent leads built to help agents win more deals.
              </Typography>
              <Box
                display={"flex"}
                gap={1}
                mt={2}
                alignItems={"center"}>
                <Button variant="contained" startIcon={<WhatsApp />}>
                  Yes, I&apos;d like to Partner
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Footer />
      <Box position={"fixed"} bottom={16} right={16}>
        <Button variant="contained" startIcon={<WhatsApp />} href="/contact" component="a">
          Become a Partner
        </Button>
      </Box>
    </Box>
  );
};

export default Leads;
