import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Paper,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Pricing = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <Box>
      <Header />
      <Paper elevation={0} square sx={{ mt: 9 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ p: 3 }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: 'text.primary' }}>Pricing</Typography>
        </Breadcrumbs>
        <Divider />
        <Box py={4}>
          <Container maxWidth="lg">
            <Typography variant="h3" component="h2" gutterBottom>
              Instalanes TMS - Pricing{' '}
            </Typography>
            <Typography variant="h5" paragraph gutterBottom>
              Select your scope - Let us know what fits for your Transportation
              business process
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={2} my={4}>
              <Grid size={{ xs: 12, md: 8 }}>
                <Card>
                  <CardContent>
                    <Box>
                      <Typography variant="h6">
                        Road Transportation type
                      </Typography>

                      <List>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="FCL - Full Container load" />
                        </ListItem>

                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="LCL - Less than Container load" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="FTL - Full truck load" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="PTL - Part Truck load" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Project logistics ODC" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Warehouse Distribution" />
                        </ListItem>
                      </List>
                      <Divider sx={{ my: 2 }} />
                    </Box>
                    <Box>
                      <Typography variant="h6">Setup</Typography>

                      <List>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Authentication" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText
                            primary="User profile
"
                          />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Company profile" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Vehicles" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Drivers" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Facilities" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Lanes" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText
                            primary="Partners (Customers / Vendors)

"
                          />
                        </ListItem>
                        <Divider sx={{ my: 2 }} />
                      </List>
                    </Box>
                    <Box>
                      <Typography variant="h6">Transport operations</Typography>

                      <List>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText
                            primary="Centralised Documents management
"
                          />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText
                            primary="Contracts management
"
                          />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText
                            primary="Directory - Partners contact
"
                          />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Shipments management" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText
                            primary="Create Transport order
"
                          />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Dispatch management (PTL)" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Modules controller" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Notification controller" />
                        </ListItem>
                        <Divider sx={{ my: 2 }} />
                      </List>
                    </Box>
                    <Box>
                      <Typography variant="h6">Shipments tracking</Typography>

                      <List>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Shipment tracking - Milestones" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Shipment tracking - Mobile SIM" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Shipment tracking - Driver mobile app" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Shipment tracking - GPS + CT Map view" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Real time - Control tower" />
                        </ListItem>
                        <Divider sx={{ my: 2 }} />
                      </List>
                    </Box>
                    <Box>
                      <Typography variant="h6">eDocs</Typography>

                      <List>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="eDoc - eLR" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="eDoc - ePoD" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="eDoc - Invoice" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="eDoc - Market hired vehicle voucher" />
                        </ListItem>{' '}
                        <Divider sx={{ my: 2 }} />
                      </List>
                    </Box>
                    <Box>
                      <Typography variant="h6">
                        Operations Visibility
                      </Typography>

                      <List>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Analytics - Operations" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Reporting - OneView - Operations" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Reporting - Transport orders management" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Real time - Alerts and notifications" />
                        </ListItem>
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <Switch {...label} defaultChecked />{' '}
                            </IconButton>
                          }
                        >
                          <ListItemText primary="Accounting input - Finance one view" />
                        </ListItem>
                      </List>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Shipments / month"
                          variant="outlined"
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Partners (Customers + Vendors)"
                          variant="outlined"
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Shipment duration (Days)"
                          variant="outlined"
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Managed vehicles (Owned / Leased)"
                          variant="outlined"
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }} textAlign="end" mt={2}>
                        <Button variant="contained" size="large">
                          Submit scope
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Paper>
      <Divider sx={{my:2}}/>
      <Footer/>
    </Box>
  );
};

export default Pricing;
