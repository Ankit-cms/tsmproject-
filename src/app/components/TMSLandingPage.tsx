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
    useMediaQuery
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
            <AppBar position="static" color="default" elevation={1} sx={{ backgroundColor: '#000', color: '#fff' }}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <Typography variant="h5" component="div">
                            instalanes
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, mx: "auto" }}>
                            <Button color="inherit">TMS solutions</Button>
                            <Button color="inherit">Resources</Button>
                            <Button color="inherit">Pricing</Button>
                            <Button color="inherit">Contact us</Button>
                        </Box>
                        <Box>
                            <Button variant="contained" color="primary">
                                Get Demo
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box
                component="div"
                sx={{
                    position: 'relative',
                    height: '70vh',
                    overflow: 'hidden',
                    color: '#fff',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        zIndex: 1, 
                        background: 'rgba(0,0,0,0.3)',
                        transition: 'opacity 0.4s',
                        pointerEvents: 'none',
                    },
                    '&:hover::before': {
                        opacity: 0.5,
                    }, 
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        zIndex: 0,
                        backgroundImage: 'url(/img/Banner.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        willChange: 'transform',
                        transition: 'transform 0.8s cubic-bezier(0.4,0,0.2,1)',
                    },
                    '&:hover::after': {
                        transform: 'scale(1.09)',
                    }, 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', 
                    zIndex: 2,
                }}>
                <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 2 }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 4,
                        mb: 8
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <Typography variant="h4" component="h4" gutterBottom color='primary'>
                                Switch to Instalanes
                            </Typography>
                            <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
                                Transport management system
                            </Typography>
                            <Typography paragraph>
                                Cloud-based SaaS TMS and visibility platform for 3PLs, Shippers, LSPs, Transporters, and Carriers,
                                enabling end-to-end efficient transportation logistics operations and collaboration
                            </Typography>
                            <Button variant="contained" size="large" sx={{ alignSelf: 'flex-start' }}>
                                Schedule a Demo
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box bgcolor={'#DCDCDC'}>
                <Container maxWidth="lg" sx={{ py: 8 }}>
                    <Box >
                        <Typography variant="h5" gutterBottom color="primary">
                            Instalanes TMS - the all-in-one unified platform for transportation logistics
                        </Typography>
                        <Typography variant="h4" mb={2}>
                            Simplify and digitize FCL, FTL, PTL, ODC, and warehouse shipments with a unified
                            TMS for Shippers, Carriers, 3PLs, and LSPs
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: 1,
                        justifyContent: 'center'
                    }}>
                        {[
                            { number: 1, title: 'Dispatch planner', icon: <Dashboard /> },
                            { number: 2, title: 'Transport order', icon: <Receipt /> },
                            { number: 3, title: 'Rates and Carrier', icon: <Analytics /> },
                            { number: 4, title: 'Shipments and tracking', icon: <Visibility /> },
                            { number: 5, title: 'PoD and Billing', icon: <DocumentScanner /> },
                            { number: 6, title: 'Reporting Intelligence', icon: <DataUsage /> }
                        ].map((feature, index) => (
                            <Box
                                key={index}
                                sx={{
                                    flex: '1 1 calc(16.666% - 16px)',
                                    minWidth: { xs: 'calc(50% - 16px)', sm: 'calc(33.333% - 16px)', md: 'calc(16.666% - 16px)' },
                                    maxWidth: { xs: 'calc(50% - 16px)', sm: 'calc(33.333% - 16px)', md: 'calc(16.666% - 16px)' }
                                }}
                            >
                                <Card elevation={2} sx={{ height: '100%', bgcolor: "#000", borderRadius: 3, color: '#fff' }}>
                                    <CardContent sx={{ textAlign: 'center', p: 2 }}>
                                        <Typography variant="h4" gutterBottom >
                                            {feature.number}
                                        </Typography>
                                        <Typography variant="h5" sx={{ lineHeight: 1 }}>
                                            {feature.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>

            <Box bgcolor={'#F5F5F5'}>
                <Container maxWidth="lg" sx={{ py: 8 }}>
                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" component="h2" gutterBottom color="primary">
                            Why Instalanes platform
                        </Typography>
                        <Typography variant="h4" >
                            Instalanes is a Collaborative TMS platform that helps Business leaders generate real business outcomes, they care for!
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        gap: 3,
                    }}>
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
                            <Box
                                key={index}
                                sx={{
                                    flex: { xs: '1 1 100%', md: '1 1 23%' },
                                    minWidth: { xs: '100%', md: 0 },
                                    maxWidth: { xs: '100%', md: '23%' },
                                    boxSizing: 'border-box'
                                }}
                            >
                                <Card elevation={3} sx={{ height: '100%', borderRadius: 3 }}>
                                    <CardContent sx={{ px: 3, py: 5, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <Typography variant="h3" component="div" gutterBottom>
                                            {stat.value}
                                        </Typography>
                                        <Typography variant="h6" component="h3" gutterBottom fontWeight="medium">
                                            {stat.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, lineHeight: 1.5 }}>
                                            {stat.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography variant="h5" component="h6" gutterBottom color="primary">
                    Solving the big challenge
                </Typography>
                <Typography variant="h4" component="h4" gutterBottom >
                    Simplifying the complex manual chaos, digitally
                </Typography>
                <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
                    What Supply Chain leaders want .. ?
                </Typography>
                <Typography paragraph>
                    Efficient and visible supply chain management is the goal of every business leader. Having a clear understanding of the supply chain and being able to track it in real time is critical for running a successful operation and expanding the business.
                </Typography>
                <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} gap={4} width="100%" alignItems="center" justifyContent="center" sx={{ mt: 4 }}>
                    <Box>
                        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
                            The challenge
                        </Typography>
                        <Typography paragraph>
                            However, managing the supply chain and maintaining visibility across all teams, systems, documents, and process handoffs is extremely complex. Organizations are still relying on emails and phone calls to manage and track.
                        </Typography>
                        <Typography paragraph>
                            This leads to a complex way of working, additional logistics costs, poor experience, and low operational control.
                        </Typography>
                    </Box>
                    <Box> <img src="/img/before.png" alt="TMS Illustration" width={800} height={400} style={{ width: '100%', height: 'auto' }} /> </Box>
                </Box>
                <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} gap={4} width="100%" alignItems="center" justifyContent="center" sx={{ mt: 4 }}>
                    <Box> <img src="/img/after.png" alt="TMS Illustration" width={800} height={400} style={{ width: '100%', height: 'auto' }} /> </Box>
                    <Box>
                        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
                            The Digital Solution
                        </Typography>
                        <Typography paragraph>
                            Currently, there is a need to have an impactful global platform that is easy, smart, and accessible by the masses that keeps everyone on the same page.
                        </Typography>
                        <Typography paragraph>
                            Instalanes platform enhances the ability of supply chain leaders and their teams to make transportation logistics a competitive advantage. With the value proposition offered, your teams can deliver real impact on business outcomes
                        </Typography>
                    </Box>
                </Box>
            </Container>
            <Box bgcolor={'#F5F5F5'}>
                <Container maxWidth="lg" sx={{ py: 8 }}>
                    <Typography variant="h5" component="h2" gutterBottom color="primary" mb={2}>
                        Digital TMS platform solutions
                    </Typography>
                    <Typography variant="h4" component="h2" gutterBottom >
                        Instalanes digitizes your entire transportation process, solving real industry challenges
                    </Typography>
                    <Grid container spacing={4} mt={2}>
                        <img src="/img/Instalanes-TMS-Process.svg" alt="TMS Illustration" width={800} height={400} style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                </Container>
            </Box>
            <Box component="footer" sx={{ bgcolor: '#000', color: '#fff', py: 6 }}>
                <Container maxWidth="lg">
                    <Box mb={4}>
                        <Typography variant="h4" gutterBottom >
                            Installanes
                        </Typography>
                        <Typography variant="body2" color="white" sx={{ mb: 2 }}>
                            Instalanes is a Transport management and visibility platform that helps businesses improve their supply chain visibility, collaboration, growth, and efficiency. The platform helps users to manage and track their supply chain, as well as to access performance insights that help teams make better decisions.
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 4,
                        mb: 0,
                        color: 'white'
                    }}>
                        <Box sx={{ flex: 1 }} color="white" >
                            <Typography variant="body2" mb={2} gutterBottom >
                                Company
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }} color="white" >
                                {['About', 'Careers', 'Terms', 'Privacy policy'].map((item) => (
                                    <Typography
                                        key={item}
                                        variant="body2"
                                        color="white"
                                        sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>

                        <Box sx={{ flex: 1 }}>
                            <Typography variant="body2" mb={2} gutterBottom >
                                TMS Capabilities
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }} color="white" >
                                {['Consulting', 'Data analytics', 'Business intelligence', 'Process automation'].map((item) => (
                                    <Typography
                                        key={item}
                                        variant="body2"
                                        color="white"
                                        sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>

                        <Box sx={{ flex: 1 }}>
                            <Typography variant="body2" mb={2} gutterBottom >
                                Resources
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }} color="white" >
                                {['Blogs', 'Partnering', 'Pricing - Get Quote', 'Pay here'].map((item) => (
                                    <Typography
                                        key={item}
                                        variant="body2"
                                        color="white"
                                        sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>

                        <Box sx={{ flex: 1 }}>
                            <Typography variant="body2" mb={2} gutterBottom >
                                Contact
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }} color="white" >
                                {['Email', 'Phone'].map((item) => (
                                    <Typography
                                        key={item}
                                        variant="body2"
                                        color="white"
                                        sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                    <Box color="white" sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: { xs: 'flex-start', sm: 'center' },
                        gap: 2,
                        pt: 3,
                        borderTop: 1,
                        borderColor: 'divider'
                    }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography variant="body2" color="white">
                                Gravity44/ Copyright © 2024 Installanes.com. All rights reserved.
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box >
    );
};

export default TMSLandingPage;