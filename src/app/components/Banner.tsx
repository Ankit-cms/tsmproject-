import React from 'react'
import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import ComputerIcon from '@mui/icons-material/Computer';


const Banner = () => {
    return (
        < >
            <Paper elevation={0} square sx={{mt: 8, py: 8}}>
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center" my={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography
                                variant="h3"
                                component="h1" 
                                gutterBottom
                                sx={{ fontSize: { xs: '1.5rem', md: '3rem' } }}
                                mt={2}
                            >
                                Collaborative logistics. Faster decisions. Complete visibility
                            </Typography>
                            <Typography variant="body1" fontWeight={400} paragraph>
                                Powering smarter, faster logistics with a cloud TMS & visibility
                                platform built for 3PLs, Shippers, and Carriers.
                            </Typography>
                            <Button sx={{ mt: 3 }} variant="contained" size="large">
                                <ComputerIcon sx={{ mr: 1 }} /> Schedule a Demo
                            </Button>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <CardMedia
                                component="img"
                                height="400"
                                image="/img/Banner.jpg"
                                alt="Banner Image"
                                sx={{ borderRadius: 4, boxShadow: 4 }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </>
    )
}

export default Banner