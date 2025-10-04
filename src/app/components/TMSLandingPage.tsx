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
    CardMedia
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
import AdbIcon from '@mui/icons-material/Adb';
import FlareIcon from '@mui/icons-material/Flare';

const pages = ['TMS solutions', 'Resources', 'Pricing', 'Contact us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const TMSLandingPage = () => {
    // const theme = useTheme();

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

            <AppBar position="sticky">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <FlareIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                textTransform: 'uppercase',
                            }}>
                            Instalanes
                        </Typography>

                        <Box sx={{ display: { xs: 'inline-flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                                sx={{ px: 0 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <FlareIcon sx={{ display: { xs: 'flex', md: 'none' }, mx: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Instalanes
                        </Typography>
                        <Box sx={{ flexGrow: 1, gap: 2, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}>
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>


            <Paper elevation={0} square>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Container maxWidth="lg">
                        <Grid container spacing={4} alignItems="center" mt={4}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h4" component="h4" gutterBottom sx={{ fontSize: { xs: "1rem", md: "2rem" } }}  >
                                    Switch to Instalanes
                                </Typography>
                                <Typography variant="h3" component="h1" gutterBottom sx={{ fontSize: { xs: "2rem", md: "3rem" } }} >
                                    Transport management system
                                </Typography>
                                <Typography variant="body1" paragraph >
                                    Cloud-based SaaS TMS and visibility platform for 3PLs, Shippers, LSPs, Transporters, and Carriers,
                                    enabling end-to-end efficient transportation logistics operations and collaboration
                                </Typography>
                                <Button variant="contained" size="large" >
                                    Schedule a Demo
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
                            <Typography variant="h5" gutterBottom >
                                Instalanes TMS - the all-in-one unified platform for transportation logistics
                            </Typography>
                            <Typography variant="h6" paragraph>
                                Simplify and digitize FCL, FTL, PTL, ODC, and warehouse shipments with a unified
                                TMS for Shippers, Carriers, 3PLs, and LSPs
                            </Typography>
                        </Box>
                        <Grid container spacing={2}>
                            {[
                                { number: 1, title: 'Dispatch planner', icon: <Dashboard /> },
                                { number: 2, title: 'Transport order', icon: <Receipt /> },
                                { number: 3, title: 'Rates and Carrier', icon: <Analytics /> },
                                { number: 4, title: 'Shipments and tracking', icon: <Visibility /> },
                                { number: 5, title: 'PoD and Billing', icon: <DocumentScanner /> },
                                { number: 6, title: 'Reporting Intelligence', icon: <DataUsage /> }
                            ].map((feature, index) => (
                                <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 2 }} >
                                    <Card elevation={2} sx={{ height: '100%' }}>
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
                    </Box>
                </Container>
            </Paper>

            <Divider sx={{ my: 2 }} />

            <Paper elevation={0} square>
                <Container maxWidth="lg">
                    <Box py={8}>
                        <Box mb={6}>
                            <Typography variant="h5" component="h2" gutterBottom color="primary">
                                Why Instalanes platform
                            </Typography>
                            <Typography variant="h6">
                                Instalanes is a Collaborative TMS platform that helps Business leaders generate real business outcomes, they care for!
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
                                    <Card elevation={3} sx={{ height: '100%' }}>
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
                    <Typography variant="h5" component="h6" gutterBottom color="primary">
                        Solving the big challenge
                    </Typography>
                    <Typography variant="h4" component="h4" gutterBottom>
                        Simplifying the complex manual chaos, digitally
                    </Typography>
                    <Typography variant="h4" component="h1" gutterBottom>
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
                        <Typography variant="h5" component="h2" gutterBottom color="primary" mb={2}>
                            Digital TMS platform solutions
                        </Typography>
                        <Typography variant="h4" component="h2" gutterBottom>
                            Instalanes digitizes your entire transportation process, solving real industry challenges
                        </Typography>
                        <Box mt={2}>
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

            <Paper elevation={0} square>
                <Box py={8}>
                    <Container maxWidth="lg">
                        <Grid container spacing={4} mt={4}>
                            <Grid size={{ xs: 12 }}>
                                <Typography variant="h4" component="h2" gutterBottom textAlign="center">
                                    What our Customer says
                                </Typography>
                            </Grid>
                            {[
                                {
                                    title: 'Fast Implementation',
                                    description: "It's amazing to see how fast instalanes platform can be set up. Yes, we set it up not in months, weeks but in just 1 day, no kidding, it's a breakthrough",
                                    name: 'John Doe',
                                    role: 'Logistics Director at Hewells'
                                },
                                {
                                    title: 'Fast Implementation',
                                    description: "It's amazing to see how fast instalanes platform can be set up. Yes, we set it up not in months, weeks but in just 1 day, no kidding, it's a breakthrough",
                                    name: 'John Doe',
                                    role: 'Logistics Director at Hewells'
                                },
                                {
                                    title: 'Fast Implementation',
                                    description: "It's amazing to see how fast instalanes platform can be set up. Yes, we set it up not in months, weeks but in just 1 day, no kidding, it's a breakthrough",
                                    name: 'John Doe',
                                    role: 'Logistics Director at Hewells'
                                },
                                {
                                    title: 'Fast Implementation',
                                    description: "It's amazing to see how fast instalanes platform can be set up. Yes, we set it up not in months, weeks but in just 1 day, no kidding, it's a breakthrough",
                                    name: 'John Doe',
                                    role: 'Logistics Director at Hewells'
                                },
                            ].map((stat, index) => (
                                <Grid key={index} size={{ xs: 12, md: 6 }}>
                                    <Card elevation={3} sx={{ height: '100%' }}>
                                        <CardContent>
                                            <Typography variant="h6" component="h3" gutterBottom color="primary">
                                                {stat.title}
                                            </Typography>
                                            <Typography variant="body1" paragraph fontStyle="italic">
                                                "{stat.description}"
                                            </Typography>
                                            <Box display={'flex'} alignItems="center" gap={2} mt={2}>
                                                <Avatar alt={stat.name} src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
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
                    </Container>
                </Box>
            </Paper>

            <Divider sx={{ my: 2 }} />

            <Paper elevation={0} square>
                <Box py={8}>
                    <Container maxWidth="lg">
                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12 }}>
                                <Typography variant="h4" component="h2" gutterBottom>
                                    Featured Blogs
                                </Typography>
                                <Typography variant="h6" component="h3" gutterBottom color="primary">
                                    Industries
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
                                    <Card elevation={2}>
                                        <CardContent>
                                            <CardMedia
                                                component="img"
                                                height="180"
                                                image={blog.img}
                                                alt="green iguana"
                                            />
                                            <Typography variant="overline" color="primary" display="block" gutterBottom>
                                                {blog.category}
                                            </Typography>
                                            <Typography variant="h6" component="h3" gutterBottom>
                                                {blog.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {blog.date}
                                            </Typography>
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
                    <Box py={8} textAlign={"center"}>
                        <Typography variant="h4" component="h2" gutterBottom color="primary" mb={2} >
                            Streamline your transportation process and scale with ease — elevate your business performance with Instalanes TMS !
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Instalanes is a Transport management and visibility platform that helps businesses improve their supply chain visibility, collaboration, growth, and efficiency.
                        </Typography>
                        <Button variant="contained" size="large" >
                            Contact our experts
                        </Button>
                    </Box>
                </Container>
            </Paper>

            <Divider sx={{ my: 2 }} />

            <Paper elevation={0} square>
                <Container maxWidth="lg">
                    <Box py={8}>
                        <Box mb={4} textAlign="center">
                            <Typography variant="h4" component="h2" gutterBottom>
                                Get in touch with us
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Interested in learning more about our Transport Management System (TMS) and how it can benefit your business? We'd love to hear from you! Whether you have questions about our features, pricing, or implementation process, our team is here to help.
                            </Typography>
                        </Box>
                        <Grid container spacing={4} mt={4}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h4" component="h2" gutterBottom>
                                    Talk to us
                                </Typography>
                                <Box mb={3}>
                                    <Typography variant="h6" gutterBottom>
                                        Sales Manager
                                    </Typography>
                                    <Typography variant="body1">
                                        Priyanka S
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        Sales Manager
                                    </Typography>
                                    <Typography variant="body1">
                                        Lucky S
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h4" component="h2" gutterBottom>
                                    Submit your details
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField fullWidth label="Full name" variant="outlined" />
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
                                        <Button variant="contained" size="large" fullWidth>
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
            <Paper component="footer" elevation={0} square>
                <Container maxWidth="lg" >
                    <Box py={4}>
                        <Grid container spacing={4} mb={2}>
                            <Grid size={{ md: 4 }}>
                                <Box mb={2} display={'flex'} gap={1} alignItems="center">
                                    <FlareIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                                    <Typography variant="h5" gutterBottom mb={0}>
                                        Installanes
                                    </Typography>
                                </Box>
                                <Typography variant="body2" paragraph>
                                    Instalanes is a Transport management and visibility platform that helps businesses improve their supply chain visibility, collaboration, growth, and efficiency.
                                </Typography>
                            </Grid>
                            <Grid size={{ md: 8 }}>
                                <Grid container spacing={4} mb={2}>
                                    <Grid size={{ sm: 6, md: 3 }}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            Company
                                        </Typography>
                                        <List dense disablePadding>
                                            {['About', 'Careers', 'Terms', 'Privacy policy'].map((item) => (
                                                <ListItem key={item} disablePadding>
                                                    <ListItemText primary={item} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            TMS Capabilities
                                        </Typography>
                                        <List dense disablePadding>
                                            {['Consulting', 'Data analytics', 'Business intelligence', 'Process automation'].map((item) => (
                                                <ListItem key={item} disablePadding>
                                                    <ListItemText primary={item} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            Resources
                                        </Typography>
                                        <List dense disablePadding>
                                            {['Blogs', 'Partnering', 'Pricing - Get Quote', 'Pay here'].map((item) => (
                                                <ListItem key={item} disablePadding>
                                                    <ListItemText primary={item} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            Contact
                                        </Typography>
                                        <List dense disablePadding>
                                            {['Email', 'Phone'].map((item) => (
                                                <ListItem key={item} disablePadding>
                                                    <ListItemText primary={item} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                <Divider />
                <Container maxWidth="lg" >
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 6 }}>

                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="body2" textAlign="center" my={3}>
                                Gravity44/ Copyright © 2024 Installanes.com. All rights reserved.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </Box >
    );
};

export default TMSLandingPage;