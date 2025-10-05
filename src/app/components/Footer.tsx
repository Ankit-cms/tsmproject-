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
} from '@mui/material';
import { Grid } from '@mui/material';
import FlareIcon from '@mui/icons-material/Flare';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';

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
                  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                />
                <Typography variant="h4" gutterBottom mb={0}>
                  Instalanes
                </Typography>
              </Box>
              <Typography variant="body2" paragraph>
                Instalanes is a Transport management and visibility platform
                that helps businesses improve their supply chain visibility,
                collaboration, growth, and efficiency.
              </Typography>
            </Grid>
            <Grid size={{ md: 8 }}>
              <Grid container spacing={4} mb={2}>
                <Grid size={{ sm: 6, md: 3 }}>
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    Company
                  </Typography>
                  <List dense disablePadding>
                    {['About', 'Careers', 'Terms', 'Privacy policy'].map(
                      (item) => (
                        <ListItem key={item} disablePadding>
                          <ListItemButton
                            component="a"
                            href={`/${item.toLowerCase().replace(' ', '-')}`}
                          >
                            <ListItemText primary={item} />
                          </ListItemButton>
                        </ListItem>
                      )
                    )}
                  </List>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    TMS Capabilities
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
                    {['Blogs', 'Faqs', 'Pricing - Get Quote', 'Pay here'].map(
                      (item) => (
                        <ListItem key={item} disablePadding>
                          <ListItemButton
                            component="a"
                            href={`/${item.toLowerCase().replace(' ', '-')}`}
                          >
                            <ListItemText primary={item} />
                          </ListItemButton>
                        </ListItem>
                      )
                    )}
                  </List>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    Contact
                  </Typography>
                  <List dense disablePadding>
                    {['Email', 'Phone'].map((item) => (
                      <ListItem key={item} disablePadding>
                        <ListItemText primary={item} />
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
         
          <Grid >
            <Typography
              variant="body2"
              textAlign={{ xs: 'center', md: 'left' }}
            >
              Gravity44 / Copyright © 2024 Installanes.com. All rights reserved.
            </Typography>
          </Grid>

          <Grid   textAlign="center">
            <SocialIconGroup />
          </Grid>

          <Grid
            display="flex"
            justifyContent={{ xs: 'center', md: 'flex-end' }}
            gap={2}
          >
            {['Privacy Statement', 'Terms of Use', 'Cookies'].map((text) => (
              <Link
                key={text}
                href="#"
                underline="hover"
                variant="body2"
                color="inherit"
              >
                {text}
              </Link>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Footer;
