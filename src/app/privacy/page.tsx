'use client';
import React from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const privacySections = [
    {
      id: 1,
      title: "Introduction",
      content: "Welcome to <strong>[Your Company Name]</strong> (“we,” “our,” or “us”). This Privacy Policy explains how we collect, use, disclose, and protect information about you when you use our website, applications, and services (collectively, the “Services”)."
    },
    {
      id: 2,
      title: "Information We Collect",
      content: "We may collect personal information that you provide directly to us, such as your name, email address, phone number, and any other details you choose to share. We also collect information automatically, such as IP address, browser type, and usage data, through cookies and similar technologies."
    },
    {
      id: 3,
      title: "How We Use Your Information",
      content: "We use the collected information to:",
      listItems: [
        "Provide, maintain, and improve our Services.",
        "Respond to your comments, questions, and support requests.",
        "Send updates, promotions, and service-related information.",
        "Ensure compliance with legal obligations."
      ]
    },
    {
      id: 4,
      title: "Sharing Your Information",
      content: "We do not sell or rent your personal information. We may share your information only with trusted partners, affiliates, or service providers who help us operate and improve our Services, under confidentiality agreements."
    },
    {
      id: 5,
      title: "Data Security",
      content: "We implement industry-standard security measures to protect your data. However, please note that no method of transmission or storage is 100% secure, and we cannot guarantee absolute security."
    },
    {
      id: 6,
      title: "Your Rights",
      content: "Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict the use of your personal information. You can contact us to exercise these rights."
    },
    {
      id: 7,
      title: "Cookies",
      content: "We use cookies and similar technologies to enhance your browsing experience, analyze usage, and personalize content. You can modify your browser settings to disable cookies, but some features of our Services may not function properly."
    },
    {
      id: 8,
      title: "Third-Party Links",
      content: "Our Services may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices or content of those third parties."
    },
    {
      id: 9,
      title: "Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “last modified” date. Continued use of our Services after changes indicates your acceptance of the revised Policy."
    },
    {
      id: 10,
      title: "Contact us",
      content: "If you have questions about this Privacy Policy, please contact us at:",
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
      <Paper elevation={0} square sx={{ bgcolor: "common.whiteSmoke" }} >
        <Container maxWidth="lg">
          
          <Box sx={{ pt: { xs: 4, md: 8 }, pb: 2 } }>
            <Box mb={4}>
              <Typography variant="h6"
                  gutterBottom
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
              {privacySections.map((section) => (
                <Box key={section.id}>
                  <Typography variant="h6" gutterBottom>
                    {section.id}. {section.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    paragraph
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                  
                  {section.listItems && (
                    <Typography
                      component="ul"
                      sx={{ pl: 3 }}
                      paragraph
                    >
                      {section.listItems.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </Typography>
                  )}
                  
                  {section.contactInfo && (
                    <Typography
                      variant="body2"
                      sx={{ mt: 1 }}
                      paragraph
                    >
                      {section.contactInfo.map((line, index) => (
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

export default PrivacyPolicy;