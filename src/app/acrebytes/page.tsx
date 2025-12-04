"use client";

import React from "react";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
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
} from "@mui/material";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import LaptopIcon from "@mui/icons-material/Laptop";
import FormatQuote from "@mui/icons-material/FormatQuote";
import WhatsApp from "@mui/icons-material/WhatsApp";
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleIcon from "@mui/icons-material/People";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeIcon from "@mui/icons-material/Home";
import StraightenIcon from "@mui/icons-material/Straighten";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PublicIcon from "@mui/icons-material/Public";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WorkIcon from "@mui/icons-material/Work";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import InfoIcon from "@mui/icons-material/Info";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import GroupIcon from "@mui/icons-material/Group";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MapIcon from "@mui/icons-material/Map";
import SpeedIcon from "@mui/icons-material/Speed";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import Header from "../components/Header";
import Footer from "../components/Footer";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import WebhookOutlinedIcon from "@mui/icons-material/WebhookOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CellTowerOutlinedIcon from "@mui/icons-material/CellTowerOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MobileFriendlyOutlinedIcon from "@mui/icons-material/MobileFriendlyOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DifferenceOutlinedIcon from "@mui/icons-material/DifferenceOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import PriceCheckOutlinedIcon from "@mui/icons-material/PriceCheckOutlined";
import ScreenSearchDesktopOutlinedIcon from "@mui/icons-material/ScreenSearchDesktopOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";

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
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&::before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
      {
        transform: "rotate(90deg)",
      },
    [`& .${accordionSummaryClasses.content}`]: {
      marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "rgba(255, 255, 255, .05)",
    }),
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleAccordian =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const owners = [
    {
      title: "Accurate Property information",
      text: "Verified listings with accurate details, photos, and transparent pricing.",
      icon: <VerifiedUserIcon />,
    },
    {
      title: "Trusted & Professional Agents",
      text: "Connect only with rated, verified, and serious agents for a smooth experience.",
      icon: <PublicIcon />,
    },
    {
      title: "Seamless Enquiry & updates",
      text: "Track your enquiries, get instant updates, and stay in full control throughout your home-search journey.",
      icon: <VisibilityIcon />,
    },
    {
      title: "Decide better with AB Scores",
      text: "Use smart filters, maps, and Property insights to shortlist the right home quickly.",
      icon: <StarIcon />,
    },
    // {
    //   title: "Transparent documentation",
    //   text: "Complete visibility into property and transaction details.",
    //   icon: <DescriptionIcon />,
    // },
    // {
    //   title: "Professional experience",
    //   text: "Enjoy professional journey through every step of your property process.",
    //   icon: <WorkIcon />,
    // },
    // {
    //   title: "AcreBytes team dedicated support",
    //   text: "Get value added assistance from the AcreBytes team.",
    //   icon: <SupportAgentIcon />,
    // },
    // {
    //   title: "Know more",
    //   text: "Know more about the AcreBytes.",
    //   icon: <InfoIcon />,
    // },
  ];

  const brokers = [
    {
      title: "Qualified Leads, not noise",
      text: "Get verified Enquiries from buyers / Tenants actively searching",
      icon: <GroupIcon />,
    },
    {
      title: "Build trusted Profile",
      text: "Build trust with a verified, agent profile that attracts more clients.",
      icon: <ThumbUpIcon />,
    },
    {
      title: "Smart tools, faster closures",
      text: "Access Property insights, enquiry tracking, and instant notifications that speed up closures.",
      icon: <AccountBoxIcon />,
    },
    {
      title: "Offer maximum transparency",
      text: "Share accurate property details, photos, and updates effortlessly—everything is visible and trackable.",
      icon: <AccessTimeIcon />,
    },
    // {
    //   title: "Mapping to top Real estate Projects",
    //   text: "Improve your visibility, get access of project level verified customers.",
    //   icon: <MapIcon />,
    // },
    // {
    //   title: "Accelerate closures",
    //   text: "Faster deal closures with pre-researched and structured documentation.",
    //   icon: <SpeedIcon />,
    // },
    // {
    //   title: "AcreBytes team support",
    //   text: "Receive dedicated support to grow your business and succeed on the platform.",
    //   icon: <SupportAgentIcon />,
    // },
    // {
    //   title: "Know more",
    //   text: "Connect with the team.",
    //   icon: <InfoIcon />,
    // },
  ];
  const properties = [
    {
      id: 1,
      image:
        "https://www.homznspace.com/wp-content/uploads/2022/01/apartments-img-hns1.jpg",
      price: 7395000,
      type: "Residential",
      title: "Belmondo",
      location: "Gahunje, Pune",
      builder: "FAIRFOX",
      details: "3 BHK, 4 BHK, 5 BHK, 6 BHK",
      area: "3065 to 9785 Sqft",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
      price: 39845000,
      type: "Residential",
      title: "Gateway",
      location: "Kokapet, Hyderabad",
      builder: "FAIRFOX",
      details: "1 BHK",
      area: "240 to 240 Sqft",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
      price: 56160,
      type: "Residential",
      title: "Taj",
      location: "Worli, Mumbai",
      builder: "FAIRFOX",
      details: "N/A",
      area: "0 to 0 Sq. Ft",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
      price: "Price N/A",
      type: "Residential",
      title: "Ssssss123",
      location: "Sector 62, Noida",
      builder: "FAIRFOX",
      details: "3 BHK",
      area: "920 to 1020 Sqft",
    },
  ];
  const companies = [
    {
      name: "Prestige",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/50/Prestige_Group.svg",
    },
    { name: "Fairfox", logo: "https://www.propyards.in/storage/6.png" },
    {
      name: "Prestige",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/50/Prestige_Group.svg",
    },
    {
      name: "Brigade",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Brigade_Group.svg/1058px-Brigade_Group.svg.png",
    },
    {
      name: "Mantri",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQGJVvop95cilQ/company-logo_200_200/company-logo_200_200/0/1630606386534/mantri_developers_pvvt__ltd_logo?e=2147483647&v=beta&t=xTT87KZDg7g4CEY8gBlxGJ6aK0GAqQIm5Sd-03vgt1E",
    },
    {
      name: "Unitech",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEzVS2Iai5DMQ/company-logo_200_200/B4DZliRtuPJYAI-/0/1758290438236/unitech_group_kolkata_logo?e=2147483647&v=beta&t=Th5JgtRdNYRlaqMPjQu66xhScDz5b1vqFOQSff36vf0",
    },
  ];

  function formatIndianPrice(amount: number | string | null): string {
    if (amount === null || amount === "Price N/A" || isNaN(Number(amount)))
      return "Price N/A";

    const num = Number(amount);

    if (num >= 10000000) {
      return `₹ ${(num / 10000000).toFixed(2)} Crore`;
    } else if (num >= 100000) {
      return `₹ ${(num / 100000).toFixed(2)} Lakh`;
    } else if (num >= 1000) {
      return `₹ ${(num / 1000).toFixed(2)} Thousand`;
    } else {
      return `₹ ${num.toLocaleString("en-IN")}`;
    }
  }

  const steps = [
    {
      icon: <DescriptionOutlinedIcon fontSize="large" />,
      title: "enquire",
      desc: "Sell / Buy / Lease / Rent a property",
    },
    {
      icon: <PeopleOutlineOutlinedIcon fontSize="large" />,
      title: "get consultant",
      desc: "Get connected with professional Brokers",
    },
    {
      icon: <EngineeringOutlinedIcon fontSize="large" />,
      title: "work on enquiry",
      desc: "Let Consultant work on your requirements",
    },
    {
      icon: <StarBorderOutlinedIcon fontSize="large" />,
      title: "rate consultant",
      desc: "Let us know how was your experience with the assigned Consultant",
    },
  ];

  return (
    <Box>
      <Header />

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
                Real Estate Platform for
              </Typography>
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{ mt: { md: 2 } }}
              >
                Accurate Properties. Trusted Agents. Seamless Experience.
              </Typography>
              <Typography variant="body1" fontWeight={400} paragraph>
                AcreBytes connects buyers, sellers, and verified real estate
                experts to make property deals simple, secure, and transparent.
              </Typography>
              <Box display={"flex"} gap={1} mt={3}>
                <Button sx={{ mt: 1 }} variant="contained" size="large">
                  <HowToRegOutlinedIcon sx={{ mr: 1 }} /> Join now
                </Button>
                <Button sx={{ mt: 1 }} variant="outlined" size="large">
                  <PeopleAltOutlinedIcon sx={{ mr: 1 }} /> Explore Agents
                </Button>
              </Box>
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
            <Box mb={3}>
              <Typography
                variant="h6"
                gutterBottom
                textTransform="uppercase"
                color="primary.dark"
                display="flex"
                alignItems="center"
                gap={1}
              >
                Popular Properties <ArrowOutwardIcon fontSize="small" />
              </Typography>
              <Typography variant="h2" paragraph>
                Discover Projects, Customers are exploring right now.
              </Typography>
            </Box>
            <Grid container spacing={3} justifyContent="center">
              {properties.map((property) => (
                <Grid key={property.id} size={{ xs: 12, sm: 6, md: 3 }}>
                  <Card
                    elevation={2}
                    variant="elevation"
                    sx={{ height: "100%" }}
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
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography variant="h6" fontWeight="bold">
                          {property.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="primary"
                          fontWeight="bold"
                        >
                          {formatIndianPrice(property.price)}
                        </Typography>
                      </Box>
                      <Typography variant="body2" mb={1}>
                        {property.location}
                      </Typography>
                      <Box display="flex" alignItems="center" gap={1.5} mb={1}>
                        <HomeIcon fontSize="small" />
                        <Typography variant="caption">
                          {property.details}
                        </Typography>
                      </Box>

                      <Box display="flex" alignItems="center" gap={1.5}>
                        <StraightenIcon fontSize="small" />
                        <Typography variant="caption">
                          {property.area}
                        </Typography>
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
          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Box mb={4}>
              <Typography
                variant="h6"
                gutterBottom
                textTransform="uppercase"
                color="primary.dark"
              >
                Why Acrebytes?
              </Typography>
              <Typography variant="h2" paragraph>
                Because Customers deserve transparency, Agents deserve trust,
                and Properties deserve visibility.
              </Typography>
            </Box>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card elevation={1} variant="elevation">
                  <CardMedia
                    component="img"
                    image="/img/ab/customer.avif"
                    alt="TMS Illustration"
                  />
                </Card>
              </Grid>
              <Grid container size={{ xs: 12, md: 6 }}>
                <Grid container spacing={2}>
                  {owners?.map((data, index) => (
                    <Grid key={index} size={{ sm: 6 }}>
                      <Card
                        elevation={0}
                        square
                        sx={{
                          bgcolor: "common.whiteSmoke",
                          color: "common.black",
                          height: "100%",
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box display={"flex"} alignItems="start" gap={1}>
                            {data.icon}
                            <Typography variant="body1" gutterBottom>
                              {data.title}
                            </Typography>
                          </Box>
                          <Typography variant="caption" color="text.secondary">
                            {data.text}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid container size={{ xs: 12, md: 6 }}>
                <Grid container spacing={2}>
                  {brokers?.map((data, index) => (
                    <Grid key={index} size={{ sm: 6 }}>
                      <Card
                        elevation={0}
                        square
                        sx={{
                          bgcolor: "common.whiteSmoke",
                          color: "common.black",
                          height: "100%",
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box display={"flex"} alignItems="start" gap={1}>
                            {data.icon}
                            <Typography variant="body1" gutterBottom>
                              {data.title}
                            </Typography>
                          </Box>
                          <Typography variant="caption" color="text.secondary">
                            {data.text}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card elevation={1} variant="elevation">
                  <CardMedia
                    component="img"
                    image="/img/ab/broker.png"
                    alt="TMS Illustration"
                  />
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Paper>

     

      <Paper elevation={0} square  sx={{ bgcolor: "common.whiteSmoke" }}>
        <Container maxWidth="lg">
          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Box mb={4}>
              <Typography
                variant="h6"
                gutterBottom
                textTransform="uppercase"
                color="primary.dark"
              >
                Trusted by Customers & Consultants
              </Typography>
              <Typography variant="h2" paragraph>
                See what our customers love about our products. Discover how we
                excel in efficiency, durability, and satisfaction. Join us for
                quality, and reliable support.
              </Typography>
            </Box>
            <Grid container spacing={4}>
              {[
                {
                  name: "Sneha Patel",
                  role: "Property Manager, Mumbai",
                  feedback:
                    "Thanks to AcreBytes, managing and tracking my client interactions has become effortless.real estate professional!",
                },
                {
                  name: "Amit Verma",
                  role: "Broker, Bangalore",
                  feedback:
                    "The quality of leads I receive through AcreBytes is outstanding. It has helped me grow my business faster than any other platform.",
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

       <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Box mb={4}>
              <Typography
                variant="h6"
                gutterBottom
                textTransform="uppercase"
                color="primary.dark"
              >
                Explore top Real Estate group
              </Typography>
            </Box>
            <Grid
              container
              mt={4}
              sx={{
                "--Grid-borderWidth": "1px",
                borderTop: "var(--Grid-borderWidth) solid",
                borderLeft: "var(--Grid-borderWidth) solid",
                borderColor: "divider",
                "& > div": {
                  borderRight: "var(--Grid-borderWidth) solid",
                  borderBottom: "var(--Grid-borderWidth) solid",
                  borderColor: "divider",
                },
              }}
            >
              {companies?.map((brand, index) => (
                <Grid key={index} size={{ xs: 6, md: 2 }}>
                  <Card elevation={0}>
                    <CardContent>
                      <CardMedia
                        component="img"
                        sx={{ height: 100, objectFit: "contain" }}
                        image={brand.logo}
                        alt={brand.name}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Paper>

      {/* <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Box>
              <Typography
                variant="h6"
                gutterBottom
                textTransform="uppercase"
                color="primary.dark"
              >
                FAQs
              </Typography>
              <Typography variant="h2" paragraph>
                Find quick answers to the most common questions about our
                services.
              </Typography>
            </Box>

            <Grid container>
              <Grid size={12} mt={2}>
                {[
                  {
                    question:
                      "Are there any registration charges to get registered on AcreBytes?",
                    answer:
                      "No, registration is completely free. You get full access to properties researched and listed on AcreBytes.",
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
                      "How AcreBytes can improve Real Estate consultant visibility?",
                    answer:
                      "Absolutely! You'll be featured on the Consultants list, and you can also opt for services to showcase your presence on our listed property page.",
                  },
                  {
                    question:
                      "Can AcreBytes be accessed from mobile, as I keep on travelling for client visits?",
                    answer:
                      "Yes, you can continue to receive leads and update progress status easily on mobile while on the go.",
                  },
                  {
                    question:
                      "Can AcreBytes list down property, if not listed?",
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
      </Paper> */}

      <Paper elevation={0} square sx={{ bgcolor: "common.whiteSmoke" }}>
        <Container maxWidth="lg">
          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Box>
              <Typography
                variant="h6"
                gutterBottom
                textTransform="uppercase"
                color="primary.dark"
              >
                How it works
              </Typography>
              <Typography variant="h2" paragraph>
                Enquire. Connect. Rate. Experience Better Real Estate.
              </Typography>
            </Box>

            <Grid container spacing={2}>
              {steps?.map((data, index) => (
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
                      {data.icon}
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        fontWeight={600}
                        textTransform="capitalize"
                      >
                        {data.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {data.desc}
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
          <Grid container spacing={3} sx={{ py: { xs: 4, md: 8 } }}>
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
                display={"flex"}
                justifyContent={"flex-end"}
                gap={3}
                alignItems={"center"}
              >
                {" "}
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
      <Footer />
    </Box>
  );
};

export default AcreBytes;
