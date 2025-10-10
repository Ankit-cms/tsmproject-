'use client';
import React, { useState } from 'react';
import {
  Autocomplete,
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  Checkbox,
  Divider,
  Grid,
  InputAdornment,
  Link,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
 import {
   LocalShippingOutlined,
   InventoryOutlined,
   AssignmentOutlined,
   StoreOutlined,
   SettingsOutlined,
   CheckCircleOutlined,
   PersonOutlined,
   BusinessOutlined,
   DirectionsCarOutlined,
   PeopleOutlined,
   RouteOutlined,
   HandshakeOutlined,
   FolderOutlined,
   AssignmentTurnedInOutlined,
   ContactsOutlined,
   LocalAtmOutlined,
   NotificationsOutlined,
   TrackChangesOutlined,
   GpsFixedOutlined,
   SmartphoneOutlined,
   MapOutlined,
   ControlCameraOutlined,
   DescriptionOutlined,
   ReceiptOutlined,
   AttachMoneyOutlined,
   CreditCardOutlined,
   VisibilityOutlined,
   AnalyticsOutlined,
   AssessmentOutlined,
   ListAltOutlined,
   AccountBalanceOutlined,
   WarningAmberOutlined,
 } from '@mui/icons-material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Pricing = () => {
  const [selected, setSelected] = useState<string[]>([]);
  console.log('this is selected', selected);
  const handleSelect = (
    event: React.MouseEvent<HTMLElement>,
    newSelected: string[]
  ) => {
    setSelected(newSelected);
  };

  // const [selectedCountry, setSelectedCountry] = useState('India');

  const countries = [
    'India',
    'America',
    'Canada',
    'Russia',
    'Ukraine',
    'Shrilanka',
    'Bhutan',
    'Bangladesh',
    'Israil',
  ];


 const pricingSections = [
   {
     heading: 'Road Transportation type',
     icon: <LocalShippingOutlined />,
     subheadings: [
       { title: 'FCL - Full Container load', icon: <InventoryOutlined /> },
       { title: 'LCL - Less than Container load', icon: <InventoryOutlined /> },
       { title: 'FTL - Full track load', icon: <LocalShippingOutlined /> },
       { title: 'PTL - Part Track load', icon: <LocalShippingOutlined /> },
       { title: 'Project logistics COC', icon: <AssignmentOutlined /> },
       { title: 'Warehouse Distribution', icon: <StoreOutlined /> },
     ],
   },
   {
     heading: 'Setup',
     icon: <SettingsOutlined />,
     subheadings: [
       { title: 'Authentication', icon: <CheckCircleOutlined /> },
       { title: 'User profile', icon: <PersonOutlined /> },
       { title: 'Company profile', icon: <BusinessOutlined /> },
       { title: 'Vehicles', icon: <DirectionsCarOutlined /> },
       { title: 'Drivers', icon: <PeopleOutlined /> },
       { title: 'Facilities', icon: <BusinessOutlined /> },
       { title: 'Lanes', icon: <RouteOutlined /> },
       { title: 'Partners (Customers / Vendor)', icon: <HandshakeOutlined /> },
     ],
   },
   {
     heading: 'Transport operations',
     icon: <LocalShippingOutlined />,
     subheadings: [
       { title: 'Centralised Documents management', icon: <FolderOutlined /> },
       { title: 'Contracts management', icon: <AssignmentTurnedInOutlined /> },
       { title: 'Directory - Partners control', icon: <ContactsOutlined /> },
       { title: 'Shipments management', icon: <LocalShippingOutlined /> },
       { title: 'Create Transport order', icon: <AssignmentOutlined /> },
       { title: 'Dispatch management (PTL)', icon: <LocalAtmOutlined /> },
       { title: 'Modules controller', icon: <SettingsOutlined /> },
       { title: 'Notification controller', icon: <NotificationsOutlined /> },
     ],
   },
   {
     heading: 'Shipments tracking',
     icon: <TrackChangesOutlined />,
     subheadings: [
       { title: 'Shipment tracking - Minotowns', icon: <GpsFixedOutlined /> },
       {
         title: 'Shipment tracking - Mobile SIM',
         icon: <SmartphoneOutlined />,
       },
       {
         title: 'Shipment tracking - Driver mobile app',
         icon: <SmartphoneOutlined />,
       },
       {
         title: 'Shipment tracking - GPS + CT Map view',
         icon: <MapOutlined />,
       },
       { title: 'Real time - Control tower', icon: <ControlCameraOutlined /> },
     ],
   },
   {
     heading: 'eDocs',
     icon: <DescriptionOutlined />,
     subheadings: [
       { title: 'eDoc - vLR', icon: <ReceiptOutlined /> },
       { title: 'eDoc - nPxO', icon: <DescriptionOutlined /> },
       { title: 'eDoc - invoice', icon: <AttachMoneyOutlined /> },
       {
         title: 'eDoc - Market Hotel vehicle voucher',
         icon: <CreditCardOutlined />,
       },
     ],
   },
   {
     heading: 'Operations Visibility',
     icon: <VisibilityOutlined />,
     subheadings: [
       { title: 'Analytics - Operations', icon: <AnalyticsOutlined /> },
       {
         title: 'Reporting - OneView - Operations',
         icon: <AssessmentOutlined />,
       },
       {
         title: 'Reporting - Transport orders management',
         icon: <ListAltOutlined />,
       },
       {
         title: 'Real time - Alerts and notifications',
         icon: <WarningAmberOutlined />,
       },
       {
         title: 'Accounting input - Finance one view',
         icon: <AccountBalanceOutlined />,
       },
     ],
   },
 ];
  function createData(
    name: string,
    calories: string,
    fat: number,
    carbs: string,
    protein: string
  ) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('Analytics operation', '/shipment', 1, 'One time', '$3 - $6'),
    createData('Modules controller', ' /vehicle', 2, 'Monthly', '$4 - $8'),
    createData('Facilities', '/shipment', 3, 'One time', '$8 - $10'),
    createData('Contract management', ' /day ', 4, 'Monthly', '$3 - $7'),
    createData('Warehouse distribution', ' /account', 5, 'One time', '$3 - $6'),
  ];
  const [countryCode, setCountryCode] = useState<string>('+91');
  const countryCodes = [
    { value: '+91', label: 'India (+91)' },
    { value: '+1', label: 'USA (+1)' },
    { value: '+44', label: 'UK (+44)' },
    { value: '+61', label: 'Australia (+61)' },
  ];
  return (
    <Box>
      <Header />
      <Paper elevation={0} square sx={{ mt: 9, px: { xs: 2, md: 5 } }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ p: 3, pl: 0 }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: 'text.primary' }}>Pricing</Typography>
        </Breadcrumbs>
        <Divider />
        <Box py={5}>
          <Box mb={4}>
            <Typography variant="h3" component="h2" gutterBottom>
              Instalanes TMS - Pricing
            </Typography>
            <Typography variant="h5" paragraph >
              Select your scope - Let us know what fits your transportation
              business process.
            </Typography>
          </Box>
          <Divider sx={{my:2}}/>
          <Grid container spacing={2} alignItems="stretch">
            <Grid size={12} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Grid container spacing={2}>
                    {/* Left Card */}
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Card sx={{ height: '100%' }}>
                        <CardContent>
                          <Typography variant="h6" gutterBottom>
                            Input Business Details
                          </Typography>

                          <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 6 }}>
                              <TextField
                                fullWidth
                                label="Shipments / Month"
                                variant="outlined"
                              />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                              <TextField
                                fullWidth
                                label="Partners (Customers + Vendors)"
                                variant="outlined"
                              />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                              <TextField
                                fullWidth
                                label="~ Av. Shipments duration (Days)"
                                variant="outlined"
                              />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                              <TextField
                                fullWidth
                                label="Managed Vehicle (Owned + Leased)"
                                variant="outlined"
                              />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                              <TextField
                                fullWidth
                                label="Company name"
                                variant="outlined"
                              />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                              <Autocomplete
                                freeSolo
                                id="free-solo-2-demo"
                                disableClearable
                                options={countries.map((country) => country)}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label="Country"
                                    slotProps={{
                                      input: {
                                        ...params.InputProps,
                                        type: 'search',
                                      },
                                    }}
                                  />
                                )}
                              />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
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
                            <Grid size={{ xs: 12, md: 6 }}>
                              <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                              />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                              <Box
                                display="flex"
                                alignItems="center"
                                gap={2}
                                p={2}
                                border={1}
                                borderColor="grey.300"
                                borderRadius={1}
                              >
                                <Checkbox size="large" />
                                <Box>
                                  <Typography variant="body2">
                                    I am not a robot
                                  </Typography>
                                  <Box display="flex" gap={1}>
                                    <Typography
                                      variant="caption"
                                      color="text.secondary"
                                    >
                                      reCAPTCHA
                                    </Typography>
                                    <Typography
                                      variant="caption"
                                      color="text.secondary"
                                    >
                                      Privacy
                                    </Typography>
                                    <Typography
                                      variant="caption"
                                      color="text.secondary"
                                    >
                                      -
                                    </Typography>
                                    <Typography
                                      variant="caption"
                                      color="text.secondary"
                                    >
                                      Terms
                                    </Typography>
                                  </Box>
                                </Box>
                              </Box>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>

                    {/* Right Card */}
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Card sx={{ height: '100%' }}>
                        <CardContent>
                          <Typography variant="h6" gutterBottom>
                            Services scope details{' '}
                          </Typography>
                          <TableContainer component={Paper}>
                            <Table
                              sx={{ minWidth: 650 }}
                              aria-label="simple table"
                            >
                              <TableHead>
                                <TableRow>
                                  <TableCell>TMS services / scope</TableCell>
                                  <TableCell align="right">Unit</TableCell>
                                  <TableCell align="right">Qty.</TableCell>
                                  <TableCell align="right">Frequency</TableCell>
                                  <TableCell align="right">
                                    Price Range
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {rows.map((row) => (
                                  <TableRow
                                    key={row.name}
                                    sx={{
                                      '&:last-child td, &:last-child th': {
                                        border: 0,
                                      },
                                    }}
                                  >
                                    <TableCell component="th" scope="row">
                                      {row.name}
                                    </TableCell>
                                    <TableCell align="right">
                                      {row.calories}
                                    </TableCell>
                                    <TableCell align="right">
                                      {row.fat}
                                    </TableCell>
                                    <TableCell align="right">
                                      {row.carbs}
                                    </TableCell>
                                    <TableCell align="right">
                                      {row.protein}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Card sx={{ height: '100%' }}>
                        <CardContent>
                          <Typography variant="h6" gutterBottom>
                            Contact
                          </Typography>
                          <Card>
                            <CardContent>hi</CardContent>
                          </Card>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Card sx={{ height: '100%' }}>
                        <CardContent>
                          <Typography variant="h6" gutterBottom>
                            Quotation details{' '}
                          </Typography>
                          <Card>
                            <CardContent>hello</CardContent>
                          </Card>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={12} sx={{ display: 'flex' }}>
              <Card
                sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Grid container spacing={2} alignItems="stretch">
                    {pricingSections.map((section, i) => (
                      <Grid
                        key={i}
                        size={{ xs: 12, md: 4 }}
                        sx={{ display: 'flex' }}
                      >
                        <Card
                          sx={{
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                          }}
                        >
                          <CardContent sx={{ flexGrow: 1, p: 2 }}>
                            <Typography variant="h6" gutterBottom>
                              {section.heading}
                            </Typography>

                            <Grid container spacing={2} alignItems="stretch">
                              {section.subheadings.map((option, index) => (
                                <Grid
                                  key={index}
                                  size={{ xs: 12, sm: 6, md: 4 }}
                                  sx={{ display: 'flex' }}
                                >
                                  <ToggleButtonGroup
                                    value={selected}
                                    onChange={handleSelect}
                                    aria-label="transport options"
                                    fullWidth
                                    sx={{ flexGrow: 1, display: 'flex' }}
                                  >
                                    <ToggleButton
                                      value={option.title}
                                      sx={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        textTransform: 'none',
                                        borderRadius: 1,
                                        boxShadow: 1,
                                        border: '1px solid',
                                        borderColor: (theme) =>
                                          selected.includes(option.title)
                                            ? theme.palette.primary.main
                                            : theme.palette.grey[300],
                                        transition: 'all 0.2s ease',
                                        color: (theme) =>
                                          selected.includes(option.title)
                                            ? theme.palette.primary.main
                                            : theme.palette.text.primary, 
                                        backgroundColor: (theme) =>
                                          selected.includes(option.title)
                                            ? theme.palette.primary.light + '20' 
                                            : theme.palette.background.paper,
                                        '&:hover': {
                                          boxShadow: 2,
                                          backgroundColor: (theme) =>
                                            selected.includes(option.title)
                                              ? theme.palette.primary.light +
                                                '40'
                                              : theme.palette.grey[100],
                                        },
                                        '&.Mui-selected': {
                                          backgroundColor: (theme) =>
                                            theme.palette.primary.main,
                                          color: (theme) =>
                                            theme.palette.primary.contrastText, 
                                          '&:hover': {
                                            backgroundColor: (theme) =>
                                              theme.palette.primary.dark,
                                          },
                                        },
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          height: 48,
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          color: 'inherit',
                                        }}
                                      >
                                        {option.icon}
                                      </Box>

                                      <Typography
                                        variant="body2"
                                        textAlign="center"
                                        sx={{
                                          lineHeight: 1.2,
                                          color: 'inherit',
                                        }}
                                      >
                                        {option.title}
                                      </Typography>
                                    </ToggleButton>
                                  </ToggleButtonGroup>
                                </Grid>
                              ))}
                            </Grid>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Divider sx={{ my: 2 }} />
      <Footer />
    </Box>
  );
};

export default Pricing;
