import * as React from 'react';
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
    CardActionArea,
    Stack,
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Breadcrumbs,
    Link,
} from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const contact = () => {

    return (
        <>
            <Header />
            <Paper elevation={0} square sx={{ mt: 9 }}>
                <Breadcrumbs aria-label="breadcrumb" sx={{ p: 3 }}>
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Typography sx={{ color: 'text.primary' }}>Contact Us</Typography>
                </Breadcrumbs>
                <Divider />
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <CardMedia
                            component="img"
                            image="/img/blog.jpg"
                            alt="Deliver 2024 Event"
                            height="360"
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} alignContent={"center"} >
                        <Typography variant="h1" gutterBottom>Get in touch</Typography>
                        <Typography variant="body1" paragraph>
                            We'd love to hear from you! Whether you have questions about our services, need assistance, or want to explore partnership opportunities, our team is here to help. Reach out to us through any of the following methods:
                        </Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Container maxWidth="lg">
                    <Box py={1}>
                        <ContactForm />
                    </Box>
                </Container>
            </Paper>
            <Divider />
            <Footer />
        </>
    );
};
export default contact;