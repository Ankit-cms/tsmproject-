'use client';
import {
  Box,
  Breadcrumbs,
  Container,
  Divider,
  Link,
  Paper,
  Typography,
} from '@mui/material';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

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
  const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&::before': {
      display: 'none',
    },
  }));

  const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
      {
        transform: 'rotate(90deg)',
      },
    [`& .${accordionSummaryClasses.content}`]: {
      marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
      backgroundColor: 'rgba(255, 255, 255, .05)',
    }),
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

  const [expanded, setExpanded] = React.useState<string | false>('');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <Box>
      <Header />

      <Paper elevation={0} square >
        <Container maxWidth="lg">
          <Breadcrumbs aria-label="breadcrumb" sx={{ p: 3, pl: 0 }}>
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>

            <Typography sx={{ color: 'text.primary' }}>FAQs</Typography>
          </Breadcrumbs>
          <Divider />
          <Box py={4}>
            <Typography variant="h3" gutterBottom>
              Frequently asked questions{' '}
            </Typography>
            <Typography variant="h5" paragraph>
              Quick answers to common questions. Need more? Get in touch.
            </Typography>
            <Box mt={4}>
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === `panel${index + 1}`}
                  onChange={handleChange(`panel${index + 1}`)}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography component="span">{faq.question} </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{faq.answer}</Typography>
                  </AccordionDetails>
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
