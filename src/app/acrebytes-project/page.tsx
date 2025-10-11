'use client';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Chip,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  InputAdornment,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React, { useState } from 'react';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import Header from '../components/Header';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import {
  VerifiedUserOutlined,
  StarBorderOutlined,
  TrendingUpOutlined,
  Assignment,
  Verified,
  AccountBalance,
  Business,
  Phone,
  Email,
  StarBorder,
  Restaurant,
  SpaOutlined,
  DirectionsBikeOutlined,
  HealthAndSafetyOutlined,
} from '@mui/icons-material';
import { LocationOn } from '@mui/icons-material';
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
  const countryCodes = [
    { value: '+91', label: 'India (+91)' },
    { value: '+1', label: 'USA (+1)' },
    { value: '+44', label: 'UK (+44)' },
    { value: '+61', label: 'Australia (+61)' },
  ];

  const highlights = [
    {
      icon: VerifiedUserOutlined,
      title: 'Verified listings',
      description: 'Access verified Residential property by Brigade in Mumbai.',
      additionalInfo: 'RERA Approved: Yes',
    },
    {
      icon: StarBorderOutlined,
      title: 'Project quality',
      description:
        'Premium Studio apartment development with builder score of 4/5 in Worli.',
      additionalInfo: '',
    },
    {
      icon: TrendingUpOutlined,
      title: 'Investment value',
      description: 'Overall assessment score: 127/100.',
      additionalInfo:
        'Appreciation till now: 4/5, Expected further appreciation: 4/5',
    },
  ];

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
  const consultants = [
    {
      name: 'Darshini Patil',
      company: 'COMPANY NAME',
      location: 'India',
      rating: 0.0,
      reviews: 0,
    },
  ];
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
      icon: <PoolIcon />,
      rating: 5,
    },
    {
      title: 'Gym',
      icon: <FitnessCenterIcon />,
      rating: 4,
    },
    {
      title: 'Spa',
      icon: <SpaOutlined />,
      rating: 5,
    },
    {
      title: 'Restaurant',
      icon: <Restaurant />,
      rating: 4,
    },
    {
      title: 'Cycling path',
      icon: <DirectionsBikeOutlined />,
      rating: 5,
    },
    {
      title: 'Healthcare',
      icon: <HealthAndSafetyOutlined />,
      rating: 4,
    },
  ];

  const nearbyFacilities = [
    'Jaypee Public School 1.7 Km',
    'Amity University 3.4 Km',
    'Akshardham Temple 33 Min',
    'HCL Technologies 2.4 Km',
    'Jaypee Hospital 4.5 Km',
    'Metro Station Okhla Bird Sanctuary',
    'DLF Mall of India – 10km',
  ];

  return (
    <Box>
      <Header />

      <Container>
        <Paper square sx={{ mt: 9, p: 2 }} variant="outlined">
          <Box sx={{ py: 4 }}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/195291012.jpg?k=822fa4ebdd400344fa3d4dbb19a7bff6f9a6187e255f4963d2d9190b703991bd&o=&hp=1"
                    alt="property"
                    sx={{
                      maxHeight: 404,
                      objectFit: 'cover',
                    }}
                  />
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h3" gutterBottom>
                      Brigade Taj
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1} mb={2}>
                      <LocationPinIcon />
                      <Typography>Worli, Mumbai, Maharashtra</Typography>
                    </Box>
                    <Stack direction="row" spacing={1} mb={2}>
                      <Chip label="Residential" variant="outlined" />
                      <Chip label="New Launch" variant="outlined" />
                      <Chip label="2029-2030" variant="outlined" />
                    </Stack>
                  </CardContent>
                  <Divider />
                  <CardContent>
                    <Grid container spacing={1}>
                      <Grid size={{ xs: 12, sm: 3, md: 3 }}>
                        <Card variant="outlined" sx={{ height: '100%' }}>
                          <CardContent sx={{ p: 2, pb: 2 }}>
                            <Typography variant="subtitle2" gutterBottom>
                              Builder
                            </Typography>
                            <Typography variant="h6">Brigade</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 3, md: 3 }}>
                        <Card variant="outlined" sx={{ height: '100%' }}>
                          <CardContent sx={{ p: 2 }}>
                            <Typography variant="subtitle2" gutterBottom>
                              Performance
                            </Typography>
                            <Typography variant="h6">4.3</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 3, md: 3 }}>
                        <Card variant="outlined" sx={{ height: '100%' }}>
                          <CardContent sx={{ p: 2 }}>
                            <Typography variant="subtitle2" gutterBottom>
                              Score
                            </Typography>
                            <Typography variant="h6">127</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 3, md: 3 }}>
                        <Card variant="outlined">
                          <CardContent sx={{ p: 2 }}>
                            <Typography variant="subtitle2" gutterBottom>
                              Value for Money
                            </Typography>
                            <Typography variant="h6">4.5</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
              About Brigade Taj
            </Typography>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <Box sx={{ px: 3, py: 1.5 }}>
                    <Typography variant="h6">Project Overview</Typography>
                  </Box>
                  <Divider />
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="body2" paragraph>
                      Brigade Group presents Brigade Taj, an epitome of luxury
                      living that redefines premium residential experiences.
                      Nestled in prime locations, these developments showcase
                      world-class architecture and sophisticated design
                      aesthetics. With uncompromising quality and attention to
                      detail, Brigade Taj offers exclusive amenities and
                      impeccable services. Each project embodies the perfect
                      blend of timeless elegance and contemporary comforts.
                      Creating landmark addresses for those who seek nothing but
                      extraordinary living standards.
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        mt: 2,
                      }}
                    >
                      <Typography
                        textAlign={'end'}
                        color="primary"
                        sx={{ cursor: 'pointer' }}
                      >
                        {' '}
                        Read more
                      </Typography>

                      <Button
                        variant="outlined"
                        color="primary"
                        sx={{ width: 'fit-content' }}
                      >
                        Request Brochure
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/195291012.jpg?k=822fa4ebdd400344fa3d4dbb19a7bff6f9a6187e255f4963d2d9190b703991bd&o=&hp=1"
                    alt="property"
                    sx={{
                      maxHeight: 357.6,
                      objectFit: 'cover',
                    }}
                  />
                </Card>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
              Project Gallery
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 1.5,
                overflowX: 'auto',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
                pb: 2,
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
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
          <Box sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
              Why Brigade Taj
            </Typography>
            <Grid container spacing={3}>
              {highlights.map((item, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box display="flex" alignItems="center" gap={2} mb={2}>
                        <Avatar>
                          <item.icon />
                        </Avatar>
                        <Typography variant="h6">{item.title}</Typography>
                      </Box>
                      <Typography variant="body2" paragraph>
                        {item.description}
                      </Typography>
                      {item.additionalInfo && (
                        <Typography variant="body2">
                          {item.additionalInfo}
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
              Location Advantage
            </Typography>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 8 }}>
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
              <Grid size={{ xs: 12, md: 4 }}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <Box sx={{ px: 3, py: 1.5 }}>
                    <Typography variant="h6">Nearby Facilities</Typography>
                  </Box>
                  <Divider />
                  <CardContent sx={{ p: 3 }}>
                    <List
                      disablePadding
                      sx={{
                        '& .MuiListItem-root': {
                          p: 0,
                          py: 0.5,
                          m: 0,
                          alignItems: 'flex-start',
                        },
                        '& .MuiListItemIcon-root': {
                          minWidth: '30px',
                        },
                      }}
                    >
                      {nearbyFacilities.map((facility, index) => (
                        <ListItem key={index}>
                          <ListItemIcon>
                            <LocationPinIcon />
                          </ListItemIcon>
                          <Typography variant="body2">{facility}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Project Layout Section */}

          <Box sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
              Project Layout
            </Typography>
            <Grid container spacing={2}>
              {projectData.map((item, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <Card
                    variant="outlined"
                    sx={{
                      height: '100%',
                    }}
                  >
                    <Box sx={{ p: 2.5 }}>
                      <Box display="flex" gap={2}>
                        {/* Icon */}
                        <Avatar>{item.icon}</Avatar>

                        {/* Content */}
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h5" component="div">
                            {item.title}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            component="div"
                            // sx={{ fontWeight: 'medium' }}
                          >
                            {item.value}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ display: 'block' }}
                          >
                            {item.subtitle}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
              Amenities
            </Typography>
            <Grid container spacing={2}>
              {amenities.map((item, index) => (
                <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
                  <Card variant="outlined">
                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                      {item.icon}
                      <Typography variant="body2" mt={1}>
                        {item.title}
                      </Typography>
                      {/* Star Rating */}
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mt: 1,
                        }}
                      >
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Box
                            key={star}
                            sx={{
                              color:
                                star <= item.rating ? '#ffc107' : '#e0e0e0',
                              fontSize: '1.2rem',
                              lineHeight: 1,
                            }}
                          >
                            ★
                          </Box>
                        ))}
                      </Box>
                      {/* Optional: Display rating number */}
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ mt: 0.5 }}
                      >
                        {item.rating}/5
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Unit Plans Section */}

          <Box sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
              Unit Plans
            </Typography>
            <Grid container spacing={3}>
              {unitPlans.map((plan, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <Card>
                    <Box sx={{ px: 3, py: 2, textAlign: 'center' }}>
                      <Typography variant="body2" gutterBottom>
                        {plan.type}
                      </Typography>
                      <Chip label={plan.category} size="small" />
                    </Box>{' '}
                    <Divider />
                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        {plan.title}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {plan.size} Sqft
                      </Typography>
                      <Typography variant="h6" gutterBottom>
                        ₹ {plan.price} K
                      </Typography>
                      <Typography variant="body2">
                        ₹ {plan.rate} / Sqft
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
              Plan Layouts
            </Typography>
            <Grid container spacing={3}>
              {/* Master Plan Layout */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Card
                  variant="outlined"
                  sx={{ height: '100%', position: 'relative' }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '30%',
                      left: 0,
                      right: 0,
                      zIndex: 99,
                      textAlign: 'center',
                      backgroundColor: 'white',
                      p: 2,
                    }}
                  >
                    <Typography variant="h6" textAlign={'center'}>
                      Master Plan Layout
                    </Typography>
                  </Box>

                  <CardMedia
                    height={300}
                    sx={{
                      filter: 'blur(3px)',
                      backdropFilter: 'blur(3px)',
                    }}
                    src="https://images.unsplash.com/photo-1584972191378-d70853fc47fc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                    component={'img'}
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      mt: 2,
                      p: 3,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      startIcon={<VisibilityIcon />}
                    >
                      View Master Plan Layout
                    </Button>
                  </Box>
                </Card>
              </Grid>

              {/* Unit Plan Layout */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Card
                  variant="outlined"
                  sx={{ height: '100%', position: 'relative' }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '30%',
                      left: 0,
                      right: 0,
                      zIndex: 99,
                      textAlign: 'center',
                      backgroundColor: 'white',
                      p: 2,
                    }}
                  >
                    <Typography variant="h6" textAlign={'center'}>
                      Unit Plan Layout
                    </Typography>
                  </Box>

                  <CardMedia
                    height={300}
                    sx={{
                      filter: 'blur(3px)',
                      backdropFilter: 'blur(3px)',
                    }}
                    src="https://images.unsplash.com/photo-1584972191378-d70853fc47fc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                    component={'img'}
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      mt: 2,
                      p: 3,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      startIcon={<VisibilityIcon />}
                    >
                      View Unit Plan Layout
                    </Button>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Regulatory and Clearance Section */}

          <Box sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
              Regulatory and Clearance
            </Typography>
            <Grid container spacing={3}>
              {clearanceItems.map((item, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <Card variant="outlined" sx={{ height: '100%' }}>
                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                      {item.icon}
                      <Typography variant="h6" gutterBottom>
                        {item.label}
                      </Typography>
                      <Typography variant="body2" paragraph>
                        {item.description}
                      </Typography>
                      <Chip label={item.status} color="success" />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ py: 4 }}>
            <Grid container spacing={2}>
              {/* Left Side - Project Details */}
              <Grid size={{ xs: 12, md: 8 }}>
                <Card variant="outlined">
                  {/* Project Specifications */}
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Project Specifications
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, sm: 4 }}>
                        <Card
                          variant="outlined"
                          sx={{
                            textAlign: 'center',
                            p: 2,
                          }}
                        >
                          <Typography variant="body2" color="text.secondary">
                            Land Parcel
                          </Typography>
                          <Typography variant="h6">6 Acres</Typography>
                        </Card>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4 }}>
                        <Card
                          variant="outlined"
                          sx={{
                            textAlign: 'center',
                            p: 2,
                          }}
                        >
                          <Typography variant="body2">Floors</Typography>
                          <Typography variant="h6">Still + 45</Typography>
                        </Card>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4 }}>
                        <Card
                          variant="outlined"
                          sx={{
                            textAlign: 'center',
                            p: 2,
                          }}
                        >
                          <Typography variant="body2">Units</Typography>
                          <Typography variant="h6">600+</Typography>
                        </Card>
                      </Grid>
                    </Grid>
                  </Box>

                  <Divider />

                  {/* Spot Booking Offers */}
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Spot Booking Offers
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body1">
                        EOI Amount - ₹10 Lacs
                      </Typography>
                    </Box>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <List
                          disablePadding
                          sx={{
                            '& .MuiListItem-root': {
                              p: 0,
                              py: 0.5,
                              m: 0,
                              alignItems: 'flex-start',
                            },
                            '& .MuiListItemIcon-root': {
                              minWidth: '30px',
                            },
                          }}
                        >
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Guaranteed Best Rate" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Early Buy Discounts" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Golf Course View from Every Apartment" />
                          </ListItem>
                        </List>
                      </Grid>
                    </Grid>
                  </Box>
                </Card>
              </Grid>
              {/* Right Side - Pricing & CTA */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Card
                  variant="outlined"
                  sx={{
                    p: 3,
                    height: '100%',
                    textAlign: 'center',
                  }}
                >
                  {/* Pricing */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body1" gutterBottom>
                      3,4 & 5 BHK Starting At
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                      5.76 Cr*
                    </Typography>
                    <Typography variant="body1">Onwards</Typography>
                  </Box>

                  {/* CTA Button */}
                  <Button variant="contained" fullWidth>
                    Book Site Visit
                  </Button>

                  {/* Additional CTA */}
                  <Button
                    variant="outlined"
                    size="medium"
                    fullWidth
                    sx={{
                      mt: 2,
                    }}
                  >
                    Download Brochure
                  </Button>

                  <TableContainer
                    component={Box}
                    sx={{
                      mt: 3,
                      width: '100%',
                    }}
                  >
                    <Table sx={{ minWidth: 300 }} size="small">
                      <TableBody>
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{
                              borderTop: '1px solid rgba(255,255,255,0.3)',
                              borderBottom: 'none',
                              py: 1,
                              pl: 0,
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{ opacity: 0.9, fontWeight: 'bold' }}
                            >
                              RERA:
                            </Typography>
                          </TableCell>
                          <TableCell
                            sx={{
                              borderTop: '1px solid rgba(255,255,255,0.3)',
                              borderBottom: 'none',
                              py: 1,
                              pr: 0,
                            }}
                          >
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                              Coming Soon
                            </Typography>
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{
                              borderBottom: 'none',
                              py: 1,
                              pl: 0,
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{ opacity: 0.9, fontWeight: 'bold' }}
                            >
                              Agent UPRERA No.:
                            </Typography>
                          </TableCell>
                          <TableCell
                            sx={{
                              borderBottom: 'none',
                              py: 1,
                              pr: 0,
                            }}
                          >
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                              Coming soon
                            </Typography>
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{
                              borderBottom: 'none',
                              py: 1,
                              pl: 0,
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{ opacity: 0.9, fontWeight: 'bold' }}
                            >
                              Project UPRERA No.:
                            </Typography>
                          </TableCell>
                          <TableCell
                            sx={{
                              borderBottom: 'none',
                              py: 1,
                              pr: 0,
                            }}
                          >
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                              Coming soon
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Card>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ py: 4 }}>
            <Grid container spacing={3}>
              {/* Project Timeline & Pricing Card */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <Box sx={{ px: 3, py: 1.5 }}>
                    <Typography variant="h6">
                      Project Timeline & Pricing
                    </Typography>
                  </Box>
                  <Divider />
                  <CardContent sx={{ p: 3 }}>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <Box mb={2}>
                          <Typography variant="body2" gutterBottom>
                            Launch Period
                          </Typography>
                          <Typography variant="h6">2029 - 2030</Typography>
                        </Box>
                        <Box mb={2}>
                          <Typography variant="body2" gutterBottom>
                            Price per Sqft
                          </Typography>
                          <Typography variant="h6">₹ 234 / Sqft</Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <Box mb={2}>
                          <Typography variant="body2" gutterBottom>
                            Total Investment
                          </Typography>
                          <Typography variant="h6">
                            ₹ 58.2 K + ₹ 56.2 K
                          </Typography>
                          <Typography variant="body2">
                            (Initial + Additional)
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="body2" gutterBottom>
                            Status
                          </Typography>
                          <Chip label="New Launch" />
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              {/* Site Visit Form Card */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6">Schedule a Site Visit</Typography>

                    <Box component="form" sx={{ mt: 2 }}>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="First name"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }} sx={{ mt: 3 }}>
                        {/* Mobile Number Field */}
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
                      {/* Consent Checkbox */}
                      <FormControlLabel
                        control={<Checkbox size="small" />}
                        label={
                          <Box>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                              paragraph
                            >
                              I Consent to The Processing of Provided Data
                              According To{' '}
                              <Link href="#" underline="hover" color="primary">
                                Privacy Policy
                              </Link>{' '}
                              |{' '}
                              <Link href="#" underline="hover" color="primary">
                                Terms & Conditions
                              </Link>
                              . I Authorize Propertypistol Realty Private
                              Limited and its representatives to Call, SMS,
                              Email or WhatsApp Me About Its Products and
                              Offers. This Consent Overrides Any Registration
                              For DNC/NDNC.
                            </Typography>
                          </Box>
                        }
                        sx={{ mt: 1, alignItems: 'flex-start' }}
                      />

                      {/* Submit Button */}
                      <Button variant="contained" fullWidth>
                        Express Your Interest
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
              Contact Consultants
            </Typography>

            <Grid container spacing={3}>
              {consultants.map((consultant, index) => (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                  <Card variant="outlined">
                    <CardContent sx={{ p: 3 }}>
                      <Box display="flex" alignItems="center" gap={2} mb={2}>
                        <Avatar sx={{ width: 60, height: 60 }}>
                          {consultant.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </Avatar>
                        <Box>
                          <Typography variant="h6">
                            {consultant.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {consultant.company}
                          </Typography>
                          <Box display="flex" alignItems="center" gap={0.5}>
                            <StarBorder fontSize="small" />
                            <Typography variant="body2">
                              {consultant.rating} ★ · {consultant.reviews}{' '}
                              Reviews
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      <Divider sx={{ my: 2 }} />

                      <Box display="flex" alignItems="center" gap={1} mb={2}>
                        <LocationOn fontSize="small" />
                        <Typography variant="body2">
                          {consultant.location}
                        </Typography>
                      </Box>

                      <Stack direction="row" spacing={1}>
                        <Button
                          variant="outlined"
                          startIcon={<Phone />}
                          fullWidth
                        >
                          Call
                        </Button>
                        <Button
                          variant="contained"
                          startIcon={<Email />}
                          fullWidth
                        >
                          Email
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Container>
      <Divider sx={{ my: 2 }} />
      <Footer />
    </Box>
  );
};

export default PropertyDetails;
