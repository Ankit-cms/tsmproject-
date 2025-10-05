"use client";
// pages/index.js
import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    AppBar,
    Toolbar,
    IconButton,
    Paper,
    TextField,
    Chip,
    Avatar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Stack,
    useTheme,
    useMediaQuery,
    CardMedia,
    Checkbox
} from '@mui/material';
import { Grid } from '@mui/material';
import {
    Phone,
    Email,
    LocationOn,
    CheckCircle,
    TrendingUp,
    Visibility,
    Groups,
    Analytics,
    Receipt,
    Notifications,
    Dashboard,
    DocumentScanner,
    IntegrationInstructions,
    DataUsage,
    Smartphone,
    Public,
    Speed
} from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import FlareIcon from '@mui/icons-material/Flare';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import InsightsIcon from '@mui/icons-material/Insights';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ComputerIcon from '@mui/icons-material/Computer';
import OutgoingMailIcon from '@mui/icons-material/OutgoingMail';

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

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box>
            {/* Header */}

            <Header />

            <Paper elevation={0} square>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Container maxWidth="lg">
                        <Grid container spacing={4} alignItems="center" mt={4}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Chip icon={<AutoAwesomeIcon />} label="Switch to Instalanes" variant='outlined' color="primary" sx={{ px: 1 }} />
                                <Typography variant="h3" component="h1" gutterBottom sx={{ fontSize: { xs: "2rem", md: "3.5rem" } }} mt={2}>
                                    Transport management system
                                </Typography>
                                <Typography variant="body1" paragraph >
                                    Powering smarter, faster logistics with a cloud TMS & visibility platform built for 3PLs, shippers, and carriers
                                </Typography>
                                <Button variant="contained" size="small" >
                                    <ComputerIcon sx={{ mr: 1 }} fontSize='small' />    Get Demo
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
                        <Box >
                            <Typography variant="h3" gutterBottom >
                                Instalanes TMS — how it works
                            </Typography>
                            <Typography variant="h5" paragraph>
                                Your all-in-one logistics platform. Digitize and simplify FCL, FTL, PTL, ODC, and warehouse shipments in one unified system for shippers, carriers, 3PLs, and LSPs
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
                                <Tab label="Track"  {...a11yProps(5)} />
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
                        <Grid container spacing={4} alignItems="center">
                            {/* <Grid size={{ xs: 12, sm: 6 }} >
                                <Grid container spacing={2}>
                                    {[
                                        { number: 1, title: 'Dispatch planner', icon: <Dashboard /> },
                                        { number: 2, title: 'Transport order', icon: <Receipt /> },
                                        { number: 3, title: 'Rates and Carrier', icon: <Analytics /> },
                                        { number: 4, title: 'Shipments and tracking', icon: <Visibility /> },
                                        { number: 5, title: 'PoD and Billing', icon: <DocumentScanner /> },
                                        { number: 6, title: 'Reporting Intelligence', icon: <DataUsage /> }, 
                                    ].map((feature, index) => (
                                        <Grid key={index} size={{ xs: 12, sm: 4 }} >
                                            <Card elevation={2} variant="outlined" sx={{ height: '100%' }}>
                                                <CardContent sx={{ textAlign: 'center' }}>
                                                    <Typography variant="h4" gutterBottom color="text.primary">
                                                        {feature.number}
                                                    </Typography>
                                                    <Typography variant="body1" color="text.primary">
                                                        {feature.title}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid> */}
                            {/* <Grid size={{ xs: 12, sm: 12 }} >
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="/img/Instalanes-TMS-Process.svg"
                                    alt="TMS Illustration"
                                />
                            </Grid> */}
                        </Grid>
                    </Box>
                </Container>
            </Paper>

            <Divider sx={{ my: 2 }} />

            <Paper elevation={0} square>
                <Container maxWidth="lg">
                    <Box py={8}>
                        <Box mb={6}>
                            <Typography variant="h3" gutterBottom >
                                Why Instalanes?
                            </Typography>
                            <Typography variant="h5" paragraph>
                                A collaborative TMS platform built to deliver the business outcomes that matter to you
                            </Typography>
                        </Box>
                        <Grid container spacing={3}>
                            {[
                                {
                                    value: '9x',
                                    title: 'Visibility',
                                    description: 'Nine-layered visibility gives you unmatched control and understanding of what\'s happening on your network. See everything at a glance.'
                                },
                                {
                                    value: '100%',
                                    title: 'Collaboration',
                                    description: 'Boost your teams productivity and experience. Empower your team, enhance effectiveness of your teams.'
                                },
                                {
                                    value: '~30%',
                                    title: 'Optimization',
                                    description: 'By digitizing your processes, you can eliminate manual tasks and standardize your operations to lower costs.'
                                },
                                {
                                    value: '~2x',
                                    title: 'Growth',
                                    description: 'The network provides opportunities for businesses to expand quickly and help businesses grow rapidly in new geographic areas.'
                                },
                            ].map((stat, index) => (
                                <Grid key={index} size={{ xs: 12, md: 6, lg: 3 }}>
                                    <Card variant="outlined" elevation={3} sx={{ height: '100%' }}>
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

            <Container maxWidth="lg">
                <Box py={8}>
                    <Typography variant="h3" gutterBottom >
                        Solving the big challenge
                    </Typography>
                    <Typography variant="h5" paragraph>
                        Simplifying the complex manual chaos, digitally
                    </Typography>
                    <Typography variant="h5" paragraph>
                        What Supply Chain leaders want .. ?
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Efficient and visible supply chain management is the goal of every business leader. Having a clear understanding of the supply chain and being able to track it in real time is critical for running a successful operation and expanding the business.
                    </Typography>
                    <Grid container spacing={4} alignItems="center" mt={4}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h4" component="h2" gutterBottom>
                                The challenge
                            </Typography>
                            <Typography variant="body1" paragraph>
                                However, managing the supply chain and maintaining visibility across all teams, systems, documents, and process handoffs is extremely complex. Organizations are still relying on emails and phone calls to manage and track.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                This leads to a complex way of working, additional logistics costs, poor experience, and low operational control.
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <CardMedia
                                component="img"
                                image="/img/before.png"
                                alt="TMS Illustration"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} alignItems="center" mt={4}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <CardMedia
                                component="img"
                                image="/img/after.png"
                                alt="TMS Illustration"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h4" component="h2" gutterBottom>
                                The Digital Solution
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Currently, there is a need to have an impactful global platform that is easy, smart, and accessible by the masses that keeps everyone on the same page.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Instalanes platform enhances the ability of supply chain leaders and their teams to make transportation logistics a competitive advantage. With the value proposition offered, your teams can deliver real impact on business outcomes
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Divider sx={{ my: 2 }} />

            <Paper elevation={0} square>
                <Container maxWidth="lg">
                    <Box py={8}>
                        <Typography variant="h3" gutterBottom >
                            Digital TMS platform solutions
                        </Typography>
                        <Typography variant="h5" paragraph>
                            Instalanes digitizes your entire transportation process, solving real industry challenges
                        </Typography>
                        <Box mt={5}>
                            <CardMedia
                                component="img"
                                image="/img/Instalanes-TMS-Process.svg"
                                alt="TMS Illustration"
                            />
                        </Box>
                    </Box>
                </Container>
            </Paper>

            <Divider sx={{ my: 2 }} />

            <Features />

            <Divider sx={{ my: 2 }} />

            <Paper elevation={0} square>
                <Box py={8} px={4}>
                    <Grid container spacing={4} mt={4}>
                        <Grid size={{ xs: 12 }} textAlign="center">
                            <Typography variant="h3" gutterBottom>
                                Trusted by Logistics Leaders
                            </Typography>
                            <Typography variant="h5" paragraph>
                                Discover how Instalanes TMS helps shippers, carriers, and 3PLs streamline operations, reduce costs, and gain full visibility
                            </Typography>
                        </Grid>
                        {[
                            {
                                title: 'Fast Implementation',
                                description: `"It's amazing to see how fast instalanes platform can be set up. Yes, we set it up not in months, weeks but in just 1 day, no kidding, it's a breakthrough"`,
                                name: 'John Doe',
                                role: 'Logistics Director at Hewells'
                            },
                            {
                                title: 'Fast Implementation',
                                description: `"It's amazing to see how fast instalanes platform can be set up. Yes, we set it up not in months, weeks but in just 1 day, no kidding, it's a breakthrough"`,
                                name: 'John Doe',
                                role: 'Logistics Director at Hewells'
                            },
                            {
                                title: 'Fast Implementation',
                                description: `"It's amazing to see how fast instalanes platform can be set up. Yes, we set it up not in months, weeks but in just 1 day, no kidding, it's a breakthrough"`,
                                name: 'John Doe',
                                role: 'Logistics Director at Hewells'
                            },
                        ].map((stat, index) => (
                            <Grid key={index} size={{ xs: 12, md: 4 }}>
                                <Card elevation={3} variant="outlined" sx={{ height: '100%' }}>
                                    <CardContent>
                                        <Chip label={stat.title} variant="outlined" color="primary" />
                                        <Typography variant="body1" paragraph fontStyle="italic" mt={1}>
                                            {stat.description}
                                        </Typography>
                                        <Box display={'flex'} alignItems="center" gap={2} mt={2}>
                                            <Avatar alt={stat.name} src="/static/images/avatar/1.jpg" sx={{ width: 50, height: 50 }} />
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
                                    img: '/img/before.png'
                                },
                                {
                                    category: 'FREIGHT',
                                    title: 'Freight market update: Q3 – August 2024',
                                    date: 'August 19, 2024',
                                    img: '/img/before.png'
                                }
                            ].map((blog, index) => (
                                <Grid key={index} size={{ xs: 12, md: 4 }}>
                                    <Card elevation={2} variant="outlined">
                                        <CardContent>
                                            <CardMedia
                                                component="img"
                                                height="180"
                                                image={blog.img}
                                                alt="green iguana"
                                            />
                                            <Chip label={blog.category} variant="outlined" color="primary" sx={{ my: 1 }} />
                                            <Typography variant="h6" component="h3" gutterBottom>
                                                {blog.title}
                                            </Typography>
                                            <Box display={'flex'} justifyContent="space-between" alignItems="center">
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
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography variant="h3" gutterBottom>
                                Transform your logistics with Instalanes TMS
                            </Typography>
                            <Typography variant="h5" paragraph>
                                One platform for every shipment—FCL, FTL, PTL, ODC, and warehouse—helping shippers, carriers, and 3PLs streamline operations and grow faster
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }} textAlign="end">
                            <Button variant="contained" size="large">
                                Contact
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>

            <Divider sx={{ my: 2 }} />

            <Paper elevation={0} square>
                <Container maxWidth="lg">
                    <Box py={8}>
                        <Box mb={4} >
                            <Typography variant="h3" gutterBottom>
                                Get in touch with us
                            </Typography>
                            <Typography variant="h5" paragraph mb={6}>
                                Interested in learning more about our Transport Management System (TMS) and how it can benefit your business? We would love to hear from you! Whether you have questions about our features, pricing, or implementation process, our team is here to help.
                            </Typography>
                        </Box>
                        <Grid container spacing={4} >
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h4" component="h4" gutterBottom mb={3}>
                                    Contact
                                </Typography>
                                <Grid container spacing={3}>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Card elevation={2} variant="outlined">
                                            <CardContent>
                                                <WhatsAppIcon fontSize="large" />
                                                <Typography variant="h6" gutterBottom>
                                                    Message
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Card elevation={2} variant="outlined">
                                            <CardContent>
                                                <MonetizationOnIcon fontSize="large" />
                                                <Typography variant="h6" gutterBottom>
                                                    Pricing
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Card elevation={2} variant="outlined">
                                            <CardContent>
                                                <Typography variant="h6" gutterBottom>
                                                    Priyanka S
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" paragraph>
                                                    Sales Manager
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Card elevation={2} variant="outlined">
                                            <CardContent>
                                                <Typography variant="h6" gutterBottom>
                                                    Lucky S
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" paragraph>
                                                    Sales Manager
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h4" component="h2" gutterBottom mb={3}>
                                    Submit
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 6 }}>
                                        <TextField fullWidth label="First name" variant="outlined" />
                                    </Grid>
                                    <Grid size={{ xs: 6 }}>
                                        <TextField fullWidth label="Last name" variant="outlined" />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField fullWidth label="Email" variant="outlined" />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField fullWidth label="+91 Mobile number" variant="outlined" />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField fullWidth label="Platform demo" variant="outlined" />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField fullWidth label="Message" multiline rows={4} variant="outlined" />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <Box display="flex" alignItems="center" gap={2} p={2} border={1} borderColor="grey.300" borderRadius={1}>
                                            <Checkbox size='large' />
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
                                            Get Call Back
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