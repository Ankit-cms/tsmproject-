import * as React from 'react';
import {
    Box,
    Chip,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Button from '@mui/material/Button';
import ComputerIcon from '@mui/icons-material/Computer';

const HeroFull = () => {

    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                backgroundImage: 'url("/img/Banner.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    zIndex: 1,
                }
            }}>
            <Box  px={13} sx={{ position: 'relative', zIndex: 2 }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Chip
                            icon={<AutoAwesomeIcon />}
                            label="Switch to Instalanes"
                            variant="outlined"
                            color="primary"
                            sx={{
                                px: 1,
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                borderColor: 'primary.main'
                            }}
                        />
                        <Typography
                            variant="h3"
                            component="h1"
                            color='white'
                            gutterBottom
                            sx={{
                                fontSize: { xs: '2rem', md: '3.5rem' }, 
                                mt: 2
                            }}>
                            Collaborative TMS Platform powering End-to-End Visibility{' '}
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            color='white'>
                            Powering smarter, faster logistics with a cloud TMS &
                            visibility platform built for 3PLs, Shippers, and Carriers.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large">
                            <ComputerIcon sx={{ mr: 1 }} /> Schedule a Demo
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
export default HeroFull;