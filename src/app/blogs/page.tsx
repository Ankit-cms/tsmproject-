import * as React from 'react';
import {
    Box,
    Container,
    Typography, 
    Card,
    CardContent,
    Paper, 
    Chip, 
    Divider,
    CardMedia, 
    Grid, 
    Breadcrumbs,
    Link,
    Button,
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const BlogDetail = () => {

    return (
      <>
        <Header />

        <Paper elevation={0} square >
          <Container maxWidth="lg">
          <Box sx={{ py: { xs: 4, md: 8 } }}>
              <Typography variant="h6"
                color="primary.dark"
                gutterBottom
                textTransform="uppercase">
                Insights and Trends Blog
              </Typography>
              <Typography  variant="h1"
                component="h1"
                gutterBottom
                sx={{ mt: { md: 2 } }}>
                Stay updated with our latest articles and insights
              </Typography>
            
            <Card>
              <CardContent sx={{p:3}}>
                <Grid container spacing={8}>
                  <Grid size={{ xs: 6 }}>
                    <Card elevation={2} >
                      <CardMedia
                        component="img"
                        height="350"
                        image="/img/blog.jpg"
                        alt="green iguana"
                        sx={{ borderRadius: 4, boxShadow: 4 }}
                      />
                    </Card>
                  </Grid>
                  <Grid size={{ xs: 6 }} alignContent={'center'}>
                    <Chip
                      label={'FREIGHT'}
                      variant="outlined" 
                      sx={{ mt: 2, mb: 1 }}
                    />
                    <Typography variant="h4" component="h3" gutterBottom>
                      {'Embracing efficiency with TMS implementation'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                      {'September 11, 2024'}
                    </Typography>
                     <Typography variant="body1" fontWeight={400} paragraph>
                      {
                        'SeptDeliver 2024 marks 22 years of hosting industry leaders, logistics professionals, and technology innovators to discuss the future of freight and transportation. Attendees will gather from Sept. 9 – 11 to gain insight into Uber Freight’s latest products and initiatives, learnember 11, 2024...'
                      }
                    </Typography>
                      <Box
                display={"flex"}
                gap={1}
                mt={2}
                alignItems={"center"}>

                <Button variant="contained" endIcon={<ArrowForwardIcon />} href="/careers" component="a">
                  View Open Positions
                </Button>
              </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            </Box>
            </Container>
        </Paper>

          <Paper elevation={0} square sx={{ bgcolor: "common.whiteSmoke" }}>
                <Container maxWidth="lg"> 
            <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Typography
                        variant="h6"
                        gutterBottom
                        textTransform="uppercase"
                        color="primary.dark"
                        sx={{ mb: 4 }}
                      >
                Popular Posts
              </Typography>
          

            <Grid container spacing={4} sx={{ pb: 6 }}>
              {/* <Grid size={{ xs: 12 }}></Grid> */}
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
                  img: '/img/before.png',
                },
                {
                  category: 'FREIGHT',
                  title: 'Freight market update: Q3 – August 2024',
                  date: 'August 19, 2024',
                  img: '/img/before.png',
                },
                {
                  category: 'FREIGHT',
                  title: 'Freight market update: Q3 – August 2024',
                  date: 'August 19, 2024',
                  img: '/img/before.png',
                },
                {
                  category: 'FREIGHT',
                  title: 'Freight market update: Q3 – August 2024',
                  date: 'August 19, 2024',
                  img: '/img/before.png',
                },
                {
                  category: 'FREIGHT',
                  title: 'Freight market update: Q3 – August 2024',
                  date: 'August 19, 2024',
                  img: '/img/before.png',
                },
              ].map((blog, index) => (
                <Grid key={index} size={{ xs: 12, md: 4 }}>
                  <Card elevation={2} variant="outlined">
                    <CardContent>
                      <CardMedia
                        component="img"
                        height="180"
                        image="/img/blog.jpg"
                        alt="green iguana"
                      />
                      <Chip
                        label={blog.category}
                        variant="outlined" 
                        sx={{ mt: 2, mb: 1 }}
                      />
                      <Typography variant="h6" component="h3" gutterBottom>
                        {blog.title}
                      </Typography>
                      <Box
                        display={'flex'}
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography variant="body2" color="text.secondary">
                          {blog.date}
                        </Typography>
                        <Link href="/blog-detail">
                          <ArrowRightAltIcon />
                        </Link>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
              </Box>
         </Container>
      </Paper>
     
        <Footer />
      </>
    );
};
export default BlogDetail;