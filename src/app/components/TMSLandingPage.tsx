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

const TMSLandingPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box>
            <AppBar color="default" elevation={0}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <Typography variant="h5" component="div" >
                            instalanes
                        </Typography>
                        <Box flexGrow={1} display={{ xs: 'none', md: 'block' }} textAlign="center">
                            <Button>TMS solutions</Button>
                            <Button>Resources</Button>
                            <Button>Pricing</Button>
                            <Button>Contact us</Button>
                        </Box>
                        <Box>
                            <Button variant="contained" >
                                Get Demo
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Paper elevation={0} square>
                <Box height="60vh" display="flex" alignItems="center" justifyContent="center">
                    <Container maxWidth="lg">
                        <Grid container spacing={4} alignItems="center">
                            <Grid>
                                <Typography variant="h4" component="h4" gutterBottom >
                                    Switch to Instalanes
                                </Typography>
                                <Typography variant="h3" component="h1" gutterBottom>
                                    Transport management system
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Cloud-based SaaS TMS and visibility platform for 3PLs, Shippers, LSPs, Transporters, and Carriers,
                                    enabling end-to-end efficient transportation logistics operations and collaboration
                                </Typography>
                                <Button variant="contained" size="large">
                                    Schedule a Demo
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Paper>
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
                                    <Card elevation={2}>
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
                                    <Card elevation={3}>
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
                            <Card>
                                <CardMedia
                                    component="img"
                                    image="/img/before.png"
                                    alt="TMS Illustration"
                                />
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid container spacing={4} alignItems="center" mt={4}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    image="/img/after.png"
                                    alt="TMS Illustration"
                                />
                            </Card>
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
                            <Card>
                                <CardMedia
                                    component="img"
                                    image="/img/Instalanes-TMS-Process.svg"
                                    alt="TMS Illustration"
                                />
                            </Card>
                        </Box>
                    </Box>
                </Container>
            </Paper>

            <Paper component="footer" elevation={0} square>
                <Container maxWidth="lg">
                    <Box mb={4}>
                        <Typography variant="h5" gutterBottom>
                            Installanes
                        </Typography>
                        <Typography variant="body2" paragraph>
                            Instalanes is a Transport management and visibility platform that helps businesses improve their supply chain visibility, collaboration, growth, and efficiency.
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
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

                    <Divider sx={{ my: 4, bgcolor: 'grey.700' }} />

                    <Typography variant="body2" textAlign="center">
                        Gravity44/ Copyright © 2024 Installanes.com. All rights reserved.
                    </Typography>
                </Container>
            </Paper>
        </Box>
    );
};

export default TMSLandingPage;