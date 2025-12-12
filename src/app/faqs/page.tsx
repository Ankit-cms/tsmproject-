'use client';
import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  CardMedia,
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

      <Paper elevation={0} square sx={{ bgcolor: "common.whiteSmoke" }}>
        <Container maxWidth="lg">
         
          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Grid container spacing={8}>
                                 <Grid size={{ xs: 12, md: 6 }} alignContent={'center'}>
  <Box >
              <Typography variant="h6"
                gutterBottom
                color="primary.dark"
                display="flex"
                alignItems="center"
                gap={1}>
              Frequently asked questions{' '}
            </Typography>
            <Typography variant="h1" paragraph>
              Quick answers to common questions. Need more? Get in touch.
            </Typography>
          </Box>
       </Grid>
              <Grid size={{ xs: 12, md: 6 }} >
                    
                      <CardMedia
                        component="img"
                        height="350"
                        image="/img/faq/faq-img.avif"
                        alt="green iguana"
                        sx={{ borderRadius: 4, boxShadow: 4 }}
                      />
                  
                  </Grid>
                  </Grid>
        

</Box>
        </Container>
      </Paper>

      <Paper elevation={0} square >
        <Container maxWidth="lg">
         
          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Box >

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
    

      <Footer />
    </Box>
  );
};

export default Faq;
