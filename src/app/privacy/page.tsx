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
} from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <Box>
      <Header />
      <Paper elevation={0} square sx={{ mt: 9 }}>
        <Container maxWidth="lg">
          <Breadcrumbs aria-label="breadcrumb" sx={{ p: 3,pl:0 }}>
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography sx={{ color: 'text.primary' }}>
              Privacy Policy
            </Typography>
          </Breadcrumbs>
          <Divider />
          <Box py={8}>
            <Box mb={6}>
              <Typography variant="h3" component="h2" gutterBottom>
                Privacy Policy
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Please read our Privacy Policy carefully to understand how we
                collect, use, and protect your personal information.
              </Typography>
            </Box>
            <Divider />

            <Box display="flex" flexDirection="column" gap={2} mt={2}>
              <Box>
                <Typography variant="h6" gutterBottom>
                  1. Introduction
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  Welcome to <strong>[Your Company Name]</strong> (“we,” “our,”
                  or “us”). This Privacy Policy explains how we collect, use,
                  disclose, and protect information about you when you use our
                  website, applications, and services (collectively, the
                  “Services”).
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom>
                  2. Information We Collect
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  We may collect personal information that you provide directly
                  to us, such as your name, email address, phone number, and any
                  other details you choose to share. We also collect information
                  automatically, such as IP address, browser type, and usage
                  data, through cookies and similar technologies.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom>
                  3. How We Use Your Information
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  We use the collected information to:
                </Typography>
                <Typography
                  component="ul"
                  color="text.secondary"
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
                <Typography variant="h6" gutterBottom>
                  4. Sharing Your Information
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  We do not sell or rent your personal information. We may share
                  your information only with trusted partners, affiliates, or
                  service providers who help us operate and improve our
                  Services, under confidentiality agreements.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom>
                  5. Data Security
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  We implement industry-standard security measures to protect
                  your data. However, please note that no method of transmission
                  or storage is 100% secure, and we cannot guarantee absolute
                  security.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom>
                  6. Your Rights
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  Depending on your jurisdiction, you may have rights to access,
                  correct, delete, or restrict the use of your personal
                  information. You can contact us to exercise these rights.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom>
                  7. Cookies
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  We use cookies and similar technologies to enhance your
                  browsing experience, analyze usage, and personalize content.
                  You can modify your browser settings to disable cookies, but
                  some features of our Services may not function properly.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom>
                  8. Third-Party Links
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  Our Services may contain links to third-party websites or
                  services that are not operated by us. We are not responsible
                  for the privacy practices or content of those third parties.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom>
                  9. Changes to This Policy
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with an updated “last
                  modified” date. Continued use of our Services after changes
                  indicates your acceptance of the revised Policy.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom>
                  10. Contact Us
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  If you have questions about this Privacy Policy, please
                  contact us at:
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
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
          </Box>
        </Container>
      </Paper>
      <Divider sx={{ my: 2 }} />

      <Footer />
    </Box>
  );
};

export default PrivacyPolicy;
