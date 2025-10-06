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

const Terms = () => {
  return (
    <Box>
      <Header />
      <Paper elevation={0} square sx={{ mt: 9 }}>
        {/* Breadcrumbs */}
        <Breadcrumbs aria-label="breadcrumb" sx={{ p: 3 }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{ color: 'text.primary' }}>Terms</Typography>
        </Breadcrumbs>

       <Divider />
        <Paper elevation={0} square>
          <Container maxWidth="lg">
            <Box py={8}>
              <Box mb={6}>
                <Typography variant="h3" gutterBottom>
                  Terms of Service
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Please read these Terms of Service carefully before using our
                  website and services.
                </Typography>
              </Box>

              <Box display="flex" flexDirection="column" gap={4}>
              
                <Box>
                  <Typography variant="h5" gutterBottom>
                    1. Introduction
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Welcome to <strong>[Your Company Name]</strong> (“we,”
                    “our,” or “us”). These Terms of Service (“Terms”) govern
                    your use of our website, applications, and services
                    (collectively, the “Services”). By accessing or using our
                    Services, you agree to be bound by these Terms. If you do
                    not agree, please discontinue using our Services.
                  </Typography>
                </Box>

                {/* 2. Eligibility */}
                <Box>
                  <Typography variant="h5" gutterBottom>
                    2. Eligibility
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    You must be at least 18 years old to use our Services. By
                    using our Services, you confirm that you meet this age
                    requirement and have the legal capacity to enter into this
                    agreement.
                  </Typography>
                </Box>

                {/* 3. Account Registration */}
                <Box>
                  <Typography variant="h5" gutterBottom>
                    3. Account Registration
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    To access certain features, you may be required to create an
                    account. You agree to provide accurate, current, and
                    complete information during registration and to update your
                    details as necessary. You are responsible for safeguarding
                    your account credentials and any activities under your
                    account.
                  </Typography>
                </Box>

                {/* 4. User Conduct */}
                <Box>
                  <Typography variant="h5" gutterBottom>
                    4. User Conduct
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    You agree not to use our Services for any unlawful or
                    harmful purpose. Prohibited conduct includes:
                  </Typography>
                  <Typography
                    component="ul"
                    color="text.secondary"
                    sx={{ pl: 3 }}
                  >
                    <li>Violating any applicable laws or regulations.</li>
                    <li>Infringing the rights of others.</li>
                    <li>
                      Transmitting harmful or disruptive code (e.g., malware).
                    </li>
                    <li>Engaging in fraudulent or deceptive practices.</li>
                  </Typography>
                </Box>

                {/* 5. Intellectual Property */}
                <Box>
                  <Typography variant="h5" gutterBottom>
                    5. Intellectual Property
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    All content, trademarks, service marks, and logos on our
                    Services are the property of
                    <strong> [Your Company Name]</strong> or their respective
                    owners. You are granted a limited, non-exclusive,
                    non-transferable license to use the Services for personal
                    and non-commercial purposes. Reproduction or redistribution
                    of any content without written permission is prohibited.
                  </Typography>
                </Box>

                {/* 6. Privacy Policy */}
                <Box>
                  <Typography variant="h5" gutterBottom>
                    6. Privacy Policy
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Your privacy is important to us. Please review our Privacy
                    Policy to understand how we collect, use, and safeguard your
                    personal information. By using our Services, you consent to
                    our practices as described in the Privacy Policy.
                  </Typography>
                </Box>

                {/* 7. Disclaimer of Warranties */}
                <Box>
                  <Typography variant="h5" gutterBottom>
                    7. Disclaimer of Warranties
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Our Services are provided on an “as is” and “as available”
                    basis without any warranties, express or implied. We do not
                    guarantee uninterrupted service, accuracy of content, or
                    that our Services will be free from errors or harmful
                    components.
                  </Typography>
                </Box>

                {/* 8. Limitation of Liability */}
                <Box>
                  <Typography variant="h5" gutterBottom>
                    8. Limitation of Liability
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    To the fullest extent permitted by law,{' '}
                    <strong>[Your Company Name]</strong> shall not be liable for
                    any indirect, incidental, special, consequential, or
                    punitive damages arising from your use or inability to use
                    the Services, including loss of profits, data, goodwill, or
                    other intangible losses.
                  </Typography>
                </Box>

                {/* 9. Indemnification */}
                <Box>
                  <Typography variant="h5" gutterBottom>
                    9. Indemnification
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    You agree to indemnify and hold harmless{' '}
                    <strong>[Your Company Name]</strong>, its affiliates,
                    officers, employees, and agents from any claims, damages, or
                    expenses arising from your use of the Services or your
                    violation of these Terms.
                  </Typography>
                </Box>

                {/* 10. Changes to Terms */}
                <Box>
                  <Typography variant="h5" gutterBottom>
                    10. Changes to Terms
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    We reserve the right to modify or update these Terms at any
                    time. Material changes will be communicated with at least 30
                    days’ notice. Continued use of the Services after updates
                    constitutes acceptance of the revised Terms.
                  </Typography>
                </Box>

                {/* 11. Governing Law */}
                <Box>
                  <Typography variant="h5" gutterBottom>
                    11. Governing Law
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    These Terms are governed by and construed in accordance with
                    the laws of
                    <strong> [Your Jurisdiction]</strong>, without regard to
                    conflict of law principles. Any disputes will be resolved
                    exclusively in the courts located within that jurisdiction.
                  </Typography>
                </Box>

                {/* 12. Contact Information */}
                <Box>
                  <Typography variant="h5" gutterBottom>
                    12. Contact Information
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    If you have any questions about these Terms, please contact
                    us at:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
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
      </Paper>

      <Footer />
    </Box>
  );
};

export default Terms;
