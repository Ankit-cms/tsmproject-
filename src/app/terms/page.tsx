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

const Terms = () => {
  const terms = [
    {
      id: 1,
      title: "Introduction",
      content: "Welcome to <strong>[Your Company Name]</strong> (“we,” “our,” or “us”). These Terms of Service (“Terms”) govern your use of our website, applications, and services (collectively, the “Services”). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, please discontinue using our Services."
    },
    {
      id: 2,
      title: "Eligibility",
      content: "You must be at least 18 years old to use our Services. By using our Services, you confirm that you meet this age requirement and have the legal capacity to enter into this agreement."
    },
    {
      id: 3,
      title: "Account Registration",
      content: "To access certain features, you may be required to create an account. You agree to provide accurate, current, and complete information during registration and to update your details as necessary. You are responsible for safeguarding your account credentials and any activities under your account."
    },
    {
      id: 4,
      title: "User Conduct",
      content: "You agree not to use our Services for any unlawful or harmful purpose. Prohibited conduct includes:",
      listItems: [
        "Violating any applicable laws or regulations.",
        "Infringing the rights of others.",
        "Transmitting harmful or disruptive code (e.g., malware).",
        "Engaging in fraudulent or deceptive practices."
      ]
    },
    {
      id: 5,
      title: "Intellectual Property",
      content: "All content, trademarks, service marks, and logos on our Services are the property of <strong>[Your Company Name]</strong> or their respective owners. You are granted a limited, non-exclusive, non-transferable license to use the Services for personal and non-commercial purposes. Reproduction or redistribution of any content without written permission is prohibited."
    },
    {
      id: 6,
      title: "Privacy Policy",
      content: "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and safeguard your personal information. By using our Services, you consent to our practices as described in the Privacy Policy."
    },
    {
      id: 7,
      title: "Disclaimer of Warranties",
      content: "Our Services are provided on an “as is” and “as available” basis without any warranties, express or implied. We do not guarantee uninterrupted service, accuracy of content, or that our Services will be free from errors or harmful components."
    },
    {
      id: 8,
      title: "Limitation of Liability",
      content: "To the fullest extent permitted by law, <strong>[Your Company Name]</strong> shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use or inability to use the Services, including loss of profits, data, goodwill, or other intangible losses."
    },
    {
      id: 9,
      title: "Indemnification",
      content: "You agree to indemnify and hold harmless <strong>[Your Company Name]</strong>, its affiliates, officers, employees, and agents from any claims, damages, or expenses arising from your use of the Services or your violation of these Terms."
    },
    {
      id: 10,
      title: "Changes to Terms",
      content: "We reserve the right to modify or update these Terms at any time. Material changes will be communicated with at least 30 days’ notice. Continued use of the Services after updates constitutes acceptance of the revised Terms."
    },
    {
      id: 11,
      title: "Governing Law",
      content: "These Terms are governed by and construed in accordance with the laws of <strong>[Your Jurisdiction]</strong>, without regard to conflict of law principles. Any disputes will be resolved exclusively in the courts located within that jurisdiction."
    },
    {
      id: 12,
      title: "Contact Information",
      content: "If you have any questions about these Terms, please contact us at:",
      contactInfo: [
        "[Your Company Name]",
        "[Your Address]",
        "[Your Email Address]",
        "[Your Phone Number]"
      ]
    }
  ];

  return (
    <Box>
      <Header />
      <Paper elevation={0} square sx={{ bgcolor: "common.whiteSmoke" }}>
        <Container maxWidth="lg">
          
          <Box sx={{ pt: { xs: 4, md: 8 }, pb: 2 } }>
            <Box mb={4}>
              <Typography  variant="h6"
                  gutterBottom
                  color="primary.dark"
                  display="flex"
                  alignItems="center"
                  gap={1}>
                Terms of Service
              </Typography>
              <Typography variant="h2" paragraph>
                Please read these Terms of Service carefully before using our
                website and services.
              </Typography>
            </Box>
            </Box>
        </Container>
      </Paper>

       <Paper elevation={0} square>
        <Container maxWidth="lg">
          
          <Box sx={{ py: { xs: 4, md: 8 } }}>
             <Card elevation={6} variant="elevation" sx={{ borderRadius: 2, p: {xs:1,md:2} ,}}>
        <CardContent  >
            <Box display="flex" flexDirection="column" gap={2} >
              {terms.map((term) => (
                <Box key={term.id}>
                  <Typography variant="h6" gutterBottom>
                    {term.id}. {term.title}
                  </Typography>
                  <Typography 
                    variant={"body2"} 
                    paragraph
                    dangerouslySetInnerHTML={{ __html: term.content }}
                  />
                  
                  {term.listItems && (
                    <Typography
                      component="ul"
                      sx={{ pl: 3 }}
                      paragraph
                    >
                      {term.listItems.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </Typography>
                  )}
                  
                  {term.contactInfo && (
                    <Typography
                      variant="body2"
                      paragraph
                      sx={{ mt: 1 }}
                    >
                      {term.contactInfo.map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </Typography>
                  )}
                </Box>
              ))}
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

export default Terms;