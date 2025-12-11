import * as React from 'react';
import {
  Container,
  Typography,
  Paper,
  Divider,
  CardMedia,
  Grid,
  Breadcrumbs,
  Link,
  Box,
} from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const contact = () => {
  return (
    <>
      <Header />
      <Paper elevation={0} square sx={{ bgcolor: "common.whiteSmoke" }} >
        <Container maxWidth="lg">
         
      <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Grid container spacing={4} alignItems="center" my={2}>
            <Grid size={{ xs: 12, md: 6 }} alignContent={'center'}>
              <Typography
               variant="h6"
                gutterBottom
                color="primary.dark"
                display="flex"
                alignItems="center"
                gap={1}
              >
                Get in touch
              </Typography>
              <Typography variant="h2" paragraph sx={{fontSize: { xs: '1.5rem', md: '3rem' },
}}>
We’re here to connect, support, and help you move forward.                </Typography>
              
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <CardMedia
                component="img"
                image="/img/blog.jpg"
                alt="Deliver 2024 Event"
                height="360"
                 sx={{ borderRadius: 4, boxShadow: 4 }}
              />
            </Grid>
          </Grid>
        </Box>
        </Container>
      
   
      </Paper>
   <ContactForm />
      <Footer />
    </>
  );
};
export default contact;
