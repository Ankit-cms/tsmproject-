import * as React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Paper,
  Chip,
  CardMedia,
  Grid,
  Link,
  Button,
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Heading from '../components/Heading';
const BlogDetail = () => {

  return (
    <>
      <Header />

      <Paper elevation={0} square  >
        <Container maxWidth="lg">
          <Box sx={{ py: { xs: 4, md: 8 } }}>



            <Grid container spacing={8}>
              <Grid size={{ xs: 12, md: 6 }} alignContent={'center'}>
                <Typography variant="h6"
                  color="primary.dark"
                  gutterBottom
                  >
                  Insights and Blogs
                </Typography>
                <Typography variant="h1"
                  component="h1"
                  gutterBottom
                  sx={{ mt: { md: 2 } }}>
                  Stay updated with our latest articles and insights
                </Typography>


              </Grid>
              <Grid size={{ xs: 12, md: 6 }} >

                <CardMedia
                  component="img"
                  height="400"
                  image="/img/blog.jpg"
                  alt="green iguana"
                  sx={{ borderRadius: 4, boxShadow: 4 }}
                />

              </Grid>

            </Grid>
          </Box>
        </Container>
      </Paper>
      <Paper elevation={0} square sx={{ bgcolor: "common.whiteSmoke" }} >
        <Container maxWidth="lg">
          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Grid container spacing={8}>
              <Grid size={{ xs: 12, md: 6 }} >

                <CardMedia
                  component="img"
                  height="400"
                  image="/img/blog.jpg"
                  alt="green iguana"
                  sx={{ borderRadius: 4, boxShadow: 4 }}
                />

              </Grid>
              <Grid size={{ xs: 12, md: 6 }} alignContent={'center'}>
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
                    Read more
                  </Button>
                </Box>
              </Grid>


            </Grid>

          </Box>
        </Container>
      </Paper>

      <Paper elevation={0} square >
        <Container maxWidth="lg">
          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Heading primaryText='Popular Posts' secondaryText='The essential reading list featuring our all-time favorite and trending topics.'/>
            <Grid container spacing={4} >
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
                <Grid  key={index} size={{ xs: 12, md: 4 }} >
                  <Card variant="elevation" elevation={2} sx={{ height: "100%" }} >
                    <CardMedia
                      component="img"
                      height="180"
                      image="/img/blog.jpg"
                      alt="green iguana"
                    />
                    <CardContent >

                      <Chip
                        label={blog.category}
                        variant="outlined"
                        sx={{  mb: 1 }}
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