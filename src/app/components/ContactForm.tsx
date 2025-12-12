"use client";
import * as React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Card,
    TextField,
    Avatar,
    Checkbox,
    InputAdornment,
    CardActionArea,
    Paper,
} from '@mui/material';
import Link from 'next/link';
import { Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import {
    Dialog,
    DialogContent,
    DialogActions,
} from "@mui/material";
import Heading from './Heading';

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

    const [open, setOpen] = React.useState(false);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (

        <Paper elevation={0} square  >
            <Container maxWidth="lg">
                <Box sx={{ py: { xs: 4, md: 8 } }}>
                    <Box mb={4}>
                        <Heading primaryText='Contact us' secondaryText='We&apos;d love to talk about how we can work together'/>
                    </Box>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h4"
                                component="h4"
                                fontWeight="bold"
                                gutterBottom
                                mb={3}>
                                Get in touch
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <Card elevation={2} variant="outlined"
                                        sx={{ bgcolor: "common.whiteSmoke", width: "100%" }}>
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
                                    <Card elevation={2} variant="outlined"
                                        sx={{ bgcolor: "common.whiteSmoke", width: "100%" }}>
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
                                    <Card elevation={2} variant="outlined"
                                        sx={{ bgcolor: "common.whiteSmoke", width: "100%" }}>
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
                                    <Card elevation={2} variant="outlined"
                                        sx={{ bgcolor: "common.whiteSmoke", width: "100%" }}>
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
                            <Typography variant="h4"
                                component="h2"
                                fontWeight="bold"
                                gutterBottom
                                mb={3}>
                                Book a Demo - Submit details
                            </Typography>
                            <Grid container spacing={2} component="form" onSubmit={handleSubmit}>
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
                                    <Button variant="contained" size="large" fullWidth type="submit">
                                        <SubdirectoryArrowRightIcon sx={{ mr: 1 }} /> Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        borderRadius: 4,
                        width: 400,
                        overflow: "hidden",
                    },
                }}
            >
                {/* Gradient Top */}
                <Box
                    sx={{
                        height: 160,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        overflow: "hidden",

                        "&::before": {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            background: `
        radial-gradient(circle at center,
          rgba(40, 80, 255, 0.95) 0%,
          rgba(90, 110, 255, 0.75) 20%,
          rgba(160, 120, 255, 0.55) 40%,
          rgba(255, 160, 220, 0.60) 60%,
          rgba(255, 200, 230, 0.45) 80%,
          rgba(255, 240, 250, 0.40) 100%
        )
      `,
                            backgroundSize: "200% 200%",
                            animation: "radiusMove 18s ease-in-out infinite",
                            zIndex: 0,
                        },

                        "@keyframes radiusMove": {
                            "0%": { backgroundPosition: "50% 50%" },
                            "50%": { backgroundPosition: "70% 60%" },
                            "100%": { backgroundPosition: "50% 50%" }
                        },

                    }}
                >
                    <Typography variant="h1" fontWeight={600} color="white" sx={{ zIndex: 1, position: "relative" }}>
                        Thank You!
                    </Typography>
                </Box>

                <DialogContent sx={{ textAlign: "center", mt: 1 }}>
                    <Typography variant="body2">
                        Your details have been submitted successfully.
                        <br />
                        Our team will contact you shortly.
                    </Typography>
                </DialogContent>

                <DialogActions
                    sx={{
                        flexDirection: "row",
                        gap: 1,
                        px: 3,
                        pb: 3,
                    }}
                >
                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={handleClose}
                    >
                        Maybe later
                    </Button>

                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleClose}
                    >
                        Continue
                    </Button>
                </DialogActions>
            </Dialog>


        </Paper>
    );
};

export default ContactForm;