"use client";
import * as React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    Paper,
    TextField,
    Chip,
    Avatar,
    Divider,
    CardMedia,
    Checkbox,
    InputAdornment,
    CardActionArea,
    Stack,
} from '@mui/material';
import Link from 'next/link';
import { Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

const ContactForm = () => {

    const [countryCode, setCountryCode] = React.useState<string>('+91');

    const countryCodes = [
        { value: '+91', label: 'India (+91)' },
        { value: '+1', label: 'USA (+1)' },
        { value: '+44', label: 'UK (+44)' },
        { value: '+61', label: 'Australia (+61)' },
    ];

    const [selectedRole, setSelectedRole] = React.useState<string>('Owner / Founder / Co-founder');

    const [selectedPlatform, setSelectedPlatform] = React.useState<string>('Platform demo');

    const platforms = [
        'Platform demo',
        'Careers',
        'Investments',
        'Growth partnering',
        'Support',
        'Feedback',
        'Media',
        'Legal',
        'Other',
    ];
    const roles = [
        'Owner / Founder / Co-founder',
        'CEO / CXO',
        'Managing Director / Director',
        'President / Vice President',
        'Senior Management',
        'Middle Management',
        'Other',
    ];


    return (
        <Container maxWidth="lg">
            <Box py={8}>
                <Box mb={4}>
                    <Typography variant="h3" gutterBottom>
                        Let’s Connect
                    </Typography>
                    <Typography variant="h5" paragraph mb={6}>
                        Explore how Instalanes TMS can simplify your operations. We’re
                        here to help you with features, pricing, implementation and
                        support.
                    </Typography>
                </Box>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h4" component="h4" gutterBottom mb={3}>
                            Get in touch
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Card elevation={2}>
                                    <CardActionArea
                                        sx={{
                                            height: '100%',
                                            p: 3,
                                            position: 'relative',
                                            '&[data-active]': {
                                                backgroundColor: 'action.selected',
                                                '&:hover': {
                                                    backgroundColor: 'action.selectedHover',
                                                },
                                            },
                                        }}
                                    >
                                        <WhatsAppIcon fontSize="large" />
                                        <Typography variant="h6" gutterBottom>
                                            Message
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            paragraph
                                            mb={0}
                                        >
                                            Drop us a message — team will get back to you
                                        </Typography>
                                        <Link
                                            href="https://wa.me/919999999999"
                                            target="_blank"
                                            color="inherit"
                                            style={{ position: 'absolute', top: 16, right: 16 }}
                                        >
                                            <ArrowOutwardIcon fontSize="small" />
                                        </Link>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Card elevation={2}>
                                    <CardActionArea
                                        sx={{
                                            height: '100%',
                                            p: 3,
                                            position: 'relative',
                                            '&[data-active]': {
                                                backgroundColor: 'action.selected',
                                                '&:hover': {
                                                    backgroundColor: 'action.selectedHover',
                                                },
                                            },
                                        }}
                                    >
                                        <MonetizationOnIcon fontSize="large" />
                                        <Typography variant="h6" gutterBottom>
                                            Pricing
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            paragraph
                                            mb={0}
                                        >
                                            Get flexible pricing built for every business size
                                        </Typography>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Card elevation={2}>
                                    <CardActionArea
                                        sx={{
                                            height: '100%',
                                            p: 3,
                                            position: 'relative',
                                            '&[data-active]': {
                                                backgroundColor: 'action.selected',
                                                '&:hover': {
                                                    backgroundColor: 'action.selectedHover',
                                                },
                                            },
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            gutterBottom
                                            display={'flex'}
                                            alignItems="center"
                                            gap={2}
                                        >
                                            <Avatar
                                                alt="Priyanka S"
                                                src="/img/team1.jpg"
                                                sx={{ width: 50, height: 50 }}
                                            />{' '}
                                            Priyanka S
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            paragraph
                                            mb={0}
                                        >
                                            Sales Manager
                                        </Typography>
                                        <Link
                                            href="#"
                                            target="_blank"
                                            color="inherit"
                                            style={{ position: 'absolute', top: 16, right: 16 }}
                                        >
                                            <ArrowOutwardIcon fontSize="small" />
                                        </Link>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Card elevation={2}>
                                    <CardActionArea
                                        sx={{
                                            height: '100%',
                                            p: 3,
                                            position: 'relative',
                                            '&[data-active]': {
                                                backgroundColor: 'action.selected',
                                                '&:hover': {
                                                    backgroundColor: 'action.selectedHover',
                                                },
                                            },
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            gutterBottom
                                            display={'flex'}
                                            alignItems="center"
                                            gap={2}
                                        >
                                            <Avatar
                                                alt="Lucky S"
                                                src="/img/team2.jpeg"
                                                sx={{ width: 50, height: 50 }}
                                            />{' '}
                                            Lucky S
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            paragraph
                                            mb={0}
                                        >
                                            Sales Manager
                                        </Typography>
                                        <Link
                                            href="#"
                                            target="_blank"
                                            color="inherit"
                                            style={{ position: 'absolute', top: 16, right: 16 }}
                                        >
                                            <ArrowOutwardIcon fontSize="small" />
                                        </Link>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h4" component="h2" gutterBottom mb={3}>
                            Book a Demo - Submit details
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 6 }}>
                                <TextField
                                    fullWidth
                                    label="First name"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <TextField fullWidth label="Last name" variant="outlined" />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    label="Your Company name"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    select
                                    label="Your Role"
                                    variant="outlined"
                                    value={selectedRole}
                                    onChange={(e) => setSelectedRole(e.target.value)}
                                >
                                    {roles.map((role) => (
                                        <MenuItem key={role} value={role}>
                                            {role}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField fullWidth label="Email" variant="outlined" />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    label="Phone number"
                                    inputProps={{ maxLength: 15 }}
                                    type="number"
                                    inputMode="numeric"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <TextField
                                                    select
                                                    variant="standard"
                                                    value={countryCode}
                                                    onChange={(e) => setCountryCode(e.target.value)}
                                                    InputProps={{ disableUnderline: true }}
                                                    sx={{
                                                        '& .MuiSelect-select': {
                                                            paddingRight: '24px',
                                                        },
                                                        minWidth: 80,
                                                    }}
                                                >
                                                    {countryCodes.map((option) => (
                                                        <MenuItem
                                                            key={option.value}
                                                            value={option.value}
                                                        >
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    select
                                    label="Enquiry about"
                                    variant="outlined"
                                    value={selectedPlatform}
                                    onChange={(e) => setSelectedPlatform(e.target.value)}
                                >
                                    {platforms.map((platform) => (
                                        <MenuItem key={platform} value={platform}>
                                            {platform}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    label="Message"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={2}
                                    p={2}
                                    border={1}
                                    borderColor="grey.300"
                                    borderRadius={1}
                                >
                                    <Checkbox size="large" />
                                    <Box>
                                        <Typography variant="body2">
                                            I am not a robot
                                        </Typography>
                                        <Box display="flex" gap={1}>
                                            <Typography variant="caption" color="text.secondary">
                                                reCAPTCHA
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                Privacy
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                -
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                Terms
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <Button variant="contained" size="large" fullWidth>
                                    <SubdirectoryArrowRightIcon sx={{ mr: 1 }} /> Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ContactForm;