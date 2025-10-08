'use client';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Breadcrumbs,
  Container,
  Divider,
  Link,
  Paper,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
export const faqs = [
  {
    question: 'What is the application process like?',
    answer:
      'You can apply directly through our website. Once your application is received, our team will review it and contact you if your profile matches the requirements.',
  },
  {
    question: 'Can I apply for multiple positions?',
    answer:
      'Yes, you can apply for more than one position if you believe your skills fit multiple roles.',
  },
  {
    question: 'Do you offer remote work options?',
    answer:
      'Yes, most of our roles are hybrid or fully remote, depending on the job requirements and your location.',
  },
  {
    question: 'How long does the hiring process take?',
    answer:
      'The process typically takes 2–3 weeks, including application review, interviews, and final selection.',
  },
  {
    question: 'What should I include in my resume?',
    answer:
      'Include your latest work experience, technical skills, education, and any projects or achievements relevant to the role.',
  },
  {
    question: 'Is prior experience required for all positions?',
    answer:
      'Not necessarily. Some roles are open to fresh graduates, while others require prior experience in a similar field.',
  },
  {
    question: 'Will I receive feedback if my application is rejected?',
    answer:
      'Due to high application volume, we may not be able to provide individual feedback for every applicant.',
  },
  {
    question: 'Do you provide relocation assistance?',
    answer:
      'For certain positions and locations, we do offer relocation support. Details are provided during the offer stage.',
  },
  {
    question: 'What benefits does your company offer?',
    answer:
      'We offer competitive salaries, health insurance, flexible working hours, paid leave, and learning opportunities.',
  },
  {
    question: 'How can I prepare for the interview?',
    answer:
      'Research our company, review the job description, and be ready to discuss your past projects, problem-solving skills, and technical knowledge.',
  },
];

const Faq = () => {
  return (
    <Box>
      <Header />

      <Paper elevation={0} square sx={{ mt: 9 }}>
        <Container maxWidth="lg">
          <Breadcrumbs aria-label="breadcrumb" sx={{ p: 3 ,pl:0}}>
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>

            <Typography sx={{ color: 'text.primary' }}>FAQs</Typography>
          </Breadcrumbs>
          <Divider />
          <Box py={4}>
            <Typography variant="h4" component="h2" gutterBottom>
              Frequently asked questions{' '}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Find answers to common questions about our products. Can not find
              what you are looking for? Contact our support team.
            </Typography>
            <Divider sx={{ pt: 4 }} />
            <Box mt={8}>
              {faqs.map((question) => (
                <Accordion key={question.question}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6" py={1}>
                      {question.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>{question.answer} </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Box>
        </Container>
      </Paper>
      <Divider sx={{ my: 2 }} />

      <Footer />
    </Box>
  );
};

export default Faq;
