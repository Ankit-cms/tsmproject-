"use client";
// pages/index.js
import React, { useState } from 'react';
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
    Divider,
    CardMedia,
    Checkbox,
    InputAdornment,
    CardActionArea
} from '@mui/material';
import { Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CallIcon from '@mui/icons-material/Call';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ComputerIcon from '@mui/icons-material/Computer';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Link from 'next/link';
import Features from './Features';
import Header from './Header';
import Footer from './Footer';

const pages = ['TMS solutions', 'Resources', 'Pricing', 'Contact us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
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
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const TMSLandingPage = () => {
    // const theme = useTheme();

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

    const [selectedRole, setSelectedRole] = useState("Owner / Founder / Co-founder");

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

            <Paper elevation={0} square>
                <Box display="flex" alignItems="center" justifyContent="center" pt={10} pb={4}>
                    <Container maxWidth="lg">
                        <Grid container spacing={4} alignItems="center" mt={4}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Chip
                                    icon={<AutoAwesomeIcon />}
                                    label="Switch to Instalanes"
                                    variant="outlined"
                                    color="primary"
                                    sx={{ px: 1 }}
                                />
                                <Typography
                                    variant="h3"
                                    component="h1"
                                    gutterBottom
                                    sx={{ fontSize: { xs: '2rem', md: '3.5rem' } }}
                                    mt={2}>
                                    The TMS Platform Powering End-to-End Visibility
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Powering smarter, faster logistics with a cloud TMS &
                                    visibility platform built for 3PLs, shippers, and carriers.
                                </Typography>
                                <Button variant="contained" >
                                    <ComputerIcon sx={{ mr: 1 }} /> Schedule a
                                    Demo
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    image="/img/Banner.jpg"
                                    alt="TMS Illustration"
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Paper>

            <Divider sx={{ my: 2 }} />

            <Paper elevation={0} square>
                <Container maxWidth="lg">
                    <Box py={8}>
                        <Box mb={6}>
                            <Typography variant="h3" gutterBottom>
                                Why Instalanes?
                            </Typography>
                            <Typography variant="h5" paragraph>
                                A collaborative TMS platform built to deliver the business
                                outcomes that matter to you
                            </Typography>
                        </Box>
                        <Grid container spacing={3}>
                            {[
                                {
                                    value: '9x',
                                    title: 'Visibility',
                                    description:
                                        "Nine-layered visibility gives you unmatched control and understanding of what's happening on your network. See everything at a glance.",
                                },
                                {
                                    value: '100%',
                                    title: 'Collaboration',
                                    description:
                                        'Boost your teams productivity and experience. Empower your team, enhance effectiveness of your teams.',
                                },
                                {
                                    value: '~30%',
                                    title: 'Optimization',
                                    description:
                                        'By digitizing your processes, you can eliminate manual tasks and standardize your operations to lower costs.',
                                },
                                {
                                    value: '~2x',
                                    title: 'Growth',
                                    description:
                                        'The network provides opportunities for businesses to expand quickly and help businesses grow rapidly in new geographic areas.',
                                },
                            ].map((stat, index) => (
                                <Grid key={index} size={{ xs: 12, md: 6, lg: 3 }}>
                                    <Card
                                        variant="outlined"
                                        elevation={3}
                                        sx={{ height: '100%' }}
                                    >
                                        <CardContent sx={{ textAlign: 'center' }}>
                                            <Typography variant="h3" component="div" gutterBottom>
                                                {stat.value}
                                            </Typography>
                                            <Typography variant="h6" component="h3" gutterBottom>
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

            <Divider sx={{ my: 2 }} />

            <Paper elevation={0} square>
                <Container maxWidth="lg">
                    <Box py={8}>
                        <Box>
                            <Typography variant="h3" gutterBottom>
                                Instalanes TMS — how it works
                            </Typography>
                            <Typography variant="h5" paragraph>
                                Your all-in-one logistics platform. Digitize and simplify FCL,
                                FTL, PTL, ODC, and warehouse shipments in one unified system
                                for shippers, carriers, 3PLs, and LSPs
                            </Typography>
                        </Box>
                        <Box>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                            >
                                <Tab label="Plan Load" {...a11yProps(0)} />
                                <Tab label="Transport Request" {...a11yProps(1)} />
                                <Tab label="Rate – Buy/Sell" {...a11yProps(2)} />
                                <Tab label="Allocate" {...a11yProps(3)} />
                                <Tab label="Load" {...a11yProps(4)} />
                                <Tab label="Track" {...a11yProps(5)} />
                                <Tab label="Unload & PoD" {...a11yProps(6)} />
                                <Tab label="Bill " {...a11yProps(7)} />
                                <Tab label="Analyze " {...a11yProps(8)} />
                            </Tabs>
                            <TabPanel value={value} index={0}>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="/img/Instalanes-TMS-Process.svg"
                                    alt="TMS Illustration"
                                />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="/img/Instalanes-TMS-Process.svg"
                                    alt="TMS Illustration"
                                />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="/img/Instalanes-TMS-Process.svg"
                                    alt="TMS Illustration"
                                />
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="/img/Instalanes-TMS-Process.svg"
                                    alt="TMS Illustration"
                                />
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="/img/Instalanes-TMS-Process.svg"
                                    alt="TMS Illustration"
                                />
                            </TabPanel>
                            <TabPanel value={value} index={5}>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="/img/Instalanes-TMS-Process.svg"
                                    alt="TMS Illustration"
                                />
                            </TabPanel>
                            <TabPanel value={value} index={6}>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="/img/Instalanes-TMS-Process.svg"
                                    alt="TMS Illustration"
                                />
                            </TabPanel>
                            <TabPanel value={value} index={7}>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="/img/Instalanes-TMS-Process.svg"
                                    alt="TMS Illustration"
                                />
                            </TabPanel>
                            <TabPanel value={value} index={8}>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="/img/Instalanes-TMS-Process.svg"
                                    alt="TMS Illustration"
                                />
                            </TabPanel>
                        </Box>
                    </Box>
                </Container>
            </Paper>

            <Divider sx={{ my: 2 }} />

            <Container maxWidth="lg">
                <Box py={8}>
                    <Typography variant="h3" gutterBottom>
                        Solving the Big Challenge
                    </Typography>
                    <Typography variant="h5" paragraph>
                        Simplifying the complex manual chaos — digitally.
                    </Typography>
                    <Box mt={4} mb={4}>
                        <CardMedia
                            component="img"
                            image="/img/work/instalanes_TMS_challenges.png"
                            alt="TMS Illustration"
                        />
                    </Box>
                    <Grid container spacing={4} alignItems="center" mt={4}>
                        <Grid container spacing={2}>
                            {[
                                {
                                    icon: '👁️',
                                    title: 'Lack of End-to-End Visibility',
                                    desc: 'Supply chain leaders struggle to get a single, real-time view across teams, systems, and geographies — making informed decision-making difficult.'
                                },
                                {
                                    icon: '📝',
                                    title: 'Manual & Fragmented Operations',
                                    desc: 'Critical processes still run on emails, spreadsheets, and phone calls, creating silos and slowing execution.'
                                },
                                {
                                    icon: '💸',
                                    title: 'Rising Logistics Costs',
                                    desc: 'Inefficiencies and poor coordination lead to avoidable costs, delays, and resource waste.'
                                },
                                {
                                    icon: '😖',
                                    title: 'Poor Stakeholder Experience',
                                    desc: 'Lack of transparency and delayed updates frustrate customers, partners, and internal teams alike.'
                                },
                                {
                                    icon: '🧰',
                                    title: 'Low Operational Control',
                                    desc: 'Without connected systems, leaders lack the levers to proactively manage exceptions and drive performance at scale.'
                                },
                                {
                                    icon: '⏱',
                                    title: 'Slow Decision-Making & Delayed Actions',
                                    desc: 'Data lives in multiple places and updates come late — making it hard to act fast, optimize in real time, and stay ahead of disruptions.'
                                }
                            ].map((data, index) => (
                                <Grid key={index} size={{ xs: 12, md: 6 }}>
                                    <Card elevation={2} sx={{ height: '100%' }}>
                                        <CardContent>
                                            <Typography variant="h5" gutterBottom component="h5">
                                                {data.icon} {data.title}
                                            </Typography>
                                            <Typography variant="body1" paragraph mb={0}>
                                                {data.desc}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} alignItems="center" mt={4}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <CardMedia
                                component="img"
                                image="/img/work/instalanes_TMS_Digital_Solution.png"
                                alt="TMS Illustration"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h4" component="h2" gutterBottom>
                                The Digital Solution
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Currently, there is a need to have an impactful global
                                platform that is easy, smart, and accessible by the masses
                                that keeps everyone on the same page.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Instalanes platform enhances the ability of supply chain
                                leaders and their teams to make transportation logistics a
                                competitive advantage. With the value proposition offered,
                                your teams can deliver real impact on business outcomes
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container >

            <Divider sx={{ my: 2 }} />

            <Paper elevation={0} square>
                <Container maxWidth="lg">
                    <Box py={8}>
                        <Typography variant="h3" gutterBottom>
                            Platform overview - What it covers
                        </Typography>
                        <Typography variant="h5" paragraph>
                            A complete TMS for planning, dispatch, visibility, billing, and more — all in one place.
                        </Typography>
                        <Card elevation={1} sx={{ mt: 4 }} >
                            <CardMedia
                                component="img"
                                image="/img/work/instalanes_TMS_Platform_overview.jpg"
                                alt="TMS Illustration"
                            />
                        </Card>
                    </Box>
                </Container>
            </Paper>

            <Divider sx={{ my: 2 }} />

            <Features />

            <Divider sx={{ my: 2 }} />

            <Paper elevation={0} square>
                <Container maxWidth="lg">
                    <Box py={8} >
                        <Grid container spacing={4} mt={4}>
                            <Grid size={{ xs: 12 }} textAlign="left">
                                <Typography variant="h3" gutterBottom>
                                    What our Customers say
                                </Typography>
                                <Typography variant="h5" paragraph>
                                    Real stories from teams streamlining their logistics with Instalanes
                                </Typography>
                            </Grid>
                            {[
                                {
                                    title: 'Fast Implementation',
                                    description: `"It's amazing to see how fast instalanes platform can be set up. Yes, we set it up not in months, weeks but in just 1 day, no kidding, it's a breakthrough"`,
                                    name: 'John Doe',
                                    role: 'Logistics Director at Hewells',
                                },
                                {
                                    title: 'Fast Implementation',
                                    description: `"It's amazing to see how fast instalanes platform can be set up. Yes, we set it up not in months, weeks but in just 1 day, no kidding, it's a breakthrough"`,
                                    name: 'John Doe',
                                    role: 'Logistics Director at Hewells',
                                },
                            ].map((stat, index) => (
                                <Grid key={index} size={{ xs: 12, md: 6 }}>
                                    <Card
                                        elevation={3}
                                        variant="outlined"
                                        sx={{ height: '100%' }}
                                    >
                                        <CardContent>
                                            <Chip
                                                label={stat.title}
                                                variant="outlined"
                                                color="primary"
                                            />
                                            <Typography
                                                variant="body1"
                                                paragraph
                                                fontStyle="italic"
                                                mt={1}
                                            >
                                                {stat.description}
                                            </Typography>
                                            <Box display={'flex'} alignItems="center" gap={2} mt={2}>
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

            <Divider sx={{ my: 2 }} />

            <Paper elevation={0} square>
                <Box py={8}>
                    <Container maxWidth="lg">
                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12 }}>
                                <Typography variant="h3" gutterBottom>
                                    Blog posts
                                </Typography>
                                <Typography variant="h5" paragraph>
                                    Stay updated with our latest articles and insights
                                </Typography>
                            </Grid>
                            {[
                                {
                                    category: 'FREIGHT',
                                    title: 'Deliver 2024 fostering innovation and impact',
                                    date: 'September 11, 2024',
                                    img: '/img/before.png',
                                },
                                {
                                    category: 'FREIGHT',
                                    title: 'Embracing efficiency with TMS implementation',
                                    date: 'August 19, 2024',
                                    img: '/img/before.png',
                                },
                                {
                                    category: 'FREIGHT',
                                    title: 'Freight market update: Q3 – August 2024',
                                    date: 'August 19, 2024',
                                    img: '/img/before.png',
                                },
                            ].map((blog, index) => (
                                <Grid key={index} size={{ xs: 12, md: 4 }}>
                                    <Card elevation={2} variant="outlined">
                                        <CardContent>
                                            <CardMedia
                                                component="img"
                                                height="180"
                                                image="/img/before.png"
                                                alt="green iguana"
                                            />
                                            <Chip
                                                label={blog.category}
                                                variant="outlined"
                                                color="primary"
                                                sx={{ my: 1 }}
                                            />
                                            <Typography variant="h6" component="h3" gutterBottom>
                                                {blog.title}
                                            </Typography>
                                            <Box
                                                display={'flex'}
                                                justifyContent="space-between"
                                                alignItems="center">
                                                <Typography variant="body2" color="text.secondary">
                                                    {blog.date}
                                                </Typography>
                                                <Link href="#">
                                                    <ArrowRightAltIcon />
                                                </Link>
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
                    <Grid container spacing={4} alignItems="center" py={8}>
                        <Grid>
                            <Typography variant="h3" gutterBottom>
                                Transform your logistics with Instalanes TMS
                            </Typography>
                            <Typography variant="h5" paragraph>
                                One platform for every shipment—FCL, FTL, PTL, ODC, and
                                warehouse—helping shippers, carriers, and 3PLs streamline
                                operations and grow faster
                            </Typography>
                            <Button variant="contained" size="large">
                                <CallIcon sx={{ mr: 1 }} />  Contact our experts
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>

            <Divider sx={{ my: 2 }} />

            <Paper elevation={0} square>
                <Container maxWidth="lg">
                    <Box py={8}>
                        <Box mb={4}>
                            <Typography variant="h3" gutterBottom>
                                Let’s Connect
                            </Typography>
                            <Typography variant="h5" paragraph mb={6}>
                                Explore how Instalanes TMS can simplify your operations. We’re here to help you with features, pricing, implementation and support.
                            </Typography>
                        </Box>
                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h4" component="h4" gutterBottom mb={3}>
                                    Get in touch
                                </Typography>
                                <Grid container spacing={3}>
                                    <Grid size={{ xs: 12, sm: 6 }} >
                                        <Card elevation={2}>
                                            <CardActionArea
                                                sx={{
                                                    height: '100%',
                                                    p: 3, position: 'relative',
                                                    '&[data-active]': {
                                                        backgroundColor: 'action.selected',
                                                        '&:hover': {
                                                            backgroundColor: 'action.selectedHover',
                                                        },
                                                    },
                                                }}>
                                                <WhatsAppIcon fontSize="large" />
                                                <Typography variant="h6" gutterBottom>
                                                    Message
                                                </Typography>
                                                <Typography variant="body2"
                                                    color="text.secondary"
                                                    paragraph
                                                    mb={0}
                                                >Drop us a message — team will get back to you</Typography>
                                                <Link href="https://wa.me/919999999999" target="_blank" color="inherit" style={{ position: 'absolute', top: 16, right: 16 }}>
                                                    <ArrowOutwardIcon fontSize='small' />
                                                </Link>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>

                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Card elevation={2}>
                                            <CardActionArea
                                                sx={{
                                                    height: '100%',
                                                    p: 3, position: 'relative',
                                                    '&[data-active]': {
                                                        backgroundColor: 'action.selected',
                                                        '&:hover': {
                                                            backgroundColor: 'action.selectedHover',
                                                        },
                                                    },
                                                }}>
                                                <MonetizationOnIcon fontSize="large" />
                                                <Typography variant="h6" gutterBottom>
                                                    Pricing
                                                </Typography>
                                                <Typography variant="body2"
                                                    color="text.secondary"
                                                    paragraph
                                                    mb={0}
                                                >Get flexible pricing built for every business size</Typography>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>

                                    <Grid size={{ xs: 12, sm: 6 }} >
                                        <Card elevation={2} >
                                            <CardActionArea
                                                sx={{
                                                    height: '100%',
                                                    p: 3, position: 'relative',
                                                    '&[data-active]': {
                                                        backgroundColor: 'action.selected',
                                                        '&:hover': {
                                                            backgroundColor: 'action.selectedHover',
                                                        },
                                                    },
                                                }}>
                                                <Typography variant="h6" gutterBottom display={'flex'} alignItems="center" gap={2}>
                                                    <Avatar
                                                        alt="Priyanka S"
                                                        src="/img/team1.jpg"
                                                        sx={{ width: 50, height: 50 }}
                                                    />   Priyanka S
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    paragraph
                                                    mb={0}>
                                                    Sales Manager
                                                </Typography>
                                                <Link href="#" target="_blank" color="inherit" style={{ position: 'absolute', top: 16, right: 16 }}>
                                                    <ArrowOutwardIcon fontSize='small' />
                                                </Link>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>

                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Card elevation={2} >
                                            <CardActionArea
                                                sx={{
                                                    height: '100%',
                                                    p: 3, position: 'relative',
                                                    '&[data-active]': {
                                                        backgroundColor: 'action.selected',
                                                        '&:hover': {
                                                            backgroundColor: 'action.selectedHover',
                                                        },
                                                    },
                                                }}>
                                                <Typography variant="h6" gutterBottom display={'flex'} alignItems="center" gap={2}>
                                                    <Avatar
                                                        alt="Lucky S"
                                                        src="/img/team2.jpeg"
                                                        sx={{ width: 50, height: 50 }}
                                                    />     Lucky S
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    paragraph
                                                    mb={0}
                                                >
                                                    Sales Manager
                                                </Typography>
                                                <Link href="#" target="_blank" color="inherit" style={{ position: 'absolute', top: 16, right: 16 }}>
                                                    <ArrowOutwardIcon fontSize='small' />
                                                </Link>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h4" component="h2" gutterBottom mb={3}>
                                    Book a Demo - Submit your details
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="First name"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Last name"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField fullWidth label="Company name" variant="outlined" />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            fullWidth
                                            select
                                            label="Role"
                                            variant="outlined"
                                            value={selectedRole}
                                            onChange={(e) => setSelectedRole(e.target.value)}
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
                                            type='number'
                                            inputMode='numeric'
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <TextField
                                                            select
                                                            variant="standard"
                                                            value={countryCode}
                                                            onChange={(e) => setCountryCode(e.target.value)}
                                                            InputProps={{ disableUnderline: true }}
                                                            sx={{
                                                                "& .MuiSelect-select": { paddingRight: "24px" },
                                                                minWidth: 80,
                                                            }}>
                                                            {countryCodes.map((option) => (
                                                                <MenuItem key={option.value} value={option.value}>
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
                                                    <Typography
                                                        variant="caption"
                                                        color="text.secondary"
                                                    >
                                                        reCAPTCHA
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        color="text.secondary"
                                                    >
                                                        Privacy
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        color="text.secondary"
                                                    >
                                                        -
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        color="text.secondary"
                                                    >
                                                        Terms
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <Button variant="contained" size="large" fullWidth>
                                            <CallIcon sx={{ mr: 1 }} /> Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Paper>

            <Divider sx={{ my: 2 }} />

            <Footer />
        </Box >
    );
};

export default TMSLandingPage;