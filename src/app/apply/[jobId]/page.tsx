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
  Select,
  MenuItem,
  FormHelperText,
  Divider,
  IconButton,
  InputAdornment,
  Checkbox,
  Slider,
  Card,
  useTheme,
  useMediaQuery,
  FormControlLabel,
  RadioGroup,
  Radio,
  Chip,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { TouchAppOutlined, UploadFile, Close } from '@mui/icons-material';
import Header from '@/app/components/Header';
import Heading from '@/app/components/Heading';
import Footer from '@/app/components/Footer';

const jobData = {
  Project: 'AcreBytes',
  title: 'Implementation Manager',
  location: 'Noida',
  workType: 'Remote',
  contractType: 'Part time',
  experience: '3+ years',
  category: 'Product'
};

const skillLabels = [
  '0 - Can\'t do / Don\'t plan to do',
  '1 - No experience',
  '2 - Basic familiarity',
  '3 - Intermediate, can work with guidance',
  '4 - Advanced, can work independently',
  '5 - Expert, can mentor others'
];
const countryCodes = [
  { code: '+91', label: 'India' },
  { code: '+1', label: 'USA' },
  { code: '+44', label: 'UK' },
  { code: '+61', label: 'Australia' },
  { code: '+971', label: 'UAE' },
];
const JobApplication = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [candidateType, setCandidateType] = useState<'tech' | 'non-tech'>('non-tech');

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
    referralName: '',
    graduationName: '',
    graduationYear: '',
    graduationMarks: '',
    twelfthMarks: '',
    tenthMarks: '',
    totalExperience: '',
    projectDomains: '',
    presentLocation: '',
    workLocation: '',
    availableHours: '',
    preferredTimeSlot: '',
    workSaturday: '',
    workSunday: '',
    freelanceProjectsCount: '',
    currentJobType: '',
    keyExpertSkills: '',
    totalRelevantExperience: '',
    countryCode: '+91',
  });

  const [technicalSkills, setTechnicalSkills] = useState({
    nextjs: 0,
    react: 0,
    reactNative: 0,
    realtime: 0,
    htmlCss: 0,
    responsiveDesign: 0,
    mui: 0,
    nodejs: 0,
    expressjs: 0,
    mongodb: 0,
    restApi: 0,
    debugging: 0,
    git: 0,
    devops: 0
  });

  const [selfAssessment, setSelfAssessment] = useState({
    googleSheet: 0,
    msExcel: 0,
    structuredDocumentation: 0,
    structuredUpdate: 0,
    communication: 0,
    teamManagement: 0,
    platformFunctionalReview: 0,
    platformImplementation: 0,
    platformTestManual: 0,
    platformTestAutomation: 0,
    techTasksManagement: 0,
    projectTasksCoordination: 0,
    platformDemoInternal: 0,
    platformDemoClient: 0,
    leadsGeneration: 0,
    businessDevelopment: 0,
    clientCallsColdReach: 0,
    clientCallConsultation: 0,
    travelIntercity: 0,
    travelSameCity: 0,
    clientHandling: 0,
    projectDocumentation: 0,
    creatingPresentation: 0,
    problemSolving: 0,
  });

  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notRobot, setNotRobot] = useState(false);
  const [role, setRole] = React.useState('');
  const [initials, setInitials] = useState("Mr");
  const [birthDate, setBirthDate] = useState<string>("");
  const [birthMonth, setBirthMonth] = useState<string>("");
  const [birthYear, setBirthYear] = useState<string>("");

  const handleInitialChange = (event: SelectChangeEvent) => {
    setInitials(event.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleTechnicalSkillChange = (name: string, value: number) => {
    setTechnicalSkills(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelfAssessmentChange = (name: string, value: number) => {
    setSelfAssessment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRoleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const allowedExt = /\.(pdf|doc|docx)$/i;
      if (!validTypes.includes(file.type) && !allowedExt.test(file.name)) {
        setErrors(prev => ({ ...prev, resume: 'Please upload PDF or DOC/DOCX files only' }));
        return;
      }
      
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
  
  const handleBirthDate = (event: SelectChangeEvent) => {
    setBirthDate(event.target.value);
  };

  const handleBirthMonth = (event: SelectChangeEvent) => {
    setBirthMonth(event.target.value);
  };

  const handleBirthYear = (event: SelectChangeEvent) => {
    setBirthYear(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!resume) newErrors.resume = 'Resume is required';
    if (!notRobot) newErrors.notRobot = 'Please verify you are not a robot';
    if (!birthDate || !birthMonth || !birthYear) newErrors.birthDate = 'Date of birth is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    console.log('Form submitted:', { 
      candidateType,
      ...formData, 
      birthDate,
      birthMonth,
      birthYear,
      technicalSkills,
      selfAssessment,
      resume 
    });
    alert('Application submitted!');
  };

  const renderSkillSlider = (label: string, value: number, name: string, onChange: (name: string, value: number) => void) => (
    <Box sx={{ mb: 1, width: '100%' }}>
      <Typography variant="subtitle1" fontWeight="medium">
        {label}
      </Typography>
      <Typography 
        variant="caption" 
        color="text.secondary" 
        sx={{ 
          display: 'block',
        }}
      >
        {skillLabels[value]}
      </Typography>
      <Box sx={{ display: 'flex', px: 1, alignItems: 'center', gap: isMobile ? 1 : 2 }}>
        <Slider
          value={value}
          onChange={(_, newValue) => onChange(name, newValue as number)}
          aria-labelledby={`${name}-slider`}
          step={1}
          marks={!isMobile}
          min={0}
          max={5}
          sx={{ 
            flexGrow: 1,
            width: '100%',
          }}
        />
        <Typography 
          variant={isMobile ? "body2" : "body1"} 
          color="primary" 
          sx={{ 
            minWidth: isMobile ? 40 : 50, 
            textAlign: isMobile ? 'center' : 'right',
          }}
        >
          <span style={{ fontSize: "1.3rem" }}><b>{value}</b></span>/5
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Header />
      
      <Paper elevation={0} sx={{ bgcolor: 'grey.50', py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h6" color="primary.dark" gutterBottom>
                Careers
              </Typography>
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{ mt: { md: 2 } }}
              >
                Join us to create Impact at scale
              </Typography>
              <Typography variant="body1" fontWeight={400} paragraph>
                Build technology that transforms business processes across the world.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <CardMedia
                component="img"
                image="/img/career/career-img.avif"
                alt="about-us"
                sx={{ 
                  borderRadius: 2, 
                  width: '100%', 
                  height: 'auto',
                  maxHeight: { xs: 300, md: 400 }
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Paper>
      
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Heading 
          primaryText='Share the details below' 
          secondaryText='Project team will review the submitted information'
        />
        
        <Card variant='outlined' sx={{ mb: 4, p: { xs: 2, md: 3 } }}>
          <Stack spacing={2}>
            <Typography variant="h5" fontWeight="bold" color="primary.main">
              {jobData.title}
            </Typography>
            
            <Stack 
              direction="row" 
              spacing={2} 
              flexWrap="wrap"
            >
              <Typography variant="body1" color="text.secondary">
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

            <Stack 
              direction="row" 
              spacing={2} 
              alignItems="center" 
              flexWrap="wrap"
            >
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
            
            <Divider sx={{ mb: { xs: 1, md: 2 } }} />
            
            <Typography variant="body1" paragraph>
              Requirements: 3+ years of experience in SaaS implementation, onboarding, or project management.
              Strong communication, client management, and problem-solving skills. Experience with enterprise
              software, data migration, and integrations preferred. Ability to manage multiple projects 
              simultaneously in a fast-paced environment.
            </Typography>
          </Stack>
        </Card>

        <Card
          component="form"
          onSubmit={handleSubmit}
          sx={{ p: { xs: 2, md: 3 } }}
          variant='outlined'
        >
          <Typography variant="h5" gutterBottom mb={1} sx={{ fontWeight: "bold" }}>
            Job application form
          </Typography>
          <Divider sx={{ mb: { xs: 1, md: 3 } }} />
          
          <Grid container spacing={{ xs: 1, md: 3 }} alignItems="center">
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle1">
                Applicant type *
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <FormControl sx={{ display: "flex", alignItems: "flex-start" }}>
                <RadioGroup
                  row
                  value={candidateType}
                  onChange={(e) => setCandidateType(e.target.value as 'tech' | 'non-tech')} 
                >
                  <FormControlLabel sx={{ display: "flex", alignItems: "flex-start" }} value="non-tech" control={<Radio />} label="Non technical (QA / PM / BA / Scrum master / BD / Pre sales / Consultant / Data Analyst / Digital marketing / Sales / Product management)" />
                  <FormControlLabel value="tech" control={<Radio />} label="Technical (Fullstack developer / App developer / UI developer / Devops)" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 1, md: 3 }} alignItems="center">
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle1">
                Work type *
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <FormControl>
                <RadioGroup
                  row
                  value={candidateType}
                  onChange={(e) => setCandidateType(e.target.value as 'tech' | 'non-tech')} 
                >
                  <FormControlLabel value="non-tech" control={<Radio />} label="Full time" />
                  <FormControlLabel value="tech" control={<Radio />} label="Freelance" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 1, md: 3 }} alignItems="center">
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle1">
                Role applying for *
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <FormControl sx={{ m: 1, width: "100%" }} size="small">
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={role}
                  onChange={handleRoleChange}
                >
                  <MenuItem value={"Full stack developer"}>Full stack developer</MenuItem>
                  <MenuItem value={"Devops Engineer"}>Devops Engineer</MenuItem>
                  <MenuItem value={"UI Developer"}>UI Developer</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Typography variant="h5" gutterBottom mt={4} mb={1} sx={{ fontWeight: "bold" }}>
            Applicant details
          </Typography>
          <Divider sx={{ mb: { xs: 1, md: 3 } }} />
          
          <Grid container rowSpacing={{ xs: 0.5, md: 1.5 }} columnSpacing={{ xs: 1, md: 3 }} alignItems="center">
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle1" fontWeight="medium">
                Full name *
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 2, sm: 2 }}>
                  <FormControl sx={{ width: "100%" }} size="small">
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={initials}
                      onChange={handleInitialChange}
                    >
                      <MenuItem value={"Mr"}>Mr.</MenuItem>
                      <MenuItem value={"Ms"}>Ms</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 5, sm: 5 }}>
                  <TextField
                    fullWidth
                    name="firstName"
                    value={formData.firstName ?? ''}
                    onChange={handleInputChange}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    placeholder="First name"
                    size="small"
                  />
                </Grid>
                <Grid size={{ xs: 5, sm: 5 }}>
                  <TextField
                    fullWidth
                    name="lastName"
                    value={formData.lastName ?? ''}
                    onChange={handleInputChange}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                    placeholder="Last name"
                    size="small"
                  />
                </Grid>
              </Grid>
            </Grid>
       
            <Grid size={{ xs: 12, md: 4 }} mt={{ xs: 1, sm: 0 }}>
              <Typography variant="subtitle1" fontWeight="medium">
                Email address *
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <TextField
                fullWidth
                name="email"
                type="email"
                value={formData.email ?? ''}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
                placeholder="Email address"
                size="small"
              />
            </Grid>
            
            <Grid size={{ xs: 12, md: 4 }} mt={{ xs: 1, sm: 0 }}>
              <Typography variant="subtitle1" fontWeight="medium">
                Phone number *
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <TextField
                fullWidth
                name="phone"
                value={formData.phone ?? ''}
                onChange={handleInputChange}
                error={!!errors.phone}
                // helperText={errors.phone || ' '}
                placeholder="Phone number"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Select
                        variant="standard"
                        disableUnderline
                        value={formData.countryCode}
                        onChange={(e) =>
                          setFormData(prev => ({ ...prev, countryCode: e.target.value }))
                        }
                        sx={{ fontSize: 14, minWidth: 60 }}
                      >
                        <MenuItem value="+91">+91</MenuItem>
                        <MenuItem value="+1">+1</MenuItem>
                        <MenuItem value="+44">+44</MenuItem>
                        <MenuItem value="+61">+61</MenuItem>
                        <MenuItem value="+971">+971</MenuItem>
                      </Select>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Date of Birth Section - Corrected */}
            <Grid size={{ xs: 12, md: 4 }} mt={{ xs: 1, sm: 0 }}>
              <Typography variant="subtitle1" fontWeight="medium">
                Date of birth *
              </Typography>
            </Grid>
            
            <Grid size={{ xs: 12, md: 8 }}>
              <Grid container spacing={2}>
                {/* Date */}
                <Grid size={{ xs: 4 }}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="date-select-label">Date</InputLabel>
                    <Select
                      labelId="date-select-label"
                      value={birthDate}
                      label="Date"
                      onChange={handleBirthDate}
                      error={!!errors.birthDate}
                    >
                      <MenuItem value="">Select</MenuItem>
                      {Array.from({ length: 31 }, (_, i) => (i + 1).toString()).map((date) => (
                        <MenuItem key={date} value={date}>
                          {date.padStart(2, '0')}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                
                {/* Month */}
                <Grid size={{ xs: 4 }}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="month-select-label">Month</InputLabel>
                    <Select
                      labelId="month-select-label"
                      value={birthMonth}
                      label="Month"
                      onChange={handleBirthMonth}
                      error={!!errors.birthDate}
                    >
                      <MenuItem value="">Select</MenuItem>
                      {Array.from({ length: 12 }, (_, i) => (i + 1).toString()).map((month) => (
                        <MenuItem key={month} value={month}>
                          {month.padStart(2, '0')}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                
                {/* Year */}
                <Grid size={{ xs: 4 }}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="year-select-label">Year</InputLabel>
                    <Select
                      labelId="year-select-label"
                      value={birthYear}
                      label="Year"
                      onChange={handleBirthYear}
                      error={!!errors.birthDate}
                    >
                      <MenuItem value="">Select</MenuItem>
                      {Array.from({ length: 100 }, (_, i) => (new Date().getFullYear() - i).toString()).map((year) => (
                        <MenuItem key={year} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              {errors.birthDate && (
                <FormHelperText error sx={{ mt: 0.5 }}>
                  {errors.birthDate}
                </FormHelperText>
              )}
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Typography variant="h5" gutterBottom mt={2} mb={1} sx={{ fontWeight: "bold" }}>
                Qualification 
              </Typography>
              <Divider sx={{ mb: { xs: 1, md: 3 } }} />
            </Grid>

            {[
              { label: candidateType === 'tech' ? 'Graduation Name' : 'Last Graduation', name: 'graduationName', placeholder: 'e.g., B.E. Computer Science' },
              { label: 'Graduation year', name: 'graduationYear', placeholder: 'e.g., 2022' },
              { label: 'Graduation marks', name: 'graduationMarks', placeholder: 'e.g., 8.75 CGPA' },
              { label: '12th marks', name: 'twelfthMarks', placeholder: 'e.g., 92%' },
              { label: '10th marks', name: 'tenthMarks', placeholder: 'e.g., 90%' },
              { label: ' Work experience', name: 'totalExperience', placeholder: 'e.g., 3 years' },
              candidateType === 'tech' 
                ? { label: ' Relevant work experience', name: 'totalRelevantExperience', placeholder: 'e.g., 2.5 years in frontend development' }
                : { label: ' Expertise (Key skills)', name: 'keyExpertSkills', placeholder: 'e.g., Project Management, Client Communication', multiline: true, rows: 2 },
              { label: 'Domains / Industries worked on', name: 'projectDomains', placeholder: 'e.g., E-commerce, SAAS, Gaming' },
              { label: 'Current Company', name: 'currentCompany', placeholder: 'Enter your current company name' },
              { label: 'LinkedIn profile URL', name: 'linkedinProfile', placeholder: 'https://linkedin.com/in/yourprofile' },
              { label: 'Portfolio / Website', name: 'portfolioWebsite', placeholder: 'https://yourportfolio.com' },
              { label: 'Current location / City', name: 'presentLocation', placeholder: 'e.g., Bengaluru' },
              { label: 'Work location / City', name: 'workLocation', placeholder: 'e.g., Bengaluru' },
            ].map((field, index) => (
              <React.Fragment key={field.name}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography variant="subtitle1" fontWeight="medium" mt={{ xs: index === 0 ? 0 : 1, sm: 0 }}>
                    {field.label}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <TextField
                    fullWidth
                    name={field.name}
                    value={formData[field.name as keyof typeof formData] ?? ''}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    size="small"
                    multiline={field.multiline}
                    rows={field.rows}
                  />
                </Grid>
              </React.Fragment>
            ))}

            <Grid size={{ xs: 12 }}>
              <Typography variant="h5" gutterBottom mt={2} mb={1} sx={{ fontWeight: "bold" }}>
                Availability (Hours)
              </Typography>
              <Divider sx={{ mb: { xs: 1, md: 3 } }} />
            </Grid>

            {[
              { label: 'Available hours / week', name: 'availableHours', placeholder: candidateType === 'tech' ? 'e.g., 28 hours/week' : 'Available hours/week' },
              { label: candidateType === 'tech' ? 'Preferred work time slots / window' : 'Preferred work time slots / window', name: 'preferredTimeSlot', placeholder: 'e.g., After 6 PM' },
            ].map((field, index) => (
              <React.Fragment key={field.name}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography variant="subtitle1" fontWeight="medium" mt={{ xs: index === 0 ? 0 : 1, sm: 0 }}>
                    {field.label}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  {field.name === 'availableHours' ? (
                    <FormControl fullWidth size="small">
                      <Select
                        displayEmpty
                        name={field.name}
                        value={formData.availableHours ?? ''}
                        onChange={(e) => setFormData(prev => ({ ...prev, availableHours: e.target.value }))}
                        inputProps={{ 'aria-label': 'Available hours per week' }}
                      >
                        <MenuItem value=""><em>Select hours/week</em></MenuItem>
                        {Array.from({ length: 56 - 8 + 1 }, (_, i) => 8 + i).map((h) => (
                          <MenuItem key={h} value={String(h)}>{h} hours / week</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  ) : (
                    <TextField
                      fullWidth
                      name={field.name}
                      value={formData[field.name as keyof typeof formData] ?? ''}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      size="small"
                    />
                  )}
                </Grid>
              </React.Fragment>
            ))}

            {[
              { label: 'Available to work Saturday?', name: 'workSaturday', options: ['Yes', 'No'] },
              { label: 'Available to work Sunday?', name: 'workSunday', options: ['Yes', 'No'] },
            ].map((field, index) => (
              <React.Fragment key={field.name}>
                <Grid size={{ xs: 12, md: 4 }} mt={{ xs: 1, sm: 0 }}>
                  <Typography variant="subtitle1" fontWeight="medium">
                    {field.label}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <FormControl fullWidth size="small">
                    <Select
                      name={field.name}
                      value={formData[field.name as keyof typeof formData] ?? ''}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, [field.name]: e.target.value }));
                      }}
                      displayEmpty
                    >
                      <MenuItem value=""><em>Select option</em></MenuItem>
                      {field.options.map(option => (
                        <MenuItem key={option.toLowerCase()} value={option.toLowerCase()}>{option}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </React.Fragment>
            ))}

            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle1" fontWeight="medium" mt={{ xs: 1, sm: 0 }}>
                {candidateType === 'tech' ? 'Freelance Projects Before (how many)' : 'Any freelance / part time project before (how many ?)'}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <TextField
                fullWidth
                name="freelanceProjectsCount"
                value={formData.freelanceProjectsCount ?? ''}
                onChange={handleInputChange}
                placeholder="e.g., 0 (number of projects)"
                size="small"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }} mt={{ xs: 1, sm: 0 }}>
              <Typography variant="subtitle1" fontWeight="medium">
                Current Job type
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <FormControl fullWidth size="small">
                <Select
                  name="currentJobType"
                  value={formData.currentJobType ?? ''}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, currentJobType: e.target.value }));
                  }}
                  displayEmpty
                >
                  <MenuItem value=""><em>Select option</em></MenuItem>
                  <MenuItem value="full-wfh">Full WFH</MenuItem>
                  <MenuItem value="full-wfo">Full WFO</MenuItem>
                  <MenuItem value="hybrid">Hybrid</MenuItem>
                  <MenuItem value="not-working">Not Working</MenuItem>
                  <MenuItem value="remote">Remote</MenuItem>
                  <MenuItem value="freelance">Freelance</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid size={{ xs: 12, md: 4 }} mt={{ xs: 1, sm: 0 }}>
              <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                Resume *
              </Typography>
              <Typography variant="caption" color="text.secondary" display="block">
                PDF, DOC, DOCX (Max 5MB)
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Box display="flex" alignItems="center" gap={{ xs: 2, md: 2 }}>
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
                    size="small"
                  >
                    Choose file
                  </Button>
                </label>
                {errors.resume && (
                  <FormHelperText error sx={{ ml: 0, mt: 1 }}>
                    {errors.resume}
                  </FormHelperText>
                )}
                {resume && (
                  <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
                    <Typography variant="body2">
                      {resume.name} ({(resume.size / 1024 / 1024).toFixed(2)} MB)
                    </Typography>
                    <IconButton size="small" onClick={handleRemoveResume}>
                      <Close fontSize="small" />
                    </IconButton>
                  </Box>
                )}
                {!resume && (
                  <Typography variant="caption" color="text.secondary" display="block">
                    No file chosen
                  </Typography>
                )}
              </Box>
            </Grid>
            
            <Grid size={{ xs: 12, md: 4 }} mt={{ xs: 1, sm: 0 }}>
              <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                Cover letter
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <TextField
                fullWidth
                name="coverLetter"
                value={formData.coverLetter ?? ''}
                onChange={handleInputChange}
                multiline
                rows={2}
                placeholder="Tell us why you're interested in this position and why you'd be a good fit..."
                size="small"
              />
            </Grid>
            
            <Grid size={{ xs: 12, md: 4 }} mt={{ xs: 1, sm: 0 }}>
              <Typography variant="subtitle1" fontWeight="medium">
                Notice period
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <FormControl fullWidth size="small">
                <Select
                  name="noticePeriod"
                  value={formData.noticePeriod ?? ''}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, noticePeriod: e.target.value }));
                  }}
                  displayEmpty
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
            
            <Grid size={{ xs: 12, md: 4 }} mt={{ xs: 1, sm: 0 }}>
              <Typography variant="subtitle1" fontWeight="medium">
                Expected Salary (Annual)
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <TextField
                fullWidth
                name="expectedSalary"
                value={formData.expectedSalary ?? ''}
                onChange={handleInputChange}
                placeholder="Enter expected salary"
                size="small"
                InputProps={{
                  startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                }}
              />
            </Grid>
            
            <Grid size={{ xs: 12, md: 4 }} mt={{ xs: 1, sm: 0 }}>
              <Typography variant="subtitle1" fontWeight="medium">
                How did you hear about us?
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <FormControl fullWidth size="small">
                <Select
                  name="source"
                  value={formData.source ?? ''}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, source: e.target.value }));
                  }}
                  displayEmpty
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
            
            {formData.source === 'referral' && (
              <>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography variant="subtitle1" fontWeight="medium">
                    Referral Name
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <TextField
                    fullWidth
                    name="referralName"
                    value={formData.referralName ?? ''}
                    onChange={handleInputChange}
                    placeholder="Enter referral employee name"
                    size="small"
                  />
                </Grid>
              </>
            )}

            {candidateType === 'tech' && (
              <Grid size={{ xs: 12 }} mt={{ xs: 1, sm: 0 }}>
                <Typography variant="h5" gutterBottom mt={2} mb={1} sx={{ fontWeight: "bold" }}>
                  Technical Skills Self-Assessment (0-5 Scale)
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    mb: 2,
                  }}
                >
                  {[
                    "0 – Can't do",
                    "1 – No experience",
                    "2 – Basic",
                    "3 – Intermediate",
                    "4 – Advanced",
                    "5 – Expert",
                  ].map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Box>
                <Divider sx={{ mb: { xs: 1, md: 3 } }} />
                <Grid container spacing={isMobile ? 3 : 5}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    {renderSkillSlider("Next.js (Pages, App Router, SSR/SSG)", technicalSkills.nextjs, "nextjs", handleTechnicalSkillChange)}
                    {renderSkillSlider("React (Hooks, State, Components)", technicalSkills.react, "react", handleTechnicalSkillChange)}
                    {renderSkillSlider("React Native (Cross-Platform Mobile App)", technicalSkills.reactNative, "reactNative", handleTechnicalSkillChange)}
                    {renderSkillSlider("Real-time (Socket, Hooks)", technicalSkills.realtime, "realtime", handleTechnicalSkillChange)}
                    {renderSkillSlider("HTML/CSS", technicalSkills.htmlCss, "htmlCss", handleTechnicalSkillChange)}
                    {renderSkillSlider("Responsive Design & Layout", technicalSkills.responsiveDesign, "responsiveDesign", handleTechnicalSkillChange)}
                    {renderSkillSlider("Expertise on MUI Material UI", technicalSkills.mui, "mui", handleTechnicalSkillChange)}
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    {renderSkillSlider("Node.js", technicalSkills.nodejs, "nodejs", handleTechnicalSkillChange)}
                    {renderSkillSlider("Express.js", technicalSkills.expressjs, "expressjs", handleTechnicalSkillChange)}
                    {renderSkillSlider("MongoDB (Mongoose, Aggregations)", technicalSkills.mongodb, "mongodb", handleTechnicalSkillChange)}
                    {renderSkillSlider("REST API Design", technicalSkills.restApi, "restApi", handleTechnicalSkillChange)}
                    {renderSkillSlider("Debugging & Problem Solving Skills", technicalSkills.debugging, "debugging", handleTechnicalSkillChange)}
                    {renderSkillSlider("Git & Code Collaboration", technicalSkills.git, "git", handleTechnicalSkillChange)}
                    {renderSkillSlider("DevOps / AWS Setup", technicalSkills.devops, "devops", handleTechnicalSkillChange)}
                  </Grid>
                </Grid>
              </Grid>
            )}

            {candidateType === 'non-tech' && (
              <Grid size={{ xs: 12 }}>
                <Box display="flex" alignItems="center" mb={1}>
                  <Typography variant="h5" gutterBottom mt={2} mb={1} sx={{ fontWeight: "bold" }}>
                    Professional Skills Assessment (0-5 Scale)
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    mb: 2,
                  }}
                >
                  {[
                    "0 – Can't do",
                    "1 – No experience",
                    "2 – Basic",
                    "3 – Intermediate",
                    "4 – Advanced",
                    "5 – Expert",
                  ].map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Box>
                <Divider sx={{ mb: { xs: 1, md: 3 } }} />
                <Grid container spacing={isMobile ? 0 : 5}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    {renderSkillSlider("Google Sheet", selfAssessment.googleSheet, "googleSheet", handleSelfAssessmentChange)}
                    {renderSkillSlider("MS Excel", selfAssessment.msExcel, "msExcel", handleSelfAssessmentChange)}
                    {renderSkillSlider("Structured update to leadership", selfAssessment.structuredUpdate, "structuredUpdate", handleSelfAssessmentChange)}
                    {renderSkillSlider("Team management / collaboration", selfAssessment.teamManagement, "teamManagement", handleSelfAssessmentChange)}
                    {renderSkillSlider("Structured documentation (BRD/FRD/Flow)", selfAssessment.structuredDocumentation, "structuredDocumentation", handleSelfAssessmentChange)}
                    {renderSkillSlider("Platform functional review", selfAssessment.platformFunctionalReview, "platformFunctionalReview", handleSelfAssessmentChange)}
                    {renderSkillSlider("Platform test - Manual", selfAssessment.platformTestManual, "platformTestManual", handleSelfAssessmentChange)}
                    {renderSkillSlider("Platform test - Automation", selfAssessment.platformTestAutomation, "platformTestAutomation", handleSelfAssessmentChange)}
                    {renderSkillSlider("Tech tasks management", selfAssessment.techTasksManagement, "techTasksManagement", handleSelfAssessmentChange)}
                    {renderSkillSlider("Project tasks coordination", selfAssessment.projectTasksCoordination, "projectTasksCoordination", handleSelfAssessmentChange)}
                    {renderSkillSlider("Platform demo to internal", selfAssessment.platformDemoInternal, "platformDemoInternal", handleSelfAssessmentChange)}
                    {renderSkillSlider("Platform demo to client", selfAssessment.platformDemoClient, "platformDemoClient", handleSelfAssessmentChange)}
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    {renderSkillSlider("Leads generation", selfAssessment.leadsGeneration, "leadsGeneration", handleSelfAssessmentChange)}
                    {renderSkillSlider("Business development", selfAssessment.businessDevelopment, "businessDevelopment", handleSelfAssessmentChange)}
                    {renderSkillSlider("Client calls cold reach", selfAssessment.clientCallsColdReach, "clientCallsColdReach", handleSelfAssessmentChange)}
                    {renderSkillSlider("Client call consultation", selfAssessment.clientCallConsultation, "clientCallConsultation", handleSelfAssessmentChange)}
                    {renderSkillSlider("Platform implementation", selfAssessment.platformImplementation, "platformImplementation", handleSelfAssessmentChange)}
                    {renderSkillSlider("Travel (intercity) - Client visit / meets", selfAssessment.travelIntercity, "travelIntercity", handleSelfAssessmentChange)}
                    {renderSkillSlider("Travel (same city) - Client visit / meets", selfAssessment.travelSameCity, "travelSameCity", handleSelfAssessmentChange)}
                    {renderSkillSlider("Client handling", selfAssessment.clientHandling, "clientHandling", handleSelfAssessmentChange)}
                    {renderSkillSlider("Project Documentation", selfAssessment.projectDocumentation, "projectDocumentation", handleSelfAssessmentChange)}
                    {renderSkillSlider("Communication", selfAssessment.communication, "communication", handleSelfAssessmentChange)}
                    {renderSkillSlider("Creating presentation", selfAssessment.creatingPresentation, "creatingPresentation", handleSelfAssessmentChange)}
                    {renderSkillSlider("Problem solving", selfAssessment.problemSolving, "problemSolving", handleSelfAssessmentChange)}
                  </Grid>
                </Grid>
              </Grid>
            )}
            
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
                <Checkbox
                  size="large"
                  checked={notRobot}
                  onChange={(e) => setNotRobot(e.target.checked)}
                  inputProps={{ 'aria-label': 'I am not a robot' }}
                />
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
              {errors.notRobot && (
                <FormHelperText error sx={{ ml: 0, mt: 1 }}>
                  {errors.notRobot}
                </FormHelperText>
              )}
            </Grid>
            
            <Grid size={{ xs: 12 }}>
              <Box display="flex" justifyContent="flex-end">
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  startIcon={<TouchAppOutlined />}
                  sx={{ mt: { xs: 2, md: 0 } }}
                >
                  Submit Application
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>

      <Footer />
    </Box>
  );
};

export default JobApplication;