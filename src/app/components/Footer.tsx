"use client";
import {
    Box,
    Container,
    Typography,
    Paper,
    List,
    ListItem,
    ListItemText,
    Divider,
    ListItemButton,
} from '@mui/material';
import { Grid } from '@mui/material';
import FlareIcon from '@mui/icons-material/Flare';

const Footer = () => {
    return (
        <Paper component="footer" elevation={0} square>
            <Container maxWidth="lg" >
                <Box py={4}>
                    <Grid container spacing={4} mb={2}>
                        <Grid size={{ md: 4 }}>
                            <Box mb={2} display={'flex'} gap={1} alignItems="center">
                                <FlareIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                                <Typography variant="h4" gutterBottom mb={0}>
                                    Instalanes
                                </Typography>
                            </Box>
                            <Typography variant="body2" paragraph>
                                Instalanes is a Transport management and visibility platform that helps businesses improve their supply chain visibility, collaboration, growth, and efficiency.
                            </Typography>
                        </Grid>
                        <Grid size={{ md: 8 }}>
                            <Grid container spacing={4} mb={2}>
                                <Grid size={{ sm: 6, md: 3 }}>
                                    <Typography variant="h6" fontWeight="600" gutterBottom>
                                        Company
                                    </Typography>
                                    <List dense disablePadding>
                                        {['About', 'Careers', 'Terms', 'Privacy policy'].map((item) => (
                                            <ListItem key={item} disablePadding>
                                                <ListItemButton component="a" href={`/${item.toLowerCase().replace(' ', '-')}`}>
                                                    <ListItemText primary={item} />
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography variant="h6" fontWeight="600" gutterBottom>
                                        TMS Capabilities
                                    </Typography>
                                    <List dense disablePadding>
                                        {['Consulting', 'Data analytics', 'Business intelligence', 'Process automation'].map((item) => (
                                            <ListItem key={item} disablePadding>
                                                <ListItemButton component="a" href={`/${item.toLowerCase().replace(' ', '-')}`}>
                                                    <ListItemText primary={item} />
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography variant="h6" fontWeight="600" gutterBottom>
                                        Resources
                                    </Typography>
                                    <List dense disablePadding>
                                        {['Blogs', 'Faqs', 'Pricing - Get Quote', 'Pay here'].map((item) => (
                                            <ListItem key={item} disablePadding>
                                                <ListItemButton component="a" href={`/${item.toLowerCase().replace(' ', '-')}`}>
                                                    <ListItemText primary={item} />
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography variant="h6" fontWeight="600" gutterBottom>
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
                        <Typography variant="body2" my={3}>
                            Gravity44/ Copyright © 2024 Installanes.com. All rights reserved.
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}></Grid>
                </Grid>
            </Container>
        </Paper>
    );
};

export default Footer;