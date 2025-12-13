'use client';
import React, { useState } from 'react';
import {
  Box,
  Button,
  CardMedia,
  Container,
  Paper,
  Stack,
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Divider,
  IconButton,
  InputAdornment,
  Checkbox
} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { TouchAppOutlined, UploadFile, Close } from '@mui/icons-material';
import Header from '@/app/components/Header';
import Heading from '@/app/components/Heading';
import Footer from '@/app/components/Footer';

// Job data to display at the top of the form
const jobData = {
  Project: 'AcreBytes',
  title: 'Implementation Manager',
  location: 'Noida',
  workType: 'Remote',
  contractType: 'Part time',
  experience: '3+ years',
  category: 'Product'
};

const JobApplication = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentCompany: '',
    linkedinProfile: '',
    portfolioWebsite: '',
    coverLetter: '',
    noticePeriod: '',
    expectedSalary: '',
    source: '',
    referralName: ''
  });

  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notRobot, setNotRobot] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file type
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, resume: 'Please upload PDF or DOC/DOCX files only' }));
        return;
      }
      
      // Check file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, resume: 'File size should be less than 5MB' }));
        return;
      }
      
      setResume(file);
      setErrors(prev => ({ ...prev, resume: '' }));
    }
  };

  const handleRemoveResume = () => {
    setResume(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!resume) newErrors.resume = 'Resume is required';
    if (!notRobot) newErrors.notRobot = 'Please verify you are not a robot';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Submit logic here (API call, etc.)
    console.log('Form submitted:', { ...formData, resume });
    alert('Application submitted successfully!');
  };

  return (
    <Box>
      <Header />
      <Paper elevation={0} square sx={{ bgcolor: "common.whiteSmoke" }}>
        <Container maxWidth="lg">
          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Grid container spacing={4} my={3} justifyContent="center" alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography 
                  variant="h6"
                  gutterBottom
                  color="primary.dark"
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  Careers
                </Typography>
                <Typography variant='h1' paragraph>
                  Join us to create Impact at scale                
                </Typography>
                <Typography variant="h2" paragraph>
                  Build technology that transforms business processes across the world.
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <CardMedia
                  component="img"
                  height="400"
                  image="/img/career/career-img.avif"
                  alt="about-us"
                  sx={{ borderRadius: 4, boxShadow: 4 }}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Paper>
      
      <Paper elevation={0} square>
        <Container maxWidth="lg">
          <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Heading 
              primaryText='Apply for Position' 
              secondaryText='Fill in your details to apply for this position'
            />
            
            {/* Job Details Card */}
            <Paper
              elevation={0}
              sx={{
                border: "1px solid",
                borderColor: "grey.300",
                mb: 4,
                backgroundColor: "background.default",
                p: 3,
                borderRadius: 2
              }}
            >
              <Stack spacing={2}>
                <Typography variant="h5" fontWeight="bold" color="primary.main">
                  {jobData.title}
                </Typography>
                
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  <Typography variant="body1" fontWeight="medium">
                    {jobData.Project}
                  </Typography>
                  <Typography color="text.secondary">|</Typography>
                  <Typography variant="body1" color="text.secondary">
                    {jobData.category}
                  </Typography>
                  <Typography color="text.secondary">|</Typography>
                  <Typography variant="body1" color="text.secondary">
                    {jobData.experience}
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                  <LocationOnOutlinedIcon fontSize="small" color="action" />
                  <Typography variant="body2" color="text.secondary">
                    {jobData.location}
                  </Typography>
                  <Typography color="text.secondary">|</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {jobData.workType}
                  </Typography>
                  <Typography color="text.secondary">|</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {jobData.contractType}
                  </Typography>
                </Stack>
                
                <Divider sx={{ my: 2 }} />
                
                <Typography variant="body2" paragraph>
                  Requirements: 3+ years of experience in SaaS implementation, onboarding, or project management.
                  Strong communication, client management, and problem-solving skills. Experience with enterprise
                  software, data migration, and integrations preferred. Ability to manage multiple projects 
                  simultaneously in a fast-paced environment.
                </Typography>
              </Stack>
            </Paper>

            {/* Application Form */}
            <Paper
              component="form"
              onSubmit={handleSubmit}
              elevation={0}
              sx={{
                border: "1px solid",
                borderColor: "grey.300",
                p: { xs: 2, md: 4 },
                borderRadius: 2
              }}
            >
              <Typography variant="h4" gutterBottom mb={3}>
                Personal Information
              </Typography>
              
              {/* Two-column layout for form fields */}
              <Grid container spacing={3}>
                {/* First Name */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                    First Name *
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <TextField
                    fullWidth
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    variant="outlined"
                    placeholder="Enter your first name"
                  />
                </Grid>
                
                {/* Last Name */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                    Last Name *
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <TextField
                    fullWidth
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                    variant="outlined"
                    placeholder="Enter your last name"
                  />
                </Grid>
                
                {/* Email */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                    Email Address *
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <TextField
                    fullWidth
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    variant="outlined"
                    placeholder="Enter your email address"
                  />
                </Grid>
                
                {/* Phone */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                    Phone Number *
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <TextField
                    fullWidth
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    error={!!errors.phone}
                    helperText={errors.phone}
                    variant="outlined"
                    placeholder="Enter your phone number"
                  />
                </Grid>
                
                {/* Current Company */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                    Current Company
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <TextField
                    fullWidth
                    name="currentCompany"
                    value={formData.currentCompany}
                    onChange={handleInputChange}
                    variant="outlined"
                    placeholder="Enter your current company name"
                  />
                </Grid>
                
                {/* LinkedIn Profile */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                    LinkedIn Profile URL
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <TextField
                    fullWidth
                    name="linkedinProfile"
                    value={formData.linkedinProfile}
                    onChange={handleInputChange}
                    variant="outlined"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </Grid>
                
                {/* Portfolio Website */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                    Portfolio/Website
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <TextField
                    fullWidth
                    name="portfolioWebsite"
                    value={formData.portfolioWebsite}
                    onChange={handleInputChange}
                    variant="outlined"
                    placeholder="https://yourportfolio.com"
                  />
                </Grid>
                
                {/* Resume Upload */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                    Resume *
                  </Typography>
                  <Typography variant="caption" color="text.secondary" display="block">
                    PDF, DOC, DOCX (Max 5MB)
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <Box>
                    <input
                      accept=".pdf,.doc,.docx"
                      style={{ display: 'none' }}
                      id="resume-upload"
                      type="file"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="resume-upload">
                      <Button
                        component="span"
                        variant="outlined"
                        startIcon={<UploadFile />}
                        sx={{ mb: 1 }}
                      >
                        Choose File
                      </Button>
                    </label>
                    {errors.resume && (
                      <FormHelperText error sx={{ ml: 0, mt: 1 }}>
                        {errors.resume}
                      </FormHelperText>
                    )}
                    {resume && (
                      <Box display="flex" alignItems="center" gap={1} mt={1}>
                        <Typography variant="body2">
                          {resume.name} ({(resume.size / 1024 / 1024).toFixed(2)} MB)
                        </Typography>
                        <IconButton size="small" onClick={handleRemoveResume}>
                          <Close fontSize="small" />
                        </IconButton>
                      </Box>
                    )}
                    {!resume && (
                      <Typography variant="caption" color="text.secondary" display="block" mt={1}>
                        No file chosen
                      </Typography>
                    )}
                  </Box>
                </Grid>
                
                {/* Cover Letter */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                    Cover Letter
                  </Typography>
                  <Typography variant="caption" color="text.secondary" display="block">
                    Optional
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <TextField
                    fullWidth
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    multiline
                    rows={4}
                    variant="outlined"
                    placeholder="Tell us why you're interested in this position and why you'd be a good fit..."
                  />
                </Grid>
                
                {/* Notice Period */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                    Notice Period
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <FormControl fullWidth>
                    <Select
                      name="noticePeriod"
                      value={formData.noticePeriod}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, noticePeriod: e.target.value }));
                      }}
                      displayEmpty
                      variant="outlined"
                    >
                      <MenuItem value=""><em>Select notice period</em></MenuItem>
                      <MenuItem value="immediate">Immediate</MenuItem>
                      <MenuItem value="15-days">15 Days</MenuItem>
                      <MenuItem value="30-days">30 Days</MenuItem>
                      <MenuItem value="60-days">60 Days</MenuItem>
                      <MenuItem value="90-days">90 Days</MenuItem>
                      <MenuItem value="more-than-90">More than 90 Days</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                {/* Expected Salary */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                    Expected Salary (Annual)
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <TextField
                    fullWidth
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    variant="outlined"
                    placeholder="Enter expected salary"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                  />
                </Grid>
                
                {/* How did you hear about us? */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                    How did you hear about us? *
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <FormControl fullWidth>
                    <Select
                      name="source"
                      value={formData.source}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, source: e.target.value }));
                      }}
                      displayEmpty
                      variant="outlined"
                    >
                      <MenuItem value=""><em>Select an option</em></MenuItem>
                      <MenuItem value="linkedin">LinkedIn</MenuItem>
                      <MenuItem value="indeed">Indeed</MenuItem>
                      <MenuItem value="glassdoor">Glassdoor</MenuItem>
                      <MenuItem value="company-website">Company Website</MenuItem>
                      <MenuItem value="referral">Employee Referral</MenuItem>
                      <MenuItem value="job-portal">Job Portal</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                {/* Referral Name (conditional) */}
                {formData.source === 'referral' && (
                  <>
                    <Grid size={{ xs: 12, md: 4 }}>
                      <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                        Referral Name
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 8 }}>
                      <TextField
                        fullWidth
                        name="referralName"
                        value={formData.referralName}
                        onChange={handleInputChange}
                        variant="outlined"
                        placeholder="Enter referral employee name"
                      />
                    </Grid>
                  </>
                )}
                
                {/* Not a Robot Checkbox */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                    Verification *
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <Box
                    display="flex"
                    alignItems="flex-start"
                    gap={2}
                    p={2}
                    border={1}
                    borderColor={errors.notRobot ? "error.main" : "grey.300"}
                    borderRadius={1}
                    bgcolor="background.default"
                  >
                    <Checkbox 
                      size="large" 
                      checked={notRobot}
                      onChange={(e) => {
                        setNotRobot(e.target.checked);
                        if (errors.notRobot) {
                          setErrors(prev => ({ ...prev, notRobot: '' }));
                        }
                      }}
                    />
                    <Box>
                      <Typography variant="body2">
                        I am not a robot
                      </Typography>
                      {errors.notRobot && (
                        <FormHelperText error sx={{ ml: 0, mt: 0.5 }}>
                          {errors.notRobot}
                        </FormHelperText>
                      )}
                      <Box display="flex" gap={1} mt={0.5}>
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
                
                {/* Submit Button */}
                <Grid size={{ xs: 12, md: 4 }}>
                  {/* Spacer for alignment */}
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <Box display="flex" justifyContent="flex-end" mt={1}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<TouchAppOutlined />}
                      sx={{ px: 6, py: 1.5 }}
                    >
                      Submit Application
                    </Button>
                  </Box>
                </Grid>
                
               
                
              </Grid>
            </Paper>
          </Box>
        </Container>
      </Paper>

      <Footer />
    </Box>
  );
};

export default JobApplication;