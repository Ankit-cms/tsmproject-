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

const BlogDetail = () => {

    return (
        <>
            <Header />
            <Paper elevation={0} square sx={{ mt: 9 }}>
                <Breadcrumbs aria-label="breadcrumb" sx={{ p: 3 }}>
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Typography sx={{ color: 'text.primary' }}>Blog Detail</Typography>
                </Breadcrumbs>
                <Divider />
                <Container maxWidth="lg">
                    <Box py={8}>
                        <Box mb={4}>
                            <Typography variant="h3" component="h1" gutterBottom>
                                Deliver 2024 fostering innovation and impact
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                August 19, 2024
                            </Typography>
                            <Divider sx={{ mt: 2 }} />
                        </Box>
                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 10 }}>
                                <Card elevation={1} sx={{ mb: 4 }}>
                                    <CardMedia
                                        component="img"
                                        image="/img/blog.jpg"
                                        alt="Deliver 2024 Event"
                                        height="450"
                                    />
                                </Card>

                                <Typography variant="body1" paragraph>
                                    Deliver 2024 marks 22 years of hosting industry leaders, logistics professionals, and technology innovators to discuss the future of freight and transportation. Attendees will gather from Sept. 9 – 11 to gain insight into Uber Freight’s latest products and initiatives, learn from industry experts, and connect with peers to share experiences and ideas. Supply chain and logistics professionals are invited to register for the event at uberfreight.com/deliver.
                                </Typography>

                                <Typography variant="body1" paragraph>
                                    New this year is a hands-on workshop for attendees: <Typography component="span" fontWeight="bold">Transforming Logistics with AI</Typography>. As logistics operations continue to evolve, artificial intelligence (AI) presents numerous opportunities to enhance efficiency, reporting, cost-savings, and customer satisfaction. This workshop is designed for attendees who want to participate in discussions and practical exercises to develop innovative ideas for AI implementation in logistics. Space is limited and attendees are encouraged to sign-up after registering for the event.
                                </Typography>

                                <Typography variant="h5" component="h2" gutterBottom mt={4}>
                                    Deliver 2024 sessions this year will also offer key insights, strategic considerations, and current market and economic trends for shippers and logistics professionals including:
                                </Typography>

                                <List>
                                    <ListItem alignItems="flex-start">
                                        <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                                            <Typography color="primary">•</Typography>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <Typography variant="body1" fontWeight="bold">
                                                    Combating fraud with collaboration
                                                </Typography>
                                            }
                                            secondary="Cargo theft and supply chain fraud are making headlines. Hear from industry and law enforcement experts in a fireside chat on new and emerging trends and how to mitigate risks to your supply chain. We will explore actions you can take to insulate your business and supply chains from these emerging threat vectors."
                                        />
                                    </ListItem>

                                    <ListItem alignItems="flex-start">
                                        <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                                            <Typography color="primary">•</Typography>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <Typography variant="body1" fontWeight="bold">
                                                    Embracing AI: Future-proofing supply chains with innovative solutions
                                                </Typography>
                                            }
                                            secondary="Dive into the critical questions and exploratory work Uber Freight is undertaking to help shippers integrate AI into their supply chain strategies. This discussion will provide valuable insights into how you can prepare your legacy supply chain planning and Transportation Management Systems for AI."
                                        />
                                    </ListItem>

                                    <ListItem alignItems="flex-start">
                                        <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                                            <Typography color="primary">•</Typography>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <Typography variant="body1" fontWeight="bold">
                                                    To nearshore or not to nearshore?
                                                </Typography>
                                            }
                                            secondary="Mexico has become one of the United States' biggest trading partners. Manufacturers are choosing to nearshore, or the process of planning and bringing their supply chains back to North America. While this can provide cost savings and economic benefits, potential risks are also involved. Learn best practices for nearshoring and how shippers have seen success with cross-border operations."
                                        />
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Paper>
            <Divider />
            <Footer />
        </>
    );
};
export default BlogDetail;