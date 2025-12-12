import React from 'react';
import Header from '../components/Header';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import Footer from '../components/Footer';
import { WhatsApp } from '@mui/icons-material';
import Heading from '../components/Heading';

interface RowData {
  step: string;
  description: React.ReactNode;
}

function createData(step: string, description: React.ReactNode): RowData {
  return { step, description };
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
      <>
        Send payment screenshot / photo to &nbsp;
        <Chip size='small' icon={<WhatsApp />} label="+91 9818106472" />
      </>
    ),
  ];
  return (
    <Box>
      <Header />
      <Paper elevation={0} square >
          <Container maxWidth="lg">
            
      <Box sx={{ pt: { xs: 4, md: 8 }, pb: 2 }}>
        <Heading primaryText='Pay us here' secondaryText='Complete your payment quickly and safely using the QR code or bank transfer details below.'/>
        </Box>
          </Container>
      </Paper>

        <Paper elevation={0} square sx={{ bgcolor: "common.whiteSmoke" }}>
          <Container maxWidth="lg">
            
      <Box sx={{ py: { xs: 4, md: 8 } }}>
           
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }} p={0}>
               <Card sx={{ height: "100%" }}>
  <CardContent>
    <Typography variant="h4" component="h2" gutterBottom >
      Company Info
    </Typography>

    <Table  sx={{
        "& .MuiTableCell-root": {
          borderBottom: "none",     
          paddingY: 1,     
          paddingX: 1, 
        },
      }}>
      <TableBody>
        <TableRow>
          <TableCell sx={{ fontWeight: "bold", width: "35%" }}>
            Company name
          </TableCell>
          <TableCell>
            GRAVITY44 PLATFORM SOLUTIONS PRIVATE LIMITED
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell sx={{ fontWeight: "bold" }}>CIN</TableCell>
          <TableCell >
            U72900DL2022PTC408726
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell sx={{fontWeight: "bold"}}>GST</TableCell>
          <TableCell >
            07AAKCG2159B1ZU
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell sx={{fontWeight: "bold" }}>
            Address line 1
          </TableCell>
          <TableCell >
            101, Pratap Nagar
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell sx={{ fontWeight: "bold" }}>
            Address line 2
          </TableCell>
          <TableCell >
            Mayur Vihar Phase-1, East Delhi
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell sx={{fontWeight: "bold"}}>City</TableCell>
          <TableCell >New Delhi</TableCell>
        </TableRow>

        <TableRow>
          <TableCell sx={{ fontWeight: "bold" }}>State</TableCell>
          <TableCell >New Delhi</TableCell>
        </TableRow>

        <TableRow>
          <TableCell sx={{ fontWeight: "bold" }}>Country</TableCell>
          <TableCell >India</TableCell>
        </TableRow>

        <TableRow>
          <TableCell sx={{ fontWeight: "bold" }}>Pin code</TableCell>
          <TableCell >110091</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </CardContent>
</Card>

              </Grid>
              <Grid size={{ xs: 12, md: 6 }} p={0}>
  <Card sx={{ height: "100%" }}>
    <CardContent>
      <Typography variant="h4" component="h2" gutterBottom>
        Bank Details
      </Typography>

      <Table
        sx={{
          "& .MuiTableCell-root": {
            borderBottom: "none",   
            paddingY: 1,  
            paddingX: 1, 
          },
        }}
      >
        <TableBody>

          <TableRow>
            <TableCell sx={{ fontWeight: "bold", width: "35%" }}>
              Bank name
            </TableCell>
            <TableCell>HDFC BANK LTD</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>
              Account holder
            </TableCell>
            <TableCell>
              GRAVITY44 PLATFORM SOLUTIONS PVT LTD
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>
              Account number
            </TableCell>
            <TableCell>50200076533061</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>
              Branch code
            </TableCell>
            <TableCell>HDFC0009629</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>
              City
            </TableCell>
            <TableCell>Noida</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>
              State
            </TableCell>
            <TableCell>Uttar Pradesh</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>
              Country
            </TableCell>
            <TableCell>India</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>
              Pin code
            </TableCell>
            <TableCell>201306</TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </CardContent>
  </Card>
</Grid>


    
      
           
              <Grid size={{ xs: 12, md: 6 }} spacing={3}>
                <Card sx={{ height: '100%' }} variant='elevation'>
                  <CardContent>
                    <Typography variant="h6"
                  gutterBottom
                  color="primary.dark"
                  display="flex"
                  alignItems="center"
                  gap={1}>
                      QR Code
                    </Typography>
                    <Typography variant="h4" paragraph>
                      Scan and pay by any UPI app
                    </Typography>
                 
                    <Card sx={{ width: 'fit-content', mx: 'auto' }} >
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

                   
                    <Table aria-label="simple table" size='small' sx={{ "& .MuiTableCell-root": {
            borderBottom: "none",  
            paddingY: 1,          
            paddingX: 1,            
          },}}>
                      <TableBody sx={{ p: 0 }}>
                        {data.map((row) => (
                          <TableRow
                            key={row.step}
                            sx={{
                              '&:last-child td, &:last-child th': {
                                border: 0,
                              },
                              
                            }}
                          >
                            <TableCell component="th" scope="row">
                             <Typography variant="body2" fontWeight="bold">{row.step}</Typography>
                            </TableCell>
                            <TableCell >
                              <Typography variant="body2">{row.description}</Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} spacing={3}>
                <Card sx={{ height: '100%' }} variant='elevation' >
                  <CardContent>
                    <Typography variant="h6"
                  gutterBottom
                  color="primary.dark"
                  display="flex"
                  alignItems="center"
                  gap={1}>
                      QR Code
                    </Typography>
                    <Typography variant="h4" paragraph>
                      Scan and pay by any UPI app
                    </Typography>
                 
                    <Card sx={{ width: 'fit-content', mx: 'auto' }}>
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

                   
                    <Table aria-label="simple table" size='small' sx={{ "& .MuiTableCell-root": {
            borderBottom: "none",
            paddingY: 1,   
            paddingX: 1,     
          },}}>
                      <TableBody sx={{ p: 0 }}>
                        {data.map((row) => (
                          <TableRow
                            key={row.step}
                            sx={{
                              '&:last-child td, &:last-child th': {
                                border: 0,
                              },
                              
                            }}
                          >
                            <TableCell component="th" scope="row">
                             <Typography variant="body2" fontWeight="bold">{row.step}</Typography>
                            </TableCell>
                            <TableCell >
                              <Typography variant="body2">{row.description}</Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
        </Box>
          </Container>
      </Paper>
    
      <Paper elevation={0} square >
            <Container maxWidth="lg" >
              <Grid container spacing={5} >
                {/* Left Column */}
                <Grid size={{ xs: 12, md: 5 }}>
                  <CardMedia
                    component="img"
                    image="/img/client/partner-header.webp"
                    alt="Become a Partner"
                    sx={{ height: "100%", mx:0 }}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 7 }} sx={{ py: { xs: 4, md: 8 } }}>
                  <Typography variant="h3" gutterBottom>
                    Ready to grow your Real Estate business?
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Join AcreBytes and unlock the tools, visibility, and high-intent leads built to help agents win more deals.
                  </Typography>
                  <Box
                    display={"flex"}
                    gap={1}
                    mt={2}
                    alignItems={"center"}>
                    <Button variant="contained" startIcon={<WhatsApp />}>
                      Yes, I&apos;d like to Partner
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Paper>
      <Footer />
    </Box>
  );
};

export default PayHere;
