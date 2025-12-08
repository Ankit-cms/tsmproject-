'use client';
import React from 'react';
import {
  Box,
  Breadcrumbs,
  Container,
  Divider,
  Link,
  Paper,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <Box>
      <Header />
      <Paper elevation={0} square sx={{ bgcolor: "common.whiteSmoke" }} >
        <Container maxWidth="lg">
          
          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Box mb={4}>
              <Typography variant="h6"
                  gutterBottom
                  textTransform="uppercase"
                  color="primary.dark"
                  display="flex"
                  alignItems="center"
                  gap={1}>
                Privacy Policy
              </Typography>
              <Typography variant="h2" paragraph  >
                Please read our Privacy Policy carefully to understand how we
                collect, use, and protect your personal information.
              </Typography>
            </Box>
            </Box>
                   </Container>
                 </Paper>
           
                  <Paper elevation={0} square >
                   <Container maxWidth="lg">
                     
                     <Box sx={{ py: { xs: 4, md: 8 } }}>

            <Card elevation={6} variant="elevation" sx={{ borderRadius: 2, p: 2 ,}}>
         <CardContent  >
     <Box display="flex" flexDirection="column" gap={2} >
              <Box   >
                <Typography variant="h5" gutterBottom>
                  1. Introduction
                </Typography>
                <Typography variant="body1" paragraph  >
                  Welcome to <strong>[Your Company Name]</strong> (“we,” “our,”
                  or “us”). This Privacy Policy explains how we collect, use,
                  disclose, and protect information about you when you use our
                  website, applications, and services (collectively, the
                  “Services”).
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" gutterBottom>
                  2. Information We Collect
                </Typography>
                <Typography variant="body1" paragraph  >
                  We may collect personal information that you provide directly
                  to us, such as your name, email address, phone number, and any
                  other details you choose to share. We also collect information
                  automatically, such as IP address, browser type, and usage
                  data, through cookies and similar technologies.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" gutterBottom>
                  3. How We Use Your Information
                </Typography>
                <Typography variant="body1" paragraph  >
                  We use the collected information to:
                </Typography>
                <Typography
                  component="ul"
                   
                  sx={{ pl: 3 }}
                  paragraph
                >
                  <li>Provide, maintain, and improve our Services.</li>
                  <li>
                    Respond to your comments, questions, and support requests.
                  </li>
                  <li>
                    Send updates, promotions, and service-related information.
                  </li>
                  <li>Ensure compliance with legal obligations.</li>
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" gutterBottom>
                  4. Sharing Your Information
                </Typography>
                <Typography variant="body1" paragraph  >
                  We do not sell or rent your personal information. We may share
                  your information only with trusted partners, affiliates, or
                  service providers who help us operate and improve our
                  Services, under confidentiality agreements.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" gutterBottom>
                  5. Data Security
                </Typography>
                <Typography variant="body1" paragraph  >
                  We implement industry-standard security measures to protect
                  your data. However, please note that no method of transmission
                  or storage is 100% secure, and we cannot guarantee absolute
                  security.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" gutterBottom>
                  6. Your Rights
                </Typography>
                <Typography variant="body1" paragraph  >
                  Depending on your jurisdiction, you may have rights to access,
                  correct, delete, or restrict the use of your personal
                  information. You can contact us to exercise these rights.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" gutterBottom>
                  7. Cookies
                </Typography>
                <Typography variant="body1" paragraph  >
                  We use cookies and similar technologies to enhance your
                  browsing experience, analyze usage, and personalize content.
                  You can modify your browser settings to disable cookies, but
                  some features of our Services may not function properly.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" gutterBottom>
                  8. Third-Party Links
                </Typography>
                <Typography variant="body1" paragraph  >
                  Our Services may contain links to third-party websites or
                  services that are not operated by us. We are not responsible
                  for the privacy practices or content of those third parties.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" gutterBottom>
                  9. Changes to This Policy
                </Typography>
                <Typography variant="body1" paragraph  >
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with an updated “last
                  modified” date. Continued use of our Services after changes
                  indicates your acceptance of the revised Policy.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" gutterBottom>
                  10. Contact Us
                </Typography>
                <Typography variant="body1" paragraph  >
                  If you have questions about this Privacy Policy, please
                  contact us at:
                </Typography>
                <Typography
                  variant="body2"
                   
                  sx={{ mt: 1 }}
                  paragraph
                >
                  [Your Company Name] <br />
                  [Your Address] <br />
                  [Your Email Address] <br />
                  [Your Phone Number]
                </Typography>
              </Box>
            </Box>

          </CardContent>
            </Card>
          </Box>
        </Container>
      </Paper>
   

      <Footer />
    </Box>
  );
};

export default PrivacyPolicy;
