import * as React from 'react';
import {
    Box, 
    Chip,
    Container,
    Grid,
    Paper,
    Typography,
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Button from '@mui/material/Button';
import ComputerIcon from '@mui/icons-material/Computer';
import CardMedia from '@mui/material/CardMedia';

const Hero = () => {

    return ( 
        <Paper elevation={0} square>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                pt={6}
                pb={1}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center" mt={4}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Chip
                                icon={<AutoAwesomeIcon />}
                                label="Switch to Instalanes"
                                variant="outlined" 
                                sx={{ px: 1 }}
                            />
                            <Typography
                                variant="h3"
                                component="h1"
                                gutterBottom
                                sx={{ fontSize: { xs: '2rem', md: '3.5rem' } }}
                                mt={2}
                            >
                                Collaborative TMS Platform powering End-to-End Visibility{' '}
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Powering smarter, faster logistics with a cloud TMS &
                                visibility platform built for 3PLs, Shippers, and Carriers.
                            </Typography>
                            <Button variant="contained">
                                <ComputerIcon sx={{ mr: 1 }} /> Get Demo
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
    );
};

export default Hero;