'use client';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Fab,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  MenuItem,
  Paper,
  Rating,
  TextField,
  Typography,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import RoofingOutlinedIcon from '@mui/icons-material/RoofingOutlined';
import React, { useState } from 'react';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import {
  Assignment,
  Verified,
  AccountBalance,
  Business,
  Phone,
  Restaurant,
  SpaOutlined,
  Done,
  FavoriteBorderOutlined,
  Favorite,
  CallOutlined,
  ShowChartOutlined,
} from '@mui/icons-material';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import Footer from '../components/Footer';

const galleryItems = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
    title: 'Main Entrance',
    description: 'Grand entrance with modern design',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    title: 'Living Room',
    description: 'Spacious living area',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
    title: 'Swimming Pool',
    description: 'Infinity pool with views',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    title: 'Master Bedroom',
    description: 'Luxurious master suite',
  },
];
const PropertyDetails = () => {
  const [countryCode, setCountryCode] = useState<string>('+91');
  const [value, setValue] = React.useState<number | null>(2);
  const [favourite, setFavourite] = useState(false);

  const countryCodes = [
    { value: '+91', label: 'India (+91)' },
    { value: '+1', label: 'USA (+1)' },
    { value: '+44', label: 'UK (+44)' },
    { value: '+61', label: 'Australia (+61)' },
  ];

  const handleFavourite = () => {
    setFavourite(!favourite);
  };

  const clearanceItems = [
    {
      icon: <Assignment />,
      label: 'RERA',
      status: 'Approved',
      description: 'Real Estate Regulatory Authority',
    },
    {
      icon: <Verified />,
      label: 'Occupancy Certificate',
      status: 'Available',
      description: 'Building Completion Certificate',
    },
    {
      icon: <AccountBalance />,
      label: 'Government Bank loan',
      status: 'Approved',
      description: 'Public Sector Bank Financing',
    },
    {
      icon: <Business />,
      label: 'Private Bank loan',
      status: 'Approved',
      description: 'Private Bank Financing',
    },
  ];
  const consultant = {
    name: 'Darshini Patil',
    company: 'COMPANY NAME',
    location: 'India',
    rating: 0.0,
    reviews: 0,
  };
  const projectData = [
    {
      icon: <MapsHomeWorkOutlinedIcon />,
      title: 'Towers',
      subtitle: 'Number of buildings in the project',
      value: '7',
    },
    {
      icon: <BusinessOutlinedIcon />,
      title: 'Floors',
      subtitle: 'Range of floors across buildings',
      value: '15-25',
    },
    {
      icon: <CropSquareOutlinedIcon />,
      title: 'Area',
      subtitle: 'Total project area',
      value: '24 Acres',
    },
    {
      icon: <ApartmentOutlinedIcon />,
      title: 'Units',
      subtitle: 'Total number of units',
      value: '56',
    },
  ];

  const unitPlans = [
    {
      type: 'Rt',
      category: 'Studio apartment',
      title: '1 BHK',
      size: 240,
      price: 56.2,
      rate: 234,
    },
    {
      type: 'Rt',
      category: 'Compact apartment',
      title: '2 BHK',
      size: 420,
      price: 92.8,
      rate: 221,
    },
    {
      type: 'Rt',
      category: 'Premium apartment',
      title: '3 BHK',
      size: 620,
      price: 132.4,
      rate: 214,
    },
  ];

  const amenities = [
    {
      title: 'Swimming Pool',
      icon: <PoolIcon fontSize="small" />,
      rating: 5,
    },
    {
      title: 'Gym',
      icon: <FitnessCenterIcon fontSize="small" />,
      rating: 4,
    },
    {
      title: 'Spa',
      icon: <SpaOutlined fontSize="small" />,
      rating: 5,
    },
    {
      title: 'Restaurant',
      icon: <Restaurant fontSize="small" />,
      rating: 4,
    },
    // {
    //   title: 'Cycling path',
    //   icon: <DirectionsBikeOutlined />,
    //   rating: 5,
    // },
    // {
    //   title: 'Healthcare',
    //   icon: <HealthAndSafetyOutlined />,
    //   rating: 4,
    // },
  ];

  const nearbyFacilities = [
    'Jaypee Public School 1.7 Km',
    'Amity University 3.4 Km',
    'Akshardham Temple 33 Min',
    'HCL Technologies 2.4 Km',
    'Jaypee Hospital 4.5 Km',
  ];

  return (
    <Box>
      {/* <Header /> */}

      <Container maxWidth="lg">
        <Paper
          square
          sx={{ p: 2, backgroundColor: 'transparent' }}
          elevation={0}
        >
          <Card variant="outlined" sx={{ mb: 2, position: 'relative' }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }} sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/195291012.jpg?k=822fa4ebdd400344fa3d4dbb19a7bff6f9a6187e255f4963d2d9190b703991bd&o=&hp=1"
                  alt="property"
                  sx={{
                    objectFit: 'cover',
                    maxHeight: 400,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                  }}
                >
                  <IconButton
                    sx={{ boxShadow: 1, backgroundColor: 'white' }}
                    size="large"
                    onClick={handleFavourite}
                  >
                    {favourite ? (
                      <Favorite color="error" />
                    ) : (
                      <FavoriteBorderOutlined />
                    )}
                  </IconButton>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} sx={{ p: 2 }}>
                <Grid container spacing={2}>
                  <Grid size={8}>
                    <Typography variant="h4" gutterBottom>
                      Brigade Taj
                    </Typography>
                    <Box display={'flex'} gap={1} mb={2}>
                      <IconButton aria-label="location">
                        <LocationPinIcon fontSize="small" />
                      </IconButton>
                      <Typography variant="h6">
                        Worli, Mumbai, Maharashtra
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={4}>
                    <Card variant="outlined">
                      <CardMedia
                        component="img"
                        src="https://upload.wikimedia.org/wikipedia/en/5/50/Prestige_Group.svg"
                        alt="company logo"
                        sx={{
                          height: 96,
                          objectFit: 'contain',
                          width: '100%',
                          mb: 1,
                        }}
                      />
                    </Card>
                  </Grid>
                </Grid>

                <Grid
                  container
                  mt={2}
                  sx={{
                    '--Grid-borderWidth': '1px',
                    borderTop: 'var(--Grid-borderWidth) solid',
                    borderLeft: 'var(--Grid-borderWidth) solid',
                    borderColor: 'divider',
                    '& > div': {
                      borderRight: 'var(--Grid-borderWidth) solid',
                      borderBottom: 'var(--Grid-borderWidth) solid',
                      borderColor: 'divider',
                    },
                  }}
                >
                  {[
                    {
                      title: 'Residential',
                      icon: <RoofingOutlinedIcon fontSize="small" />,
                      subtitle: 'Ultra premium 3, 4, 5 BHK apartments',
                    },
                    {
                      title: 'Distance',
                      icon: <ShowChartOutlined fontSize="small" />,
                      subtitle: '5 KMs, 20 mins from New Airport, Noida',
                    },
                    {
                      title: 'Status',
                      icon: <HomeWorkOutlinedIcon fontSize="small" />,
                      subtitle: 'New Launch',
                    },
                    {
                      title: '2.9 Cr+',
                      icon: <CurrencyRupeeOutlinedIcon fontSize="small" />,
                      subtitle: 'Price between ₹ 2.9 Cr - ₹ 5.5 Cr',
                    },
                  ].map((brand) => (
                    <Grid key={brand.title} size={6}>
                      <Card elevation={0} sx={{ p: 2, height: '100%' }}>
                        {/* Main flex container: icon left, text right */}
                        <Box display="flex" alignItems="flex-start" gap={1.5}>
                          {/* Icon */}
                          <Box display="flex" alignItems="center" mt={0.5}>
                            <IconButton
                              aria-label="delete"
                              sx={{ boxShadow: 1 }}
                            >
                              {brand.icon}
                            </IconButton>
                          </Box>

                          <Box>
                            <Typography variant="h6" fontWeight="500">
                              {brand.title}
                            </Typography>
                            <Typography variant="subtitle2">
                              {brand.subtitle}
                            </Typography>
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Card>
          <Grid size={12} sx={{ mb: 2 }}>
            <Card variant="outlined" sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                About Bridge Taj
              </Typography>
              <Typography variant="body2">
                Brigade Group presents Brigade Taj, an epitome of luxury living
                that redefines premium residential experiences. Nestled in prime
                locations, these developments showcase world-class architecture
                and sophisticated design aesthetics. With uncompromising quality
                and attention to detail, Brigade Taj offers exclusive amenities
                and impeccable services. Each project embodies the perfect blend
                of timeless elegance and contemporary comforts. Creating
                landmark addresses for those who seek nothing but extraordinary
                living standards.
              </Typography>

              <Typography
                textAlign={'end'}
                color="primary"
                sx={{ cursor: 'pointer' }}
              >
                Read More
              </Typography>
            </Card>
          </Grid>
          <Grid container spacing={2} sx={{ position: 'relative' }}>
            {/* Left Content Column */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Grid container spacing={2}>
                <Grid size={12}>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 1.5,
                      overflowX: 'auto',
                      scrollbarWidth: 'none',
                      '&::-webkit-scrollbar': { display: 'none' },
                    }}
                  >
                    {galleryItems.map((item) => (
                      <Card
                        key={item.id}
                        sx={{
                          minWidth: 280,
                          flexShrink: 0,
                        }}
                        variant="outlined"
                      >
                        <CardMedia
                          component="img"
                          height="180"
                          image={item.img}
                          alt={item.title}
                        />
                      </Card>
                    ))}
                  </Box>
                </Grid>
                <Grid size={12}>
                  <Card variant="outlined" sx={{ height: '100%' }}>
                    <Box sx={{ px: 3, py: 2 }}>
                      <Typography variant="h6">Project detail</Typography>
                    </Box>

                    <Grid
                      container
                      sx={{
                        borderTop: '1px solid',
                        borderColor: 'divider',
                        '& > div': {
                          borderRight: '1px solid',
                          borderBottom: '1px solid',
                          borderColor: 'divider',
                        },
                      }}
                    >
                      {[
                        {
                          title: 'Builder',
                          icon: <RoofingOutlinedIcon fontSize="small" />,
                          subtitle: 'Brigade',
                        },
                        {
                          title: 'Performance',
                          icon: <ShowChartOutlined fontSize="small" />,
                          subtitle: '4.3',
                        },
                        {
                          title: 'Score',
                          icon: <HomeWorkOutlinedIcon fontSize="small" />,
                          subtitle: '127',
                        },
                        {
                          title: 'Value for Money',
                          icon: <CurrencyRupeeOutlinedIcon fontSize="small" />,
                          subtitle: '4.5',
                        },
                      ].map((brand) => (
                        <Grid
                          key={brand.title}
                          size={6}
                          sx={{
                            '&:nth-of-type(2n)': { borderRight: 'none' },
                            '&:nth-last-of-type(-n+2)': {
                              borderBottom: 'none',
                            },
                          }}
                        >
                          <Box sx={{ p: 2, height: '100%' }}>
                            <Box display="flex" alignItems="center" gap={1.5}>
                              <IconButton size="small" sx={{ boxShadow: 1 }}>
                                {brand.icon}
                              </IconButton>
                              <Box>
                                <Typography variant="h6" fontWeight={500}>
                                  {brand.title}
                                </Typography>
                                <Typography variant="subtitle2">
                                  {brand.subtitle}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Card>
                </Grid>

                <Grid size={12}>
                  <Card variant="outlined" sx={{ height: '100%' }}>
                    <Box sx={{ px: 3, py: 2 }}>
                      <Typography variant="h6">Project Layout</Typography>
                    </Box>
                    <Grid
                      container
                      sx={{
                        borderTop: '1px solid',
                        borderColor: 'divider',
                        '& > div': {
                          borderRight: '1px solid',
                          borderBottom: '1px solid',
                          borderColor: 'divider',
                        },
                      }}
                    >
                      {projectData.map((brand) => (
                        <Grid
                          key={brand.title}
                          size={6}
                          sx={{
                            '&:nth-of-type(2n)': {
                              borderRight: 'none',
                            },
                            '&:nth-last-of-type(-n+2)': {
                              borderBottom: 'none',
                            },
                          }}
                        >
                          <Box sx={{ p: 2, height: '100%' }}>
                            <Box
                              display="flex"
                              alignItems="flex-start"
                              gap={1.5}
                            >
                              <IconButton
                                aria-label="icon"
                                sx={{ boxShadow: 1 }}
                              >
                                {brand.icon}
                              </IconButton>
                              <Box>
                                <Typography variant="h6" fontWeight={500}>
                                  {brand.title}
                                </Typography>
                                <Typography variant="subtitle2">
                                  {brand.subtitle}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Card>
                </Grid>

                <Grid size={12}>
                  <Grid container spacing={2}>
                    <Grid container size={12}>
                      <Grid size={12}>
                        <Card variant="outlined" sx={{ height: '100%' }}>
                          <Box sx={{ px: 3, py: 2 }}>
                            <Typography variant="h6">
                              Nearby Facilities
                            </Typography>
                          </Box>
                          <Divider />
                          <Box sx={{ p: 2 }}>
                            <Grid container spacing={2}>
                              {nearbyFacilities.map((facility, index) => (
                                <Grid key={index} size={6}>
                                  <Box display={'flex'} gap={1}>
                                    <Done fontSize="small" />
                                    <Typography variant="body2">
                                      {facility}
                                    </Typography>
                                  </Box>
                                </Grid>
                              ))}
                            </Grid>
                          </Box>
                        </Card>
                      </Grid>

                      <Grid size={12}>
                        <Card variant="outlined" sx={{ height: '100%' }}>
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.976583378129!2d77.6198227!3d12.973349499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1686b281d2a3%3A0xfe17a276bcf050c5!2sTaj%20MG%20Road%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1760128405884!5m2!1sen!2sin"
                            width="100%"
                            height="329"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="project-location"
                          />
                        </Card>
                      </Grid>
                    </Grid>

                    <Grid size={12}>
                      <Card variant="outlined" sx={{ height: '100%' }}>
                        <Box sx={{ px: 3, py: 2 }}>
                          <Typography variant="h6">Amenities</Typography>
                        </Box>
                        <Grid
                          container
                          sx={{
                            borderTop: '1px solid',
                            borderColor: 'divider',
                            '& > div': {
                              borderRight: '1px solid',
                              borderBottom: '1px solid',
                              borderColor: 'divider',
                            },
                          }}
                        >
                          {amenities.map((brand) => (
                            <Grid
                              key={brand.title}
                              size={6}
                              sx={{
                                '&:nth-of-type(2n)': {
                                  borderRight: 'none',
                                },
                                '&:nth-last-of-type(-n+2)': {
                                  borderBottom: 'none',
                                },
                              }}
                            >
                              <Box sx={{ p: 2, height: '100%' }}>
                                <Box
                                  display="flex"
                                  alignItems="flex-start"
                                  gap={1.5}
                                >
                                  <IconButton
                                    aria-label="icon"
                                    sx={{ boxShadow: 1 }}
                                  >
                                    {brand.icon}
                                  </IconButton>
                                  <Box>
                                    <Typography variant="h6" fontWeight={500}>
                                      {brand.title}
                                    </Typography>
                                    <Rating
                                      name="read-only"
                                      size="small"
                                      value={brand.rating}
                                      readOnly
                                    />
                                  </Box>
                                </Box>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      </Card>
                    </Grid>

                    <Grid size={12}>
                      <Card variant="outlined">
                        <Box sx={{ px: 3, py: 2 }}>
                          <Typography variant="h6">Unit Plans</Typography>
                        </Box>
                        <Divider />

                        <Grid container spacing={2} sx={{ p: 2 }}>
                          {unitPlans.map((plan, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                              <Card variant="outlined" sx={{ height: '100%' }}>
                                <CardContent>
                                  <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                  >
                                    {plan.category}
                                  </Typography>
                                  <Typography variant="h6" gutterBottom>
                                    {plan.title}
                                  </Typography>

                                  <Typography variant="body2">
                                    Type: {plan.type}
                                  </Typography>
                                  <Typography variant="body2">
                                    Size: {plan.size} sq.ft
                                  </Typography>
                                  <Typography variant="body2">
                                    Price: ₹{plan.price} Lakh
                                  </Typography>
                                  <Typography variant="body2">
                                    Rate: ₹{plan.rate} /sq.ft
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                          ))}
                        </Grid>
                      </Card>
                    </Grid>

                    <Grid size={12}>
                      <Box
                        sx={{
                          display: 'flex',
                          gap: 1.5,
                          overflowX: 'auto',
                          scrollbarWidth: 'none',
                          '&::-webkit-scrollbar': { display: 'none' },
                        }}
                      >
                        {galleryItems.map((item) => (
                          <Card
                            key={item.id}
                            sx={{ minWidth: 280, flexShrink: 0 }}
                            variant="outlined"
                          >
                            <CardMedia
                              component="img"
                              height="180"
                              image={item.img}
                              alt={item.title}
                            />
                          </Card>
                        ))}
                      </Box>
                    </Grid>

                    <Grid size={12}>
                      <Card variant="outlined" sx={{ height: '100%' }}>
                        <Box sx={{ px: 3, py: 2 }}>
                          <Typography variant="h6">
                            Regulatory and Clearance
                          </Typography>
                        </Box>
                        <Grid
                          container
                          sx={{
                            borderTop: '1px solid',
                            borderColor: 'divider',
                            '& > div': {
                              borderRight: '1px solid',
                              borderBottom: '1px solid',
                              borderColor: 'divider',
                            },
                          }}
                        >
                          {clearanceItems.map((brand) => (
                            <Grid
                              key={brand.label}
                              size={6}
                              sx={{
                                '&:nth-of-type(2n)': {
                                  borderRight: 'none',
                                },
                                '&:nth-last-of-type(-n+2)': {
                                  borderBottom: 'none',
                                },
                              }}
                            >
                              <Box sx={{ p: 2, height: '100%' }}>
                                <Box
                                  display="flex"
                                  alignItems="flex-start"
                                  gap={1.5}
                                >
                                  <IconButton
                                    aria-label="icon"
                                    sx={{ boxShadow: 1 }}
                                  >
                                    {brand.icon}
                                  </IconButton>
                                  <Box>
                                    <Typography variant="h6" fontWeight={500}>
                                      {brand.label}
                                    </Typography>
                                    <Typography variant="subtitle2">
                                      {brand.description}
                                    </Typography>
                                  </Box>
                                </Box>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      </Card>
                    </Grid>

                    <Grid size={12}>
                      <Card variant="outlined" sx={{ height: '100%' }}>
                        <Box sx={{ px: 3, py: 2 }}>
                          <Typography variant="h6">Final assessment</Typography>
                        </Box>
                        <Divider />
                        <Box sx={{ p: 2 }}>
                          <Grid container spacing={2}>
                            {/* Overall Score */}
                            <Grid size={4}>
                              <Card
                                sx={{
                                  height: '100%',
                                  p: 2,
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignContent: 'center',
                                }}
                                variant="outlined"
                              >
                                <Box
                                  sx={{
                                    position: 'relative',
                                    display: 'inline-flex',
                                    margin: '0 auto',
                                  }}
                                >
                                  <CircularProgress
                                    variant="determinate"
                                    value={100}
                                    size={80}
                                    thickness={4}
                                    sx={{
                                      color: (theme) => theme.palette.grey[200],
                                      '& .MuiCircularProgress-circle': {
                                        transition: 'none',
                                      },
                                    }}
                                  />
                                  <CircularProgress
                                    variant="determinate"
                                    value={74}
                                    size={80}
                                    thickness={4}
                                    sx={{
                                      position: 'absolute',
                                      left: 0,
                                      '& .MuiCircularProgress-circle': {
                                        transition: 'none',
                                      },
                                    }}
                                  />
                                  <Box
                                    sx={{
                                      top: 0,
                                      left: 0,
                                      bottom: 0,
                                      right: 0,
                                      position: 'absolute',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      flexDirection: 'column',
                                    }}
                                  >
                                    <Typography
                                      variant="h6"
                                      component="div"
                                      fontWeight="bold"
                                    >
                                      74
                                    </Typography>
                                  </Box>
                                </Box>
                                <Typography textAlign={'center'} sx={{ mt: 1 }}>
                                  Overall Score
                                </Typography>
                                <Typography
                                  variant="body2"
                                  textAlign={'center'}
                                  color="text.secondary"
                                >
                                  7.4 / 10
                                </Typography>
                              </Card>
                            </Grid>

                            <Grid container spacing={2} size={8}>
                              {[
                                {
                                  name: 'Performance',
                                  value: 90,
                                  score: '9 / 10',
                                },
                                {
                                  name: 'Layout',
                                  value: 30,
                                  score: '3 / 10',
                                },
                                {
                                  name: 'Location',
                                  value: 80,
                                  score: '8 / 10',
                                },
                                {
                                  name: 'Value for Money',
                                  value: 80,
                                  score: '8 / 10',
                                },
                                {
                                  name: 'Amenities',
                                  value: 70,
                                  score: '7 / 10',
                                },
                                {
                                  name: 'Regulatory',
                                  value: 90,
                                  score: '9 / 10',
                                },
                              ].map((metric) => (
                                <Grid size={4} key={metric.name}>
                                  <Card
                                    sx={{
                                      height: '100%',
                                      p: 2,
                                      display: 'flex',
                                      flexDirection: 'column',
                                      justifyContent: 'center',
                                      alignContent: 'center',
                                    }}
                                    variant="outlined"
                                  >
                                    <Box
                                      sx={{
                                        position: 'relative',
                                        display: 'inline-flex',
                                        margin: '0 auto',
                                      }}
                                    >
                                      <CircularProgress
                                        variant="determinate"
                                        value={100}
                                        size={60}
                                        thickness={4}
                                        sx={{
                                          color: (theme) =>
                                            theme.palette.grey[200],
                                          '& .MuiCircularProgress-circle': {
                                            transition: 'none', // Remove any transitions
                                          },
                                        }}
                                      />
                                      {/* Foreground progress */}
                                      <CircularProgress
                                        variant="determinate"
                                        value={metric.value}
                                        size={60}
                                        thickness={4}
                                        sx={{
                                          position: 'absolute',
                                          left: 0,
                                          '& .MuiCircularProgress-circle': {
                                            transition: 'none', // Remove any transitions
                                          },
                                        }}
                                      />
                                      <Box
                                        sx={{
                                          top: 0,
                                          left: 0,
                                          bottom: 0,
                                          right: 0,
                                          position: 'absolute',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                        }}
                                      >
                                        <Typography
                                          variant="caption"
                                          component="div"
                                          fontWeight="bold"
                                        >
                                          {metric.value}
                                        </Typography>
                                      </Box>
                                    </Box>
                                    <Typography
                                      variant="body2"
                                      textAlign={'center'}
                                      sx={{ mt: 1 }}
                                    >
                                      {metric.name}
                                    </Typography>
                                    <Typography
                                      variant="caption"
                                      textAlign={'center'}
                                      color="text.secondary"
                                    >
                                      {metric.score}
                                    </Typography>
                                  </Card>
                                </Grid>
                              ))}
                            </Grid>
                          </Grid>
                        </Box>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* Right Sticky Column */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  position: 'sticky',
                  top: 90,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Card variant="outlined">
                  <CardMedia
                    component="img"
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/195291012.jpg?k=822fa4ebdd400344fa3d4dbb19a7bff6f9a6187e255f4963d2d9190b703991bd&o=&hp=1"
                    alt="property"
                    sx={{
                      maxHeight: 180,
                      objectFit: 'cover',
                    }}
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h5" gutterBottom>
                      Brigade Taj
                    </Typography>
                    <Box display="flex" alignItems="center" gap={0} mb={1}>
                      <IconButton>
                        <LocationPinIcon fontSize="small" />
                      </IconButton>
                      <Typography>Worli, Mumbai, Maharashtra</Typography>
                    </Box>
                  </Box>
                </Card>
                <Card variant="outlined">
                  <Box sx={{ px: 3, py: 2 }}>
                    <Typography
                      display={'flex'}
                      variant="h6"
                      alignItems={'center'}
                      gap={3}
                    >
                      <VerifiedUserOutlinedIcon /> Verified Agent
                    </Typography>
                  </Box>
                  <Divider />
                  <List
                    sx={{
                      width: '100%',
                      maxWidth: 360,
                      bgcolor: 'background.paper',
                    }}
                  >
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Badge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                          }}
                          badgeContent={
                            <Verified
                              sx={{
                                color: 'primary.main',
                                fontSize: 20,
                                bgcolor: 'background.paper',
                                borderRadius: '50%',
                              }}
                            />
                          }
                        >
                          <Avatar
                            alt={consultant.name}
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                            sx={{ width: 56, height: 56 }}
                          />
                        </Badge>
                      </ListItemAvatar>
                      <Box sx={{ flex: 1, pl: 2 }}>
                        {/* Primary text */}
                        <Typography
                          variant="subtitle1"
                          component="div"
                          fontWeight="bold"
                        >
                          {consultant.name}
                        </Typography>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            mt: 0.5,
                          }}
                        >
                          <Box>
                            <Typography
                              component="div"
                              variant="body2"
                              sx={{
                                color: 'text.primary',
                              }}
                            >
                              {consultant.company}
                            </Typography>
                            <Rating
                              name="read-only"
                              value={value}
                              readOnly
                              size="small"
                              sx={{ mt: 0.5 }}
                            />
                          </Box>

                          <IconButton sx={{ boxShadow: 1 }} color="primary">
                            <Phone />
                          </IconButton>
                        </Box>
                      </Box>
                    </ListItem>
                  </List>
                </Card>
                <Card variant="outlined">
                  <Box sx={{ px: 3, py: 2 }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ display: 'flex', alignItems: 'center', gap: 3 }}
                    >
                      <CallOutlined /> Get call back
                    </Typography>
                  </Box>
                  <Divider />
                  <Box sx={{ p: 2 }}>
                    <Box component="form">
                      <Grid size={12}>
                        <TextField
                          fullWidth
                          label="Your name"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid size={12} sx={{ mt: 2 }}>
                        <TextField
                          fullWidth
                          label="Phone number"
                          inputProps={{ maxLength: 15 }}
                          type="number"
                          inputMode="numeric"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <TextField
                                  select
                                  variant="standard"
                                  value={countryCode}
                                  onChange={(e) =>
                                    setCountryCode(e.target.value)
                                  }
                                  InputProps={{ disableUnderline: true }}
                                  SelectProps={{
                                    MenuProps: {
                                      disableScrollLock: true,
                                    },
                                  }}
                                  sx={{
                                    '& .MuiSelect-select': {
                                      paddingRight: '24px',
                                    },
                                    minWidth: 80,
                                  }}
                                >
                                  {countryCodes.map((option) => (
                                    <MenuItem
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </MenuItem>
                                  ))}
                                </TextField>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Button variant="contained" sx={{ mt: 2 }} fullWidth>
                        Submit
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Box position={'fixed'} bottom={16} right={16}>
          <Fab variant="extended" color="primary">
            <CallOutlined sx={{ mr: 1 }} />
            Call Now
          </Fab>
        </Box>
      </Container>
      <Divider sx={{ my: 2 }} />
      <Footer />
    </Box>
  );
};

export default PropertyDetails;
