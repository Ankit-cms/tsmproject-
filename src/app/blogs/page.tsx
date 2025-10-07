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
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Header from '../components/Header';
import Footer from '../components/Footer';
const BlogDetail = () => {

    return (
        <>
            <Header />
            <Paper elevation={0} square sx={{ mt: 9 }}>
                <Breadcrumbs aria-label="breadcrumb" sx={{ p: 3 }}>
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Typography sx={{ color: 'text.primary' }}>Blogs</Typography>
                </Breadcrumbs>
                <Divider />
                <Container maxWidth="lg">
                    <Box my={4}>
                        <Typography variant="h3" gutterBottom>
                            Insights and Trends Blog
                        </Typography>
                        <Typography variant="h5" paragraph>
                            Stay updated with our latest articles and insights
                        </Typography>
                    </Box>
                    <Grid container spacing={8}>
                        <Grid size={{ xs: 6 }}>
                            <Card elevation={2} variant="outlined">
                                <CardMedia
                                    component="img"
                                    height="350"
                                    image="/img/blog.jpg"
                                    alt="green iguana"
                                />
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 6 }} alignContent={'center'}>
                            <Chip
                                label={"FREIGHT"}
                                variant="outlined"
                                color="primary"
                                sx={{ mt: 2, mb: 1 }}
                            />
                            <Typography variant="h6" component="h3" gutterBottom>
                                {"Embracing efficiency with TMS implementation"}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" mb={2}>
                                {"September 11, 2024"}
                            </Typography>
                            <Typography paragraph>
                                {"SeptDeliver 2024 marks 22 years of hosting industry leaders, logistics professionals, and technology innovators to discuss the future of freight and transportation. Attendees will gather from Sept. 9 – 11 to gain insight into Uber Freight’s latest products and initiatives, learnember 11, 2024..."}
                            </Typography>
                            <Box>
                                <Link href="/blog-detail" display={'flex'}
                                    justifyContent={'flex-start'}
                                    gap={1}
                                    mt={2}
                                    alignItems="center">
                                    Read more <ArrowRightAltIcon />
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box my={4}>
                        <Typography variant="h4" gutterBottom>
                            Popular Posts
                        </Typography>
                    </Box>
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
                                            color="primary"
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
                </Container>
            </Paper>
            <Divider />
            <Footer />
        </>
    );
};
export default BlogDetail;