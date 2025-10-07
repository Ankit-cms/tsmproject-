import React from 'react';
import Header from '../components/Header';
import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Footer from '../components/Footer';
import { WhatsApp } from '@mui/icons-material';

function createData(name: string, description: string) {
  return { name, description };
}
const PayHere = () => {
    const data = [
      createData('Step 1', 'Scan QR code, enter amount and Pay'),
      createData(
        'Step 2',
        'Take screenshot / photo of successful payment confirmation'
      ),
      createData(
        'Step 3',
        `Send payment screenshot / photo at ${(
          <Chip icon={<WhatsApp />} label={'+91 9818106472'}/>
           
        )}`
      ),
    ];
  return (
    <Box>
      <Header />
      <Paper elevation={0} square sx={{ mt: 9 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ p: 3 }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: 'text.primary' }}>Pay-here</Typography>
        </Breadcrumbs>
        <Divider />
        <Box py={4}>
          <Container maxWidth="lg">
            <Typography variant="h3" component="h2" gutterBottom>
              Pay us here
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Complete your payment quickly and safely using the QR code or bank
              transfer details below.
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={2} my={4}>
              <Grid size={{ xs: 12, md: 6 }} p={3}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h4" component="h2" gutterBottom>
                        Company Info
                      </Typography>
                      <Divider sx={{ my: 2 }} />

                      <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="body1">Company name</Typography>
                        <Typography textAlign={'end'} variant="body1">
                          GRAVITY44 PLATFORM SOLUTIONS PRIVATE LIMITED
                        </Typography>
                      </Box>
                      <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="body1">CIN</Typography>
                        <Typography variant="body1">
                          U72900DL2022PTC408726
                        </Typography>
                      </Box>
                      <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="body1">GST</Typography>
                        <Typography>07AAKCG2159B1ZU</Typography>
                      </Box>
                      <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="body1">Address line 1</Typography>
                        <Typography variant="body1">
                          101, Pratap Nagar
                        </Typography>
                      </Box>
                      <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="body1">Address line 2</Typography>
                        <Typography variant="body1">
                          Mayur Vihar Phase-1, East Delhi
                        </Typography>
                      </Box>
                      <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="body1">City</Typography>
                        <Typography variant="body1">New Delhi</Typography>
                      </Box>
                      <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="body1">State</Typography>
                        <Typography variant="body1">New Delhi</Typography>
                      </Box>
                      <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="body1">City</Typography>
                        <Typography variant="body1">Delhi</Typography>
                      </Box>
                      <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="body1">Country</Typography>
                        <Typography variant="body1">India</Typography>
                      </Box>
                      <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="body1">Pin code</Typography>
                        <Typography variant="body1">110091</Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} p={3}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h4" component="h2" gutterBottom>
                        Bank Details
                      </Typography>
                      <Divider sx={{ my: 2 }} />

                      <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="body1">Bank name</Typography>
                        <Typography variant="body1">HDFC BANK LTD</Typography>
                      </Box>
                      <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="body1">Account holder</Typography>
                        <Typography variant="body1">
                          GRAVITY44 PLATFORM SOLUTIONS PVT LTD
                        </Typography>
                      </Box>
                      <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="body1">Account number</Typography>
                        <Typography variant="body1">50200076533061</Typography>
                      </Box>
                      <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="body1">Branch code</Typography>
                        <Typography variant="body1">HDFC0009629</Typography>
                      </Box>
                      <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="body1">City</Typography>
                        <Typography variant="body1">Noida</Typography>
                      </Box>
                      <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="body1">State</Typography>
                        <Typography variant="body1">Uttar Pradesh</Typography>
                      </Box>
                      <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="body1">Country</Typography>
                        <Typography variant="body1">India</Typography>
                      </Box>
                      <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="body1">Pin code</Typography>
                        <Typography variant="body1">201306</Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }} p={3} spacing={3}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h4" component="h2" gutterBottom>
                      QR Code
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Scan and pay by any UPI app
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Card sx={{ width: 'fit-content', p: 3, mx: 'auto' }}>
                      <CardContent>
                        <Box display="flex" justifyContent="center">
                          <CardMedia
                            component="img"
                            image="/img/qrcode.png"
                            alt="Pay Here"
                            sx={{
                              width: { xs: '150px', md: '200px' },
                              height: 'auto',
                              my: 2,
                            }}
                          />
                        </Box>
                      </CardContent>
                    </Card>

                    <Divider sx={{ my: 2 }} />
                    <Box p={2}>
                      <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                          <TableBody>
                            {data.map((row) => (
                              <TableRow
                                key={row.name}
                                sx={{
                                  '&:last-child td, &:last-child th': {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell
                                  component="th"
                                  scope="row"
                                  width={100}
                                >
                                  {row.name}
                                </TableCell>
                                <TableCell align="left">
                                  {row.description}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} p={3} spacing={3}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h4" component="h2" gutterBottom>
                      QR Code
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Scan and pay by any UPI app
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Card sx={{ width: 'fit-content', p: 3, mx: 'auto' }}>
                      <CardContent>
                        <Box display="flex" justifyContent="center">
                          <CardMedia
                            component="img"
                            image="/img/qrcode.png"
                            alt="Pay Here"
                            sx={{
                              width: { xs: '150px', md: '200px' },
                              height: 'auto',
                              my: 2,
                            }}
                          />
                        </Box>
                      </CardContent>
                    </Card>

                    <Divider sx={{ my: 2 }} />
                    <Box p={2}>
                      <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                          <TableBody>
                            {data.map((row) => (
                              <TableRow
                                key={row.name}
                                sx={{
                                  '&:last-child td, &:last-child th': {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell
                                  component="th"
                                  scope="row"
                                  width={100}
                                >
                                  {row.name}
                                </TableCell>
                                <TableCell align="left">
                                  {row.description}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Paper>
      <Divider sx={{ my: 2 }} />
      <Footer />
    </Box>
  );
};

export default PayHere;
