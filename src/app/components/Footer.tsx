'use client';
import {
  Box,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemButton,
  IconButton,
  Link,
  Chip,
} from '@mui/material';
import { Grid } from '@mui/material';
import FlareIcon from '@mui/icons-material/Flare';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
const SocialIconGroup = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: { xs: 1, md: 1 },
    }}
  >
    <IconButton aria-label="facebook">
      <FacebookIcon fontSize="small" />
    </IconButton>
    <IconButton aria-label="x-twitter">
      <TwitterIcon fontSize="small" />
    </IconButton>
    <IconButton aria-label="youtube">
      <YouTubeIcon fontSize="small" />
    </IconButton>
    <IconButton aria-label="instagram">
      <InstagramIcon fontSize="small" />
    </IconButton>
    <IconButton aria-label="linkedin">
      <LinkedInIcon fontSize="small" />
    </IconButton>
  </Box>
);
const Footer = () => {
  return (
    <Paper component="footer" elevation={0} square>
      <Container maxWidth="lg">
        <Box py={4}>
          <Grid container spacing={4} mb={2}>
            <Grid size={{ md: 4 }}>
              <Box mb={2} display={'flex'} gap={1} alignItems="center">
                <FlareIcon
                  fontSize="large"
                  sx={{ display: { xs: 'none', md: 'flex' } }}
                />
                <Typography
                  variant="h4"
                  gutterBottom
                  mb={0}
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: 'inherit',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                  }}
                >
                  Instalanes
                </Typography>
              </Box>
              <Typography variant="body2" paragraph>
                TMS platform boosting supply chain visibility, collaboration,
                and efficiency
              </Typography>
              <Box>
                <Chip
                  icon={<EmailOutlinedIcon fontSize="small" />}
                  label="info.gravity44.com"
                  variant="outlined"
                  color="primary"
                  sx={{ px: 1 }}
                />
                <Box display={'flex'} gap={1} mt={1}>
                  <WhatsAppIcon fontSize="small" />
                  <Typography variant="subtitle2" gutterBottom>
                    +91123456789
                  </Typography>
                </Box>
                <Box display={'flex'} gap={1} mt={1}>
                  <FmdGoodOutlinedIcon fontSize="small" />

                  <Typography variant="subtitle2" gutterBottom>
                    101, Pratap Nagar, Mayur Vihar Phase-1, New Delhi, East
                    Delhi, Delhi, India, 110091
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ md: 8 }}>
              <Grid container spacing={4} mb={2}>
                <Grid size={{ sm: 6, md: 3 }}>
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    Company
                  </Typography>
                  <List dense disablePadding>
                    {['About', 'Careers', 'Terms', 'Privacy'].map((item) => (
                      <ListItem key={item} disablePadding>
                        <ListItemButton
                          component="a"
                          href={`/${item.toLowerCase().replace(' ', '-')}`}
                          sx={{ px: 0 }}
                        >
                          <ListItemText primary={item} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    Capabilities
                  </Typography>
                  <List dense disablePadding>
                    {[
                      'Consulting',
                      'Data analytics',
                      'Business intelligence',
                      'Process automation',
                    ].map((item) => (
                      <ListItem key={item} disablePadding>
                        <ListItemButton
                          component="a"
                          href={`/${item.toLowerCase().replace(' ', '-')}`}
                          sx={{ px: 0 }}
                        >
                          <ListItemText primary={item} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    Resources
                  </Typography>
                  <List dense disablePadding>
                    {['Blogs', 'Faqs', 'Pricing', 'Pay here'].map((item) => (
                      <ListItem key={item} disablePadding>
                        <ListItemButton
                          component="a"
                          href={`/${item.toLowerCase().replace(' ', '-')}`}
                          sx={{ px: 0 }}
                        >
                          <ListItemText primary={item} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    Other
                  </Typography>
                  <List dense disablePadding>
                    {['Media', 'Partnership', 'Leadership'].map((item) => (
                      <ListItem key={item} disablePadding>
                        <ListItemButton
                          component="a"
                          href={`/${item.toLowerCase().replace(' ', '-')}`}
                          sx={{ px: 0 }}
                        >
                          <ListItemText primary={item} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Divider />
      <Container maxWidth="lg">
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          sx={{ py: 2 }}
        >
          <Grid>
            <Typography
              variant="body2"
              textAlign={{ xs: 'center', md: 'left' }}
            >
              © 2025 Gravity44. All rights reserved
            </Typography>
          </Grid>

          <Grid textAlign="center">
            <SocialIconGroup />
          </Grid>

          <Grid
            display="flex"
            justifyContent={{ xs: 'center', md: 'flex-end' }}
            gap={2}
          >
            {['Privacy', 'Terms', 'Cookies'].map((text, index) => (
              <Link
                key={index}
                href="#"
                underline="hover"
                variant="body2"
                color="inherit"
              >
                {text} &nbsp; {index < 2 && '|'}
              </Link>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Footer;
