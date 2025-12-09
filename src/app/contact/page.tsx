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
                textTransform="uppercase"
                color="primary.dark"
                display="flex"
                alignItems="center"
                gap={1}
              >
                Get in touch
              </Typography>
              <Typography variant="h2" paragraph>
                Your Universal Link to Support
                </Typography>
              <Typography variant="body1" fontWeight={400} paragraph>
                We would love to hear from you! Whether you have questions about
                our services, need assistance, or want to explore partnership
                opportunities, our team is here to help. Reach out to us through
                any of the following methods:
              </Typography>
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
