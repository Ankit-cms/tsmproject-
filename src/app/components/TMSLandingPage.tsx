"use client";
// pages/index.js
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Paper,
  TextField,
  Chip,
  Avatar,
  CardMedia,
  Checkbox,
  InputAdornment,
  CardActionArea,
  Autocomplete,
  Alert,
  Fab,
} from "@mui/material";
import { Grid } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import Link from "next/link";
import Features from "./Features";
import Header from "./Header";
import Footer from "./Footer";
import Client from "./Client";
import Banner from "./Banner";
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
import { CallOutlined, FormatQuote } from "@mui/icons-material";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const TMSLandingPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [countryCode, setCountryCode] = useState<string>("+91");
  const countryCodes = [
    { value: "+91", label: "India (+91)" },
    { value: "+1", label: "USA (+1)" },
    { value: "+44", label: "UK (+44)" },
    { value: "+61", label: "Australia (+61)" },
  ];
  // const [selectedCountry, setSelectedCountry] = useState('India');

  const countries = [
    "India",
    "America",
    "Canada",
    "Russia",
    "Ukraine",
    "Shrilanka",
    "Bhutan",
    "Bangladesh",
    "Israil",
  ];
  const [selectedRole, setSelectedRole] = useState(
    "Owner / Founder / Co-founder"
  );

  const [selectedPlatform, setSelectedPlatform] = useState("Platform demo");

  const platforms = [
    "Platform demo",
    "Careers",
    "Investments",
    "Growth partnering",
    "Support",
    "Feedback",
    "Media",
    "Legal",
    "Other",
  ];
  const roles = [
    "Owner / Founder / Co-founder",
    "CEO / CXO",
    "Managing Director / Director",
    "President / Vice President",
    "Senior Management",
    "Middle Management",
    "Other",
  ];

  return (
    <Box>
      <Header />

      {/* <Hero /> */}

      {/* <HeroFull /> */}

      <Banner />

      <Paper elevation={0} square sx={{ bgcolor: "common.whiteSmoke" }}>
        <Container maxWidth="lg">
          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Typography
              variant="h6"
              color="primary.dark"
              gutterBottom
              textTransform="uppercase"
            >
              Why Instalanes?
            </Typography>
            <Typography
              variant="h2"
              component="h3"
              gutterBottom
              color="common.black"
              mb={4}
            >
              The Collaborative TMS Built for Shippers, Carriers, and Logistics
              professionals for Real-time visibility, and Optimized logistics
              operations that drive meaningful Business outcomes
            </Typography>
            <Grid container spacing={3}>
              {[
                {
                  value: "9x",
                  title: "Visibility",
                  description:
                    "Nine-layered visibility gives you unmatched control and understanding of what's happening on your network. See everything at a glance.",
                },
                {
                  value: "100%",
                  title: "Collaboration",
                  description:
                    "Boost your teams productivity and experience. Empower your team, enhance effectiveness of your teams.",
                },
                {
                  value: "~30%",
                  title: "Optimization",
                  description:
                    "By digitizing your processes, you can eliminate manual tasks and standardize your operations to lower costs.",
                },
                {
                  value: "~2x",
                  title: "Growth",
                  description:
                    "The network provides opportunities for businesses to expand quickly and help businesses grow rapidly in new geographic areas.",
                },
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
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        fontWeight="bold"
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
          <Box sx={{ pt: { xs: 4, md: 8 } }}>
            <Box>
              <Typography
                variant="h6"
                gutterBottom
                textTransform="uppercase"
                color="primary.dark"
              >
                SOLVING THE BIG CHALLENGE
              </Typography>
              <Typography variant="h2" paragraph>
                Simplifying the complex manual chaos, digitally.
              </Typography>
              <Alert severity="error" sx={{ mb: 2 }}>
                Modern supply chains lack real-time visibility and smooth
                coordination because teams still rely on emails, spreadsheets,
                and disconnected systems. This siloed and manual way of working
                slows information flow and creates visibility gaps, leading to
                delays, higher logistics costs, and a poor experience for
                customers, partners, and internal teams
              </Alert>
            </Box>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card
                  elevation={1}
                  variant="elevation"
                  sx={{ height: "100%", width: "100%" }}
                >
                  <CardMedia
                    component="img"
                    image="/img/work/instalanes_TMS_challenges.png"
                    alt="TMS Illustration"
                  />
                </Card>
              </Grid>
              <Grid container size={{ xs: 12, md: 6 }}>
                <Grid container spacing={2}>
                  {[
                    {
                      title: "Lack of Visibility",
                      desc: "No single, real-time view to track shipments or exceptions.",
                    },
                    {
                      title: "Manual Operations",
                      desc: "Emails, calls, and spreadsheets slow execution and create errors.",
                    },
                    {
                      title: "High Operations Cost",
                      desc: "Inefficiencies and poor coordination increase per-shipment cost.",
                    },
                    {
                      title: "Poor Experience",
                      desc: "Delayed updates frustrate Customers, Carriers, and internal Teams.",
                    },
                  ].map((data, index) => (
                    <Grid key={index} size={{ sm: 6 }}>
                      <Card
                        elevation={0}
                        square
                        sx={{
                          bgcolor: "common.whiteSmoke",
                          color: "common.black",
                          height: "100%",
                          width: "100%",
                        }}
                      >
                        <CardContent sx={{ p: 2 }}>
                          <Box display={"flex"} alignItems="start" gap={1}>
                            <InfoOutlinedIcon color="error" />
                            <Typography variant="h6" gutterBottom>
                              {data.title}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary">
                            {data.desc}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Container maxWidth="lg">
          <Box sx={{ pb: { xs: 4, md: 8 }, pt: { xs: 2, md: 2 } }}>
            <Alert severity="success" sx={{ mb: 2 }}>
              A global, easy-to-use SaaS TMS that digitizes operations, connects
              all stakeholders on one platform, and delivers real-time
              visibility, automation, and faster decision-making across the
              entire supply chain
            </Alert>
            <Grid
              container
              spacing={2}
              direction={{ xs: "column-reverse", md: "row" }}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <Grid container spacing={2}>
                  {[
                    {
                      title: "Full Visibility",
                      desc: "One platform, real-time tracking, zero blind spots.",
                    },
                    {
                      title: "Speed & Scalability",
                      desc: "Automated workflows and faster execution.",
                    },
                    {
                      title: "Seamless Collaboration",
                      desc: "All teams and partners aligned in one system.",
                    },
                    {
                      title: "Actionable Insights",
                      desc: "Dashboards and analytics to improve cost, performance, and growth.",
                    },
                  ].map((data, index) => (
                    <Grid key={index} size={{ sm: 6 }}  sx={{ width: '100%' }}>
                      <Card
                        elevation={0}
                        square
                        sx={{
                          bgcolor: "common.whiteSmoke",
                          color: "common.black",
                          height: "100%",
                          width: "100%",
                        }}
                      >
                        <CardContent sx={{ p: 2 }}>
                          <Box display={"flex"} alignItems="start" gap={1}>
                            <TaskAltOutlinedIcon color="success" />
                            <Typography variant="h6" gutterBottom>
                              {data.title}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary">
                            {data.desc}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card
                  elevation={1}
                  variant="elevation"
                  sx={{ height: "100%", width: "100%" }}
                >
                  <CardMedia
                    component="img"
                    image="/img/work/instalanes_TMS_Digital_Solution.png"
                    alt="TMS Illustration"
                  />
                </Card>
              </Grid>
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
                gutterBottom
                textTransform="uppercase"
                color="primary.dark"
              >
                Digital solution deep dive
              </Typography>
              <Typography variant="h2" paragraph>
                How Instalanes TMS works
              </Typography>
            </Box>
            <Typography variant="h6" paragraph fontWeight="bold">
              Transportation process
            </Typography>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {[
                {
                  title: "Dispatch plan",
                  icon: FormatListBulletedIcon,
                },
                {
                  title: "Transport request",
                  icon: RouteOutlinedIcon,
                },
                {
                  title: "Rate Engine (Buy / Sell)",
                  icon: CreditScoreOutlinedIcon,
                },
                {
                  title: "Vehicle / Driver Allocation",
                  icon: LocalShippingOutlinedIcon,
                },
                {
                  title: "Load (LR / CN)",
                  icon: FileDownloadOutlinedIcon,
                },
                {
                  title: "Execution - Control tower",
                  icon: HubOutlinedIcon,
                },
                {
                  title: "Unload (ePoD)",
                  icon: FileUploadOutlinedIcon,
                },
                {
                  title: "Invoicing & Billing",
                  icon: ReceiptLongOutlinedIcon,
                },
              ].map((data, index) => (
                <Grid key={index} size={{ xs: 6, md: 1.5 }}>
                  <Card
                    elevation={2}
                    variant="elevation"
                    sx={{ height: "100%", width: "100%" }}
                  >
                    <CardActionArea
                      sx={{
                        height: "100%",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "center",
                        p: 2,
                        "&[data-active]": {
                          backgroundColor: "action.selected",
                          "&:hover": {
                            backgroundColor: "action.selectedHover",
                          },
                        },
                      }}
                    >
                      <data.icon fontSize="large" />
                      <Box mt={1}>
                        <Typography variant="body2" gutterBottom>
                          {data.title}
                        </Typography>
                      </Box>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Grid container spacing={2} alignItems="start" sx={{ mb: 4 }}>
              <Grid size={{ md: 3 }}>
                <Typography variant="h6" paragraph fontWeight="bold">
                  TMS implementaion
                </Typography>

                <Grid container spacing={2}>
                  {[
                    {
                      title: "Account users",
                      icon: GroupOutlinedIcon,
                    },
                    {
                      title: "GPS APIs",
                      icon: WebhookOutlinedIcon,
                    },
                    {
                      title: "Rates master",
                      icon: CreditScoreOutlinedIcon,
                    },
                    {
                      title: "Lanes master",
                      icon: RouteOutlinedIcon,
                    },
                    {
                      title: "Vehicle master",
                      icon: LocalShippingOutlinedIcon,
                    },
                    {
                      title: "Driver master",
                      icon: GroupAddOutlinedIcon,
                    },
                  ].map((data, index) => (
                    <Grid key={index} size={{ xs: 6 }}>
                      <Card
                        elevation={2}
                        variant="elevation"
                        sx={{ height: "100%", width: "100%" }}
                      >
                        <CardActionArea
                          sx={{
                            height: "100%",
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "start",
                            alignItems: "center",
                            p: 2,
                            "&[data-active]": {
                              backgroundColor: "action.selected",
                              "&:hover": {
                                backgroundColor: "action.selectedHover",
                              },
                            },
                          }}
                        >
                          <data.icon fontSize="large" />
                          <Box mt={1}>
                            <Typography variant="body2" gutterBottom>
                              {data.title}
                            </Typography>
                          </Box>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid size={{ md: 6 }}>
                <Typography variant="h6" paragraph fontWeight="bold">
                  Capability enablers
                </Typography>
                <Grid container spacing={2}>
                  {[
                    {
                      title: "Collaborative visibility",
                      icon: GroupsOutlinedIcon,
                      grid: { xs: 6 },
                    },
                    {
                      title: "Control tower",
                      icon: CellTowerOutlinedIcon,
                      grid: { xs: 6 },
                    },
                    {
                      title: "Business Analytics ",
                      icon: BarChartOutlinedIcon,
                      grid: { xs: 6 },
                    },
                    {
                      title: "Documents centralization",
                      icon: DifferenceOutlinedIcon,
                      grid: { xs: 6 },
                    },
                    {
                      title: "Ops one view ",
                      icon: TvOutlinedIcon,
                      grid: { xs: 6 },
                    },
                    {
                      title: "Freight settlements view",
                      icon: DvrOutlinedIcon,
                      grid: { xs: 6 },
                    },
                  ].map((data, index) => (
                    <Grid key={index} size={data.grid}>
                      <Card
                        elevation={2}
                        variant="elevation"
                        sx={{ height: "100%", width: "100%" }}
                      >
                        <CardActionArea
                          sx={{
                            height: "100%",
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "start",
                            alignItems: "center",
                            p: 2,
                            "&[data-active]": {
                              backgroundColor: "action.selected",
                              "&:hover": {
                                backgroundColor: "action.selectedHover",
                              },
                            },
                          }}
                        >
                          <data.icon fontSize="large" />
                          <Box mt={1}>
                            <Typography variant="body2" gutterBottom>
                              {data.title}
                            </Typography>
                          </Box>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid size={{ md: 3 }}>
                <Typography variant="h6" paragraph fontWeight="bold">
                  Business outcomes
                </Typography>
                <Grid container spacing={2}>
                  {[
                    {
                      title: "Collaboration",
                      icon: GroupsOutlinedIcon,
                    },
                    {
                      title: "Cost savings",
                      icon: PriceCheckOutlinedIcon,
                    },
                    {
                      title: "Scalability",
                      icon: TrendingUpOutlinedIcon,
                    },
                    {
                      title: "Visibility",
                      icon: ScreenSearchDesktopOutlinedIcon,
                    },
                    {
                      title: "Compliance",
                      icon: VerifiedUserOutlinedIcon,
                    },
                    {
                      title: "Experience",
                      icon: Diversity3OutlinedIcon,
                    },
                  ].map((data, index) => (
                    <Grid key={index} size={{ xs: 6 }} sx={{ width: '100%' }}>
                      <Card
                        elevation={2}
                        variant="elevation"
                        sx={{ height: "100%", width: "100%" }}
                      >
                        <CardActionArea
                          sx={{
                            height: "100%",
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "start",
                            alignItems: "center",
                            p: 2,
                            "&[data-active]": {
                              backgroundColor: "action.selected",
                              "&:hover": {
                                backgroundColor: "action.selectedHover",
                              },
                            },
                          }}
                        >
                          <data.icon fontSize="large" />
                          <Box mt={1}>
                            <Typography variant="body2" gutterBottom>
                              {data.title}
                            </Typography>
                          </Box>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Typography variant="h6" paragraph fontWeight="bold">
              TMS Features
            </Typography>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {[
                {
                  title: "Mobile driven",
                  icon: FormatListBulletedIcon,
                },
                {
                  title: "Instant ePoD ",
                  icon: RouteOutlinedIcon,
                },
                {
                  title: "Smart notifications",
                  icon: CreditScoreOutlinedIcon,
                },
                {
                  title: "Next action ready",
                  icon: LocalShippingOutlinedIcon,
                },
                {
                  title: "Auto status reporting",
                  icon: FileDownloadOutlinedIcon,
                },
                {
                  title: "API-Enabled",
                  icon: HubOutlinedIcon,
                },
              ].map((data, index) => (
                <Grid key={index} size={{ xs: 6, md: 2 }}>
                  <Card
                    elevation={2}
                    variant="elevation"
                    sx={{ height: "100%", width: "100%" }}
                  >
                    <CardActionArea
                      sx={{
                        height: "100%",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "center",
                        p: 2,
                        "&[data-active]": {
                          backgroundColor: "action.selected",
                          "&:hover": {
                            backgroundColor: "action.selectedHover",
                          },
                        },
                      }}
                    >
                      <data.icon fontSize="large" />
                      <Box mt={1}>
                        <Typography variant="body2" gutterBottom>
                          {data.title}
                        </Typography>
                      </Box>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Paper>
      {/* <Features /> */}
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
                TMS capabilities
              </Typography>
              <Typography variant="h2" paragraph>
                Unlock powerful tools to plan, execute, and monitor
                transportation seamlessly—anytime, anywhere
              </Typography>
            </Box>
            <Grid spacing={3} container py={2}>
              {[
                {
                  title: "Collaborative visibility",
                  image: "/img/card/collabiration.jpg",
                  description:
                    "Track shipments in real-time through telematics, mobile apps, and shared dashboards. Improve collaboration and transparency across all stakeholders.",
                },
                {
                  title: "Control tower",
                  image: "/img/card/Control-tower.jpg",
                  description:
                    "Gain a birds-eye view of operations with map-based insights, next action prompts, and status updates anytime. Enable faster, more informed decision-making.",
                },
                {
                  title: "Data analytics",
                  image: "/img/card/data-analytics.webp",
                  description:
                    "Monitor key performance indicators with customizable dashboards and actionable insights. Drive continuous improvement and achieve business goals.",
                },
                {
                  title: "Mobile based platform",
                  image: "/img/card/mobile-based.jpg",
                  description:
                    "Manage transportation operations seamlessly on mobile, from planning to delivery. Empower on-the-go management and enhanced efficiency.",
                },
                {
                  title: "Alerts, notifications controller",
                  image: "/img/card/alerts-notifications.jpg",
                  description:
                    "Configure real-time alerts for exceptions, milestones, and tasks. Stay proactive and reduce operational risks.",
                },
                {
                  title: "Documents centralization",
                  image: "/img/card/document-centralization.jpg",
                  description:
                    "Store, access, and share all transport-related documents in one place. Simplify compliance and reduce administrative burden.",
                },
                {
                  title: "Alerts, notifications controller",
                  image: "/img/card/alerts-notifications.jpg",
                  description:
                    "Configure real-time alerts for exceptions, milestones, and tasks. Stay proactive and reduce operational risks.",
                },
                {
                  title: "Documents centralization",
                  image: "/img/card/document-centralization.jpg",
                  description:
                    "Store, access, and share all transport-related documents in one place. Simplify compliance and reduce administrative burden.",
                },
              ].map((card) => (
                <Grid key={card.title} size={{ xs: 12, md: 3 }}>
                  <Card
                    elevation={2}
                    variant="elevation"
                    sx={{ height: "100%", width: "100%" }}
                  >
                    <CardMedia
                      component="img"
                      height="194"
                      image={card.image}
                      alt={card.title}
                    />
                    <CardContent>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        mb={1}
                      >
                        <Chip label={"Feature"} variant="outlined" />
                        <Link href="/blog-detail">
                          <ArrowOutwardOutlinedIcon />
                        </Link>
                      </Box>
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Typography
                          variant="h6"
                          component="h3"
                          gutterBottom
                          fontWeight="bold"
                        >
                          {card.title}
                        </Typography>
                        {/* <ArrowOutwardOutlinedIcon fontSize="small" /> */}
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
                gutterBottom
                textTransform="uppercase"
                color="primary.dark"
              >
                What our Customers say
              </Typography>
              <Typography variant="h2" paragraph>
                Insights from teams simplifying their logistics journey with
                Instalanes
              </Typography>
            </Box>
            <Grid container spacing={4}>
              {[
                {
                  title: "Fast Implementation",
                  description: `It's amazing to see how fast instalanes platform can be set up. Yes, we set it up not in months, weeks but in just 1 day, no kidding, it's a breakthrough`,
                  name: "John Doe",
                  role: "Logistics Director at Hewells",
                },
                {
                  title: "Fast Implementation",
                  description: `It's amazing to see how fast instalanes platform can be set up. Yes, we set it up not in months, weeks but in just 1 day, no kidding, it's a breakthrough`,
                  name: "John Doe",
                  role: "Logistics Director at Hewells",
                },
              ].map((stat, index) => (
                <Grid key={index} size={{ xs: 12, md: 6 }}>
                  <Card
                    elevation={3}
                    variant="outlined"
                    sx={{ height: "100%", width: "100%" }}
                  >
                    <CardContent>
                      <Chip
                        icon={<DoneOutlinedIcon fontSize="small" />}
                        label={stat.title}
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
                          {stat.description}
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

      <Client />

      {/* <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Box py={5}>
            <Box pb={4}>
              <Typography variant="h6" gutterBottom textTransform="uppercase" color='primary.dark'>
                Blog posts
              </Typography>
              <Typography variant="h2" paragraph>
                Stay updated with our latest articles and insights
              </Typography>
            </Box>
            <Grid container spacing={4}> 
              {[
                {
                  category: 'FREIGHT',
                  title: 'Deliver 2024 fostering innovation and impact',
                  date: 'September 11, 2024',
                  img: '/img/blog/deliver.png',
                },
                {
                  category: 'FREIGHT',
                  title: 'Embracing efficiency with TMS implementation',
                  date: 'August 19, 2024',
                  img: '/img/blog/implementation.png',
                },
                {
                  category: 'FREIGHT',
                  title: 'Freight market update: Q3 – August 2024',
                  date: 'August 19, 2024',
                  img: '/img/blog/q4.png',
                },
              ].map((blog, index) => (
                <Grid key={index} size={{ xs: 12, md: 4 }}>
                  <Card elevation={2} variant="outlined" sx={{ height: '100%', bgcolor: 'common.whiteSmoke', color: 'common.black' }}>
                    <CardContent>
                      <CardMedia
                        component="img"
                        height="180"
                        image={blog.img}
                        alt={blog.title}
                      />
                      <Chip
                        label={blog.category}
                        variant="outlined"
                        sx={{ mt: 2, mb: 1 }}
                      />
                      <Typography variant="h6" component="h3" gutterBottom>
                        {blog.title}
                      </Typography>
                      <Box
                        display={'flex'}
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography variant="body2" color="text.secondary">
                          {blog.date}
                        </Typography>
                        <Link href="/blog-detail">
                          <ArrowRightAltIcon />
                        </Link>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Paper> */}

      <Paper elevation={0} square>
        <Box
          id="contact"
          sx={{ py: { xs: 4, md: 8 }, bgcolor: "common.whiteSmoke" }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h6"
              gutterBottom
              textTransform="uppercase"
              color="primary.dark"
            >
              Contact us
            </Typography>
            <Typography variant="h2" paragraph mb={0}>
              Discover how Instalanes TMS can simplify and streamline all your
              moves – FCL, FTL, PTL, ODC, and warehouse. Our experts are here to
              help with features, pricing, and implementation
            </Typography>
          </Container>
        </Box>
        <Container maxWidth="lg">
          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Typography
              variant="h6"
              gutterBottom
              textTransform="uppercase"
              color="primary.dark"
            >
              Contact us
            </Typography>
            <Typography variant="h2" paragraph mb={4}>
              We&apos;d love to talk about how we can work together
            </Typography>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                  variant="h4"
                  component="h4"
                  fontWeight="bold"
                  gutterBottom
                  mb={3}
                >
                  Get in touch
                </Typography>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Card
                      elevation={2}
                      variant="outlined"
                      sx={{ bgcolor: "common.whiteSmoke", width: "100%" }}
                    >
                      <CardActionArea
                        sx={{
                          height: "100%",
                          p: 3,
                          position: "relative",
                          "&[data-active]": {
                            backgroundColor: "action.selected",
                            "&:hover": {
                              backgroundColor: "action.selectedHover",
                            },
                          },
                        }}
                      >
                        <WhatsAppIcon fontSize="large" />
                        <Typography variant="h6" gutterBottom>
                          Message
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          paragraph
                          mb={0}
                        >
                          Drop us a message — team will get back to you
                        </Typography>
                        <Link
                          href="https://wa.me/919999999999"
                          target="_blank"
                          color="inherit"
                          style={{ position: "absolute", top: 16, right: 16 }}
                        >
                          <ArrowOutwardIcon fontSize="small" />
                        </Link>
                      </CardActionArea>
                    </Card>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Card
                      elevation={2}
                      variant="outlined"
                      sx={{ bgcolor: "common.whiteSmoke", width: "100%" }}
                    >
                      <CardActionArea
                        sx={{
                          height: "100%",
                          p: 3,
                          position: "relative",
                          "&[data-active]": {
                            backgroundColor: "action.selected",
                            "&:hover": {
                              backgroundColor: "action.selectedHover",
                            },
                          },
                        }}
                      >
                        <MonetizationOnIcon fontSize="large" />
                        <Typography variant="h6" gutterBottom>
                          Pricing
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          paragraph
                          mb={0}
                        >
                          Get flexible pricing built for every business size
                        </Typography>
                      </CardActionArea>
                    </Card>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Card
                      elevation={2}
                      variant="outlined"
                      sx={{ bgcolor: "common.whiteSmoke", width: "100%" }}
                    >
                      <CardActionArea
                        sx={{
                          height: "100%",
                          p: 3,
                          position: "relative",
                          "&[data-active]": {
                            backgroundColor: "action.selected",
                            "&:hover": {
                              backgroundColor: "action.selectedHover",
                            },
                          },
                        }}
                      >
                        <Typography
                          variant="h6"
                          gutterBottom
                          display={"flex"}
                          alignItems="center"
                          gap={2}
                        >
                          <Avatar
                            alt="Priyanka S"
                            src="/img/team1.jpg"
                            sx={{ width: 50, height: 50 }}
                          />{" "}
                          Priyanka S
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          paragraph
                          mb={0}
                        >
                          Sales Manager
                        </Typography>
                        <Link
                          href="#"
                          target="_blank"
                          color="inherit"
                          style={{ position: "absolute", top: 16, right: 16 }}
                        >
                          <ArrowOutwardIcon fontSize="small" />
                        </Link>
                      </CardActionArea>
                    </Card>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Card
                      elevation={2}
                      variant="outlined"
                      sx={{ bgcolor: "common.whiteSmoke", width: "100%" }}
                    >
                      <CardActionArea
                        sx={{
                          height: "100%",
                          p: 3,
                          position: "relative",
                          "&[data-active]": {
                            backgroundColor: "action.selected",
                            "&:hover": {
                              backgroundColor: "action.selectedHover",
                            },
                          },
                        }}
                      >
                        <Typography
                          variant="h6"
                          gutterBottom
                          display={"flex"}
                          alignItems="center"
                          gap={2}
                        >
                          <Avatar
                            alt="Lucky S"
                            src="/img/team2.jpeg"
                            sx={{ width: 50, height: 50 }}
                          />{" "}
                          Lucky S
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          paragraph
                          mb={0}
                        >
                          Sales Manager
                        </Typography>
                        <Link
                          href="#"
                          target="_blank"
                          color="inherit"
                          style={{ position: "absolute", top: 16, right: 16 }}
                        >
                          <ArrowOutwardIcon fontSize="small" />
                        </Link>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  fontWeight="bold"
                  gutterBottom
                  mb={3}
                >
                  Book a Demo - Submit details
                </Typography>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 6 }}>
                    <TextField
                      fullWidth
                      label="First name"
                      variant="outlined"
                      inputProps={{
                        style: { textTransform: "capitalize" },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <TextField
                      fullWidth
                      label="Last name"
                      variant="outlined"
                      inputProps={{
                        style: { textTransform: "capitalize" },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Your Company name"
                      variant="outlined"
                      inputProps={{
                        style: { textTransform: "capitalize" },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Autocomplete
                      freeSolo
                      id="free-solo-2-demo"
                      disableClearable
                      options={countries.map((country) => country)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Country"
                          slotProps={{
                            input: {
                              ...params.InputProps,
                              type: "search",
                            },
                          }}
                        />
                      )}
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      select
                      label="Your Role"
                      variant="outlined"
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      SelectProps={{
                        MenuProps: {
                          disableScrollLock: true,
                        },
                      }}
                    >
                      {roles.map((role) => (
                        <MenuItem key={role} value={role}>
                          {role}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <TextField fullWidth label="Email" variant="outlined" />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Phone number"
                      inputProps={{ maxLength: 15 }}
                      type="number"
                      inputMode="numeric"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <TextField
                              select
                              variant="standard"
                              value={countryCode}
                              onChange={(e) => setCountryCode(e.target.value)}
                              InputProps={{ disableUnderline: true }}
                              SelectProps={{
                                MenuProps: {
                                  disableScrollLock: true,
                                },
                              }}
                              sx={{
                                "& .MuiSelect-select": {
                                  paddingRight: "24px",
                                },
                                minWidth: 80,
                              }}
                            >
                              {countryCodes.map((option) => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      select
                      label="Enquiry about"
                      variant="outlined"
                      value={selectedPlatform}
                      SelectProps={{
                        MenuProps: {
                          disableScrollLock: true,
                        },
                      }}
                      onChange={(e) => setSelectedPlatform(e.target.value)}
                    >
                      {platforms.map((platform) => (
                        <MenuItem key={platform} value={platform}>
                          {platform}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Box
                      display="flex"
                      alignItems="center"
                      gap={2}
                      p={2}
                      border={1}
                      borderColor="grey.300"
                      borderRadius={1}
                    >
                      <Checkbox size="large" />
                      <Box>
                        <Typography variant="body2">
                          I am not a robot
                        </Typography>
                        <Box display="flex" gap={1}>
                          <Typography variant="caption" color="text.secondary">
                            reCAPTCHA
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Privacy
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            -
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Terms
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button variant="contained" size="large" fullWidth>
                      <SubdirectoryArrowRightIcon sx={{ mr: 1 }} /> Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Paper>
      <Box position={"fixed"} bottom={16} right={16}>
        <Fab variant="extended" color="primary" href="/contact" component="a">
          <CallOutlined sx={{ mr: 1 }} />
          Contact us
        </Fab>
      </Box>
      <Footer />
    </Box>
  );
};

export default TMSLandingPage;
